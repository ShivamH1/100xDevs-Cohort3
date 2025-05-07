import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { Label } from '@/components/ui';

export function ModuleList({
  modules,
  expandedModule,
  setExpandedModule,
  toggleModule,
  toggleFeature,
  isFeatureAvailable,
  onToggleStorage
}) {
  return (
    <div className="grid gap-6">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          isExpanded={expandedModule === module.id}
          onToggleExpand={() =>
            setExpandedModule(expandedModule === module.id ? null : module.id)
          }
          onToggleModule={() => toggleModule(module.id)}
          onToggleFeature={(featureId) => toggleFeature(module.id, featureId)}
          isFeatureAvailable={isFeatureAvailable}
          onToggleStorage={onToggleStorage}
        />
      ))}
    </div>
  );
}

function ModuleCard({
  module,
  isExpanded,
  onToggleExpand,
  onToggleModule,
  onToggleFeature,
  isFeatureAvailable,
  onToggleStorage
}) {
  const { id, name, icon: Icon, enabled, description, features } = module;

  return (
    <Card
      className={`overflow-hidden transition-all duration-200 ${
        isExpanded ? 'ring-2 ring-primary' : ''
      }`}
    >
      <div className="p-6 cursor-pointer" onClick={onToggleExpand}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-lg ${
                enabled ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              checked={enabled}
              onCheckedChange={onToggleModule}
              className={`w-10 h-5 cursor-pointer rounded-full relative inline-flex items-center transition duration-150 ease-in-out ${
                enabled ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
            <ChevronRight
              className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
          </div>
        </div>
      </div>

      {isExpanded && enabled && (
        <div className="border-t bg-gray-50/50">
          <div className="p-6 space-y-4">
            <h4 className="font-medium">Features</h4>
            <div className="grid gap-4">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.id}
                  feature={feature}
                  isAvailable={isFeatureAvailable(feature)}
                  onToggle={() => onToggleFeature(feature.id)}
                  onToggleStorage={onToggleStorage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

function FeatureItem({ feature, isAvailable, onToggle,onToggleStorage  }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg bg-white ${
        !isAvailable ? 'opacity-60' : ''
      }`}
    >
      <div className="flex items-center space-x-3">
        <Checkbox
          id={feature.id}
          checked={feature.enabled}
          onCheckedChange={onToggle}
          disabled={!isAvailable}
        />
        <label
          htmlFor={feature.id}
          className={`text-sm font-medium ${!isAvailable ? 'text-muted-foreground' : ''}`}
        >
          {feature.name}
        </label>
      </div>
      {feature.enabled && feature.id === 'storage' && (
        <div className="flex items-center gap-2 text-xs font-light text-muted-foreground space-x-2">
          {feature.storageOptions.map((storage) => (
            <>
              <Checkbox
                key={storage.value}
                id={storage.value}
                checked={storage.enabled}
                onCheckedChange={() => onToggleStorage(storage.value)}
                disabled={!isAvailable}
                className="cursor-pointer"
              />
              <Label
                htmlFor={storage.value}
                className={`text-sm font-medium ${
                  !isAvailable ? 'text-muted-foreground' : ''
                }`}
              >
                {storage.label}
              </Label>
            </>
          ))}
        </div>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-4 w-4 text-muted-foreground cursor-help" />
        </TooltipTrigger>
        <TooltipContent side="left">
          {isAvailable ? (
            <p>Available in your current plan</p>
          ) : (
            <p>
              Available in{' '}
              {feature.availableInPlans
                .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
                .join(', ')}{' '}
              plans
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
