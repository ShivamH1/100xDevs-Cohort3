const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchConfiguration() {
  await delay(1000)
  return {
    application_id: 1,
    config: [
      {
        module_name: "Backup & Restore",
        feature: "Storage Options",
        sub_features: "",
      },
      {
        module_name: "Security & Firewall",
        feature: "Bot Protection",
        sub_features: "",
      },
      {
        module_name: "Security & Firewall",
        feature: "Vulnerability Scan",
        sub_features: "",
      },
    ],
  }
}

export async function saveModuleSettings(settings) {
  await delay(1000)
  console.log("Settings saved:", settings)
  return { success: true }
}