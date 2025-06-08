import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { countries } from '../data/countries.jsx';
import { FiArrowRight, FiMapPin, FiStar, FiExternalLink, FiMap, FiClock, FiX, FiInfo, FiCalendar, FiDollarSign, FiGlobe, FiSun, FiThermometer } from 'react-icons/fi';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const CountryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // More robust country finding logic
  const findCountry = () => {
    console.log("Looking for country with ID:", id);
    
    // Convert ID to number for consistent comparison
    const numericId = Number(id);
    
    // Find country by ID
    const foundCountry = countries.find(c => Number(c.id) === numericId);
    
    if (!foundCountry) {
      console.error(`Country with ID ${id} not found`);
      return null;
    }
    
    console.log("Found country:", foundCountry);
    return foundCountry;
  };
  
  const country = findCountry();
  
  const [activeTab, setActiveTab] = useState('places');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Debug the country lookup
  useEffect(() => {
    console.log("URL ID parameter:", id);
    console.log("Available country IDs:", countries.map(c => c.id));
    console.log("Found country:", country ? country.name : "Not found");
    
    if (!country) {
      console.error(`Country with ID ${id} not found`);
      navigate('/countries');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id, country, navigate]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    // Simulate loading weather data
    const timer = setTimeout(() => {
      setWeatherData({
        current: {
          temp: 24,
          condition: 'Sunny',
          icon: '☀️'
        },
        forecast: [
          { day: 'Mon', temp: 24, icon: '☀️' },
          { day: 'Tue', temp: 26, icon: '☀️' },
          { day: 'Wed', temp: 23, icon: '🌤️' },
          { day: 'Thu', temp: 22, icon: '🌥️' },
          { day: 'Fri', temp: 21, icon: '🌦️' },
        ]
      });
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [country]);

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Country Not Found</h1>
        <p className="text-gray-600 mb-8">The country you're looking for doesn't exist.</p>
        <Link 
          to="/countries"
          className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          <FiArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
          Back to Countries
        </Link>
      </div>
    );
  }

  // Get all places from all cities
  const allPlaces = country.cities?.flatMap(city => 
    (city.places || []).map(place => ({
      ...place,
      cityName: city.name,
      cityImage: city.image,
      countryId: country.id
    }))
  ).filter(place => place && place.id) || [];

  // Debug output to console
  console.log(`Displaying country: ${country.name} with ID: ${country.id}`);
  console.log("Country data:", country);
  console.log("All places:", allPlaces);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{ 
            backgroundImage: `url(${country.image})`,
            transformOrigin: 'center bottom',
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/countries"
              className="inline-flex items-center text-white mb-6 hover:text-amber-300 transition-colors"
            >
              <FiArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
              Back to Countries
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">{country.name}</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-delay">{country.description}</p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
                <FiDollarSign className="w-5 h-5 mr-2 text-amber-400" />
                <span className="text-white font-medium">{country.currency}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
                <FiGlobe className="w-5 h-5 mr-2 text-amber-400" />
                <span className="text-white font-medium">{country.language}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full flex items-center">
                <FiClock className="w-5 h-5 mr-2 text-amber-400" />
                <span className="text-white font-medium">{country.timezone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 bg-white shadow-md z-30">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('places')}
              className={`px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'places' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <FiMapPin className="inline-block mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Popular Places
            </button>
            <button 
              onClick={() => setActiveTab('cities')}
              className={`px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'cities' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <FiMap className="inline-block mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Cities
            </button>
            <button 
              onClick={() => setActiveTab('weather')}
              className={`px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'weather' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <FiSun className="inline-block mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Weather & Best Time
            </button>
            <button 
              onClick={() => setActiveTab('info')}
              className={`px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === 'info' ? 'border-amber-500 text-amber-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <FiInfo className="inline-block mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Travel Information
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
        {/* Popular Places Tab */}
        {activeTab === 'places' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">Popular Places in {country.name}</h2>
            
            {allPlaces.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 max-w-3xl sm:max-w-none mx-auto">
                {allPlaces.map((place, index) => (
                  <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={place.image || place.cityImage}
                        alt={place.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center shadow-lg">
                        <FiStar className="text-yellow-400 mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="font-bold text-gray-800 text-sm sm:text-base">{place.rating || '4.8'}</span>
                      </div>

                      {/* Place Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                          {place.name}
                        </h3>
                        <div className="flex items-center text-white/90">
                          <FiMapPin className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm sm:text-base">{place.cityName}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-grow flex flex-col bg-gradient-to-b from-white to-gray-50">
                      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 flex-grow">
                        {place.description || 'Explore this amazing destination and discover its unique charm and beauty.'}
                      </p>

                      {/* Place Details */}
                      <div className="space-y-3">
                        {/* Duration */}
                        <div className="flex items-center justify-between text-gray-700 bg-gray-50 p-2.5 sm:p-3 rounded-xl">
                          <div className="flex items-center">
                            <FiClock className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                            <span className="font-semibold text-sm sm:text-base">{place.duration || '2-3 hours'}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between text-blue-600 font-bold text-sm sm:text-base bg-blue-50 p-2.5 sm:p-3 rounded-xl group-hover:bg-blue-100 transition-colors">
                          <Link 
                            to={`/place/${place.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/place/${place.id}`, { state: { place, countryId: country.id } });
                            }}
                            className="flex items-center w-full justify-between"
                          >
                            <span>View Details</span>
                            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-sm text-gray-500 mb-4">No places found for this country.</p>
              </div>
            )}
          </div>
        )}

        {/* Cities Tab */}
        {activeTab === 'cities' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">Cities in {country.name}</h2>
            
            {country.cities?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {country.cities.map((city, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div className="relative w-full h-48">
                      <img 
                        src={city.image} 
                        alt={city.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-3">
                        <h3 className="text-base font-bold text-white mb-0.5 line-clamp-1">{city.name}</h3>
                        <p className="text-sm text-gray-200 line-clamp-1">{city.temperature || 'Varies'}</p>
                      </div>
                    </div>
                    <div className="h-48 p-3 flex flex-col">
                      <p className="text-sm text-gray-600 mb-2 line-clamp-3">{city.description || `Explore the beautiful city of ${city.name} and discover its unique attractions.`}</p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {city.tags?.map((tag, index) => (
                          <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {tag}
                          </span>
                        )) || (
                          <>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">City</span>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">Urban</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center mt-auto">
                        <FiMapPin className="text-amber-500 w-4 h-4 mr-1.5" />
                        <span className="text-sm font-medium">{city.places?.length || 0} Places</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-base text-gray-500 mb-4">No cities found for this country.</p>
              </div>
            )}
          </div>
        )}

        {/* Weather Tab */}
        {activeTab === 'weather' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">Weather & Best Time to Visit</h2>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-pulse bg-gray-200 rounded-xl w-full h-48 sm:h-64"></div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Current Weather</h3>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="text-4xl sm:text-5xl mr-3 sm:mr-4">{weatherData.current.icon}</div>
                        <div>
                          <div className="text-3xl sm:text-4xl font-bold">{weatherData.current.temp}°C</div>
                          <div className="text-sm sm:text-base text-gray-500">{weatherData.current.condition}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">5-Day Forecast</h3>
                      <div className="grid grid-cols-5 gap-2 sm:gap-3">
                        {weatherData.forecast.map((day, index) => (
                          <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                            <div className="text-xs sm:text-sm font-medium">{day.day}</div>
                            <div className="text-xl sm:text-2xl my-1 sm:my-2">{day.icon}</div>
                            <div className="text-xs sm:text-sm font-medium">{day.temp}°C</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Best Time to Visit</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4">
                        {country.bestTimeToVisit || 'The best time to visit depends on your preferences. Generally, spring (April-June) and fall (September-October) offer pleasant weather and fewer crowds.'}
                      </p>
                      
                      <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base">Seasonal Information:</h4>
                      <ul className="space-y-3 sm:space-y-4">
                        <li className="flex items-start">
                          <FiSun className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                          <div>
                            <span className="font-medium text-sm sm:text-base">Summer (June-August):</span>
                            <p className="text-xs sm:text-sm text-gray-600">Warm temperatures, perfect for outdoor activities but can be crowded in popular destinations.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FiSun className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                          <div>
                            <span className="font-medium text-sm sm:text-base">Fall (September-November):</span>
                            <p className="text-xs sm:text-sm text-gray-600">Mild temperatures and beautiful autumn colors, ideal for sightseeing.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FiSun className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                          <div>
                            <span className="font-medium text-sm sm:text-base">Winter (December-February):</span>
                            <p className="text-xs sm:text-sm text-gray-600">Cold temperatures, perfect for winter sports in mountainous regions.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FiSun className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                          <div>
                            <span className="font-medium text-sm sm:text-base">Spring (March-May):</span>
                            <p className="text-xs sm:text-sm text-gray-600">Mild temperatures and blooming landscapes, great for outdoor activities.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Travel Info Tab */}
        {activeTab === 'info' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8">Travel Information</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Essential Information</h3>
                    
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start">
                        <FiGlobe className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                        <div>
                          <span className="font-medium text-sm sm:text-base">Language:</span>
                          <p className="text-xs sm:text-sm text-gray-600">{country.language || 'Information not available'}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FiDollarSign className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                        <div>
                          <span className="font-medium text-sm sm:text-base">Currency:</span>
                          <p className="text-xs sm:text-sm text-gray-600">{country.currency || 'Information not available'}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FiClock className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                        <div>
                          <span className="font-medium text-sm sm:text-base">Time Zone:</span>
                          <p className="text-xs sm:text-sm text-gray-600">{country.timezone || 'Information not available'}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FiInfo className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                        <div>
                          <span className="font-medium text-sm sm:text-base">Visa Requirements:</span>
                          <p className="text-xs sm:text-sm text-gray-600">{country.visaRequirements || 'Visa requirements vary by nationality. Check with the embassy or consulate before traveling.'}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Travel Tips</h3>
                    
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start">
                        <FiExternalLink className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                        <div>
                          <span className="font-medium text-sm sm:text-base">Getting Around:</span>
                          <p className="text-xs sm:text-sm text-gray-600">{country.gettingAround || 'Public transportation is widely available in major cities. Renting a car is recommended for exploring rural areas.'}</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FiExternalLink className="text-amber-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                        <div>
                          <span className="font-medium text-sm sm:text-base">Accommodation:</span>
                          <p className="text-xs sm:text-sm text-gray-600">{country.accommodation || 'A range of accommodations is available, from luxury hotels to budget-friendly hostels and vacation rentals.'}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryPage;