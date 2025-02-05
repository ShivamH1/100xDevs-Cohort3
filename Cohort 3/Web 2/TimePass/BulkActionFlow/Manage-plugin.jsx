import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PluginList } from '@/components/applications/PluginList';
import ShowApplicationDetails from '@/components/feature-component/ShowApplicationsDetails';
import { useApplications } from '@/services/context/ApplicationContext';
import { useBulkPluginFetch } from '@/services/reqres/ApplicationDashboardRequest';
import { useAuth } from '@/services/context/AuthContext';

function ManagePlugin() {
  const { siteDetails } = useApplications();
  console.log('siteDetails', siteDetails);

  const { user } = useAuth();
  const application_ids = siteDetails?.map((site) => site.application_id);

  const {
    data: pluginData,
    isLoading: pluginLoading,
    error: pluginError,
  } = useBulkPluginFetch(user?.domain_name, application_ids);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold tracking-normal">Manage Plugins</h1>
          <ShowApplicationDetails />
        </div>
        <div className="flex items-center gap-4">
          <div className="max-w-6xl">
            <Input placeholder="Search plugins..." className="max-w-6xl" />
          </div>
          <Button asChild>
            <NavLink to={'install'}>
              <Plus className="mr-2 h-4 w-4" /> Add New
            </NavLink>
          </Button>
        </div>
      </div>
      <PluginList pluginData={pluginData} pluginLoading={pluginLoading}/>
    </div>
  );
}

export default ManagePlugin;
