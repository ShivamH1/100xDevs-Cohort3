export const PLAN_FEATURES = {
  free: {
    price: 0,
    sites: 5,
    features: ["site-management", "bot-protection", "access-control"],
  },
  basic: {
    price: 49,
    sites: 5,
    features: [
      "site-management",
      "bot-protection",
      "access-control",
      "google-captcha",
      "country-block",
      "performance-monitoring",
    ],
  },
  plus: {
    price: 59,
    sites: 5,
    features: [
      "site-management",
      "bot-protection",
      "access-control",
      "google-captcha",
      "country-block",
      "performance-monitoring",
      "security-scan",
      "backup-restore",
      "activity-log",
    ],
  },
  pro: {
    price: 99,
    sites: 5,
    features: [
      "site-management",
      "bot-protection",
      "access-control",
      "google-captcha",
      "country-block",
      "performance-monitoring",
      "security-scan",
      "backup-restore",
      "activity-log",
      "reporting",
      "sync",
      "notes",
    ],
  },
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchUserPlan() {
  await delay(1000)
  return { plan: "pro" }
}

export async function saveModuleSettings(settings) {
  await delay(1000)
  console.log('Settings saved:', settings)
  return { success: true }
}