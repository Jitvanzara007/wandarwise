import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're on auth pages
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setIsOpen(false); // Close menu after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Function to handle navigation and close menu
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="flex justify-between items-center h-20 px-4">
        
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0 flex items-center transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.png"
              alt="WanderWise" 
              className="navbar-logo object-contain m-0 p-0"
              style={{ height: "260px" }}
            />
          </Link>
        </div>

       
        {isHomePage && !user && !isAuthPage ? (
          <div className="flex items-center justify-end flex-1">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg hover:scale-105"
            >
              <FiUser className="w-5 h-5 mr-2" />
              Sign In
            </Link>
          </div>
        ) : (
          <>
            
            {user && !isAuthPage && (
              <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
                <Link to="/explore" 
                  className={`text-lg font-semibold relative group ${
                    location.pathname === '/explore' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Explore
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                  to="/trip-planner" 
                  className={`text-lg font-semibold relative group ${
                    location.pathname === '/trip-planner' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Plan Trip
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                  to="/cost" 
                  className={`text-lg font-semibold relative group ${
                    location.pathname === '/cost' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Cost Calculator
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                  to="/visa" 
                  className={`text-lg font-semibold relative group ${
                    location.pathname === '/visa' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Visa Checker
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            )}
            {/* Auth Buttons - End (other pages) */}
            <div className="hidden lg:flex items-center space-x-4 pe-6">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg hover:scale-105"
                  >
                    <FiUser className="w-4 h-4 mr-2" />
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-300 rounded-lg hover:scale-105"
                  >
                    <FiLogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </button>
                </>
              ) : !isAuthPage && (
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg rounded-lg hover:scale-105"
                >
                  <FiUser className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              )}
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {user && !isAuthPage && (
              <>
                <Link
                  to="/explore"
                  onClick={handleNavigation}
                  className={`block px-4 py-2.5 text-base font-semibold rounded-lg transition-all duration-300 active:bg-blue-50 ${
                    location.pathname === '/explore' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Explore
                </Link>
                <Link
                  to="/trip-planner"
                  onClick={handleNavigation}
                  className={`block px-4 py-2.5 text-base font-semibold rounded-lg transition-all duration-300 active:bg-blue-50 ${
                    location.pathname === '/trip-planner' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Plan Trip
                </Link>
                <Link
                  to="/cost"
                  onClick={handleNavigation}
                  className={`block px-4 py-2.5 text-base font-semibold rounded-lg transition-all duration-300 active:bg-blue-50 ${
                    location.pathname === '/cost' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Cost Calculator
                </Link>
                <Link
                  to="/visa"
                  onClick={handleNavigation}
                  className={`block px-4 py-2.5 text-base font-semibold rounded-lg transition-all duration-300 active:bg-blue-50 ${
                    location.pathname === '/visa' 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Visa Checker
                </Link>
              </>
            )}
            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={handleNavigation}
                  className="block px-4 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 active:bg-blue-800"
                >
                  <div className="flex items-center">
                    <FiUser className="w-4 h-4 mr-2" />
                    My Profile
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2.5 text-base font-semibold text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 active:bg-blue-100"
                >
                  <div className="flex items-center">
                    <FiLogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </div>
                </button>
              </>
            ) : !isAuthPage && (
              <>
                <Link
                  to="/login"
                  onClick={handleNavigation}
                  className="block px-4 py-2.5 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300 active:bg-gray-100"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={handleNavigation}
                  className="block px-4 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 active:bg-blue-800"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;