import { Link } from 'react-router-dom';
import { FiMapPin, FiStar, FiClock, FiTag, FiShoppingCart, FiCheck, FiMap, FiSun } from 'react-icons/fi';
import { useState } from 'react';

const PlaceCard = ({ place }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    name,
    image,
    description,
    rating,
    price,
    bestTimeToVisit,
    location,
    category,
    highlights,
    coordinates,
    weather
  } = place;

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleMapClick = (e) => {
    e.preventDefault();
    if (coordinates) {
      window.open(`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`, '_blank');
    }
  };

  return (
    <Link 
      to={`/places/${id}`} 
      className="group block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-lg">
            <FiStar className="text-yellow-400 mr-1.5 w-4 h-4" />
            <span className="font-bold text-gray-800">{rating}</span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-blue-500/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-lg">
            <FiTag className="text-white mr-1.5 w-4 h-4" />
            <span className="font-medium text-white text-sm">{category}</span>
          </div>

          {/* Location with Map Link */}
          <div className="absolute bottom-4 left-4 flex items-center text-white">
            <button
              onClick={handleMapClick}
              className="flex items-center hover:text-blue-300 transition-colors"
            >
              <FiMap className="mr-1.5 w-4 h-4" />
              <span className="text-sm font-medium">{location}</span>
            </button>
          </div>

          {/* Add to Cart Button */}
          <div 
            className={`absolute bottom-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className={`flex items-center px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${
                isAdded 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {isAdded ? (
                <>
                  <FiCheck className="mr-2 w-5 h-5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <FiShoppingCart className="mr-2 w-5 h-5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          {/* Highlights */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Weather and Best Time */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between text-gray-700">
              <span className="font-semibold text-lg">{price}</span>
              <div className="flex items-center gap-4">
                {weather && (
                  <div className="flex items-center text-gray-500">
                    <FiSun className="mr-1.5 w-4 h-4" />
                    <span className="text-sm">{weather.temperature}°C</span>
                  </div>
                )}
                <div className="flex items-center text-gray-500">
                  <FiClock className="mr-1.5 w-4 h-4" />
                  <span className="text-sm">{bestTimeToVisit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard; 