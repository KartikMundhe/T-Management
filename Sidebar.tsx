import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  UserCheck,
  Truck,
  BookOpen,
  Route,
  Package,
  Receipt,
  FileText,
  BarChart3,
  Bell,
  Shield,
  Settings,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, route: '/' },
  { id: 'users', label: 'User & Role Management', icon: Users, route: '/users' },
  { id: 'customers', label: 'Customer Management', icon: UserCheck, route: '/customers' },
  { id: 'transporters', label: 'Transporter & Fleet', icon: Truck, route: '/transporters' },
  { id: 'bookings', label: 'Booking & Orders', icon: BookOpen, route: '/bookings' },
  { id: 'dispatch', label: 'Dispatch & Routes', icon: Route, route: '/dispatch' },
  { id: 'tracking', label: 'Shipment Tracking', icon: Package, route: '/tracking' },
  { id: 'billing', label: 'Billing & Invoicing', icon: Receipt, route: '/billing' },
  { id: 'documents', label: 'Document Management', icon: FileText, route: '/documents' },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3, route: '/reports' },
  { id: 'notifications', label: 'Notifications', icon: Bell, route: '/notifications' },
  { id: 'compliance', label: 'Compliance', icon: Shield, route: '/compliance' },
  { id: 'settings', label: 'System Settings', icon: Settings, route: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white w-64 max-h-screen overflow-scroll flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">TransportMS</h1>
            <p className="text-sm text-gray-400">Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                navigate(item.route); // navigate to route
              }}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
