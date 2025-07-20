'use client';

import * as React from 'react';
import { Users, MapPin, Clock, Star, Shield, MessageCircle, Plus, Filter } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';

// Mock carpool data
const mockCarpoolRequests = [
  {
    id: 1,
    parentName: 'Sarah Johnson',
    schoolName: 'Lincoln Elementary',
    pickupTime: '7:30 AM',
    returnTime: '3:00 PM',
    distance: '0.8 miles from you',
    rating: 4.8,
    reviews: 24,
    children: 2,
    trustCircle: true,
    preferences: ['Non-smoking', 'Pet-friendly', 'Music OK'],
    route: 'Via Oak Street',
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 2,
    parentName: 'Michael Chen',
    schoolName: 'Lincoln Elementary',
    pickupTime: '7:45 AM',
    returnTime: '3:15 PM',
    distance: '1.2 miles from you',
    rating: 4.9,
    reviews: 18,
    children: 1,
    trustCircle: false,
    preferences: ['Punctual', 'Quiet ride', 'No pets'],
    route: 'Via Maple Avenue',
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    parentName: 'Emily Rodriguez',
    schoolName: 'Lincoln Elementary',
    pickupTime: '8:00 AM',
    returnTime: '2:45 PM',
    distance: '0.5 miles from you',
    rating: 4.7,
    reviews: 31,
    children: 3,
    trustCircle: true,
    preferences: ['Family-friendly', 'Flexible timing', 'Snacks allowed'],
    route: 'Via Pine Street',
    avatar: '/api/placeholder/40/40'
  }
];

const mockActiveCarpools = [
  {
    id: 1,
    parentName: 'David Kim',
    children: ['Emma', 'Liam'],
    pickupTime: '7:40 AM',
    status: 'confirmed',
    nextPickup: 'Tomorrow',
    phone: '(555) 123-4567'
  },
  {
    id: 2,
    parentName: 'Lisa Wang',
    children: ['Sophie'],
    pickupTime: '3:10 PM',
    status: 'pending',
    nextPickup: 'Today',
    phone: '(555) 987-6543'
  }
];

export default function CarpoolPage() {
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('find');
  
  const [newRequest, setNewRequest] = React.useState({
    school: '',
    pickupTime: '',
    returnTime: '',
    children: '',
    preferences: '',
    notes: ''
  });

  const handleCreateRequest = () => {
    console.log('Creating carpool request:', newRequest);
    setShowCreateModal(false);
    // Reset form
    setNewRequest({
      school: '',
      pickupTime: '',
      returnTime: '',
      children: '',
      preferences: '',
      notes: ''
    });
  };

  const handleJoinCarpool = (carpoolId: number) => {
    console.log('Joining carpool:', carpoolId);
    // Handle carpool join logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carpool Matching</h1>
          <p className="text-gray-600">
            Connect with trusted families for safe, convenient carpooling.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button onClick={() => setShowCreateModal(true)} className="flex-1 sm:flex-none">
            <Plus className="h-4 w-4 mr-2" />
            Create Request
          </Button>
          <Button variant="outline" onClick={() => setShowFilterModal(true)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setSelectedTab('find')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'find'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Find Carpools ({mockCarpoolRequests.length})
              </button>
              <button
                onClick={() => setSelectedTab('active')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'active'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Carpools ({mockActiveCarpools.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'find' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mockCarpoolRequests.map((carpool) => (
              <Card key={carpool.id} className="hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {carpool.parentName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-3">
                        <CardTitle className="text-lg">{carpool.parentName}</CardTitle>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {carpool.rating} ({carpool.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    {carpool.trustCircle && (
                      <div title="In your trust circle">
                        <Shield className="h-5 w-5 text-green-500" />
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {carpool.schoolName} • {carpool.distance}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Pickup: {carpool.pickupTime} • Return: {carpool.returnTime}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {carpool.children} {carpool.children === 1 ? 'child' : 'children'} • {carpool.route}
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-sm text-gray-500 mb-2">Preferences:</p>
                      <div className="flex flex-wrap gap-1">
                        {carpool.preferences.map((pref, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {pref}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 flex gap-2">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleJoinCarpool(carpool.id)}
                      >
                        Join Carpool
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {selectedTab === 'active' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Carpools</CardTitle>
                <CardDescription>
                  Manage your current carpool arrangements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockActiveCarpools.map((carpool) => (
                    <div key={carpool.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            {carpool.parentName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900">{carpool.parentName}</h3>
                          <p className="text-sm text-gray-600">
                            Children: {carpool.children.join(', ')} • Next: {carpool.nextPickup} at {carpool.pickupTime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          carpool.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {carpool.status}
                        </span>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust Circle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Trust Circle
                </CardTitle>
                <CardDescription>
                  Parents you've verified and trust with your children
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Sarah Johnson', 'Emily Rodriguez', 'Michael Chen', 'Lisa Wang'].map((name, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-medium text-sm">
                          {name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900">{name}</span>
                    </div>
                  ))}
                  <Button variant="outline" className="flex items-center justify-center p-3 border-dashed">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Parent
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Create Carpool Request Modal */}
        <Modal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Create Carpool Request"
        >
          <div className="space-y-4">
            <Input
              label="School"
              value={newRequest.school}
              onChange={(e) => setNewRequest(prev => ({ ...prev, school: e.target.value }))}
              placeholder="Lincoln Elementary School"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Pickup Time"
                value={newRequest.pickupTime}
                onChange={(e) => setNewRequest(prev => ({ ...prev, pickupTime: e.target.value }))}
                placeholder="7:30 AM"
              />
              <Input
                label="Return Time"
                value={newRequest.returnTime}
                onChange={(e) => setNewRequest(prev => ({ ...prev, returnTime: e.target.value }))}
                placeholder="3:00 PM"
              />
            </div>
            
            <Input
              label="Number of Children"
              value={newRequest.children}
              onChange={(e) => setNewRequest(prev => ({ ...prev, children: e.target.value }))}
              placeholder="2"
              type="number"
            />
            
            <Input
              label="Preferences"
              value={newRequest.preferences}
              onChange={(e) => setNewRequest(prev => ({ ...prev, preferences: e.target.value }))}
              placeholder="Non-smoking, Pet-friendly, Music OK"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={newRequest.notes}
                onChange={(e) => setNewRequest(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Any additional information for potential carpool partners..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowCreateModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleCreateRequest} className="flex-1">
                Create Request
              </Button>
            </div>
          </div>
        </Modal>

        {/* Filter Modal */}
        <Modal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          title="Filter Carpools"
        >
          <div className="space-y-4">
            <Input
              label="Distance (miles)"
              placeholder="Within 2 miles"
              type="number"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Range</label>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="From 7:00 AM" />
                <Input placeholder="To 8:00 AM" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Preferences</label>
              <div className="space-y-2">
                {['Trust Circle Only', 'Non-smoking', 'Pet-friendly', 'Flexible timing'].map((pref) => (
                  <label key={pref} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">{pref}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowFilterModal(false)} className="flex-1">
                Clear Filters
              </Button>
              <Button onClick={() => setShowFilterModal(false)} className="flex-1">
                Apply Filters
              </Button>
            </div>
          </div>
        </Modal>
      </main>
    </div>
  );
}
