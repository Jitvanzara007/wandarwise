import { Link } from 'react-router-dom';
import { FiHome, FiCompass } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 Text */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-blue-600 animate-bounce">
            404
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full animate-pulse"></div>
        </div>

        {/* Message */}
        <h2 className="mt-8 text-3xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          The page you're looking for seems to have wandered off into the digital wilderness.
        </p>

        {/* Navigation Options */}
        <div className="mt-12 space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <FiHome className="mr-2" />
            Back to Home
          </Link>
          <div className="text-gray-500">or</div>
          <Link
            to="/countries"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <FiCompass className="mr-2" />
            Explore Destinations
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-blue-200 rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-blue-300 rounded-full animate-spin-slow-reverse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-400 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 