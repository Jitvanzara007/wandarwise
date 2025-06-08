import { useState, useEffect, useRef } from 'react';
import { FiMapPin, FiSearch, FiLoader, FiCalendar, FiUsers, FiInfo, FiX, FiStar, FiDollarSign, FiHeart, FiClock, FiHome, FiMap, FiNavigation, FiExternalLink, FiCoffee, FiShoppingBag, FiCamera, FiMusic, FiBook, FiActivity, FiArrowLeft, FiRefreshCw } from 'react-icons/fi';
import { FaUser, FaUserFriends, FaUsers, FaUserTie, FaHotel, FaUmbrellaBeach, FaBed, FaBuilding, FaHome, FaUtensils, FaMountain, FaCity, FaLandmark, FaTheaterMasks, FaParking } from 'react-icons/fa';
import { generateAITripPlan as generateTripPlan, generatePlaceImage, generateDescription, getPlaceDetailsFromGoogleMaps, generateNearbyAttractions } from '../services/aiModel';
import { useNavigate, useLocation } from 'react-router-dom';

// API Keys from environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

// Debug: Log environment variables (without showing full API keys)
console.log('Environment Variables Status:', {
  GEMINI: GEMINI_API_KEY ? 'Configured' : 'Not Configured',
  GOOGLE_MAPS: GOOGLE_MAPS_API_KEY ? 'Configured' : 'Not Configured',
  UNSPLASH: UNSPLASH_API_KEY ? 'Configured' : 'Not Configured'
});

// Validate environment variables
if (!GEMINI_API_KEY || !GOOGLE_MAPS_API_KEY || !UNSPLASH_API_KEY) {
  console.error('Missing required environment variables. Please check your .env file.');
}

// Add popular destinations for suggestions
const POPULAR_DESTINATIONS = [
  'Paris, France',
  'Bali, Indonesia',
  'Tokyo, Japan',
  'New York, USA',
  'London, UK',
  'Rome, Italy',
  'Barcelona, Spain',
  'Dubai, UAE',
  'Sydney, Australia',
  'Bangkok, Thailand',
  'Singapore',
  'Amsterdam, Netherlands',
  'Venice, Italy',
  'Santorini, Greece',
  'Kyoto, Japan'
];

// Add default values for trip plan
const defaultTripPlan = {
  location: '',
  overview: '',
  mainImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
  rating: null,
  reviews: [],
  website: '',
  phone: '',
  openingHours: null,
  preferences: {
    numberOfPeople: 2,
    budget: 'mid-range',
    interests: [],
    pace: 'moderate',
    travelStyle: 'family',
    accommodation: 'hotel'
  }
};

// Add error handling utility
const handleApiError = (error, context) => {
  console.error(`Error in ${context}:`, error);
  if (error.message.includes('API key')) {
    return 'API key is invalid or not properly configured. Please check your environment variables.';
  }
  if (error.message.includes('CORS')) {
    return 'CORS error occurred. Please check your API configuration.';
  }
  if (error.message.includes('network')) {
    return 'Network error occurred. Please check your internet connection.';
  }
  return `Failed to ${context}: ${error.message}`;
};

// Add retry utility with better error handling
const retryFetch = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

// Move utility functions outside component
const formatPrice = (price) => {
  if (!price) return 'Price not available';
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const getGoogleMapsUrl = (location) => {
  if (!location) return '#';
  const encodedLocation = encodeURIComponent(location);
  return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
};

// Update image fallback utility with better error handling
const getImageUrl = (imageUrl, fallbackUrl = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800') => {
  if (!imageUrl) return fallbackUrl;
  // Add error handling for image loading
  const img = new Image();
  img.src = imageUrl;
  return new Promise((resolve) => {
    img.onload = () => resolve(imageUrl);
    img.onerror = () => resolve(fallbackUrl);
  });
};

const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center">
      <FiLoader className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Trip Plan</h3>
      <p className="text-gray-600">Please wait while we create your perfect itinerary...</p>
    </div>
  </div>
);

const TripPlannerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State hooks
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tripPlan, setTripPlan] = useState(null);
  const [daysToSpend, setDaysToSpend] = useState('');
  const [imageLoading, setImageLoading] = useState({});
  const [travelPreferences, setTravelPreferences] = useState({
    numberOfPeople: 2,
    budget: '',
    interests: [],
    pace: 'moderate',
    travelStyle: '',
    accommodation: ''
  });
  
  // Updated to use newer Google Maps services
  const googleMapsServices = useRef({
    autocompleteService: null,
    placesService: null,
    placeClient: null,
    geocoder: null
  });

  // Add refs for scrolling
  const tripPlanRef = useRef(null);
  const hotelsRef = useRef(null);
  const itineraryRef = useRef(null);

  // Add scroll function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update the ImageWithFallback component to handle location-specific images
  const ImageWithFallback = ({ src, alt, className, placeName, location }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);
      const loadImage = async () => {
        try {
          // Create a more specific search query
          let searchQuery;
          if (placeName) {
            // For landmarks and attractions, use the specific name with location
            if (placeName.includes('landmark') || placeName.includes('attraction')) {
              searchQuery = `${placeName} ${location}`;
            } else {
              // For general places, add location to make it more specific
              searchQuery = `${placeName} ${location} landmark`;
            }
          } else {
            searchQuery = `${alt} ${location} landmark`;
          }

          // Try to get a place-specific image from Unsplash
          const encodedQuery = encodeURIComponent(searchQuery);
          const unsplashUrl = `https://api.unsplash.com/photos/random?query=${encodedQuery}&orientation=landscape&client_id=${UNSPLASH_API_KEY}`;
          
          console.log('Fetching image for:', searchQuery); // Debug log
          
          const response = await fetch(unsplashUrl);
          const data = await response.json();
          
          if (data.urls?.regular) {
            console.log('Found image for:', searchQuery); // Debug log
            setImgSrc(data.urls.regular);
          } else {
            // If no specific image found, try a more general search for the location
            const generalUrl = `https://api.unsplash.com/photos/random?query=${location} landmark&orientation=landscape&client_id=${UNSPLASH_API_KEY}`;
            const generalResponse = await fetch(generalUrl);
            const generalData = await generalResponse.json();
            
            if (generalData.urls?.regular) {
              console.log('Using general location image for:', searchQuery); // Debug log
              setImgSrc(generalData.urls.regular);
            } else {
              // Fallback to provided image or default
              console.log('Using fallback image for:', searchQuery); // Debug log
              setImgSrc(src);
            }
          }
        } catch (error) {
          console.error('Error loading image:', error);
          setImgSrc(src);
        } finally {
          setIsLoading(false);
        }
      };
      loadImage();
    }, [src, placeName, alt, location]);

    return (
      <div className={`relative ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <FiLoader className="animate-spin h-8 w-8 text-gray-400" />
          </div>
        )}
        <img
          src={imgSrc}
          alt={alt}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onError={() => {
            console.error('Image failed to load:', src);
            setImgSrc(src);
          }}
        />
      </div>
    );
  };

  // Update the initialization code
  const initializeGoogleMapsServices = () => {
          try {
            if (!window.google || !window.google.maps) {
        throw new Error('Google Maps API not fully loaded');
      }

      console.log('Initializing Google Maps services...');

      // Initialize services
      googleMapsServices.current = {
        autocompleteService: new window.google.maps.places.AutocompleteService(),
        placesService: new window.google.maps.places.PlacesService(document.createElement('div')),
        geocoder: new window.google.maps.Geocoder()
      };
      
            console.log('Google Maps services initialized successfully');
            setError(null);
          } catch (initError) {
            console.error('Error initializing Google Maps services:', initError);
            setError('Failed to initialize Google Maps services. Please refresh the page.');
          }
  };

  // Update the useEffect for Google Maps initialization
  useEffect(() => {
    let isScriptLoaded = false;

    const loadGoogleMapsScript = () => {
      if (isScriptLoaded) return;

      try {
        console.log('Starting to load Google Maps script...');
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('Google Maps script loaded successfully');
          isScriptLoaded = true;
          initializeGoogleMapsServices();
        };

        script.onerror = (error) => {
          console.error('Failed to load Google Maps script:', error);
          setError('Failed to load Google Maps. Please check your internet connection and API key.');
        };

        document.head.appendChild(script);
        console.log('Google Maps script tag added to document');
      } catch (error) {
        console.error('Error in loadGoogleMapsScript:', error);
        setError('Failed to load Google Maps. Please refresh the page.');
      }
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      console.log('Google Maps script already exists, initializing services...');
      initializeGoogleMapsServices();
    } else {
    loadGoogleMapsScript();
    }

    // Cleanup function
    return () => {
      isScriptLoaded = false;
    };
  }, [GOOGLE_MAPS_API_KEY]);

  // Add a function to check if services are initialized
  const checkServicesInitialized = () => {
    if (!googleMapsServices.current?.placesService) {
      console.error('Places service not initialized');
      setError('Google Maps services not initialized. Please refresh the page.');
      return false;
    }
    return true;
  };

  // Update the fetchPlaces function with correct Places API request format
  const fetchPlaces = async (type, locationDetails) => {
    try {
      if (!googleMapsServices.current.placesService) {
        throw new Error('Places service not initialized');
      }

      if (!locationDetails?.geometry?.location) {
        throw new Error('Invalid location details');
      }

      // Get the coordinates
      const lat = locationDetails.geometry.location.lat();
      const lng = locationDetails.geometry.location.lng();

      console.log(`Fetching ${type} for coordinates:`, { lat, lng });
      
      const request = {
        location: { lat, lng },
        radius: 5000,
        type: type
      };

      console.log('Places request:', request);

      return await retryFetch(async () => {
        return new Promise((resolve, reject) => {
          googleMapsServices.current.placesService.nearbySearch(request, (results, status) => {
            console.log(`Places API response for ${type}:`, { status, resultsCount: results?.length });
            
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
              // Get detailed information for each place
              const placesWithDetails = results.map(place => {
                return new Promise((resolvePlace) => {
                  const detailRequest = {
                    placeId: place.place_id,
                    fields: ['name', 'formatted_address', 'geometry', 'rating', 'photos', 'types', 'opening_hours', 'price_level', 'website', 'formatted_phone_number', 'reviews']
                  };

                  console.log(`Fetching details for place: ${place.name}`);

                  googleMapsServices.current.placesService.getDetails(detailRequest, (placeDetails, detailStatus) => {
                    console.log(`Place details response for ${place.name}:`, { detailStatus, hasDetails: !!placeDetails });
                    
                    if (detailStatus === window.google.maps.places.PlacesServiceStatus.OK && placeDetails) {
                      const placeData = {
                        name: placeDetails.name,
                        address: placeDetails.formatted_address,
                        rating: placeDetails.rating,
                        photos: placeDetails.photos?.map(photo => photo.getUrl({ maxWidth: 800, maxHeight: 600 })) || [],
                        types: placeDetails.types,
                        place_id: placeDetails.place_id,
                        openingHours: placeDetails.opening_hours?.weekday_text || [],
                        priceLevel: placeDetails.price_level,
                        website: placeDetails.website,
                        phone: placeDetails.formatted_phone_number,
                        reviews: placeDetails.reviews?.slice(0, 3) || []
                      };
                      console.log(`Processed place data for ${place.name}:`, placeData);
                      resolvePlace(placeData);
                    } else {
                      console.log(`Using basic place data for ${place.name}`);
                      resolvePlace({
                        name: place.name,
                        address: place.vicinity,
                        rating: place.rating,
                        photos: place.photos?.map(photo => photo.getUrl({ maxWidth: 800, maxHeight: 600 })) || [],
                        types: place.types,
                        place_id: place.place_id,
                        openingHours: ['Open 24/7'],
                        priceLevel: place.price_level || 2,
                        website: '#',
                        phone: 'Not available',
                        reviews: []
                      });
                    }
                  });
                });
              });

              // Wait for all place details to be fetched
              Promise.all(placesWithDetails)
                .then(places => {
                  console.log(`Successfully fetched ${places.length} ${type}`);
                  resolve(places);
                })
                .catch(error => {
                  console.error(`Error fetching ${type} details:`, error);
                  reject(error);
                });
            } else {
              console.log(`No ${type} found for ${searchQuery}: ${status}`);
              resolve([]);
            }
          });
        });
      });
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
      return [];
    }
  };

  // Add fetchWithTimeout utility
  const fetchWithTimeout = async (fn, timeout = 10000) => {
    return Promise.race([
      fn(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), timeout)
      )
    ]);
  };

  // Update the generateTripPlan function to handle the location properly
  const generateTripPlan = async () => {
    if (!checkServicesInitialized()) {
      return;
    }

    setIsLoading(true);
        setError(null);
    setTripPlan(null);

    try {
      if (!searchQuery.trim()) {
        throw new Error('Please enter a destination');
      }

      console.log('Starting trip plan generation for:', searchQuery);

      // Get place details with retry
      const placeDetails = await retryFetch(async () => {
        return new Promise((resolve, reject) => {
          const request = {
            query: searchQuery,
            fields: ['place_id', 'name', 'formatted_address', 'geometry', 'photos', 'rating']
          };

          console.log('Searching for place:', request);

          googleMapsServices.current.placesService.textSearch(request, (results, status) => {
            console.log('Place search response:', { status, resultsCount: results?.length });
            
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
              // Get detailed place information
              const detailRequest = {
                placeId: results[0].place_id,
                fields: ['name', 'formatted_address', 'geometry', 'photos', 'rating']
              };

              googleMapsServices.current.placesService.getDetails(detailRequest, (placeDetails, detailStatus) => {
                if (detailStatus === window.google.maps.places.PlacesServiceStatus.OK && placeDetails) {
                  resolve(placeDetails);
      } else {
                  reject(new Error(`Failed to get place details: ${detailStatus}`));
                }
              });
            } else {
              reject(new Error(`Location not found: ${status}`));
            }
          });
        });
      });

      console.log('Found place details:', placeDetails);

      // Fetch places in parallel with timeout
      const [nearbyHotels, nearbyAttractions, nearbyRestaurants] = await Promise.all([
        fetchWithTimeout(() => fetchPlaces('lodging', placeDetails)),
        fetchWithTimeout(() => fetchPlaces('tourist_attraction', placeDetails)),
        fetchWithTimeout(() => fetchPlaces('restaurant', placeDetails))
      ]).catch(error => {
        console.error('Error fetching places:', error);
        return [[], [], []];
      });

      console.log('Fetched places:', {
        hotels: nearbyHotels.length,
        attractions: nearbyAttractions.length,
        restaurants: nearbyRestaurants.length
      });

      // Create a basic trip plan
      const tripPlan = {
        location: searchQuery,
        overview: placeDetails.formatted_address || searchQuery,
        mainImage: placeDetails.photos?.[0]?.getUrl() || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
        rating: placeDetails.rating || 4.5,
        preferences: {
          numberOfPeople: travelPreferences.numberOfPeople,
          ...travelPreferences
        },
        daysToSpend: parseInt(daysToSpend),
        aiGeneratedContent: {
          hotels: nearbyHotels.map(hotel => ({
            name: hotel.name,
            address: hotel.address,
            priceRange: hotel.priceLevel ? '$'.repeat(hotel.priceLevel) : '$$',
            imageUrl: hotel.photos?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
            rating: hotel.rating || 4.5,
            bookingLink: hotel.website || '#',
            description: hotel.reviews?.[0]?.text || `${hotel.name} in ${searchQuery}`,
            amenities: hotel.types || ['Pool', 'Spa', 'Restaurant', 'WiFi', 'Parking'],
            openingHours: hotel.openingHours || ['Open 24/7'],
            phone: hotel.phone || 'Not available',
            reviews: hotel.reviews || []
          })),
          itinerary: Array.from({ length: parseInt(daysToSpend) }, (_, dayIndex) => ({
            day: dayIndex + 1,
            morning: nearbyAttractions.slice(0, 2).map(attraction => ({
              name: attraction.name,
              address: attraction.address,
              imageUrl: attraction.photos?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
              ticketPrice: attraction.priceLevel ? '$'.repeat(attraction.priceLevel) : '$$',
              rating: attraction.rating || 4.5,
              openingHours: attraction.openingHours || ['9:00 AM - 6:00 PM'],
              description: attraction.reviews?.[0]?.text || `${attraction.name} in ${searchQuery}`,
              distance: `${Math.floor(Math.random() * 5) + 1} km`,
              travelTime: `${Math.floor(Math.random() * 30) + 10} mins`,
              timing: '9:00 AM - 11:00 AM',
              website: attraction.website,
              phone: attraction.phone
            })),
            afternoon: nearbyAttractions.slice(2, 4).map(attraction => ({
              name: attraction.name,
              address: attraction.address,
              imageUrl: attraction.photos?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
              ticketPrice: attraction.priceLevel ? '$'.repeat(attraction.priceLevel) : '$$',
              rating: attraction.rating || 4.5,
              openingHours: attraction.openingHours || ['10:00 AM - 8:00 PM'],
              description: attraction.reviews?.[0]?.text || `${attraction.name} in ${searchQuery}`,
              distance: `${Math.floor(Math.random() * 5) + 1} km`,
              travelTime: `${Math.floor(Math.random() * 30) + 10} mins`,
              timing: '1:00 PM - 4:00 PM',
              website: attraction.website,
              phone: attraction.phone
            })),
            evening: nearbyAttractions.slice(4, 6).map(attraction => ({
              name: attraction.name,
              address: attraction.address,
              imageUrl: attraction.photos?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
              ticketPrice: attraction.priceLevel ? '$'.repeat(attraction.priceLevel) : '$$',
              rating: attraction.rating || 4.5,
              openingHours: attraction.openingHours || ['5:00 PM - 10:00 PM'],
              description: attraction.reviews?.[0]?.text || `${attraction.name} in ${searchQuery}`,
              distance: `${Math.floor(Math.random() * 5) + 1} km`,
              travelTime: `${Math.floor(Math.random() * 30) + 10} mins`,
              timing: '5:00 PM - 8:00 PM',
              website: attraction.website,
              phone: attraction.phone
            }))
          })),
          restaurants: nearbyRestaurants.map(restaurant => ({
            name: restaurant.name,
            address: restaurant.address,
            priceRange: restaurant.priceLevel ? '$'.repeat(restaurant.priceLevel) : '$$',
            cuisine: restaurant.types?.[0] || 'Local',
            rating: restaurant.rating || 4.5,
            openingHours: restaurant.openingHours || ['11:00 AM - 10:00 PM'],
            imageUrl: restaurant.photos?.[0] || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
            description: restaurant.reviews?.[0]?.text || `${restaurant.name} in ${searchQuery}`,
            website: restaurant.website,
            phone: restaurant.phone,
            reviews: restaurant.reviews || []
          })),
          budgetBreakdown: {
            accommodation: Math.floor(Math.random() * 300) + 100,
            activities: Math.floor(Math.random() * 100) + 50,
            food: Math.floor(Math.random() * 100) + 50,
            transportation: Math.floor(Math.random() * 50) + 20,
            total: 0
          }
        }
      };

      // Calculate total budget
      const totalPerDay = Object.values(tripPlan.aiGeneratedContent.budgetBreakdown).reduce((a, b) => a + b, 0);
      tripPlan.aiGeneratedContent.budgetBreakdown.total = totalPerDay;

      // Update the trip plan state
      setTripPlan(tripPlan);
      setIsLoading(false);

    } catch (error) {
      console.error('Error:', error);
      setError(handleApiError(error, 'generate trip plan'));
      setIsLoading(false);
    }
  };

  // Update the getPlaceSuggestions function to use only legacy API
  const getPlaceSuggestions = async (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    if (!googleMapsServices.current.autocompleteService) {
      console.error('Autocomplete service not initialized');
      handleServiceError();
      return;
    }

    try {
      console.log('Getting suggestions for query:', query);
      
      const request = {
        input: query,
        types: ['geocode', 'establishment']
      };

      const response = await new Promise((resolve, reject) => {
        googleMapsServices.current.autocompleteService.getPlacePredictions(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve(results);
          } else {
            reject(new Error(`Places service error: ${status}`));
          }
        });
      });

      console.log('Suggestions response:', response);

      if (response && response.length > 0) {
        const formattedSuggestions = response.map(prediction => ({
          name: prediction.description,
          placeId: prediction.place_id,
          types: prediction.types
        }));
        console.log('Formatted suggestions:', formattedSuggestions);
        setSuggestions(formattedSuggestions);
        setError(null);
      } else {
        console.log('No suggestions found');
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error in getPlaceSuggestions:', error);
      setSuggestions([]);
      setError('Failed to get place suggestions. Please try again.');
      handleServiceError();
    }
  };

  // Update the generateNearbyAttractions function in aiModel.js
  const generateNearbyAttractions = async (location, services) => {
    try {
      console.log('Finding nearby attractions for:', location);
      
      // First get the location coordinates
      const geocodeResult = await new Promise((resolve, reject) => {
        services.geocoder.geocode({ address: location }, (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK && results.length > 0) {
            resolve(results[0]);
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        });
      });

      const location = geocodeResult.geometry.location;
      
      // Then search for nearby attractions
      const nearbyResults = await new Promise((resolve, reject) => {
        const request = {
          location: location,
          radius: 5000, // 5km radius
          type: ['tourist_attraction', 'point_of_interest']
        };

        services.placesService.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            resolve(results);
          } else {
            reject(new Error(`Nearby search failed: ${status}`));
          }
        });
      });

      return nearbyResults.map(place => ({
        name: place.name,
        address: place.vicinity,
        rating: place.rating,
        types: place.types,
        photos: place.photos?.map(photo => photo.getUrl()) || []
      }));
    } catch (error) {
      console.error('Error finding nearby attractions:', error);
      return [];
    }
  };

  // Add test function to verify API key
  const verifyAPIKey = async () => {
    try {
      console.log('Verifying Google Maps API key...');
      const testUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=Paris&key=${GOOGLE_MAPS_API_KEY}`;
      console.log('Testing API key:', GOOGLE_MAPS_API_KEY);
      
      const response = await fetch(testUrl);
      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.status === 'OK') {
        console.log('API Key is working!');
        setError(null);
      } else if (data.status === 'REQUEST_DENIED') {
        console.error('API Key Error:', data);
        setError('API Key Error: Your API key is invalid or not properly configured. Please check your Google Cloud Console settings.');
      } else if (data.status === 'OVER_QUERY_LIMIT') {
        console.error('API Quota Error:', data);
        setError('API Quota Error: You have exceeded your API quota. Please check your billing status.');
      } else {
        console.error('API Error:', data);
        setError(`API Error: ${data.error_message || 'Unknown error occurred'}`);
      }
    } catch (err) {
      console.error('API Key Verification Error:', err);
      setError('Failed to verify API key. Please check your internet connection and API key configuration.');
    }
  };

  // Call verify function when component mounts
  useEffect(() => {
    verifyAPIKey();
  }, []);

  // Update suggestion click handler
  const handleSuggestionClick = (suggestion) => {
    console.log('Selected suggestion:', suggestion);
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    setSuggestions([]);
    setError(null);
  };

  // Update search query handler with debounce
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setError(null);
    
    // Clear any existing timeout
    if (window.searchTimeout) {
      clearTimeout(window.searchTimeout);
    }
    
    if (value.length >= 2) {
      // Add a small delay to prevent too many API calls
      window.searchTimeout = setTimeout(() => {
        if (!googleMapsServices.current.autocompleteService) {
          console.error('Autocomplete service not initialized');
          setError('Google Maps services not initialized. Please refresh the page.');
          return;
        }
        getPlaceSuggestions(value);
      setShowSuggestions(true);
      }, 300);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleInterestToggle = (interest) => {
    setTravelPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  // Add a function to handle back button
  const handleBack = () => {
    clearAllData();
    navigate('/', { replace: true });
  };

  // Add a function to handle refresh
  const handleRefresh = () => {
    clearAllData();
    window.location.reload();
  };

  // Add useEffect to handle page refresh and back button
  useEffect(() => {
    // Always clear data on initial load
    clearAllData();
  }, []); // Empty dependency array means this runs once on mount

  // Add error display component
  const ErrorMessage = ({ message }) => {
    if (!message) return null;
    
    return (
      <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
        <div className="flex items-center">
          <FiInfo className="mr-2 flex-shrink-0" />
          <span>{message}</span>
        </div>
      </div>
    );
  };

  // Add function to clear all stored data
  const clearAllData = () => {
    // Clear localStorage
    localStorage.removeItem('lastSearchQuery');
    localStorage.removeItem('lastDaysToSpend');
    localStorage.removeItem('lastTravelPreferences');
    
    // Reset all state
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    setError(null);
    setTripPlan(null);
    setDaysToSpend('');
    setTravelPreferences({
      numberOfPeople: 2,
      budget: '',
      interests: [],
      pace: 'moderate',
      travelStyle: '',
      accommodation: ''
    });
  };

  // Add a new button to start fresh
  const handleStartFresh = () => {
    clearAllData();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-3 sm:px-4 lg:px-8">
      {isLoading && <LoadingOverlay />}
      <div className="max-w-7xl mx-auto">
        {/* Add navigation buttons */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div className="flex space-x-3 sm:space-x-4">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              <FiArrowLeft className="mr-1 sm:mr-2" />
              Back
            </button>
          </div>
          <button
            onClick={handleRefresh}
            className="flex items-center text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            <FiRefreshCw className="mr-1 sm:mr-2" />
            Refresh
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
            <FiMapPin className="mr-2 sm:mr-3 text-blue-500" />
            Plan Your Perfect Trip
          </h1>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Destination Search */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Where do you want to go?
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                </div>
                <input
                  type="text"
                  className="pl-10 sm:pl-12 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg py-2.5 sm:py-3"
                  placeholder="Enter destination (e.g., Paris, France)"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)}
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSuggestions([]);
                      setError(null);
                    }}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <FiX className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              {/* Error Message */}
              <ErrorMessage message={error} />
              
              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b last:border-b-0"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="flex items-center">
                        <FiMapPin className="mr-2 sm:mr-3 text-blue-500 flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base text-gray-900">{suggestion.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Trip Duration */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                How many days will you stay?
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiCalendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                  </div>
                  <input
                    type="number"
                  id="daysToSpend"
                  name="daysToSpend"
                    value={daysToSpend}
                  onChange={(e) => setDaysToSpend(e.target.value)}
                  min="1"
                  max="30"
                  className="pl-10 sm:pl-12 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg py-2.5 sm:py-3"
                  placeholder="Number of days"
                  required
                />
              </div>
            </div>

            {/* Travel Preferences */}
            <div className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center">
                <FiHeart className="mr-2 text-blue-500 h-5 w-5 sm:h-6 sm:w-6" />
                Travel Preferences
              </h3>
              
              {/* Travel Style */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Who's Traveling?</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { id: 'solo', icon: <FaUser className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Solo Traveler' },
                    { id: 'couple', icon: <FaUserFriends className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Couple' },
                    { id: 'family', icon: <FaUsers className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Family' },
                    { id: 'friends', icon: <FaUserFriends className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Friends' },
                    { id: 'business', icon: <FaUserTie className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Business' }
                  ].map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setTravelPreferences(prev => ({ ...prev, travelStyle: style.id }))}
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex flex-col items-center ${
                        travelPreferences.travelStyle === style.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                          : 'border-gray-200 hover:border-blue-200 bg-white'
                      }`}
                    >
                      <div className={`mb-2 sm:mb-3 transition-transform duration-300 ${travelPreferences.travelStyle === style.id ? 'scale-110' : ''}`}>
                      {style.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{style.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Budget Range</label>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { id: 'budget', label: 'Budget', price: '$' },
                    { id: 'mid-range', label: 'Mid-Range', price: '$$' },
                    { id: 'luxury', label: 'Luxury', price: '$$$' }
                  ].map((budget) => (
                    <button
                      key={budget.id}
                      onClick={() => setTravelPreferences(prev => ({ ...prev, budget: budget.id }))}
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex flex-col items-center ${
                        travelPreferences.budget === budget.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                          : 'border-gray-200 hover:border-blue-200 bg-white'
                      }`}
                    >
                      <div className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 transition-transform duration-300 ${travelPreferences.budget === budget.id ? 'scale-110' : ''}`}>
                        {budget.price}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{budget.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accommodation Type */}
              <div>
                <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Accommodation Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { id: 'hotel', icon: <FaHotel className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Hotel' },
                    { id: 'resort', icon: <FaUmbrellaBeach className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Resort' },
                    { id: 'hostel', icon: <FaBed className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Hostel' },
                    { id: 'apartment', icon: <FaBuilding className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Apartment' },
                    { id: 'villa', icon: <FaHome className="h-6 w-6 sm:h-8 sm:w-8" />, label: 'Villa' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setTravelPreferences(prev => ({ ...prev, accommodation: type.id }))}
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex flex-col items-center ${
                        travelPreferences.accommodation === type.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                          : 'border-gray-200 hover:border-blue-200 bg-white'
                      }`}
                    >
                      <div className={`mb-2 sm:mb-3 transition-transform duration-300 ${travelPreferences.accommodation === type.id ? 'scale-110' : ''}`}>
                      {type.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateTripPlan}
              disabled={isLoading || !searchQuery.trim() || !daysToSpend || !travelPreferences.travelStyle || !travelPreferences.budget || !travelPreferences.accommodation}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-blue-600 text-white rounded-lg sm:rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center disabled:bg-blue-400 text-base sm:text-lg font-semibold"
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  Generating Trip Plan...
                </>
              ) : (
                <>
                  <FiSearch className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  Generate Trip Plan
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
            <FiInfo className="mt-1 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Trip Plan Results */}
        {tripPlan && tripPlan.location && (
          <div className="space-y-6 sm:space-y-8" ref={tripPlanRef}>
            {/* Location Overview */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 sm:h-80 md:h-96">
                <ImageWithFallback
                src={tripPlan.mainImage}
                alt={tripPlan.location}
                  placeName={`${tripPlan.location} landmark`}
                  location={tripPlan.location}
                  className="w-full h-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{tripPlan.location}</h2>
                  {tripPlan.rating && (
                      <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        <FiStar className="text-yellow-400 mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="font-semibold text-sm sm:text-base">{tripPlan.rating}</span>
                    </div>
                  )}
                </div>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6">{tripPlan.overview}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {daysToSpend} Days
                  </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {travelPreferences.budget.charAt(0).toUpperCase() + travelPreferences.budget.slice(1)} Budget
                  </span>
                    <a
                      href={getGoogleMapsUrl(tripPlan.location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center hover:bg-white/30 transition-colors"
                    >
                      <FiMap className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Generated Content */}
            {tripPlan.aiGeneratedContent && (
              <div className="space-y-12">
                {/* Hotel Recommendations */}
                <div ref={hotelsRef} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaHotel className="mr-3 text-blue-500" />
                    Top Hotels in {tripPlan.location}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {tripPlan.aiGeneratedContent.hotels.slice(0, 6).map((hotel, index) => (
                      <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex flex-col h-full">
                          {/* Hotel Image */}
                          <div className="relative h-48">
                            <ImageWithFallback
                              src={hotel.imageUrl}
                              alt={hotel.name}
                              placeName={`${hotel.name} hotel`}
                              location={tripPlan.location}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <div className="flex items-center">
                            <FiStar className="text-yellow-400 mr-1" />
                                <span className="font-medium">{hotel.rating}</span>
                          </div>
                            </div>
                          </div>

                          {/* Hotel Details */}
                          <div className="p-6 flex-1 flex flex-col">
                            <h4 className="font-bold text-xl text-gray-900 mb-2">{hotel.name}</h4>
                            <div className="flex items-center text-gray-600 mb-4">
                              <FiMapPin className="mr-2 flex-shrink-0" />
                              <span className="text-sm">{hotel.address}</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <p className="text-green-600 font-bold text-2xl">{formatPrice(hotel.priceRange)}</p>
                                <span className="text-sm text-gray-500">per night</span>
                              </div>
                              <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                                <FiStar className="text-yellow-400 mr-1" />
                                <span className="font-medium text-blue-700">{hotel.rating}/5</span>
                              </div>
                            </div>
                            <div className="mt-auto">
                              <div className="flex gap-3">
                          <a
                            href={hotel.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 text-center font-medium transition-colors flex items-center justify-center"
                          >
                                  <FiCalendar className="mr-2" />
                            Book Now
                </a>
                                <a
                                  href={getGoogleMapsUrl(hotel.address)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 text-center flex items-center justify-center font-medium transition-colors"
                                >
                                  <FiMap className="mr-2" />
                                  View on Map
                                </a>
                              </div>
                            </div>
                          </div>
              </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Daily Itinerary */}
                <div ref={itineraryRef} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FiCalendar className="mr-3 text-blue-500" />
                    Places to Visit in {tripPlan.location}
                  </h3>
                  <div className="space-y-12 max-w-4xl mx-auto">
                  {tripPlan.aiGeneratedContent.itinerary.map((day, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0 pb-12 last:pb-0">
                        <div className="flex items-center justify-between mb-8">
                          <h4 className="text-2xl font-bold text-gray-900 flex items-center">
                            <FiClock className="mr-3 text-blue-500" />
                            Day {day.day}
                          </h4>
                        </div>
                      
                      {/* Morning Activities */}
                        <div className="mb-8">
                          <h5 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                            <FiActivity className="mr-2 text-blue-500" />
                            Morning
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {day.morning.slice(0, 2).map((activity, actIndex) => (
                              <div key={actIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative h-48">
                                  <ImageWithFallback
                                    src={activity.imageUrl}
                                    alt={activity.name}
                                    placeName={activity.name}
                                    location={tripPlan.location}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h6 className="font-semibold text-xl mb-1">{activity.name}</h6>
                                    <p className="text-sm text-white/90">{activity.address}</p>
                                  </div>
                                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <div className="flex items-center">
                                <FiStar className="text-yellow-400 mr-1" />
                                      <span className="font-medium">{activity.rating}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <p className="text-green-600 font-bold text-lg">{formatPrice(activity.ticketPrice)}</p>
                                    <span className="text-sm text-gray-500">per person</span>
                                  </div>
                                  <div className="flex items-center text-gray-600 mb-3">
                                    <FiClock className="mr-2" />
                                    <span className="text-sm">{activity.openingHours}</span>
                                  </div>
                                  <div className="flex items-center text-gray-600 mb-3">
                                    <FiNavigation className="mr-2" />
                                    <span className="text-sm">{activity.distance} • {activity.travelTime}</span>
                                  </div>
                                  <a
                                    href={getGoogleMapsUrl(activity.address)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 text-center flex items-center justify-center font-medium transition-colors"
                                  >
                                    <FiMap className="mr-2" />
                                    View on Map
                                  </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Afternoon Activities */}
                        <div className="mb-8">
                          <h5 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                            <FiActivity className="mr-2 text-blue-500" />
                            Afternoon
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {day.afternoon.slice(0, 2).map((activity, actIndex) => (
                              <div key={actIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative h-48">
                                  <ImageWithFallback
                                    src={activity.imageUrl}
                                    alt={activity.name}
                                    placeName={activity.name}
                                    location={tripPlan.location}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h6 className="font-semibold text-xl mb-1">{activity.name}</h6>
                                    <p className="text-sm text-white/90">{activity.address}</p>
                                  </div>
                                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <div className="flex items-center">
                                <FiStar className="text-yellow-400 mr-1" />
                                      <span className="font-medium">{activity.rating}</span>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Evening Activities */}
                        <div className="mb-8">
                          <h5 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                            <FiActivity className="mr-2 text-blue-500" />
                            Evening
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {day.evening.slice(0, 2).map((activity, actIndex) => (
                              <div key={actIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative h-48">
                                  <ImageWithFallback
                                    src={activity.imageUrl}
                                    alt={activity.name}
                                    placeName={activity.name}
                                    location={tripPlan.location}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h6 className="font-semibold text-xl mb-1">{activity.name}</h6>
                                    <p className="text-sm text-white/90">{activity.address}</p>
                                  </div>
                                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <div className="flex items-center">
                                <FiStar className="text-yellow-400 mr-1" />
                                      <span className="font-medium">{activity.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                              </div>
                            </div>
                          ))}
                        </div>
              </div>

                {/* Restaurants Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaUtensils className="mr-3 text-blue-500" />
                    Recommended Restaurants in {tripPlan.location}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {tripPlan.aiGeneratedContent.restaurants.map((restaurant, index) => (
                      <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-48">
                          <ImageWithFallback
                            src={restaurant.imageUrl}
                            alt={restaurant.name}
                            placeName={`${restaurant.name} restaurant`}
                            location={tripPlan.location}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <div className="flex items-center">
                                <FiStar className="text-yellow-400 mr-1" />
                              <span className="font-medium">{restaurant.rating}/5</span>
                              </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            )}

                {/* Budget Breakdown */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <FiDollarSign className="mr-2 sm:mr-3 text-blue-500 h-5 w-5 sm:h-6 sm:w-6" />
                Estimated Trip Cost
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Accommodation</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.accommodation * daysToSpend)}</p>
                  <span className="text-xs sm:text-sm text-gray-500">for {daysToSpend} nights</span>
                    </div>
                <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Activities</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.activities * daysToSpend)}</p>
                  <span className="text-xs sm:text-sm text-gray-500">for {daysToSpend} days</span>
                    </div>
                <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Food</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.food * daysToSpend)}</p>
                  <span className="text-xs sm:text-sm text-gray-500">for {daysToSpend} days</span>
                    </div>
                <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">Transportation</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.transportation * daysToSpend)}</p>
                  <span className="text-xs sm:text-sm text-gray-500">for {daysToSpend} days</span>
                    </div>
                  </div>
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-blue-50 rounded-lg sm:rounded-xl">
                <h4 className="text-xs sm:text-sm font-medium text-blue-600 mb-1 sm:mb-2">Total Estimated Cost</h4>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.total * daysToSpend)}</p>
                <span className="text-xs sm:text-sm text-blue-600">for {daysToSpend} days</span>
                  </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlannerPage; 