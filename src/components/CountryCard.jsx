import { Link } from 'react-router-dom';
import { FiMapPin, FiStar, FiGlobe, FiDollarSign, FiArrowRight } from 'react-icons/fi';

const CountryCard = ({ country }) => {
  const {
    id,
    name,
    image,
    description,
    rating,
    popularPlaces,
    currency,
    language,
  } = country;

  // Add image size parameters to optimize loading
  const optimizedImage = `${image}?w=800&q=80`;

  return (
    <Link to={`/country/${id}`} className="group block h-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden">
          <img
            src={optimizedImage}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center shadow-lg">
            <FiStar className="text-yellow-400 mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-gray-800 text-base sm:text-lg">{rating}</span>
          </div>

          {/* Country Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
              {name}
            </h3>
            <div className="flex items-center text-white/90">
              <FiMapPin className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base md:text-lg">{popularPlaces} Popular Places</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6 flex-grow flex flex-col bg-gradient-to-b from-white to-gray-50">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 line-clamp-2 flex-grow">{description}</p>

          {/* Country Details */}
          <div className="space-y-3 sm:space-y-4">
            {/* Currency and Language */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-700 bg-gray-50 p-2.5 sm:p-3 md:p-4 rounded-xl gap-2 sm:gap-0">
              <div className="flex items-center">
                <FiDollarSign className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">{currency}</span>
              </div>
              <div className="flex items-center">
                <FiGlobe className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <span className="font-semibold text-sm sm:text-base md:text-lg">{language}</span>
              </div>
            </div>

            {/* Explore Button */}
            <div className="flex items-center justify-between text-blue-600 font-bold text-sm sm:text-base md:text-lg bg-blue-50 p-2.5 sm:p-3 md:p-4 rounded-xl group-hover:bg-blue-100 transition-colors">
              <span>Explore Now</span>
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-6 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard; 