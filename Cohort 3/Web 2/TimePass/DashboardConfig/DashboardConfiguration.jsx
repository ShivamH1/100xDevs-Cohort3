import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { fetchUserPlan, saveModuleSettings, PLAN_FEATURES } from './api-mock';
import { ModuleHeader } from './ModuleHeader';
import { initialModules } from './data';
import { SyncDialog } from './SyncDialog';
import { ModuleList } from './ModuleList';

export default function DashboardConfiguration() {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [userPlan, setUserPlan] = useState('free');
  const [syncDialogOpen, setSyncDialogOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState(null);
  const [modules, setModules] = useState(initialModules);
  const [selectedModule, setSelectedModule] = useState('');
  const [availableFeatures, setAvailableFeatures] = useState([]);

  useEffect(() => {
    const loadUserPlan = async () => {
      try {
        const { plan } = await fetchUserPlan();
        setUserPlan(plan);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to load user plan. Please try again.',
        });
      }
    };
    loadUserPlan();
  }, [toast]);

  const isFeatureAvailable = useCallback(
    (feature) => feature.availableInPlans.includes(userPlan),
    [userPlan]
  );

  const toggleModule = useCallback((moduleId) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId ? { ...module, enabled: !module.enabled } : module
      )
    );
  }, []);

  const toggleFeature = useCallback(
    (moduleId, featureId) => {
      setModules((prevModules) =>
        prevModules.map((module) =>
          module.id === moduleId
            ? {
                ...module,
                features: module.features.map((feature) =>
                  feature.id === featureId && isFeatureAvailable(feature)
                    ? { ...feature, enabled: !feature.enabled }
                    : feature
                ),
              }
            : module
        )
      );
    },
    [isFeatureAvailable]
  );

  const onToggleStorage = useCallback((storageId) => {
    setModules((prevModules) =>
      prevModules.map((module) => ({
        ...module,
        features: module.features.map((feature) =>
          feature.id === 'storage'
            ? {
                ...feature,
                storageOptions: feature.storageOptions.map((storage) =>
                  storage.value === storageId
                    ? { ...storage, enabled: !storage.enabled }
                    : storage
                ),
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
    // console.log('Saving settings...',modules);
    setSaving(true);
    try {
      await saveModuleSettings(modules);
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
    console.log("data", data);
    setSyncDialogOpen(false);
    reset();
  });

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50/50">
        <div className="container mx-auto py-8">
          <ModuleHeader
            userPlan={userPlan}
            saving={saving}
            saveSettings={saveSettings}
            openSyncDialog={() => setSyncDialogOpen(true)}
            canConfigureSync={PLAN_FEATURES[userPlan]?.features.includes('sync')}
          />

          <ModuleList
            modules={modules}
            expandedModule={expandedModule}
            setExpandedModule={setExpandedModule}
            toggleModule={toggleModule}
            toggleFeature={toggleFeature}
            onToggleStorage={onToggleStorage}
            isFeatureAvailable={isFeatureAvailable}
          />
        </div>

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
    </TooltipProvider>
  );
}
