import React, { createContext, useContext, useState, useCallback } from 'react';

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [siteDetails, setSiteDetails] = useState([]);

  const removeSite = useCallback((applicationId) => {
    setSiteDetails((prev) => prev.filter((site) => site.application_id !== applicationId))
  }, [])

  console.log("siteDetails",siteDetails)

  return (
    <ApplicationContext.Provider value={{ siteDetails, setSiteDetails ,removeSite }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplications = () => useContext(ApplicationContext);