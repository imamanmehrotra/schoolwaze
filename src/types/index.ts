// Core user and authentication types
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'parent' | 'school_admin' | 'super_admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Parent extends User {
  role: 'parent';
  vehicles: Vehicle[];
  children: Child[];
  preferences: ParentPreferences;
  location: Location;
}

export interface SchoolAdmin extends User {
  role: 'school_admin';
  schoolId: string;
  permissions: AdminPermission[];
}

// Vehicle and child types
export interface Vehicle {
  id: string;
  parentId: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  capacity: number;
  isActive: boolean;
}

export interface Child {
  id: string;
  parentId: string;
  name: string;
  grade: string;
  schoolId: string;
  emergencyContacts: EmergencyContact[];
  isActive: boolean;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
  canPickup: boolean;
}

// Location and mapping types
export interface Location {
  id: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  zipCode: string;
}

export interface School {
  id: string;
  name: string;
  address: string;
  location: Location;
  district: string;
  phone: string;
  email: string;
  dropOffZones: DropOffZone[];
  schedule: SchoolSchedule;
  settings: SchoolSettings;
  isActive: boolean;
}

export interface DropOffZone {
  id: string;
  name: string;
  location: Location;
  capacity: number;
  grades: string[];
  timeSlots: TimeSlot[];
  restrictions: string[];
}

// Time and scheduling types
export interface TimeSlot {
  id: string;
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  maxVehicles: number;
  currentBookings: number;
  isAvailable: boolean;
  recommendedFor: string[]; // grades or other criteria
}

export interface SchoolSchedule {
  regularHours: {
    dropOff: { start: string; end: string };
    pickUp: { start: string; end: string };
  };
  earlyDismissal?: {
    dropOff: { start: string; end: string };
    pickUp: { start: string; end: string };
  };
  holidays: string[]; // ISO date strings
  specialEvents: SpecialEvent[];
}

export interface SpecialEvent {
  id: string;
  name: string;
  date: string;
  modifiedSchedule?: {
    dropOff: { start: string; end: string };
    pickUp: { start: string; end: string };
  };
}

// Preferences and settings
export interface ParentPreferences {
  preferredDropOffTime: string;
  preferredPickUpTime: string;
  carpoolOptIn: boolean;
  notificationSettings: NotificationSettings;
  trustCircle: string[]; // Array of parent IDs
  maxDetourDistance: number; // in miles
  autoAcceptCarpools: boolean;
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  trafficAlerts: boolean;
  carpoolRequests: boolean;
  scheduleChanges: boolean;
  emergencyAlerts: boolean;
}

export interface SchoolSettings {
  allowCarpools: boolean;
  requireBackgroundChecks: boolean;
  maxAdvanceBooking: number; // days
  minCancellationTime: number; // minutes
  trafficIntegration: boolean;
  customDropOffZones: boolean;
}

// Admin permissions
export type AdminPermission = 
  | 'view_analytics' 
  | 'manage_schedules' 
  | 'send_notifications' 
  | 'manage_zones' 
  | 'view_reports' 
  | 'manage_users';

// Traffic and routing types
export interface TrafficData {
  timestamp: Date;
  location: Location;
  congestionLevel: 'low' | 'medium' | 'high' | 'severe';
  estimatedDelay: number; // in minutes
  affectedRoutes: string[];
  incidents: TrafficIncident[];
}

export interface TrafficIncident {
  id: string;
  type: 'accident' | 'construction' | 'weather' | 'event' | 'other';
  severity: 'minor' | 'moderate' | 'major';
  location: Location;
  description: string;
  estimatedClearance?: Date;
  alternativeRoutes: Route[];
}

export interface Route {
  id: string;
  fromLocation: Location;
  toLocation: Location;
  waypoints: Location[];
  estimatedDuration: number; // in minutes
  distance: number; // in miles
  trafficCondition: 'light' | 'moderate' | 'heavy';
  tollsRequired: boolean;
  lastUpdated: Date;
}

// Carpool types
export interface CarpoolRequest {
  id: string;
  requesterId: string;
  targetParentId?: string; // if requesting specific parent
  schoolId: string;
  date: string; // ISO date string
  type: 'drop_off' | 'pick_up' | 'both';
  preferredTime: string;
  flexibleTime: boolean;
  maxDetour: number; // in miles
  childrenCount: number;
  message?: string;
  status: 'pending' | 'accepted' | 'declined' | 'cancelled';
  createdAt: Date;
}

export interface CarpoolMatch {
  id: string;
  parentIds: string[];
  schoolId: string;
  date: string;
  route: Route;
  schedule: {
    dropOff?: { time: string; location: Location };
    pickUp?: { time: string; location: Location };
  };
  children: Child[];
  status: 'proposed' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  messages: CarpoolMessage[];
}

export interface CarpoolMessage {
  id: string;
  senderId: string;
  message: string;
  timestamp: Date;
  type: 'text' | 'location' | 'status_update';
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: 'traffic_alert' | 'carpool_request' | 'schedule_change' | 'emergency' | 'general';
  title: string;
  message: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: Date;
  expiresAt?: Date;
  actionRequired?: boolean;
  actionUrl?: string;
}

// Analytics and reporting types
export interface Analytics {
  schoolId: string;
  date: string;
  metrics: {
    totalDropOffs: number;
    peakHourTraffic: number;
    averageWaitTime: number; // in minutes
    carpoolParticipation: number; // percentage
    trafficIncidents: number;
    userSatisfaction: number; // 1-5 rating
  };
  trends: {
    weekOverWeek: number; // percentage change
    monthOverMonth: number; // percentage change
  };
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// Form and validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState<T = unknown> {
  data: T;
  errors: ValidationError[];
  isLoading: boolean;
  valid: boolean;
  touched: Record<string, boolean>;
}

// Component prop types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
