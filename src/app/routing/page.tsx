'use client';

import * as React from 'react';
import { MapPin, Clock, AlertTriangle, Navigation2, Car, Fuel } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock route data
const mockRoutes = [
  {
    id: 1,
    name: 'Recommended Route',
    duration: '12 min',
    distance: '3.2 miles',
    traffic: 'light',
    savings: '5 min saved',
    steps: [
      'Head north on Oak Street',
      'Turn right onto Maple Avenue',
      'Continue straight for 1.5 miles',
      'Turn left into Lincoln Elementary'
    ]
  },
  {
    id: 2,
    name: 'Alternative Route',
    duration: '15 min',
    distance: '3.8 miles',
    traffic: 'moderate',
    savings: '2 min saved',
    steps: [
      'Head south on Pine Street',
      'Turn left onto First Avenue',
      'Turn right onto School Drive',
      'Arrive at Lincoln Elementary'
    ]
  },
  {
    id: 3,
    name: 'Scenic Route',
    duration: '18 min',
    distance: '4.1 miles',
    traffic: 'light',
    savings: 'Avoid construction',
    steps: [
      'Head east on Elm Street',
      'Turn left onto Park Boulevard',
      'Continue through residential area',
      'Turn right to school entrance'
    ]
  }
];

const mockTrafficAlerts = [
  { id: 1, message: 'Heavy traffic on Main Street', severity: 'high', eta: '15 min delay' },
  { id: 2, message: 'Construction on Maple Ave', severity: 'medium', eta: '5 min delay' },
  { id: 3, message: 'School zone - reduced speed', severity: 'low', eta: 'No delay' },
];

export default function RoutingPage() {
  const [selectedRoute, setSelectedRoute] = React.useState(1);
  const [destination, setDestination] = React.useState('Lincoln Elementary School');
  const [departureTime, setDepartureTime] = React.useState('7:45 AM');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Routing</h1>
          <p className="text-gray-600">
            Get optimized routes based on real-time traffic data and school schedules.
          </p>
        </div>

        {/* Route Planning Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              Plan Your Route
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter school name"
              />
              <Input
                label="Departure Time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                placeholder="7:45 AM"
              />
              <div className="flex items-end">
                <Button className="w-full">
                  <Navigation2 className="h-4 w-4 mr-2" />
                  Find Routes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Route Options */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Route Options</h2>
            
            <div className="space-y-4">
              {mockRoutes.map((route) => (
                <Card 
                  key={route.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedRoute === route.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedRoute(route.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{route.name}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {route.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {route.distance}
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            route.traffic === 'light' ? 'bg-green-100 text-green-700' :
                            route.traffic === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {route.traffic} traffic
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-medium text-sm">{route.savings}</div>
                      </div>
                    </div>
                    
                    {selectedRoute === route.id && (
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-gray-900 mb-3">Turn-by-turn directions:</h4>
                        <ol className="space-y-2 text-sm text-gray-600">
                          {route.steps.map((step, index) => (
                            <li key={index} className="flex">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                                {index + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <div className="mt-4 flex gap-3">
                          <Button variant="primary">
                            <Navigation2 className="h-4 w-4 mr-2" />
                            Start Navigation
                          </Button>
                          <Button variant="outline">
                            Share Route
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Traffic Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                  Traffic Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockTrafficAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 mb-1">{alert.message}</p>
                          <p className="text-xs text-gray-500">{alert.eta}</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ml-2 mt-2 ${
                          alert.severity === 'high' ? 'bg-red-500' :
                          alert.severity === 'medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today&apos;s Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      <span className="text-sm text-gray-600">Time Saved</span>
                    </div>
                    <span className="font-medium text-gray-900">12 min</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Fuel className="h-5 w-5 mr-2 text-green-600" />
                      <span className="text-sm text-gray-600">Fuel Saved</span>
                    </div>
                    <span className="font-medium text-gray-900">0.8 gal</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Car className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="text-sm text-gray-600">Miles</span>
                    </div>
                    <span className="font-medium text-gray-900">3.2 mi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Route Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-600">Avoid toll roads</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Avoid highways</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                    <span className="ml-2 text-sm text-gray-600">Prefer carpool lanes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Shortest time</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
