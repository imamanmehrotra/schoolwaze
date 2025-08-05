'use client';

import * as React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Car,
  School,
  Route,
  Bell
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock dashboard data
const mockDashboardData = {
  user: {
    name: 'Hridhan Srivastava',
    children: ['Emma Johnson', 'Liam Johnson'],
    school: 'Lincoln Elementary School'
  },
  todaySchedule: [
    { time: '7:15 AM', event: 'Drop-off - Emma & Liam', status: 'upcoming', type: 'drop-off' },
    { time: '3:15 PM', event: 'Pickup - Emma & Liam', status: 'upcoming', type: 'pickup' },
  ],
  activeCarpool: {
    driver: 'Michael Chen',
    time: '7:30 AM',
    children: ['Sophie Chen', 'Emma Johnson'],
    status: 'confirmed'
  },
  todayStats: {
    timeSaved: '12 min',
    fuelSaved: '0.8 gal',
    carbonReduced: '2.1 lbs',
    carpoolsActive: 2
  },
  recentAlerts: [
    { id: 1, message: 'Light traffic on Oak Street - 2 min delay', severity: 'low', time: '10 min ago' },
    { id: 2, message: 'Basketball game early dismissal at 2:30 PM', severity: 'info', time: '1 hour ago' },
    { id: 3, message: 'Construction on Maple Ave - use Pine St', severity: 'medium', time: '2 hours ago' }
  ],
  upcomingEvents: [
    { date: 'Tomorrow', event: 'Parent-Teacher Conferences', time: '4:00 PM' },
    { date: 'Friday', event: 'School Assembly', time: '9:00 AM' },
    { date: 'Next Week', event: 'Field Trip - Science Museum', time: '8:00 AM' }
  ],
  trafficInsights: {
    bestDropoffTime: '7:15 AM',
    bestPickupTime: '3:30 PM',
    currentWaitTime: '6 min',
    recommendedRoute: 'Oak Street (5 min faster)'
  }
};

export default function DashboardPage() {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-orange-600 bg-orange-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'info':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Good morning, {mockDashboardData.user.name}!
          </h1>
          <p className="text-gray-600">
            Here&apos;s your school traffic overview for today • {currentTime}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">{mockDashboardData.todayStats.timeSaved}</p>
                      <p className="text-sm text-gray-600">Time Saved Today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Car className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">{mockDashboardData.todayStats.fuelSaved}</p>
                      <p className="text-sm text-gray-600">Fuel Saved</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">{mockDashboardData.todayStats.carbonReduced}</p>
                      <p className="text-sm text-gray-600">CO₂ Reduced</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold text-gray-900">{mockDashboardData.todayStats.carpoolsActive}</p>
                      <p className="text-sm text-gray-600">Active Carpools</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Today&apos;s Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDashboardData.todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-4 ${
                          item.type === 'drop-off' ? 'bg-blue-500' : 'bg-green-500'
                        }`} />
                        <div>
                          <p className="font-medium text-gray-900">{item.event}</p>
                          <p className="text-sm text-gray-600">{item.time}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Carpool */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-600" />
                  Active Carpool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-medium">
                          {mockDashboardData.activeCarpool.driver.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{mockDashboardData.activeCarpool.driver}</p>
                        <p className="text-sm text-gray-600">
                          Pickup at {mockDashboardData.activeCarpool.time}
                        </p>
                        <p className="text-xs text-gray-500">
                          Children: {mockDashboardData.activeCarpool.children.join(', ')}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {mockDashboardData.activeCarpool.status}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button size="sm">Contact Driver</Button>
                    <Button variant="outline" size="sm">View Route</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Route className="h-5 w-5 mr-2 text-green-600" />
                  Traffic Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">Best Drop-off Time</p>
                    <p className="text-2xl font-bold text-green-900">
                      {mockDashboardData.trafficInsights.bestDropoffTime}
                    </p>
                    <p className="text-xs text-green-600">3 min shorter wait</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">Best Pickup Time</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {mockDashboardData.trafficInsights.bestPickupTime}
                    </p>
                    <p className="text-xs text-blue-600">Avoid peak congestion</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-700 font-medium">Current Wait Time</p>
                    <p className="text-2xl font-bold text-purple-900">
                      {mockDashboardData.trafficInsights.currentWaitTime}
                    </p>
                    <p className="text-xs text-purple-600">Below average</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700 font-medium">Recommended Route</p>
                    <p className="text-lg font-bold text-orange-900">
                      {mockDashboardData.trafficInsights.recommendedRoute}
                    </p>
                    <p className="text-xs text-orange-600">Than usual route</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Bell className="h-5 w-5 mr-2 text-red-600" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockDashboardData.recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm text-gray-900 flex-1">{alert.message}</p>
                        <span className={`w-2 h-2 rounded-full ml-2 mt-2 flex-shrink-0 ${getSeverityColor(alert.severity)}`} />
                      </div>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Alerts
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <School className="h-5 w-5 mr-2 text-purple-600" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockDashboardData.upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">{event.event}</p>
                      <p className="text-xs text-gray-600">{event.date} at {event.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Route
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Join Carpool
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Time Slot
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Report Issue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
