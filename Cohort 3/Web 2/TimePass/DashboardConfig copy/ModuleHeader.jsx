"use client"

import { Save, Settings2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import BackButton from "@/components/feature-component/BackButton"

export function ModuleHeader({ saving, saveSettings, openSyncDialog }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between w-full bg-card/40 border-2 border-gray-200 p-3 rounded-lg mb-4">
        <div className="flex items-center">
          <div className="flex gap-2 mr-2">
            <BackButton />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dashboard Configuration</h2>
            <p className="text-muted-foreground mt-1">Configure and manage your system modules</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={saveSettings} disabled={saving}>
            {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save Changes
          </Button>
          <Button onClick={openSyncDialog}>
            <Settings2 className="mr-2 h-4 w-4" />
            Configure Sync
          </Button>
        </div>
      </div>
    </div>
  )
}

