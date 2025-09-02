export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'lecturer' | 'student';
  department?: string;
  phone?: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  name: string;
  type: 'room' | 'lab' | 'equipment' | 'vehicle';
  location: string;
  capacity: number;
  status: 'available' | 'booked' | 'maintenance' | 'unavailable';
  description?: string;
  features: string[];
  qrCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  resourceId: string;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  purpose: string;
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    endDate: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'booking' | 'approval' | 'reminder' | 'system';
  read: boolean;
  createdAt: Date;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  details: any;
  timestamp: Date;
}
