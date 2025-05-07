import { Shield, Gauge, Database, Activity, BarChart, Unplug } from "lucide-react"

export const initialModules = [
  {
    id: "sync",
    name: "Component Synchronization",
    icon: Unplug,
    enabled: false,
    description: "Synchronize data from your WordPress site",
    features: [
      {
        id: "sync-plugins",
        name: "Synchronize Plugins Data",
        enabled: false,
      },
      {
        id: "sync-themes",
        name: "Synchronize Themes Data",
        enabled: false,
      },
      {
        id: "sync-users",
        name: "Synchronize Users Data",
        enabled: false,
      },
    ],
  },
  {
    id: "performance",
    name: "Performance Monitoring",
    icon: Gauge,
    enabled: false,
    description: "Monitor and optimize your application performance",
    features: [
      {
        id: "score",
        name: "Performance Score",
        enabled: false,
      },
      {
        id: "load-time",
        name: "Page Load Time",
        enabled: false,
      },
      {
        id: "diagnostics",
        name: "Diagnostic Results",
        enabled: false,
      },
      {
        id: "seo",
        name: "SEO Optimization",
        enabled: false,
      },
      {
        id: "links",
        name: "Broken Link Scanner",
        enabled: false,
      },
    ],
  },
  {
    id: "security",
    name: "Security & Firewall",
    icon: Shield,
    enabled: false,
    description: "Protect your application from threats and attacks",
    features: [
      {
        id: "security-scan",
        name: "Security Scan",
        enabled: false,
      },
      {
        id: "malware",
        name: "Malware Scan",
        enabled: false,
      },
      {
        id: "vulnerability",
        name: "Vulnerability Scan",
        enabled: false,
      },
      {
        id: "bot-protection",
        name: "Bot Protection",
        enabled: false,
      },
      {
        id: "access-control",
        name: "Access Control Rules",
        enabled: false,
      },
      {
        id: "recaptcha",
        name: "Google reCAPTCHA",
        enabled: false,
      },
      {
        id: "country-block",
        name: "Country Block",
        enabled: false,
      },
    ],
  },
  {
    id: "backup",
    name: "Backup & Restore",
    icon: Database,
    enabled: false,
    description: "Automated backup and restore functionality",
    features: [
      {
        id: "storage",
        name: "Storage Options",
        enabled: false,
        storageOptions: [
          { label: "Amazon S3", value: "amazon-s3", selected: false },
          { label: "Miniorange S3", value: "miniorange-s3", selected: false },
          { label: "FTP/SFTP", value: "ftp-sftp", selected: false },
        ],
      },
      {
        id: "create",
        name: "Create & Download Backups",
        enabled: false,
      },
      {
        id: "schedule",
        name: "Backup & Restore Scheduling",
        enabled: false,
      },
    ],
  },
  {
    id: "activity",
    name: "Activity Log",
    icon: Activity,
    enabled: false,
    description: "Track and monitor system activities",
    features: [
      {
        id: "portal-logs",
        name: "Portal & Application Side Logs",
        enabled: false,
        retentionOptions: [
          {
            label: "7 days",
            value: "7d",
          },
          {
            label: "1 month",
            value: "1m",
          },
          {
            label: "6 months",
            value: "6m",
          },
          {
            label: "1 year",
            value: "1y",
          },
        ],
      },
    ],
  },
  {
    id: "reporting",
    name: "Reporting",
    icon: BarChart,
    enabled: false,
    description: "Generate comprehensive system reports",
    features: [
      {
        id: "security-report",
        name: "Security Report",
        enabled: false,
      },
      {
        id: "backup-report",
        name: "Backup Report",
        enabled: false,
      },
      {
        id: "brokenlinks-report",
        name: "Broken Link Report",
        enabled: false,
      },
      {
        id: "seo-report",
        name: "SEO Report",
        enabled: false,
      },
    ],
  },
]

