import { DialogDemo } from "@/components/demo"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SyncDialog({
  isOpen,
  onClose,
  onSubmit,
  register,
  watch,
  setValue,
  modules,
  selectedModule,
  availableFeatures,
  handleModuleChange,
}) {
  return (
    <DialogDemo
      title="Configure Sync Settings"
      description="Set up synchronization for your modules. Choose a specific module or apply settings to all."
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <form className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="module" className="text-right">
            Module
          </Label>
          <Select
            {...register("module")}
            onValueChange={(value) => {
              setValue("module", value)
              handleModuleChange(value)
            }}
            value={watch("module") || undefined}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select a module" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modules</SelectItem>
              {modules.map((module) => (
                <SelectItem key={module.id} value={module.id}>
                  {module.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {watch("module") !== "all" && selectedModule && (
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feature" className="text-right">
              Feature
            </Label>
            <Select
              {...register("feature")}
              onValueChange={(value) => setValue("feature", value)}
              value={watch("feature")}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a feature" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Features</SelectItem>
                {availableFeatures.map((feature) => (
                  <SelectItem key={feature.id} value={feature.id}>
                    {feature.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {selectedModule === "activity" && (
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="retention" className="text-right">
              Retention Period
            </Label>
            <Select
              {...register("retention")}
              onValueChange={(value) => setValue("retention", value)}
              value={watch("retention")}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select retention period" />
              </SelectTrigger>
              <SelectContent>
                {availableFeatures[0]?.retentionOptions?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" className="col-span-3" {...register("name")} />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="start" className="text-right">
            Start From
          </Label>
          <Input type="datetime-local" id="start" className="col-span-3" {...register("start")} />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="schedule" className="text-right">
            Schedule
          </Label>
          <Select
            {...register("schedule")}
            onValueChange={(value) => setValue("schedule", value)}
            value={watch("schedule") || undefined}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </DialogDemo>
  )
}