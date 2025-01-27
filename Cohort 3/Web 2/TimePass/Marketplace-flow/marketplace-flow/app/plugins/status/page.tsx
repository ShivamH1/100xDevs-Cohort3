'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ChevronDown, ChevronUp, Loader2 } from 'lucide-react'
import type { InstallationStatus } from "@/types"

export default function StatusPage() {
  const [expanded, setExpanded] = useState(true)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<InstallationStatus[]>([
    {
      siteId: '1',
      siteName: 'WP Test',
      steps: [
        { name: 'Fetching Latest Info', status: 'loading' },
        { name: 'Install Classic Editor', status: 'pending', version: '1.6.7' },
        { name: 'Purging Cache', status: 'pending' }
      ]
    },
    {
      siteId: '2',
      siteName: 'Joyous End',
      steps: [
        { name: 'Fetching Latest Info', status: 'pending' },
        { name: 'Install Classic Editor', status: 'pending', version: '1.6.7' },
        { name: 'Purging Cache', status: 'pending' }
      ]
    }
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Installing Plugins</CardTitle>
            <Button variant="outline" onClick={() => setExpanded(!expanded)}>
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        {expanded && (
          <CardContent className="space-y-6">
            {status.map((site) => (
              <div key={site.siteId} className="space-y-4">
                <h3 className="font-medium">{site.siteName}</h3>
                <div className="space-y-2">
                  {site.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {step.status === 'completed' && (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      )}
                      {step.status === 'loading' && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      )}
                      {step.status === 'pending' && (
                        <div className="h-4 w-4 rounded-full border" />
                      )}
                      <span className="flex-1">{step.name}</span>
                      {step.version && (
                        <span className="text-sm text-muted-foreground">
                          v{step.version}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        )}
      </Card>
    </div>
  )
}

