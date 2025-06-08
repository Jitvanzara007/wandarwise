import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronRight, FiMapPin, FiStar, FiInfo, FiMap, FiCalendar, FiCamera, FiGlobe } from 'react-icons/fi';
import { countries } from '../data/countries.jsx';

const Countries = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const navigate = useNavigate();

  // Handle image load
  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  // Function to handle country click with proper navigation
  const handleCountryClick = (countryId) => {
    // Convert countryId to number for consistent comparison
    const numericId = Number(countryId);
    
    // Find the country by ID
    const country = countries.find(c => Number(c.id) === numericId);
    
    if (country) {
      console.log(`Navigating to country: ${country.name} with ID: ${country.id}`);
      // Ensure we're using the correct path format
      navigate(`/country/${country.id}`);
      // Scroll to top after navigation
      window.scrollTo(0, 0);
    } else {
      console.error(`Country with ID ${countryId} not found`);
      // Optionally redirect to countries page if country not found
      navigate('/countries');
    }
  };

  // Remove the example button code that's causing syntax errors
  // <button 
  //   onClick={() => handleCountryClick(country)}
  //   className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium"
  // >
  //   Explore
  //   <FiChevronRight className="ml-1" />
  // </button>
  // Preload country images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = countries.map(country => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = country.image;
          img.onload = () => {
            handleImageLoad(country.id);
            resolve();
          };
          img.onerror = () => {
            handleImageLoad(country.id);
            resolve();
          };
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Function to ensure unique images for popular places
  const getUniquePopularPlaces = (country, limit = 8) => {
    // Get all places from all cities in the country
    const allPlaces = country.cities?.flatMap(city => 
      city.places?.map(place => ({
        ...place,
        cityName: city.name,
        cityImage: city.image,
        // Create a unique image URL by adding a query parameter if needed
        image: place.image || `${city.image}?city=${city.id}&place=${place.id}`
      }))
    ) || [];
    
    // Sort by rating (if available) and take the top ones
    return allPlaces
      .sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5))
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-10 sm:px-16 py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">Explore Amazing Countries</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover breathtaking destinations around the world and plan your next adventure
        </p>

        {/* Featured Popular Places Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.flatMap(country => 
              country.cities?.flatMap(city => 
                city.places?.map(place => ({
                  ...place,
                  cityName: city.name,
                  countryName: country.name,
                  countryId: country.id,
                  cityImage: city.image,
                  // Ensure unique images by adding query parameters
                  uniqueImage: place.image || `${city.image}?city=${city.id}&place=${place.id}`
                }))
              ) || []
            )
            // Sort by rating and take top 8
            .sort((a, b) => (b.rating || 4.5) - (a.rating || 4.5))
            .slice(0, 8)
            .map((place, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={place.uniqueImage} 
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white">{place.name}</h3>
                    <p className="text-sm text-gray-200">{place.cityName}, {place.countryName}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <FiStar className="text-amber-500" />
                      <span className="text-sm font-medium">{place.rating || '4.8'}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <FiCamera className="text-amber-500" />
                      <span className="text-sm">{place.type || 'Attraction'}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      handleCountryClick(place.countryId);
                    }}
                    className="block w-full text-center py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {countries.map(country => {
            // Get top 6 popular places from the country with unique images
            const popularPlaces = getUniquePopularPlaces(country, 6);

            return (
              <div 
                key={country.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mx-2"
                onMouseEnter={() => setHoveredCountry(country.id)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  {!loadedImages[country.id] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <img
                    src={country.image}
                    alt={country.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCountry === country.id ? 'scale-110' : 'scale-100'} ${!loadedImages[country.id] ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(country.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="bg-amber-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                        {country.continent || 'Europe'}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center">
                        <FiMapPin className="mr-1" />
                        {country.cities?.length || 0} Cities
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white">{country.name}</h2>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{country.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {country.tags?.map((tag, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {tag}
                        </span>
                      )) || (
                        <>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">History</span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Cities Section */}
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-2 flex items-center">
                      <FiGlobe className="mr-1.5 text-amber-500 w-4 h-4" />
                      Top Cities
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {country.cities?.slice(0, 4).map((city, index) => (
                        <span key={index} className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full text-xs flex items-center">
                          <FiMapPin className="mr-1 w-3 h-3" />
                          {city.name}
                        </span>
                      )) || (
                        <span className="text-xs text-gray-500 italic">No cities available</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-amber-500">
                        <FiInfo className="mr-1 w-3.5 h-3.5" />
                        <span className="text-xs">{country.language}</span>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <FiCalendar className="mr-1 w-3.5 h-3.5" />
                        <span className="text-xs">{country.bestTimeToVisit || 'All Year'}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleCountryClick(country.id)}
                      className="inline-flex items-center px-3 py-1.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-xs font-medium"
                    >
                      Explore
                      <FiChevronRight className="ml-1 w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Countries;