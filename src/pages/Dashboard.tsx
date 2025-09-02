import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import { 
  BuildingOfficeIcon, 
  CalendarDaysIcon, 
  UsersIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  const stats = [
    { name: 'Total Resources', value: '24', icon: BuildingOfficeIcon, change: '+4.75%', changeType: 'positive' },
    { name: 'Active Bookings', value: '12', icon: CalendarDaysIcon, change: '+54.02%', changeType: 'positive' },
    { name: 'Total Users', value: '156', icon: UsersIcon, change: '+1.25%', changeType: 'positive' },
    { name: 'Utilization Rate', value: '68%', icon: ChartBarIcon, change: '+2.1%', changeType: 'positive' },
  ];

  const recentBookings = [
    { id: 1, resource: 'Computer Lab A', user: 'Dr. Smith', time: '2:00 PM - 4:00 PM', status: 'approved' },
    { id: 2, resource: 'Conference Room B', user: 'Prof. Johnson', time: '10:00 AM - 12:00 PM', status: 'pending' },
    { id: 3, resource: 'Projector Room', user: 'Dr. Brown', time: '1:00 PM - 3:00 PM', status: 'approved' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back, {currentUser?.displayName}!
              </h1>
              <p className="text-gray-600">Here's what's happening with your campus resources today.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((item) => (
                    <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <item.icon className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {item.name}
                              </dt>
                              <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900">
                                  {item.value}
                                </div>
                                <div className={ml-2 flex items-baseline text-sm font-semibold }>
                                  {item.change}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Recent Bookings
                    </h3>
                    <div className="mt-5">
                      <div className="flow-root">
                        <ul className="-my-5 divide-y divide-gray-200">
                          {recentBookings.map((booking) => (
                            <li key={booking.id} className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <div className={h-2 w-2 rounded-full } />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {booking.resource}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate">
                                    {booking.user} • {booking.time}
                                  </p>
                                </div>
                                <div>
                                  <span className={inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium }>
                                    {booking.status}
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Quick Actions
                    </h3>
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-4">
                        <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
                          Book Resource
                        </button>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                          View Calendar
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                          Add Resource
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                          Generate Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
