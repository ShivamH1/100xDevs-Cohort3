import { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Grid,
  List,
  Search,
  Loader2,
} from 'lucide-react';
import { useApplications } from '@/services/context/ApplicationContext';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
  Input,
} from '@/components/ui';
import { Badge } from '@/components/ui/badge';
import { CustomToolTip } from '../feature-component';
import CardShimmer from '../feature-component/CardShimmer';

export function PluginList({ pluginData, pluginLoading }) {
  const [expandedPlugin, setExpandedPlugin] = useState(null);
  const [selectedPlugins, setSelectedPlugins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { siteDetails } = useApplications();

  const PLUGINS_PER_PAGE = 10;

  const filteredPlugins = useMemo(() => {
    const grouped = {};
    Object.entries(pluginData || {}).forEach(([appId, appData]) => {
      const plugins = JSON.parse(appData?.plugin_names) || [];
      plugins.forEach((plugin) => {
        if (
          !searchQuery ||
          plugin.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          if (!grouped[plugin.slug]) {
            grouped[plugin.slug] = {
              ...plugin,
              applications: [],
            };
          }
          grouped[plugin.slug].applications.push({
            id: appId,
            name: appData.application_name,
            url: appData.application_url,
            active: plugin.active,
            version: plugin.version,
          });
        }
      });
    });
    return Object.values(grouped);
  }, [pluginData, searchQuery]);

  const paginatedPlugins = filteredPlugins.slice(
    (currentPage - 1) * PLUGINS_PER_PAGE,
    currentPage * PLUGINS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredPlugins.length / PLUGINS_PER_PAGE);

  const toggleExpand = (pluginSlug) => {
    setExpandedPlugin(expandedPlugin === pluginSlug ? null : pluginSlug);
  };

  const toggleSelect = (pluginSlug) => {
    setSelectedPlugins((prev) =>
      prev.includes(pluginSlug)
        ? prev.filter((slug) => slug !== pluginSlug)
        : [...prev, pluginSlug]
    );
  };

  const handleBulkAction = async (action) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Performing ${action} on`, selectedPlugins);
    setIsLoading(false);
    setSelectedPlugins([]);
  };

  return (
    <>
      {pluginLoading ? (
        <>
          <CardShimmer />
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search plugins..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <CustomToolTip
                trigger={
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsGridView(!isGridView)}
                  >
                    {isGridView ? (
                      <Grid className="h-4 w-4" />
                    ) : (
                      <List className="h-4 w-4" />
                    )}
                  </Button>
                }
                content={<p>Switch to {isGridView ? 'list' : 'grid'} view</p>}
              />
            </div>

            {selectedPlugins.length > 0 && (
              <div className="flex items-center gap-2">
                <Select onValueChange={handleBulkAction} disabled={isLoading}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Bulk Actions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="activate">Activate All</SelectItem>
                    <SelectItem value="deactivate">Deactivate All</SelectItem>
                    <SelectItem value="update">Update All</SelectItem>
                    <SelectItem value="delete">Delete All</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">
                  {selectedPlugins.length} selected
                </span>
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              </div>
            )}
          </div>

          <div
            className={`grid ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'gap-4'}`}
          >
            {paginatedPlugins.map((plugin) => (
              <Card
                key={plugin.slug}
                className={`overflow-hidden ${!isGridView ? 'flex' : ''}`}
              >
                <CardHeader className={`p-4 ${!isGridView ? 'flex-1' : ''}`}>
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={selectedPlugins.includes(plugin.slug)}
                      onCheckedChange={() => toggleSelect(plugin.slug)}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <img
                          src={plugin.logo || '/placeholder.svg'}
                          alt={plugin.name}
                          className="w-12 h-12 rounded-lg"
                        />
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="transition-colors hover:bg-primary hover:text-primary-foreground"
                          >
                            {plugin.applications.length}{' '}
                            {plugin.applications.length === 1 ? 'site' : 'sites'}
                          </Badge>
                          <CustomToolTip
                            trigger={
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleExpand(plugin.slug)}
                              >
                                {expandedPlugin === plugin.slug ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </Button>
                            }
                            side="top"
                            content={
                              expandedPlugin === plugin.slug ? 'Collapse' : 'Expand'
                            }
                          />
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Activate All</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                Deactivate All
                              </DropdownMenuItem>
                              {plugin.new_version && (
                                <DropdownMenuItem>
                                  Update All to {plugin.new_version}
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div>
                      <CardTitle className="text-lg">{plugin.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Version: {plugin.version}
                      </p>
                    </div>
                    <p className="text-sm">
                      Installed on {plugin.applications.length} site(s)
                    </p>
                    {plugin.new_version && (
                      <p className="text-sm text-warning">
                        Update available: {plugin.new_version}
                      </p>
                    )}
                  </div>
                </CardContent>
                {expandedPlugin === plugin.slug && (
                  <div className="bg-muted overflow-hidden">
                    <div className="p-4 space-y-2">
                      <h4 className="font-semibold mb-2">Installed on:</h4>
                      {plugin.applications.map((app) => (
                        <div
                          key={app.url}
                          className="flex items-center justify-between bg-background rounded-md p-2"
                        >
                          <div>
                            <p className="font-medium">{app.name}</p>
                            <p className="text-sm text-muted-foreground">{app.url}</p>
                            <p className="text-sm">Version: {app.version}</p>
                          </div>
                          <Badge variant={app.active ? 'default' : 'secondary'}>
                            {app.active ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
