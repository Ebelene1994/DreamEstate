import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Menu, X, User, LogOut, LayoutDashboard, UserCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#user-menu-container')) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Agents', href: '/agents' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    setIsMenuOpen(false);
    navigate('/');
  };

  // Get initials from user name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Header should be transparent only on the homepage when not scrolled.
  const isSolid = location.pathname !== '/' || isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSolid ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Home className={`h-8 w-8 ${isSolid ? 'text-purple-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isSolid ? 'text-gray-800' : 'text-white'}`}>
                DreamEstate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.href
                    ? (isSolid ? 'text-purple-600' : 'text-purple-400')
                    : isSolid ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative" id="user-menu-container">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                >
                  {/* Initials badge — no avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    isSolid
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/25 text-white border border-white/50'
                  }`}>
                    {getInitials(user.name)}
                  </div>
                  <span className={`text-sm font-medium ${isSolid ? 'text-gray-700' : 'text-white'}`}>
                    {user.name}
                  </span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setShowUserMenu(false)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 flex items-center space-x-2 transition-colors"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 flex items-center space-x-2 transition-colors"
                    >
                      <UserCircle className="h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isSolid
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isSolid ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isSolid ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? (isSolid ? 'text-purple-600' : 'text-purple-400')
                    : isSolid ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile User Section */}
            <div className="pt-4 border-t border-white/20">
              {user ? (
                <div className="space-y-1">
                  <div className="flex items-center space-x-3 px-2 py-2">
                    {/* Initials badge — no avatar */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      isSolid ? 'bg-purple-100 text-purple-700' : 'bg-white/25 text-white border border-white/50'
                    }`}>
                      {getInitials(user.name)}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold truncate ${isSolid ? 'text-gray-800' : 'text-white'}`}>
                        {user.name}
                      </p>
                      <p className={`text-xs truncate ${isSolid ? 'text-gray-500' : 'text-white/70'}`}>
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 py-2 px-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="text-sm">Dashboard</span>
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 py-2 px-2 ${isSolid ? 'text-gray-700' : 'text-white'}`}
                  >
                    <UserCircle className="h-4 w-4" />
                    <span className="text-sm">My Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left py-2 px-2 flex items-center space-x-2 ${
                      isSolid ? 'text-red-600' : 'text-white'
                    }`}
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className={`block py-2 px-2 flex items-center space-x-2 ${
                    isSolid ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;