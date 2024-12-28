import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { 
  Home, 
  Users, 
  Search,
  Grid,
  ChevronDown,
  X,
  Menu 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center w-full sm:w-[30%]">
            {/* LinkedIn Logo */}
            <div className="flex-shrink-0 transition-transform hover:scale-105">
              <div className="text-blue-600 text-3xl">BitWize</div>
            </div>

            {/* Search Bar */}
            <div className="ml-4 flex-1 hidden sm:block">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           focus:bg-white transition-all duration-200 ease-in-out"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:flex justify-center items-center space-x-8">
            {[
              { icon: Home, label: 'Home', id: 'home', path: '/home' },
              { icon: Users, label: 'Agent', id: 'agent', path: '/agent' },
              { icon: Users, label: 'Meal', id: 'meal', path: '/meal' },
            ].map(({ icon: Icon, label, id, path }) => (
              <Link
                key={id}
                to={path} // Use Link for navigation
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center group relative ${
                  activeTab === id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <Icon className="h-6 w-6 transition-all duration-200 group-hover:scale-110" />
                <span className="text-xs mt-1 font-medium">{label}</span>
                {activeTab === id && (
                  <div className="absolute -bottom-4 w-full h-0.5 bg-blue-600 transition-all duration-200" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden fixed inset-x-0 top-16 bg-white border-t border-gray-200 shadow-lg animate-slideDown">
              <div className="flex flex-col items-center space-y-4 py-4">
                {['home', 'agent', 'meal'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`} // Use Link for navigation
                    className="text-gray-500 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-md hover:bg-blue-50"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Right section - User Profile & Work */}
          <div className="hidden sm:flex items-center justify-end space-x-6">
            <div className="flex flex-col items-center cursor-pointer group">
              <div className="relative">
                <img
                  className="h-7 w-7 rounded-full ring-2 ring-transparent group-hover:ring-blue-500 transition-all duration-200"
                  src="/api/placeholder/32/32"
                  alt="User profile"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex items-center text-xs mt-1 text-gray-500 group-hover:text-gray-900">
                <span>Me</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </div>
            </div>

            <div className="h-8 border-l border-gray-200"></div>

            <div className="flex flex-col items-center cursor-pointer group">
              <Grid className="h-6 w-6 text-gray-500 group-hover:text-gray-900 transition-colors" />
              <div className="flex items-center text-xs mt-1 text-gray-500 group-hover:text-gray-900">
                <span>Work</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
