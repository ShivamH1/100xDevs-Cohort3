'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, MoreHorizontal, RefreshCw, Shield, Trash2, Unlock, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

const MOCK_APPLICATIONS = [
  { id: '1', name: 'Joyous End', url: 'https://joyousend.s4-tastewp.com' },
  { id: '2', name: 'WP Test', url: 'https://dev-wordpressapp.pantheonsite.io' },
]

export function Applications() {
  const router = useRouter()
  const [applications, setApplications] = useState(MOCK_APPLICATIONS.map(app => ({ ...app, selected: false })))
  const [selectAll, setSelectAll] = useState(false)

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    setApplications(applications.map(app => ({ ...app, selected: !selectAll })))
  }

  const handleSelect = (id: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, selected: !app.selected } : app
    ))
    setSelectAll(applications.every(app => app.selected))
  }

  const handleManagePlugins = () => {
    const selectedApps = applications.filter(app => app.selected)
    if (selectedApps.length > 0) {
      router.push('/plugins')
    }
  }

  const selectedCount = applications.filter(app => app.selected).length

  return (
    <div className="rounded-md border">
      <div className="border-b p-4 flex items-center gap-4">
        <Checkbox 
          checked={selectAll}
          onCheckedChange={handleSelectAll}
        />
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Shield className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Lock className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Unlock className="h-4 w-4" />
          </Button>
        </div>
        {selectedCount > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">
                Bulk Actions
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleManagePlugins}>
                Manage Plugins
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="divide-y">
        {applications.map((app) => (
          <div key={app.id} className="p-4 flex items-center gap-4">
            <Checkbox 
              checked={app.selected}
              onCheckedChange={() => handleSelect(app.id)}
            />
            <div className="flex-1">
              <h3 className="font-medium">{app.name}</h3>
              <p className="text-sm text-muted-foreground">{app.url}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  )
}

