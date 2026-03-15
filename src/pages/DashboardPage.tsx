import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  User, Mail, Phone, MapPin, Calendar, Home,
  LogOut, UserCircle, Search, MessageSquare, ChevronRight
} from 'lucide-react';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatDate = (iso?: string) => {
    if (!iso) return 'N/A';
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const infoCards = [
    { label: 'Full Name', value: user?.name || '—', icon: User },
    { label: 'Email Address', value: user?.email || '—', icon: Mail },
    { label: 'Phone Number', value: user?.phone || 'Not set', icon: Phone },
    { label: 'Location', value: user?.location || 'Not set', icon: MapPin },
    { label: 'Member Since', value: formatDate(user?.memberSince), icon: Calendar },
    { label: 'Account ID', value: `#${user?.id?.slice(-6) || '000000'}`, icon: UserCircle },
  ];

  const quickActions = [
    { label: 'Browse Properties', desc: 'Explore our latest listings', icon: Search, href: '/properties', color: 'from-purple-500 to-purple-700' },
    { label: 'My Profile', desc: 'Update your personal details', icon: UserCircle, href: '/profile', color: 'from-indigo-500 to-indigo-700' },
    { label: 'Contact Us', desc: 'Speak with an agent', icon: MessageSquare, href: '/contact', color: 'from-violet-500 to-violet-700' },
    { label: 'Back to Home', desc: 'Return to the homepage', icon: Home, href: '/', color: 'from-purple-400 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white py-12 px-4 mb-10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-purple-200 text-sm font-medium uppercase tracking-widest mb-1">Welcome back</p>
              <h1 className="text-3xl md:text-4xl font-bold">{user?.name}</h1>
              <p className="text-purple-200 mt-1">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl text-white transition-all duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4">
        {/* Account Info Cards */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">Account Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {infoCards.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Icon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map(({ label, desc, icon: Icon, href, color }) => (
            <Link
              key={label}
              to={href}
              className={`bg-gradient-to-br ${color} text-white rounded-2xl p-5 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="h-6 w-6" />
                <ChevronRight className="h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-white/70 text-xs mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
