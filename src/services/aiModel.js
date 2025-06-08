import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY);

export const generateAITripPlan = async(tripData) => {
    try {
        console.log('Starting AI trip plan generation with data:', tripData);

        // Add timeout for the entire operation
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Trip plan generation timed out after 30 seconds')), 30000);
        });

        // Get the generative model
        const model = genAI.getGenerativeModel({
            model: 'gemini-pro',
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
            }
        });

        // Create the prompt for the AI
        const prompt = `Generate a detailed ${tripData.daysToSpend}-day trip plan for ${tripData.location} with the following preferences:
- Number of travelers: ${tripData.preferences.numberOfPeople}
- Budget level: ${tripData.preferences.budget}
- Travel style: ${tripData.preferences.travelStyle}
- Accommodation type: ${tripData.preferences.accommodation}

IMPORTANT: Respond with ONLY a valid JSON object, no other text. The JSON must follow this exact structure:
{
  "hotels": [
    {
      "name": "Hotel name",
      "address": "Full address",
      "priceRange": "Price per night",
      "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "rating": 4.5,
      "bookingLink": "https://booking.com/hotel"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "morning": [
        {
          "name": "Activity name",
          "address": "Location address",
          "imageUrl": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
          "ticketPrice": 25,
          "rating": 4.5,
          "openingHours": "9:00 AM - 5:00 PM",
          "description": "Activity description",
          "distance": "2.5 km",
          "travelTime": "15 mins"
        }
      ],
      "afternoon": [...],
      "evening": [...]
    }
  ],
  "restaurants": [
    {
      "name": "Restaurant name",
      "address": "Full address",
      "priceRange": "Price range",
      "cuisine": "Cuisine type",
      "rating": 4.5,
      "openingHours": "11:00 AM - 10:00 PM",
      "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    }
  ],
  "budgetBreakdown": {
    "accommodation": 150,
    "activities": 75,
    "food": 50,
    "transportation": 30,
    "total": 305
  }
}`;

        console.log('Sending prompt to AI model...');

        // Race the API call with a timeout
        const result = await Promise.race([
            model.generateContent(prompt),
            timeoutPromise
        ]);

        console.log('Received response from AI model');

        if (!result || !result.response) {
            throw new Error('No response received from AI model');
        }

        const response = await result.response;
        const text = response.text();

        console.log('Raw AI response:', text.substring(0, 200) + '...');

        // Parse the JSON response
        try {
            // Find the JSON object in the response
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('No JSON object found in the response');
            }

            const tripPlan = JSON.parse(jsonMatch[0]);
            console.log('Successfully parsed JSON response');

            // Validate the response structure
            if (!tripPlan.hotels || !tripPlan.itinerary || !tripPlan.restaurants || !tripPlan.budgetBreakdown) {
                throw new Error('Invalid response structure');
            }

            // Validate each section
            if (!Array.isArray(tripPlan.hotels) || tripPlan.hotels.length === 0) {
                throw new Error('No hotels found in response');
            }

            if (!Array.isArray(tripPlan.itinerary) || tripPlan.itinerary.length === 0) {
                throw new Error('No itinerary found in response');
            }

            if (!Array.isArray(tripPlan.restaurants) || tripPlan.restaurants.length === 0) {
                throw new Error('No restaurants found in response');
            }

            if (!tripPlan.budgetBreakdown.accommodation || !tripPlan.budgetBreakdown.total) {
                throw new Error('Invalid budget breakdown');
            }

            // Add default image URLs if missing
            tripPlan.hotels = tripPlan.hotels.map(hotel => ({
                ...hotel,
                imageUrl: hotel.imageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
            }));

            tripPlan.itinerary = tripPlan.itinerary.map(day => ({
                ...day,
                morning: day.morning.map(activity => ({
                    ...activity,
                    imageUrl: activity.imageUrl || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'
                })),
                afternoon: day.afternoon.map(activity => ({
                    ...activity,
                    imageUrl: activity.imageUrl || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'
                })),
                evening: day.evening.map(activity => ({
                    ...activity,
                    imageUrl: activity.imageUrl || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800'
                }))
            }));

            tripPlan.restaurants = tripPlan.restaurants.map(restaurant => ({
                ...restaurant,
                imageUrl: restaurant.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
            }));

            console.log('Successfully generated trip plan');
            return tripPlan;

        } catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            console.error('Raw response that failed to parse:', text);
            throw new Error('Failed to parse AI response: ' + parseError.message);
        }

    } catch (error) {
        console.error('Error in generateAITripPlan:', error);
        if (error.message.includes('timed out')) {
            throw new Error('Trip plan generation took too long. Please try again.');
        }
        throw new Error('Failed to generate trip plan: ' + error.message);
    }
};

// Helper function to generate a description for a place
export const generateDescription = async(place) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt = `Generate a brief, engaging description for ${place.name} in ${place.location}. Focus on what makes it special and why tourists should visit. Keep it under 100 words.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating description:', error);
        return 'No description available.';
    }
};

// Helper function to generate an image URL for a place
export const generatePlaceImage = async(place) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const prompt = `Generate a realistic image URL for ${place.name} in ${place.location}. The image should be high quality and show the main attraction.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const imageUrl = response.text().trim();

        // Validate the image URL
        if (!imageUrl.startsWith('http')) {
            throw new Error('Invalid image URL generated');
        }

        return imageUrl;
    } catch (error) {
        console.error('Error generating image URL:', error);
        return 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800';
    }
};

// Function to generate images for places - with fallback
export const generatePlaceImageFallback = async(placeName) => {
    try {
        if (!placeName) {
            throw new Error('Place name is required');
        }

        const prompt = `Generate a beautiful, high-quality image of ${placeName} that would be suitable for a travel website. The image should be realistic and showcase the location's best features.`;
        console.log('Generating image for:', placeName);

        // Add timeout for image generation
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Image generation timed out')), 15000);
        });

        const result = await Promise.race([
            genAI.generateContent(prompt),
            timeoutPromise
        ]);

        if (!result || !result.response) {
            throw new Error('No response from AI model for image generation');
        }

        const response = await result.response;
        const imageUrl = response.text();

        if (!imageUrl || !imageUrl.includes('https://images.unsplash.com/')) {
            console.warn('Invalid image URL generated, using fallback');
            return getDefaultImageForPlace(placeName);
        }

        return imageUrl;
    } catch (error) {
        console.error('Error generating image:', error);
        return getDefaultImageForPlace(placeName);
    }
};

// Get default image based on place type
const getDefaultImageForPlace = (placeName) => {
    const placeLower = placeName.toLowerCase();

    if (placeLower.includes('beach') || placeLower.includes('coast')) {
        return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800';
    } else if (placeLower.includes('mountain') || placeLower.includes('hill')) {
        return 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800';
    } else if (placeLower.includes('museum') || placeLower.includes('gallery')) {
        return 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800';
    } else if (placeLower.includes('restaurant') || placeLower.includes('cafe')) {
        return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800';
    } else if (placeLower.includes('hotel') || placeLower.includes('resort')) {
        return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800';
    } else {
        return 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800';
    }
};

// Function to generate descriptions with improved reliability
export const generateDescriptionFallback = async(placeName) => {
    try {
        if (!placeName) {
            throw new Error('Place name is required');
        }

        const prompt = `Write a brief, engaging description of ${placeName} that would be suitable for a travel website. Include key attractions and what makes it special. Keep it under 100 words.`;
        console.log('Generating description for:', placeName);

        // Add timeout for description generation
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Description generation timed out')), 15000);
        });

        const result = await Promise.race([
            genAI.generateContent(prompt),
            timeoutPromise
        ]);

        if (!result || !result.response) {
            throw new Error('No response from AI model for description generation');
        }

        const response = await result.response;
        const description = response.text();

        if (!description || description.length < 20) {
            console.warn('Invalid description generated, using fallback');
            return getDefaultDescriptionForPlace(placeName);
        }

        return description;
    } catch (error) {
        console.error('Error generating description:', error);
        return getDefaultDescriptionForPlace(placeName);
    }
};

// Get default description based on place type
const getDefaultDescriptionForPlace = (placeName) => {
    const placeLower = placeName.toLowerCase();

    if (placeLower.includes('beach') || placeLower.includes('coast')) {
        return `Discover the stunning beauty of ${placeName}, where golden sands meet crystal-clear waters. Perfect for relaxation, water activities, and breathtaking sunsets.`;
    } else if (placeLower.includes('mountain') || placeLower.includes('hill')) {
        return `Experience the majestic ${placeName}, offering spectacular views, hiking trails, and fresh mountain air. A paradise for nature lovers and adventure seekers.`;
    } else if (placeLower.includes('museum') || placeLower.includes('gallery')) {
        return `Explore the fascinating collections at ${placeName}, showcasing important cultural artifacts and artistic treasures. An enriching experience for visitors of all ages.`;
    } else if (placeLower.includes('restaurant') || placeLower.includes('cafe')) {
        return `Savor delicious cuisine at ${placeName}, where expert chefs create memorable dining experiences. Known for its welcoming atmosphere and exceptional service.`;
    } else if (placeLower.includes('hotel') || placeLower.includes('resort')) {
        return `Enjoy a luxurious stay at ${placeName}, offering comfortable accommodations, excellent amenities, and attentive service to ensure a memorable visit.`;
    } else {
        return `Discover the charm and unique character of ${placeName}, a destination that offers unforgettable experiences and creates lasting memories for travelers from around the world.`;
    }
};

// New function to integrate Google Maps place data
export const getPlaceDetailsFromGoogleMaps = async(placeName, googleMapsServices) => {
    try {
        if (!placeName || !googleMapsServices || !googleMapsServices.placesService) {
            console.warn('Missing required parameters for Google Maps place details');
            return null;
        }

        console.log('Fetching place details for:', placeName);

        // Create a promise to handle the async callback
        return new Promise((resolve, reject) => {
            const request = {
                query: placeName,
                fields: ['name', 'formatted_address', 'geometry', 'photos', 'rating', 'user_ratings_total', 'types']
            };

            googleMapsServices.placesService.findPlaceFromQuery(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length > 0) {
                    console.log('Found place details:', results[0]);
                    resolve(results[0]);
                } else {
                    console.warn('No place details found for:', placeName, 'Status:', status);
                    resolve(null);
                }
            });
        });
    } catch (error) {
        console.error('Error fetching place details:', error);
        return null;
    }
};

// New function to generate nearby attractions
export const generateNearbyAttractions = async(location, googleMapsServices) => {
    try {
        if (!location || !googleMapsServices || !googleMapsServices.placesService) {
            console.warn('Missing required parameters for nearby attractions');
            return [];
        }

        console.log('Finding nearby attractions for:', location);

        // Get place details first
        const placeDetails = await getPlaceDetailsFromGoogleMaps(location, googleMapsServices);

        if (!placeDetails || !placeDetails.geometry || !placeDetails.geometry.location) {
            console.warn('No valid location found for nearby search');
            return [];
        }

        // Create a promise to handle the async callback
        return new Promise((resolve, reject) => {
            const request = {
                location: placeDetails.geometry.location,
                radius: 5000,
                type: ['tourist_attraction', 'point_of_interest']
            };

            googleMapsServices.placesService.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    console.log('Found nearby attractions:', results.length);

                    // Format the results
                    const attractions = results.slice(0, 10).map(place => ({
                        name: place.name,
                        address: place.vicinity,
                        imageUrl: place.photos && place.photos.length > 0 ?
                            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}` : getDefaultImageForPlace(place.name),
                        rating: place.rating || 4.5,
                        coordinates: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }
                    }));

                    resolve(attractions);
                } else {
                    console.warn('No nearby attractions found. Status:', status);
                    resolve([]);
                }
            });
        });
    } catch (error) {
        console.error('Error finding nearby attractions:', error);
        return [];
    }
};