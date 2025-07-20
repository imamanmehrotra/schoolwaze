'use client';

import * as React from 'react';
import { AlertTriangle, Bell, Clock, MapPin, Settings, X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';

// Mock alert data
const mockAlerts = [
  {
    id: 1,
    type: 'emergency',
    title: 'School Lockdown - Lincoln Elementary',
    message: 'School is temporarily in lockdown due to nearby emergency. All students are safe. Pickup delayed until 4:00 PM.',
    timestamp: '2024-01-15T14:30:00Z',
    school: 'Lincoln Elementary',
    location: '123 Oak Street',
    status: 'active',
    priority: 'critical',
    estimatedResolution: '4:00 PM'
  },
  {
    id: 2,
    type: 'traffic',
    title: 'Heavy Traffic on Maple Avenue',
    message: 'Construction causing 15-minute delays on Maple Avenue. Consider alternative routes.',
    timestamp: '2024-01-15T13:45:00Z',
    school: 'Lincoln Elementary',
    location: 'Maple Avenue & 5th Street',
    status: 'active',
    priority: 'medium',
    estimatedResolution: '5:30 PM'
  },
  {
    id: 3,
    type: 'weather',
    title: 'Rain Advisory',
    message: 'Light rain expected during pickup time. Allow extra travel time and drive carefully.',
    timestamp: '2024-01-15T12:00:00Z',
    school: 'All Schools',
    location: 'Citywide',
    status: 'active',
    priority: 'low',
    estimatedResolution: '6:00 PM'
  },
  {
    id: 4,
    type: 'event',
    title: 'Early Dismissal - Basketball Game',
    message: 'Lincoln Elementary dismissing 30 minutes early today for away basketball game.',
    timestamp: '2024-01-15T11:30:00Z',
    school: 'Lincoln Elementary',
    location: '123 Oak Street',
    status: 'resolved',
    priority: 'medium',
    estimatedResolution: 'Completed'
  },
  {
    id: 5,
    type: 'maintenance',
    title: 'Parking Lot Maintenance',
    message: 'East parking lot closed for maintenance. Use main entrance and west lot.',
    timestamp: '2024-01-15T10:00:00Z',
    school: 'Lincoln Elementary',
    location: '123 Oak Street',
    status: 'active',
    priority: 'low',
    estimatedResolution: '3:00 PM'
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'emergency':
      return <AlertTriangle className="h-5 w-5 text-red-600" />;
    case 'traffic':
      return <MapPin className="h-5 w-5 text-orange-600" />;
    case 'weather':
      return <AlertCircle className="h-5 w-5 text-blue-600" />;
    case 'event':
      return <Info className="h-5 w-5 text-green-600" />;
    case 'maintenance':
      return <Settings className="h-5 w-5 text-gray-600" />;
    default:
      return <Bell className="h-5 w-5 text-gray-600" />;
  }
};

const getAlertColor = (priority: string) => {
  switch (priority) {
    case 'critical':
      return 'border-red-200 bg-red-50';
    case 'medium':
      return 'border-orange-200 bg-orange-50';
    case 'low':
      return 'border-blue-200 bg-blue-50';
    default:
      return 'border-gray-200 bg-gray-50';
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case 'critical':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'medium':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'low':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export default function AlertsPage() {
  const [selectedAlert, setSelectedAlert] = React.useState<typeof mockAlerts[0] | null>(null);
  const [showSettings, setShowSettings] = React.useState(false);
  const [filter, setFilter] = React.useState<'all' | 'active' | 'resolved'>('all');
  const [notificationSettings, setNotificationSettings] = React.useState({
    emergency: true,
    traffic: true,
    weather: false,
    event: true,
    maintenance: false,
    pushNotifications: true,
    emailAlerts: true,
    smsAlerts: false
  });

  const filteredAlerts = mockAlerts.filter(alert => {
    if (filter === 'all') return true;
    return alert.status === filter;
  });

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDismissAlert = (alertId: number) => {
    console.log('Dismissing alert:', alertId);
    // Handle alert dismissal logic
  };

  const handleSettingChange = (key: string, value: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Traffic Alerts</h1>
            <p className="text-gray-600">
              Stay informed about traffic conditions, school events, and emergencies.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowSettings(true)}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { key: 'all', label: 'All Alerts', count: mockAlerts.length },
                { key: 'active', label: 'Active', count: mockAlerts.filter(a => a.status === 'active').length },
                { key: 'resolved', label: 'Resolved', count: mockAlerts.filter(a => a.status === 'resolved').length }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    filter === key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <Card
              key={alert.id}
              className={`transition-all hover:shadow-md cursor-pointer ${getAlertColor(alert.priority)} ${
                alert.status === 'resolved' ? 'opacity-75' : ''
              }`}
              onClick={() => setSelectedAlert(alert)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      {getAlertIcon(alert.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{alert.title}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(alert.priority)}`}>
                          {alert.priority}
                        </span>
                        {alert.status === 'resolved' && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-3">{alert.message}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {formatTime(alert.timestamp)}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {alert.location}
                        </div>
                        <div>
                          School: {alert.school}
                        </div>
                        {alert.estimatedResolution && alert.status === 'active' && (
                          <div className="text-blue-600 font-medium">
                            Est. resolution: {alert.estimatedResolution}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {alert.status === 'active' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDismissAlert(alert.id);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No alerts found</h3>
              <p className="text-gray-600">
                {filter === 'active' 
                  ? 'No active alerts at this time.' 
                  : filter === 'resolved' 
                  ? 'No resolved alerts to display.' 
                  : 'No alerts available.'}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Alert Detail Modal */}
        {selectedAlert && (
          <Modal
            isOpen={!!selectedAlert}
            onClose={() => setSelectedAlert(null)}
            title={selectedAlert.title}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {getAlertIcon(selectedAlert.type)}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getPriorityBadge(selectedAlert.priority)}`}>
                  {selectedAlert.priority} priority
                </span>
                {selectedAlert.status === 'resolved' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Resolved
                  </span>
                )}
              </div>
              
              <p className="text-gray-700">{selectedAlert.message}</p>
              
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Time</label>
                  <p className="mt-1 text-sm text-gray-900">{formatTime(selectedAlert.timestamp)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">School</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedAlert.school}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Location</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedAlert.location}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Status</label>
                  <p className="mt-1 text-sm text-gray-900 capitalize">{selectedAlert.status}</p>
                </div>
              </div>
              
              {selectedAlert.estimatedResolution && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Estimated Resolution</p>
                  <p className="text-sm text-blue-700">{selectedAlert.estimatedResolution}</p>
                </div>
              )}
              
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setSelectedAlert(null)} className="flex-1">
                  Close
                </Button>
                {selectedAlert.status === 'active' && (
                  <Button 
                    onClick={() => {
                      handleDismissAlert(selectedAlert.id);
                      setSelectedAlert(null);
                    }}
                    className="flex-1"
                  >
                    Dismiss Alert
                  </Button>
                )}
              </div>
            </div>
          </Modal>
        )}

        {/* Settings Modal */}
        <Modal
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
          title="Alert Settings"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Types</h3>
              <div className="space-y-3">
                {[
                  { key: 'emergency', label: 'Emergency Alerts', description: 'School lockdowns, safety incidents' },
                  { key: 'traffic', label: 'Traffic Alerts', description: 'Construction, accidents, heavy traffic' },
                  { key: 'weather', label: 'Weather Alerts', description: 'Rain, snow, severe weather warnings' },
                  { key: 'event', label: 'School Events', description: 'Early dismissals, schedule changes' },
                  { key: 'maintenance', label: 'Maintenance Notices', description: 'Parking lot closures, facility updates' }
                ].map(({ key, label, description }) => (
                  <div key={key} className="flex items-start">
                    <input
                      type="checkbox"
                      id={key}
                      checked={notificationSettings[key as keyof typeof notificationSettings]}
                      onChange={(e) => handleSettingChange(key, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <div className="ml-3">
                      <label htmlFor={key} className="text-sm font-medium text-gray-900">
                        {label}
                      </label>
                      <p className="text-xs text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Methods</h3>
              <div className="space-y-3">
                {[
                  { key: 'pushNotifications', label: 'Push Notifications', description: 'Instant notifications on your device' },
                  { key: 'emailAlerts', label: 'Email Alerts', description: 'Receive alerts via email' },
                  { key: 'smsAlerts', label: 'SMS Alerts', description: 'Text message notifications (carrier rates apply)' }
                ].map(({ key, label, description }) => (
                  <div key={key} className="flex items-start">
                    <input
                      type="checkbox"
                      id={key}
                      checked={notificationSettings[key as keyof typeof notificationSettings]}
                      onChange={(e) => handleSettingChange(key, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <div className="ml-3">
                      <label htmlFor={key} className="text-sm font-medium text-gray-900">
                        {label}
                      </label>
                      <p className="text-xs text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowSettings(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={() => setShowSettings(false)} className="flex-1">
                Save Settings
              </Button>
            </div>
          </div>
        </Modal>
      </main>
    </div>
  );
}
