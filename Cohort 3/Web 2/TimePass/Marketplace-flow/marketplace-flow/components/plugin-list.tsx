'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, Star } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MOCK_INSTALLED_PLUGINS = [
  {
    id: '1',
    name: 'Akismet',
    description: 'Anti-spam protection for your site',
    author: 'Automattic',
    rating: 4,
    totalRatings: 5234,
    downloads: 12345678,
    icon: '/placeholder.svg?height=48&width=48',
    installedOn: ['site1']
  },
  {
    id: '2',
    name: 'Contact Form 7',
    description: 'Just another contact form plugin. Simple but flexible.',
    author: 'Takayuki Miyoshi',
    rating: 4,
    totalRatings: 2123,
    downloads: 364198079,
    icon: '/placeholder.svg?height=48&width=48',
    installedOn: ['site1', 'site2']
  }
]

export function PluginList() {
  return (
    <div className="space-y-4">
      {MOCK_INSTALLED_PLUGINS.map((plugin) => (
        <Card key={plugin.id}>
          <CardHeader className="p-4">
            <div className="flex items-start gap-4">
              <img
                src={plugin.icon || "/placeholder.svg"}
                alt={plugin.name}
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{plugin.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">by {plugin.author}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Update</DropdownMenuItem>
                      <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm mb-2">{plugin.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < plugin.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({plugin.totalRatings})
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {plugin.downloads.toLocaleString()} downloads
              </div>
              <div className="text-sm text-muted-foreground">
                Installed on {plugin.installedOn.length} {plugin.installedOn.length === 1 ? 'site' : 'sites'}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

