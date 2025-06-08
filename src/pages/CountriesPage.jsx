import { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import { FiSearch } from 'react-icons/fi';

const LoadingSkeleton = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
    <div className="h-56 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulated API call - replace with actual API call
    const fetchCountries = async () => {
      try {
        // Mock data
        const mockCountries = [
          {
            id: 1,
            name: 'Japan',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
            description: 'A fascinating blend of ancient traditions and cutting-edge technology.',
            rating: 4.8,
            popularPlaces: 12,
            currency: 'JPY',
            language: 'Japanese',
          },
          {
            id: 2,
            name: 'France',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
            description: 'The country of romance, art, and culinary excellence.',
            rating: 4.7,
            popularPlaces: 15,
            currency: 'EUR',
            language: 'French',
          },
          {
            id: 3,
            name: 'United Arab Emirates',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Modern desert nation known for luxury shopping, ultramodern architecture, and lively nightlife.',
            rating: 4.8,
            popularPlaces: 12,
            currency: 'UAE Dirham (AED)',
            language: 'Arabic',
          },
          {
            id: 4,
            name: 'Italy',
            image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
            description: 'Home to ancient ruins, Renaissance art, and world-famous cuisine.',
            rating: 4.7,
            popularPlaces: 14,
            currency: 'EUR',
            language: 'Italian',
          },
          {
            id: 5,
            name: 'Spain',
            image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded',
            description: 'Vibrant culture, stunning architecture, and beautiful beaches.',
            rating: 4.6,
            popularPlaces: 13,
            currency: 'EUR',
            language: 'Spanish',
          },
          {
            id: 6,
            name: 'Thailand',
            image: 'https://images.trailfinders.com/asset/21ba98/TF2210455/Depositphotos_96424250_xl-2015_1500x1500.jpg',
            description: 'Tropical paradise with rich culture and amazing cuisine.',
            rating: 4.5,
            popularPlaces: 11,
            currency: 'THB',
            language: 'Thai',
          },
          {
            id: 7,
            name: 'Australia',
            image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
            description: 'Diverse landscapes from beaches to outback adventures.',
            rating: 4.7,
            popularPlaces: 12,
            currency: 'AUD',
            language: 'English',
          },
          {
            id: 8,
            name: 'United Kingdom',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
            description: 'Historic landmarks and modern cultural experiences.',
            rating: 4.6,
            popularPlaces: 15,
            currency: 'GBP',
            language: 'English',
          },
          {
            id: 9,
            name: 'United States',
            image: 'http://images6.fanpop.com/image/photos/40700000/New-York-City-united-states-of-america-40703316-1280-1024.jpg',
            description: 'Diverse landscapes and iconic cities.',
            rating: 4.5,
            popularPlaces: 20,
            currency: 'USD',
            language: 'English',
          },
          {
            id: 10,
            name: 'Switzerland',
            image: 'https://www.ubi-interactive.com/wp-content/uploads/2022/10/bern-switzerland-shutterstock_1845136612.jpg_ecb4c93750.jpg',
            description: 'A land of stunning Alpine landscapes, pristine lakes, and charming cities.',
            rating: 4.8,
            popularPlaces: 12,
            currency: 'Swiss Franc (CHF)',
            language: 'German, French, Italian, Romansh',
          },
          {
            id: 11,
            name: 'Singapore',
            image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
            description: 'Modern city-state with perfect blend of nature and urban life.',
            rating: 4.7,
            popularPlaces: 8,
            currency: 'SGD',
            language: 'English',
          },
          {
            id: 12,
            name: 'Germany',
            image: 'https://images.alphacoders.com/552/552457.jpg',
            description: 'Rich history, beautiful castles, and vibrant cities.',
            rating: 4.6,
            popularPlaces: 12,
            currency: 'EUR',
            language: 'German',
          },
          
        ];
        setCountries(mockCountries);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Destinations
            </h1>
            <p className="text-xl text-gray-600">
              Discover amazing places around the world
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search countries..."
                disabled
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 bg-gray-100"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Loading Grid */}
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {[...Array(8)].map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pb-8 sm:pb-16">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Explore Destinations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Discover amazing places around the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 sm:py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-8 sm:px-12 lg:px-16">
          {filteredCountries.map((country) => (
            <div key={country.id} className="px-1 sm:px-2">
              <CountryCard country={country} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-lg sm:text-xl text-gray-600">No countries found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountriesPage; 