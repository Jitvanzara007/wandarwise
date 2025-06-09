import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { countries } from '../data/countries.jsx';
import { FiArrowRight, FiMapPin, FiStar, FiExternalLink, FiMap, FiClock, FiX, FiCheckCircle, FiCompass, FiCalendar, FiDollarSign, FiShield } from 'react-icons/fi';
import { auth } from '../config/firebase';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const featuredDestinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'Tropical paradise with rich culture and stunning beaches',
      type: 'country'
    },
    {
      id: 2,
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      description: 'City of love, art, and culinary delights',
      type: 'country'
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
      description: 'Where tradition meets cutting-edge technology',
      type: 'city'
    },
    {
      id: 4,
      name: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
      description: 'The city that never sleeps, full of endless possibilities',
      type: 'city'
    },
    {
      id: 5,
      name: 'London, UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
      description: 'Historic charm meets modern sophistication',
      type: 'city'
    },
    {
      id: 6,
      name: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
      description: 'Ultra-modern city with luxury experiences',
      type: 'city'
    },
    {
      id: 7,
      name: 'Rome, Italy',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
      description: 'Ancient history and timeless beauty',
      type: 'city'
    },
    {
      id: 8,
      name: 'Sydney, Australia',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
      description: 'Stunning harbor city with iconic landmarks',
      type: 'city'
    }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const tripTypes = [
    {
      id: 1,
      name: 'Adventure Tours',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
      description: 'Thrilling experiences for adrenaline seekers'
    },
    {
      id: 2,
      name: 'Cultural Experiences',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
      description: 'Immerse yourself in local traditions'
    },
    {
      id: 3,
      name: 'Beach Getaways',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      description: 'Relaxing escapes to paradise beaches'
    },
    {
      id: 4,
      name: 'City Breaks',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
      description: 'Urban adventures in vibrant cities'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Adventure Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      text: 'WanderWise helped me plan the perfect adventure trip to Bali. The itinerary was spot on!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Traveler',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      text: 'The cost calculator feature saved me so much time and money. Highly recommended!'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Family Traveler',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      text: 'Planning our family vacation was a breeze with WanderWise. The kids loved every moment!'
    }
  ];

  const features = [
    {
      icon: <FiCompass className="w-8 h-8" />,
      title: 'Smart Trip Planning',
      description: 'AI-powered itinerary suggestions based on your preferences'
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Easy-to-use calendar for perfect trip timing'
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Cost Calculator',
      description: 'Accurate budget planning for your entire trip'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Travel Safety',
      description: 'Up-to-date safety information and travel advisories'
    }
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = featuredDestinations.map(destination => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = destination.image;
          img.onload = () => {
            handleImageLoad(destination.id);
            resolve();
          };
          img.onerror = () => {
            handleImageLoad(destination.id);
            resolve();
          };
        });
      });

      await Promise.all(imagePromises);
      setLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-screen flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0">
          <img
            src='/images/HomeTravel.png'
            alt="Travel background"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 30%' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
              Discover Your Next
              <span className="text-blue-400 block mt-2">Adventure</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-2xl mx-auto animate-fade-in-delay">
              Plan your perfect trip with WanderWise - Your personal travel companion
            </p>
            <div className="w-full flex justify-center">
              <Link 
                to={user ? "/explore" : "/login"}
                className="bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 text-base xs:text-lg sm:text-xl font-semibold flex items-center justify-center mx-auto transform hover:scale-105 hover:shadow-lg w-full max-w-xs sm:w-auto"
              >
                Get Started
                <FiArrowRight className="ml-2 animate-bounce-x" />
              </Link>
            </div>
          </div>
        </div>
      </section>

     
      {/* Featured Destinations */}
      <section className="py-8 sm:py-12 w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">Featured Destinations</h2>
          <p className="text-gray-600 text-center mb-6 sm:mb-8 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
            Explore our handpicked selection of the world's most amazing places
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {featuredDestinations.map((destination) => (
              user ? (
                <Link
                  key={destination.id}
                  to={destination.type === 'city' ? `/cities/${destination.id}` : `/countries/${destination.id}`}
                  className="group"
                >
                  <div className="relative max-w-xs w-full mx-auto h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden flex flex-col justify-end">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onLoad={() => handleImageLoad(destination.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="relative z-10 p-4 text-white">
                      <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 line-clamp-1">{destination.name}</h3>
                      <p className="text-gray-200 text-xs xs:text-sm line-clamp-2">{destination.description}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={destination.id} className="group">
                  <div className="relative max-w-xs w-full mx-auto h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden flex flex-col justify-end">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onLoad={() => handleImageLoad(destination.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="relative z-10 p-4 text-white">
                      <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 line-clamp-1">{destination.name}</h3>
                      <p className="text-gray-200 text-xs xs:text-sm line-clamp-2">{destination.description}</p>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WanderWise */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">Why Choose WanderWise?</h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-xs sm:text-base">
            Your perfect travel companion for seamless trip planning and unforgettable experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">
                <FiCompass className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Smart Trip Planning</h3>
              <p className="text-gray-600 text-sm sm:text-base">AI-powered itinerary suggestions tailored to your preferences, making trip planning effortless and personalized.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">
                <FiCalendar className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm sm:text-base">Easy-to-use calendar system that helps you find the perfect timing for your adventures.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">
                <FiDollarSign className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Cost Calculator</h3>
              <p className="text-gray-600 text-sm sm:text-base">Accurate budget planning tools to help you manage expenses and make the most of your travel budget.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">
                <FiShield className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Travel Safety</h3>
              <p className="text-gray-600 text-sm sm:text-base">Real-time safety updates and travel advisories to ensure your journey is secure and worry-free.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">
                <FiMap className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Local Insights</h3>
              <p className="text-gray-600 text-sm sm:text-base">Discover hidden gems and local recommendations that make your travel experience truly authentic.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 max-w-sm w-full mx-auto flex flex-col items-center text-center">
              <div className="text-blue-600 mb-4">
                <FiStar className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Premium Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">24/7 customer support to assist you with any questions or concerns during your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Trip Types */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Popular Trip Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {tripTypes.map((type) => (
              <div key={type.id} className="group relative max-w-xs w-full mx-auto h-64 rounded-2xl overflow-hidden flex flex-col justify-end">
                <img
                  src={type.image}
                  alt={type.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 p-4 text-white">
                  <h3 className="text-lg font-bold mb-2 line-clamp-1">{type.name}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 place-items-center">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who plan their perfect trips with WanderWise
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full max-w-xs sm:w-auto justify-center mx-auto"
          >
            Create Free Account
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 