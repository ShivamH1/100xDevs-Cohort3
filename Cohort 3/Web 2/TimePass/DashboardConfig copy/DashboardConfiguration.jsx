import { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { fetchConfiguration, saveModuleSettings } from './api-mock';
import { ModuleHeader } from './ModuleHeader';
import { initialModules } from './data';
import { ModuleList } from './ModuleList';
import { SyncDialog } from './SyncDialog';

export default function DashboardConfiguration() {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [syncDialogOpen, setSyncDialogOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [modules, setModules] = useState(initialModules);
  const [selectedModule, setSelectedModule] = useState('');
  const [availableFeatures, setAvailableFeatures] = useState([]);

  useEffect(() => {
    const loadConfiguration = async () => {
      setLoading(true);
      try {
        const data = await fetchConfiguration();

        const updatedModules = [...initialModules];

        data.config.forEach((item) => {
          const moduleIndex = updatedModules.findIndex(
            (m) => m.name === item.module_name
          );
          if (moduleIndex !== -1) {
            updatedModules[moduleIndex].enabled = true;

            const featureIndex = updatedModules[moduleIndex].features.findIndex(
              (f) => f.name === item.feature
            );
            if (featureIndex !== -1) {
              updatedModules[moduleIndex].features[featureIndex].enabled = true;

              if (
                item.sub_features &&
                updatedModules[moduleIndex].features[featureIndex].storageOptions
              ) {
                updatedModules[moduleIndex].features[featureIndex].storageOptions.forEach(
                  (option) => {
                    option.selected = false;
                  }
                );

                const storageIndex = updatedModules[moduleIndex].features[
                  featureIndex
                ].storageOptions.findIndex((s) => s.label === item.sub_features);

                if (storageIndex !== -1) {
                  updatedModules[moduleIndex].features[featureIndex].storageOptions[
                    storageIndex
                  ].selected = true;
                }
              }
            }
          }
        });

        setModules(updatedModules);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to load configuration. Please try again.',
        });
      } finally {
        setLoading(false);
      }
    };

    loadConfiguration();
  }, [toast]);

  const toggleModule = useCallback((moduleId) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId ? { ...module, enabled: !module.enabled } : module
      )
    );
  }, []);

  const toggleFeature = useCallback((moduleId, featureId) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              features: module.features.map((feature) =>
                feature.id === featureId
                  ? { ...feature, enabled: !feature.enabled }
                  : feature
              ),
            }
          : module
      )
    );
  }, []);

  const onSelectStorage = useCallback((storageId) => {
    setModules((prevModules) =>
      prevModules.map((module) => ({
        ...module,
        features: module.features.map((feature) =>
          feature.id === 'storage' && feature.storageOptions
            ? {
                ...feature,
                storageOptions: feature.storageOptions.map((storage) => ({
                  ...storage,
                  selected: storage.value === storageId,
                })),
              }
            : feature
        ),
      }))
    );
  }, []);

  const handleModuleChange = useCallback(
    (value) => {
      setSelectedModule(value);
      const selectedModuleData = modules.find((module) => module.id === value);
      setAvailableFeatures(selectedModuleData?.features || []);
    },
    [modules]
  );

  const saveSettings = async () => {
    setSaving(true);

    const config = [];

    modules.forEach((module) => {
      if (module.enabled) {
        module.features.forEach((feature) => {
          if (feature.enabled) {
            if (feature.id === 'storage' && feature.storageOptions) {
              const selectedOption = feature.storageOptions.find(
                (option) => option.selected
              );

              config.push({
                module_name: module.name,
                feature: feature.name,
                sub_features: selectedOption ? selectedOption.label : '',
              });
            } else {
              config.push({
                module_name: module.name,
                feature: feature.name,
                sub_features: '',
              });
            }
          }
        });
      }
    });

    const payload = {
      application_id: 1,
      config,
    };

    try {
      await saveModuleSettings(payload);
      console.log('Submitted payload:', payload);

      toast({
        title: 'Success',
        description: 'Module settings have been saved.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to save settings. Please try again.',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleSyncDialogSubmit = handleSubmit((data) => {
    console.log('Sync settings:', data);
    setSyncDialogOpen(false);
    reset();

    toast({
      title: 'Success',
      description: 'Sync settings have been saved.',
    });
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading configuration...</p>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50/50">
        <div className="container mx-auto py-8">
          <ModuleHeader
            saving={saving}
            saveSettings={saveSettings}
            openSyncDialog={() => setSyncDialogOpen(true)}
          />

          <ModuleList
            modules={modules}
            expandedModule={expandedModule}
            setExpandedModule={setExpandedModule}
            toggleModule={toggleModule}
            toggleFeature={toggleFeature}
            onSelectStorage={onSelectStorage}
          />

          <SyncDialog
            isOpen={syncDialogOpen}
            onClose={() => setSyncDialogOpen(false)}
            onSubmit={handleSyncDialogSubmit}
            register={register}
            watch={watch}
            setValue={setValue}
            modules={modules}
            selectedModule={selectedModule}
            availableFeatures={availableFeatures}
            handleModuleChange={handleModuleChange}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
