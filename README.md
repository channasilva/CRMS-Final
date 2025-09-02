# Campus Resources Management System (CRMS)

A comprehensive web application for managing campus resources including rooms, labs, equipment, and vehicles with role-based access control, booking system, and real-time notifications.

## Features

### 👥 User Account & Role Management
- Firebase Authentication with email/password
- Role-based access: Admin, Lecturer, Student
- User profile management with profile pictures
- Department-based access control
- Password encryption and security best practices

### 📅 Resource Booking System
- Real-time booking interface with calendar integration
- Multi-resource booking support
- Recurring bookings (daily, weekly, monthly)
- Booking confirmation flow with email notifications
- Auto-conflict detection and resolution
- Booking modification and cancellation
- Approval workflow with admin notifications

### 🛠️ Resource Management
- Complete resource inventory (Add/Edit/Delete)
- Resource categorization: Rooms, Labs, Equipment, Vehicles
- Availability status tracking
- Maintenance scheduling
- QR code integration for asset scanning
- Location and capacity management

### 📧 Communication & Notifications
- Email and SMS notifications
- In-system notification center
- Booking confirmations and reminders
- Admin announcements
- Feedback and issue reporting system

### 📊 Reports & Analytics
- Booking history reports
- Resource utilization dashboard
- Conflict reports
- Maintenance logs
- User activity analytics

### 🔐 Security & Logs
- Complete audit trail
- User access logs
- Failed login alerts
- Data backup and recovery
- Role-based permissions

### 🌐 Integration Features
- FullCalendar integration for booking calendar
- Real-time updates
- Mobile-responsive design
- QR code scanning

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom components
- **Backend**: Firebase (Authentication, Firestore, Functions, Storage)
- **Calendar**: FullCalendar.js
- **Notifications**: Firebase Cloud Messaging
- **Icons**: Lucide React, Heroicons
- **Forms**: React Hook Form with Yup validation
- **Routing**: React Router DOM

## Getting Started

1. Clone the repository
2. Install dependencies: 
pm install
3. Set up Firebase project and update config
4. Run the application: 
pm start

## Project Structure

`
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Auth, etc.)
├── firebase/           # Firebase configuration
├── hooks/              # Custom React hooks
├── pages/              # Application pages
├── types/              # TypeScript interfaces
├── utils/              # Utility functions
└── App.tsx             # Main application component
`

## Firebase Setup

1. Create a new Firebase project
2. Enable Authentication, Firestore, Storage, and Functions
3. Update the configuration in src/firebase/config.ts
4. Set up Firestore security rules
5. Configure email templates for notifications

## Features Implementation

### Authentication System
- Secure login/logout with Firebase Auth
- Role-based routing and access control
- User profile management
- Password reset functionality

### Resource Management
- CRUD operations for all resource types
- Image upload for resources
- QR code generation and scanning
- Maintenance scheduling

### Booking System
- Calendar-based booking interface
- Real-time availability checking
- Conflict detection and resolution
- Recurring booking support
- Approval workflow

### Admin Dashboard
- Resource overview and management
- User management
- Booking approvals
- System analytics
- Maintenance scheduling

### Notification System
- Real-time notifications
- Email integration
- SMS notifications (optional)
- In-app notification center

## Security Features

- Role-based access control
- Input validation and sanitization
- Secure file uploads
- Audit logging
- Session management
- CSRF protection

## Deployment

The application is ready for deployment on:
- Firebase Hosting
- Vercel
- Netlify
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
