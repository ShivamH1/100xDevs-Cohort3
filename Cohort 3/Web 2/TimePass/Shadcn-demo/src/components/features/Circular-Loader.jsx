import { useState } from 'react';
import { Clock } from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';

'use client'

export function CircularProgress({ 
  value, 
  size = 120, 
  strokeWidth = 8 
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          className="text-muted-foreground/20"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          className="text-primary transition-all duration-300 ease-in-out"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
      </svg>
      <div className="absolute text-xl font-medium">
        {Math.round(value)}%
      </div>
    </div>
  )
}



'use server'

export async function scanWebsite(type) {
  await new Promise(resolve => setTimeout(resolve, 30000))

  return {
    type,
    timestamp: new Date().toISOString(),
    details: {
      issues: [
        type === 'diagnostic' 
          ? 'High CPU usage detected' 
          : 'Broken link found at /about',
        'Warning: Large JavaScript bundle size',
        'Consider implementing lazy loading'
      ],
      score: Math.floor(Math.random() * 40) + 60
    }
  }
}



export default function BrokenLinkScanner() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentScan, setCurrentScan] = useState(null);
  const [previousScans, setPreviousScans] = useState([]);

  const startScan = async (type) => {
    setScanning(true);
    setProgress(0);
    setTimeLeft(30);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 3.33;
      });
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    try {
      const result = await scanWebsite(type);
      setCurrentScan(result);
      setPreviousScans((prev) => [result, ...prev]);
    } finally {
      setScanning(false);
      clearInterval(timer);
    }
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Broken Link Scanner</CardTitle>
        <CardDescription>Run broken link scans for your website</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-sm text-muted-foreground">
          Detect broken links and redirects across your website.
        </div>
        {scanning ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <CircularProgress value={progress} />
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{timeLeft} seconds remaining</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="flex justify-start items-center">
              <Button onClick={() => startScan('broken-links')}>Start Scan</Button>
            </div>
            <div className="flex justify-end items-center gap-2">
              {currentScan?.type === 'broken-links' && (
                <Button variant="outline">View Scan Details</Button>
              )}
              {previousScans.filter((scan) => scan.type === 'broken-links').length >
                0 && <Button variant="ghost">View Previous Scan Results</Button>}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
