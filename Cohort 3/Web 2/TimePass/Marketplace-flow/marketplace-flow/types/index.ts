export interface Application {
  id: string
  name: string
  url: string
  selected?: boolean
}

export interface Plugin {
  id: string
  name: string
  description: string
  author: string
  rating: number
  totalRatings: number
  downloads: number
  icon: string
  installedOn?: string[]
}

export interface InstallationStatus {
  siteId: string
  siteName: string
  steps: {
    name: string
    status: 'pending' | 'loading' | 'completed' | 'error'
    version?: string
  }[]
}

