import { useState, useEffect } from 'react';
import { FiDollarSign, FiCalendar, FiUsers, FiMapPin, FiSearch, FiLoader, FiInfo } from 'react-icons/fi';

const CostCalculatorPage = () => {
  const initialFormState = {
    destination: '',
    placeId: '',
    duration: '',
    travelers: '',
    accommodation: 'mid-range',
    activities: [],
    currency: 'USD',
    mealPlan: 'standard',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [costBreakdown, setCostBreakdown] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autocompleteService, setAutocompleteService] = useState(null);
  const [placesService, setPlacesService] = useState(null);

  useEffect(() => {
    // Initialize Google Maps services
    if (window.google) {
      setAutocompleteService(new window.google.maps.places.AutocompleteService());
      setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')));
    }
  }, []);

  const getPlaceSuggestions = async (query) => {
    if (!query || !autocompleteService) {
      setSuggestions([]);
      return;
    }

    try {
      const request = {
        input: query,
        types: ['locality', 'administrative_area_level_1', 'country'],
        componentRestrictions: { country: [] }
      };

      autocompleteService.getPlacePredictions(request, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          // Filter out duplicates and format predictions
          const uniquePredictions = predictions.reduce((acc, prediction) => {
            const parts = prediction.description.split(',');
            const cityName = parts[0].trim();
            const country = parts[parts.length - 1].trim();
            const key = `${cityName},${country}`;
            
            if (!acc.has(key)) {
              acc.set(key, {
                ...prediction,
                description: `${cityName}, ${country}`
              });
            }
            return acc;
          }, new Map());

          setSuggestions(Array.from(uniquePredictions.values()));
          setShowSuggestions(true);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      });
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setError('Failed to fetch location suggestions');
    }
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, destination: value, placeId: '' }));
    if (value.length >= 1) {
      getPlaceSuggestions(value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData(prev => ({ 
      ...prev, 
      destination: suggestion.description,
      placeId: suggestion.place_id
    }));
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEstimatedCost(null);
    setCostBreakdown(null);
    setError(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleActivityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      activities: checked
        ? [...prev.activities, value]
        : prev.activities.filter((activity) => activity !== value),
    }));
  };

  const calculateCost = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.placeId) {
      setError('Please select a destination from the suggestions');
      setIsLoading(false);
      return;
    }

    try {
      if (!placesService) {
        throw new Error('Places service not initialized');
      }

      const request = {
        placeId: formData.placeId,
        fields: ['price_level', 'rating', 'reviews', 'name', 'formatted_address']
      };

      placesService.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // Updated base costs for different types of expenses (in USD)
          const baseCosts = {
            accommodation: {
              'budget': 80,    // Budget hotel/hostel
              'mid-range': 200, // Mid-range hotel
              'luxury': 500,   // Luxury hotel
            },
            activities: {
              'sightseeing': 50,  // Daily sightseeing tours
              'museums': 30,     // Museum entries
              'food': 100,       // Daily food expenses
              'shopping': 150,   // Shopping budget
            },
            mealPlan: {
              'budget': 50,      // Basic meals
              'standard': 100,   // Regular restaurants
              'luxury': 200,     // Fine dining
            },
            miscellaneous: 30,    // Daily miscellaneous expenses
          };

          const priceLevel = place.price_level || 2;
          const priceMultiplier = 1 + (priceLevel - 2) * 0.3;

          const duration = parseInt(formData.duration);
          const travelers = parseInt(formData.travelers);
          const accommodation = formData.accommodation;
          const activities = formData.activities;
          const mealPlan = formData.mealPlan;

          // Calculate costs
          const breakdown = {
            accommodation: baseCosts.accommodation[accommodation] * duration * priceMultiplier,
            activities: activities.reduce((sum, activity) => 
              sum + baseCosts.activities[activity] * duration * priceMultiplier, 0),
            meals: baseCosts.mealPlan[mealPlan] * duration * priceMultiplier,
            miscellaneous: baseCosts.miscellaneous * duration * priceMultiplier,
          };

          // Calculate total cost
          let totalCost = Object.values(breakdown).reduce((sum, cost) => sum + cost, 0);
          
          // Multiply by number of travelers
          totalCost *= travelers;

          // Add a buffer for unexpected expenses (10%)
          totalCost *= 1.1;

          // Calculate per person cost
          const perPersonCost = totalCost / travelers;

          setCostBreakdown({
            ...breakdown,
            total: Math.round(totalCost),
            perPerson: Math.round(perPersonCost),
            currency: formData.currency,
          });
          setEstimatedCost(Math.round(totalCost));

          // Reset form after successful calculation
          setFormData(initialFormState);
        } else {
          setError('Failed to get place details. Please try selecting the destination again.');
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.error('Error calculating cost:', error);
      setError('Failed to calculate cost. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Cost Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Get accurate cost estimates based on real-time data
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <form onSubmit={calculateCost} className="space-y-6">
            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleDestinationChange}
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search for a city..."
                  required
                />
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b last:border-b-0"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <div className="flex items-center">
                          <FiMapPin className="mr-3 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-900">{suggestion.description}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Duration and Travelers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (days)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <FiUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Accommodation Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation Type
              </label>
              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="budget">Budget (Hostels/Budget Hotels)</option>
                <option value="mid-range">Mid-Range (3-4 Star Hotels)</option>
                <option value="luxury">Luxury (5-Star Hotels)</option>
              </select>
            </div>

            {/* Meal Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meal Plan
              </label>
              <select
                name="mealPlan"
                value={formData.mealPlan}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="budget">Budget (Basic Meals)</option>
                <option value="standard">Standard (Regular Restaurants)</option>
                <option value="luxury">Luxury (Fine Dining)</option>
              </select>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>

            {/* Activities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activities (select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="sightseeing"
                    checked={formData.activities.includes('sightseeing')}
                    onChange={handleActivityChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Sightseeing Tours</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="museums"
                    checked={formData.activities.includes('museums')}
                    onChange={handleActivityChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Museums & Attractions</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="food"
                    checked={formData.activities.includes('food')}
                    onChange={handleActivityChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Food & Dining</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="shopping"
                    checked={formData.activities.includes('shopping')}
                    onChange={handleActivityChange}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Shopping</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  Calculating...
                </>
              ) : (
                <>
                  <FiDollarSign className="mr-2" />
                  Calculate Cost
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Cost Breakdown Display */}
          {costBreakdown && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cost Breakdown
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Cost:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {costBreakdown.currency} {costBreakdown.total.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost per Person:</span>
                  <span className="text-xl font-semibold text-blue-600">
                    {costBreakdown.currency} {costBreakdown.perPerson.toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-blue-200 pt-4 mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Detailed Breakdown:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accommodation:</span>
                      <span>{costBreakdown.currency} {Math.round(costBreakdown.accommodation).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Activities:</span>
                      <span>{costBreakdown.currency} {Math.round(costBreakdown.activities).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Meals:</span>
                      <span>{costBreakdown.currency} {Math.round(costBreakdown.meals).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Miscellaneous:</span>
                      <span>{costBreakdown.currency} {Math.round(costBreakdown.miscellaneous).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <div className="flex items-start">
                    <FiInfo className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <div className="text-sm text-blue-700">
                      <p>This estimate includes:</p>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>All selected activities and attractions</li>
                        <li>Daily meals based on selected plan</li>
                        <li>10% buffer for unexpected expenses</li>
                      </ul>
                      <p className="mt-2 italic">
                        Prices may vary based on season, availability, and specific choices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CostCalculatorPage; 