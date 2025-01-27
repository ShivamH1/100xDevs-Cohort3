import { PluginList } from "@/components/plugin-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react'
import Link from "next/link"

export default function PluginsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Plugins</h1>
        <Button asChild>
          <Link href="/plugins/install">
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </Button>
      </div>
      <div className="mb-6">
        <Input placeholder="Search plugins..." className="max-w-sm" />
      </div>
      <PluginList />
    </div>
  )
}

