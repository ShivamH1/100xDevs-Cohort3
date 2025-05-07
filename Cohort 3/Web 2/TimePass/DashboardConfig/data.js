import { Shield, Gauge, Database, Activity, BarChart, Unplug } from 'lucide-react';

export const initialModules = [
  {
    id: 'sync',
    name: 'Component Synchronization',
    icon: Unplug,
    enabled: false,
    description: 'Synchronize data from your WordPress site',
    features: [
      {
        id: 'sync-plugins',
        name: 'Synchronize Plugins Data',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
      {
        id: 'sync-themes',
        name: 'Synchronize Themes Data',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
      {
        id: 'sync-users',
        name: 'Synchronize Users Data',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
    ],
  },
  {
    id: 'performance',
    name: 'Performance Monitoring',
    icon: Gauge,
    enabled: false,
    description: 'Monitor and optimize your application performance',
    features: [
      {
        id: 'score',
        name: 'Performance Score',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
      {
        id: 'load-time',
        name: 'Page Load Time',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
      {
        id: 'diagnostics',
        name: 'Diagnostic Results',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'seo',
        name: 'SEO Optimization',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'links',
        name: 'Broken Link Scanner',
        enabled: false,
        availableInPlans: ['pro'],
      },
    ],
  },
  {
    id: 'security',
    name: 'Security & Firewall',
    icon: Shield,
    enabled: false,
    description: 'Protect your application from threats and attacks',
    features: [
      {
        id: 'security-scan',
        name: 'Security Scan',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'malware',
        name: 'Malware Scan',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'vulnerability',
        name: 'Vulnerability Scan',
        enabled: false,
        availableInPlans: ['pro'],
      },
      {
        id: 'bot-protection',
        name: 'Bot Protection',
        enabled: false,
        availableInPlans: ['free', 'basic', 'plus', 'pro'],
      },
      {
        id: 'access-control',
        name: 'Access Control Rules',
        enabled: false,
        availableInPlans: ['free', 'basic', 'plus', 'pro'],
      },
      {
        id: 'recaptcha',
        name: 'Google reCAPTCHA',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
      {
        id: 'country-block',
        name: 'Country Block',
        enabled: false,
        availableInPlans: ['basic', 'plus', 'pro'],
      },
    ],
  },
  {
    id: 'backup',
    name: 'Backup & Restore',
    icon: Database,
    enabled: false,
    description: 'Automated backup and restore functionality',
    features: [
      {
        id: 'storage',
        name: 'Storage Options',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
        storageOptions: [
          {label : 'Miniorange S3', value: 'miniorange-s3', enabled: false},
          {label : 'AWS S3', value: 'aws-s3', enabled: false},
          {label : 'FTP/SFTP', value: 'ftp-sftp', enabled: false}
        ]
      },
      {
        id: 'create',
        name: 'Create & Download Backups',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'schedule',
        name: 'Backup & Restore Scheduling',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
    ],
  },
  {
    id: 'activity',
    name: 'Activity Log',
    icon: Activity,
    enabled: false,
    description: 'Track and monitor system activities',
    features: [
      {
        id: 'portal-logs',
        name: 'Portal & Application Side Logs',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
        retentionOptions: [
          {
            label: '7 days',
            value: '7d',
          },
          {
            label: '1 month',
            value: '1m',
          },
          {
            label: '6 months',
            value: '6m',
          },
          {
            label: '1 year',
            value: '1y',
          },
        ],
      },
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting',
    icon: BarChart,
    enabled: false,
    description: 'Generate comprehensive system reports',
    features: [
      // {
      //   id: 'system-reports',
      //   name: 'System Reports',
      //   enabled: false,
      //   availableInPlans: ['plus', 'pro'],
      // },
      {
        id: 'security-report',
        name: 'Security Report',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'backup-report',
        name: 'Backup Report',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'brokenlinks-report',
        name: 'Broken Link Report',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      },
      {
        id: 'seo-report',
        name: 'SEO Report',
        enabled: false,
        availableInPlans: ['plus', 'pro'],
      }
    ],
  },
];