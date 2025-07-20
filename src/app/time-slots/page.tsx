'use client';

import * as React from 'react';
import { Calendar, Clock, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock time slot data
const mockTimeSlots = [
  { time: '7:00 AM', capacity: 15, booked: 3, available: 12, congestion: 'low' },
  { time: '7:15 AM', capacity: 20, booked: 8, available: 12, congestion: 'low' },
  { time: '7:30 AM', capacity: 25, booked: 22, available: 3, congestion: 'high' },
  { time: '7:45 AM', capacity: 30, booked: 28, available: 2, congestion: 'high' },
  { time: '8:00 AM', capacity: 25, booked: 19, available: 6, congestion: 'medium' },
  { time: '8:15 AM', capacity: 20, booked: 12, available: 8, congestion: 'medium' },
  { time: '8:30 AM', capacity: 15, booked: 7, available: 8, congestion: 'low' },
];

const mockPickupSlots = [
  { time: '2:45 PM', capacity: 20, booked: 12, available: 8, congestion: 'low' },
  { time: '3:00 PM', capacity: 30, booked: 26, available: 4, congestion: 'high' },
  { time: '3:15 PM', capacity: 25, booked: 18, available: 7, congestion: 'medium' },
  { time: '3:30 PM', capacity: 20, booked: 9, available: 11, congestion: 'low' },
];

const mockBookings = [
  { id: 1, child: 'Emma Johnson', time: '7:15 AM', type: 'drop-off', status: 'confirmed', date: '2024-01-15' },
  { id: 2, child: 'Liam Johnson', time: '7:15 AM', type: 'drop-off', status: 'confirmed', date: '2024-01-15' },
  { id: 3, child: 'Emma Johnson', time: '3:15 PM', type: 'pickup', status: 'waitlist', date: '2024-01-15' },
  { id: 4, child: 'Liam Johnson', time: '3:15 PM', type: 'pickup', status: 'confirmed', date: '2024-01-15' },
];

const getStatusColor = (congestion: string) => {
  switch (congestion) {
    case 'low':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'high':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getCongestionIcon = (congestion: string) => {
  switch (congestion) {
    case 'low':
      return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    case 'medium':
      return <Clock className="h-4 w-4 text-yellow-600" />;
    case 'high':
      return <AlertCircle className="h-4 w-4 text-red-600" />;
    default:
      return <Clock className="h-4 w-4 text-gray-600" />;
  }
};

export default function TimeSlotsPage() {
  const [selectedDate, setSelectedDate] = React.useState('2024-01-15');
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);
  const [slotType, setSlotType] = React.useState<'drop-off' | 'pickup'>('drop-off');

  const currentSlots = slotType === 'drop-off' ? mockTimeSlots : mockPickupSlots;

  const handleSlotSelection = (time: string) => {
    setSelectedSlot(time);
    // console.log(`Selected ${slotType} slot:`, time); // Removed for cleaner console
  };

  const handleBookSlot = () => {
    if (selectedSlot) {
      // console.log(`Booking ${slotType} slot for ${selectedDate} at ${selectedSlot}`); // Removed for cleaner console
      // Handle booking logic here
      setSelectedSlot(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dynamic Time Slots</h1>
          <p className="text-gray-600">
            Book optimal pickup and drop-off times to reduce congestion and wait times.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Date Selection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19'].map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                        selectedDate === date
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {new Date(date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Slot Type Toggle */}
            <div className="mb-6">
              <div className="bg-white rounded-lg p-1 inline-flex border">
                <button
                  onClick={() => setSlotType('drop-off')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    slotType === 'drop-off'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Drop-off Slots
                </button>
                <button
                  onClick={() => setSlotType('pickup')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    slotType === 'pickup'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Pickup Slots
                </button>
              </div>
            </div>

            {/* Time Slots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {currentSlots.map((slot) => (
                <Card
                  key={slot.time}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedSlot === slot.time ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  } ${
                    slot.available === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => slot.available > 0 && handleSlotSelection(slot.time)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{slot.time}</h3>
                      {getCongestionIcon(slot.congestion)}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Available</span>
                        <span className="font-medium text-gray-900">
                          {slot.available} / {slot.capacity}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            slot.congestion === 'low' ? 'bg-green-500' :
                            slot.congestion === 'medium' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${(slot.booked / slot.capacity) * 100}%` }}
                        />
                      </div>
                      
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(slot.congestion)}`}>
                        {slot.congestion} congestion
                      </div>
                      
                      {slot.available === 0 && (
                        <div className="text-xs text-red-600 font-medium">
                          Fully booked - Join waitlist
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Booking Confirmation */}
            {selectedSlot && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Selected: {selectedSlot} {slotType === 'drop-off' ? 'Drop-off' : 'Pickup'}
                      </h3>
                      <p className="text-gray-600">
                        {new Date(selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setSelectedSlot(null)}>
                        Cancel
                      </Button>
                      <Button onClick={handleBookSlot}>
                        Book Slot
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Bookings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Bookings</CardTitle>
                <CardDescription>Today&apos;s schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockBookings.map((booking) => (
                    <div key={booking.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{booking.child}</p>
                          <p className="text-xs text-gray-600">{booking.time} {booking.type}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Optimization Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Optimization Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Choose earlier slots (7:00-7:30 AM) for shortest wait times
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Book pickup after 3:30 PM to avoid peak congestion
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">
                      Consider carpooling during high-demand times
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Traffic Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Peak Drop-off</span>
                    <span className="font-medium text-gray-900">7:45 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Peak Pickup</span>
                    <span className="font-medium text-gray-900">3:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg Wait Time</span>
                    <span className="font-medium text-gray-900">8 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Best Times</span>
                    <span className="font-medium text-gray-900">7:15 AM, 3:30 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
