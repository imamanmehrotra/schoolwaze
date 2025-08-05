'use client';

import * as React from 'react';
import { 
  Users, 
  AlertTriangle, 
  BarChart3, 
  MapPin,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';

// Mock data for demonstration
const mockTrafficData = {
  currentConditions: 'moderate',
  averageWaitTime: 8,
  activeCarpools: 23,
  trafficSaved: 35,
};

const mockUpcomingEvents = [
  { time: '7:45 AM', event: 'Drop-off at DLF Public School', type: 'personal' },
  { time: '8:15 AM', event: 'Pick up Viaan (Carpool)', type: 'carpool' },
  { time: '3:00 PM', event: 'Early dismissal alert', type: 'alert' },
];

const mockRecentAlerts = [
  { id: 1, message: 'Heavy traffic on Kaushambi Metro Road - Use Dilshad Garden road instead', time: '5 min ago', severity: 'medium' },
  { id: 2, message: 'Construction near Sahibabad Industrial Area', time: '2 hours ago', severity: 'low' },
  { id: 3, message: 'Weather alert: Rain expected during pickup', time: '1 day ago', severity: 'high' },
];

export default function Home() {
  const [showRegistrationModal, setShowRegistrationModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    schoolName: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegistration = () => {
    // Mock registration logic
    // console.log('Registration data:', formData); // Removed for cleaner console
    setShowRegistrationModal(false);
    // Reset form
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      schoolName: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart School Traffic
              <span className="text-blue-600"> Revolution</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Reduce traffic chaos, save time, and create safer school zones with AI-powered routing, 
              carpool matching, and real-time traffic management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="primary"
                className="text-lg px-8 py-4"
                onClick={() => setShowRegistrationModal(true)}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{mockTrafficData.averageWaitTime} min</p>
                  <p className="text-sm text-gray-500">Avg. Wait Time</p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{mockTrafficData.activeCarpools}</p>
                  <p className="text-sm text-gray-500">Active Carpools</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{mockTrafficData.trafficSaved}%</p>
                  <p className="text-sm text-gray-500">Traffic Reduced</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900 capitalize">{mockTrafficData.currentConditions}</p>
                  <p className="text-sm text-gray-500">Current Traffic</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Core Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Routing */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Smart Routing</CardTitle>
                </div>
                <CardDescription>
                  AI-powered route optimization based on real-time traffic data and school schedules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time traffic analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Alternative route suggestions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    School zone optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Carpool Matching */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Carpool Matching</CardTitle>
                </div>
                <CardDescription>
                  Connect with nearby parents for safe, convenient carpooling arrangements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Location-based matching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Trust circle system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Schedule compatibility
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Time Slots */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Smart Time Slots</CardTitle>
                </div>
                <CardDescription>
                  Optimized drop-off and pickup time recommendations to reduce congestion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dynamic scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Load balancing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Preference matching
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Live Alerts */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Live Traffic Alerts</CardTitle>
                </div>
                <CardDescription>
                  Real-time notifications about traffic conditions and route alternatives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instant notifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weather integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency alerts
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* School Dashboard */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">School Dashboard</CardTitle>
                </div>
                <CardDescription>
                  Comprehensive analytics and management tools for school administrators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Traffic analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Schedule management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Parent communication
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Safety & Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Safety First</CardTitle>
                </div>
                <CardDescription>
                  Built-in safety features and verification systems for peace of mind.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Identity verification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency contacts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Today Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUpcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{event.event}</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'personal' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'carpool' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {event.type}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 mb-1">{alert.message}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
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
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your School Commute?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of parents and schools already using SchoolWaze to make drop-offs and pickups safer and more efficient.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-4"
            onClick={() => setShowRegistrationModal(true)}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </main>

      {/* Registration Modal */}
      <Modal
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
        title="Get Started with SchoolWaze"
        size="lg"
      >
        <div className="space-y-6">
          <p className="text-gray-600">
            Sign up now to start optimizing your school commute and connecting with other parents in your area.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Parent Name"
              value={formData.parentName}
              onChange={(e) => handleInputChange('parentName', e.target.value)}
              placeholder="Enter your full name"
            />
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
            />
            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(555) 123-4567"
            />
            <Input
              label="Child Name"
              value={formData.childName}
              onChange={(e) => handleInputChange('childName', e.target.value)}
              placeholder="Enter child&apos;s name"
            />
          </div>
          
          <Input
            label="School Name"
            value={formData.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
            placeholder="Enter your child&apos;s school"
          />
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1" onClick={handleRegistration}>
              Create Account
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setShowRegistrationModal(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
