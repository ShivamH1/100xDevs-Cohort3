'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Upload } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

const MOCK_PLUGINS = [
  {
    id: '1',
    name: 'Elementor Website Builder',
    description: 'The Elementor Website Builder has it all: drag and drop page builder, pixel perfect design, mobile responsive editing, and more.',
    author: 'Elementor.com',
    rating: 5,
    totalRatings: 6983,
    downloads: 57550983,
    icon: 'https://ps.w.org/elementor/assets/icon-256x256.png'
  },
  {
    id: '2',
    name: 'Contact Form 7',
    description: 'Just another contact form plugin. Simple but flexible.',
    author: 'Takayuki Miyoshi',
    rating: 4,
    totalRatings: 2123,
    downloads: 364198079,
    icon: 'https://ps.w.org/contact-form-7/assets/icon-256x256.png'
  }
]

export default function InstallPluginsPage() {
  const router = useRouter()
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedPlugin, setSelectedPlugin] = useState<typeof MOCK_PLUGINS[0] | null>(null)

  const handleInstall = (plugin: typeof MOCK_PLUGINS[0]) => {
    setSelectedPlugin(plugin)
    setShowConfirm(true)
  }

  const handleConfirm = () => {
    setShowConfirm(false)
    router.push('/plugins/status')
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Install Plugins</h1>
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" /> Upload Plugin
        </Button>
      </div>
      <div className="mb-6">
        <Input placeholder="Search plugins..." className="max-w-sm" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {MOCK_PLUGINS.map((plugin) => (
          <Card key={plugin.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <img
                  src={plugin.icon || "/placeholder.svg"}
                  alt={plugin.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1">
                  <CardTitle>{plugin.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {plugin.author}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{plugin.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
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
              </div>
              <Button onClick={() => handleInstall(plugin)}>Install</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Install Plugin</DialogTitle>
            <DialogDescription>
              You are about to install {selectedPlugin?.name} on the following sites:
              <ul className="mt-2 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Joyous End
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  WP Test
                </li>
              </ul>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

