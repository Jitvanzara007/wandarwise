import { useLocation, useNavigate } from 'react-router-dom';
import { FiMapPin, FiStar, FiClock, FiNavigation, FiMap, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { FaHotel, FaUtensils } from 'react-icons/fa';
import { ImageWithFallback } from '../components/ImageWithFallback';

const TripDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tripPlan = location.state?.tripPlan;

  if (!tripPlan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Trip Plan Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back to Planner
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    if (!price) return 'Price not available';
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getGoogleMapsUrl = (location) => {
    if (!location) return '#';
    const encodedLocation = encodeURIComponent(location);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            <FiNavigation className="mr-2 transform rotate-180" />
            Back to Planner
          </button>
        </div>

        {/* Location Overview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <ImageWithFallback
              src={tripPlan.mainImage}
              alt={tripPlan.location}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{tripPlan.location}</h1>
              <p className="text-lg text-white/90">{tripPlan.overview}</p>
            </div>
          </div>
        </div>

        {/* Hotel Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaHotel className="mr-3 text-blue-500" />
            Top Hotels in {tripPlan.location}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripPlan.aiGeneratedContent.hotels.map((hotel, index) => (
              <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <a href={getGoogleMapsUrl(hotel.address)} target="_blank" rel="noopener noreferrer">
                    <ImageWithFallback
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FiMapPin className="mr-2 flex-shrink-0" />
                    <span className="text-sm">{hotel.address}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-green-600 font-bold text-xl">{formatPrice(hotel.priceRange)}</p>
                    <span className="text-sm text-gray-500">per night</span>
                  </div>
                  <a
                    href={hotel.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center font-medium transition-colors flex items-center justify-center"
                  >
                    <FiCalendar className="mr-2" />
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Itinerary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FiClock className="mr-3 text-blue-500" />
            Places to Visit in {tripPlan.location}
          </h2>
          <div className="space-y-12">
            {tripPlan.aiGeneratedContent.itinerary.map((day, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 pb-12 last:pb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Day {day.day}</h3>
                
                {/* Morning Activities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Morning</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {day.morning.map((activity, actIndex) => (
                      <div key={actIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-48">
                          <a href={getGoogleMapsUrl(activity.address)} target="_blank" rel="noopener noreferrer">
                            <ImageWithFallback
                              src={activity.imageUrl}
                              alt={activity.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </a>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <div className="flex items-center">
                              <FiStar className="text-yellow-400 mr-1" />
                              <span className="font-medium">{activity.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h5 className="font-bold text-lg text-gray-900 mb-2">{activity.name}</h5>
                          <div className="flex items-center text-gray-600 mb-3">
                            <FiMapPin className="mr-2 flex-shrink-0" />
                            <span className="text-sm">{activity.address}</span>
                          </div>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Afternoon Activities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Afternoon</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {day.afternoon.map((activity, actIndex) => (
                      <div key={actIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-48">
                          <a href={getGoogleMapsUrl(activity.address)} target="_blank" rel="noopener noreferrer">
                            <ImageWithFallback
                              src={activity.imageUrl}
                              alt={activity.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </a>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <div className="flex items-center">
                              <FiStar className="text-yellow-400 mr-1" />
                              <span className="font-medium">{activity.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h5 className="font-bold text-lg text-gray-900 mb-2">{activity.name}</h5>
                          <div className="flex items-center text-gray-600 mb-3">
                            <FiMapPin className="mr-2 flex-shrink-0" />
                            <span className="text-sm">{activity.address}</span>
                          </div>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evening Activities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Evening</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {day.evening.map((activity, actIndex) => (
                      <div key={actIndex} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-48">
                          <a href={getGoogleMapsUrl(activity.address)} target="_blank" rel="noopener noreferrer">
                            <ImageWithFallback
                              src={activity.imageUrl}
                              alt={activity.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </a>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <div className="flex items-center">
                              <FiStar className="text-yellow-400 mr-1" />
                              <span className="font-medium">{activity.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h5 className="font-bold text-lg text-gray-900 mb-2">{activity.name}</h5>
                          <div className="flex items-center text-gray-600 mb-3">
                            <FiMapPin className="mr-2 flex-shrink-0" />
                            <span className="text-sm">{activity.address}</span>
                          </div>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaUtensils className="mr-3 text-blue-500" />
            Recommended Restaurants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tripPlan.aiGeneratedContent.restaurants.map((restaurant, index) => (
              <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <a href={getGoogleMapsUrl(restaurant.address)} target="_blank" rel="noopener noreferrer">
                    <ImageWithFallback
                      src={restaurant.imageUrl}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-green-600 font-bold text-lg">{formatPrice(restaurant.priceRange)}</p>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FiClock className="mr-2" />
                    <span className="text-sm">{restaurant.openingHours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FiDollarSign className="mr-3 text-blue-500" />
            Estimated Trip Cost
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Accommodation</h4>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.accommodation * tripPlan.daysToSpend)}</p>
              <span className="text-sm text-gray-500">for {tripPlan.daysToSpend} nights</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Activities</h4>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.activities * tripPlan.daysToSpend)}</p>
              <span className="text-sm text-gray-500">for {tripPlan.daysToSpend} days</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Food</h4>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.food * tripPlan.daysToSpend)}</p>
              <span className="text-sm text-gray-500">for {tripPlan.daysToSpend} days</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Transportation</h4>
              <p className="text-2xl font-bold text-gray-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.transportation * tripPlan.daysToSpend)}</p>
              <span className="text-sm text-gray-500">for {tripPlan.daysToSpend} days</span>
            </div>
          </div>
          <div className="mt-6 p-6 bg-blue-50 rounded-xl">
            <h4 className="text-sm font-medium text-blue-600 mb-2">Total Estimated Cost</h4>
            <p className="text-3xl font-bold text-blue-900">{formatPrice(tripPlan.aiGeneratedContent.budgetBreakdown.total * tripPlan.daysToSpend)}</p>
            <span className="text-sm text-blue-600">for {tripPlan.daysToSpend} days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsPage; 