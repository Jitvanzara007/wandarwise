import { useState } from 'react';
import Select from 'react-select';
import { FiMapPin, FiCalendar, FiInfo, FiAlertCircle, FiCheckCircle, FiClock, FiDollarSign, FiFileText, FiGlobe } from 'react-icons/fi';

const VisaCheckerPage = () => {
  const [formData, setFormData] = useState({
    nationality: '',
    destination: '',
    purpose: 'tourism',
    duration: '',
    entryType: 'single',
    processingTime: 'standard',
  });

  const [visaInfo, setVisaInfo] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkVisaRequirements = (e) => {
    e.preventDefault();

    // Enhanced visa requirements data
    const visaRequirements = {
      'USA': {
        'Japan': {
          'tourism': {
            required: false,
            maxStay: 90,
            notes: 'Visa-free entry for stays up to 90 days.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 5-7 business days.',
            processingTime: '5-7 business days',
            fees: '$50',
            documents: ['Valid passport', 'Business invitation', 'Company letter', 'Bank statements'],
            restrictions: 'Business activities only',
          },
        },
        'France': {
          'tourism': {
            required: false,
            maxStay: 90,
            notes: 'Visa-free entry for stays up to 90 days within 180-day period.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: false,
            maxStay: 90,
            notes: 'Visa-free entry for business purposes up to 90 days.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Business invitation', 'Return ticket'],
            restrictions: 'Business activities only',
          },
        },
        'Thailand': {
          'tourism': {
            required: false,
            maxStay: 30,
            notes: 'Visa exemption for 30 days. Can be extended once for 30 days.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 3-5 business days.',
            processingTime: '3-5 business days',
            fees: '$60',
            documents: ['Valid passport', 'Business invitation', 'Company registration', 'Bank statements'],
            restrictions: 'Business activities only',
          },
        },
        'Australia': {
          'tourism': {
            required: true,
            maxStay: 90,
            notes: 'ETA (Electronic Travel Authority) required. Valid for 12 months.',
            processingTime: 'Instant to 24 hours',
            fees: '$20',
            documents: ['Valid passport', 'Return ticket', 'Proof of funds'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business ETA required. Valid for 12 months.',
            processingTime: 'Instant to 24 hours',
            fees: '$20',
            documents: ['Valid passport', 'Business invitation', 'Company letter'],
            restrictions: 'Business activities only',
          },
        },
        'UAE': {
          'tourism': {
            required: false,
            maxStay: 30,
            notes: 'Visa on arrival available for 30 days. Can be extended twice.',
            processingTime: 'N/A',
            fees: 'Free',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 3-5 business days.',
            processingTime: '3-5 business days',
            fees: '$150',
            documents: ['Valid passport', 'Business invitation', 'Company registration'],
            restrictions: 'Business activities only',
          },
        },
      },
      'India': {
        'Japan': {
          'tourism': {
            required: true,
            maxStay: 15,
            notes: 'Tourist visa required. Processing time: 5-7 business days.',
            processingTime: '5-7 business days',
            fees: '₹3,000',
            documents: ['Valid passport', 'Bank statements', 'Travel itinerary', 'Hotel bookings'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 7-10 business days.',
            processingTime: '7-10 business days',
            fees: '₹5,000',
            documents: ['Valid passport', 'Business invitation', 'Company letter', 'Bank statements'],
            restrictions: 'Business activities only',
          },
        },
        'France': {
          'tourism': {
            required: true,
            maxStay: 90,
            notes: 'Schengen visa required. Processing time: 15 calendar days.',
            processingTime: '15 calendar days',
            fees: '€80',
            documents: ['Valid passport', 'Bank statements', 'Travel insurance', 'Hotel bookings'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Schengen business visa required. Processing time: 15 calendar days.',
            processingTime: '15 calendar days',
            fees: '€80',
            documents: ['Valid passport', 'Business invitation', 'Company letter', 'Bank statements'],
            restrictions: 'Business activities only',
          },
        },
        'Thailand': {
          'tourism': {
            required: true,
            maxStay: 30,
            notes: 'Visa on arrival available for 30 days. Can be extended once.',
            processingTime: 'N/A',
            fees: '₹2,000',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 3-5 business days.',
            processingTime: '3-5 business days',
            fees: '₹5,000',
            documents: ['Valid passport', 'Business invitation', 'Company registration'],
            restrictions: 'Business activities only',
          },
        },
        'UAE': {
          'tourism': {
            required: true,
            maxStay: 30,
            notes: 'Visa required. Processing time: 3-5 business days.',
            processingTime: '3-5 business days',
            fees: '₹5,000',
            documents: ['Valid passport', 'Bank statements', 'Hotel bookings'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 5-7 business days.',
            processingTime: '5-7 business days',
            fees: '₹7,000',
            documents: ['Valid passport', 'Business invitation', 'Company registration'],
            restrictions: 'Business activities only',
          },
        },
      },
      'UK': {
        'Japan': {
          'tourism': {
            required: false,
            maxStay: 90,
            notes: 'Visa-free entry for stays up to 90 days.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: true,
            maxStay: 90,
            notes: 'Business visa required. Processing time: 5-7 business days.',
            processingTime: '5-7 business days',
            fees: '£50',
            documents: ['Valid passport', 'Business invitation', 'Company letter'],
            restrictions: 'Business activities only',
          },
        },
        'France': {
          'tourism': {
            required: false,
            maxStay: 90,
            notes: 'Visa-free entry for stays up to 90 days within 180-day period.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Return ticket', 'Proof of accommodation'],
            restrictions: 'No work allowed',
          },
          'business': {
            required: false,
            maxStay: 90,
            notes: 'Visa-free entry for business purposes up to 90 days.',
            processingTime: 'N/A',
            fees: 'N/A',
            documents: ['Valid passport', 'Business invitation', 'Return ticket'],
            restrictions: 'Business activities only',
          },
        },
      },
    };

    const { nationality, destination, purpose, duration } = formData;
    const requirements = visaRequirements[nationality]?.[destination]?.[purpose];

    if (requirements) {
      setVisaInfo({
        ...requirements,
        nationality,
        destination,
        purpose,
        duration: parseInt(duration),
      });
    } else {
      setVisaInfo(null);
    }
  };

  // Country options for react-select
  const countryOptions = [
    { value: '', label: 'Select destination' },
    { value: 'Japan', label: 'Japan' },
    { value: 'France', label: 'France' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Australia', label: 'Australia' },
    { value: 'UAE', label: 'United Arab Emirates' },
    { value: 'USA', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Singapore', label: 'Singapore' },
    { value: 'Switzerland', label: 'Switzerland' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Visa Requirements Checker
          </h1>
          <p className="text-xl text-gray-600">
            Check visa requirements for your travel destination
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <form onSubmit={checkVisaRequirements} className="space-y-6">
            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Nationality
              </label>
              <div className="relative">
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your nationality</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Singapore">Singapore</option>
                </select>
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination Country
              </label>
              <div className="relative">
                <Select
                  options={countryOptions}
                  value={countryOptions.find(opt => opt.value === formData.destination)}
                  onChange={option => setFormData(prev => ({ ...prev, destination: option.value }))}
                  classNamePrefix="react-select"
                  placeholder="Select destination"
                  isSearchable
                  menuPlacement="bottom"
                  styles={{
                    control: (base) => ({
                      ...base,
                      paddingLeft: '2.5rem',
                      minHeight: '48px',
                      borderRadius: '0.5rem',
                      borderColor: '#d1d5db',
                      boxShadow: 'none',
                    }),
                    menu: (base) => ({
                      ...base,
                      zIndex: 9999,
                      // Hide scrollbar
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      '::-webkit-scrollbar': {
                        display: 'none',
                      },
                    }),
                  }}
                />
                <FiGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purpose of Visit
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="tourism">Tourism</option>
                <option value="business">Business</option>
                <option value="study">Study</option>
                <option value="work">Work</option>
                <option value="family">Family Visit</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration of Stay (days)
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

            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Check Requirements
            </button>
          </form>

          {/* Visa Information Display */}
          {visaInfo && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Visa Requirements
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  {visaInfo.required ? (
                    <FiAlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  ) : (
                    <FiCheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  )}
                  <span className="font-medium">
                    {visaInfo.required ? 'Visa Required' : 'Visa Not Required'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FiClock className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">
                        Processing Time: {visaInfo.processingTime}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiDollarSign className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">
                        Fees: {visaInfo.fees}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">
                        Maximum Stay: {visaInfo.maxStay} days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    <FiFileText className="mr-2" />
                    {showDetails ? 'Hide Details' : 'Show Details'}
                  </button>

                  {showDetails && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Required Documents:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {visaInfo.documents.map((doc, index) => (
                            <li key={index}>{doc}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Restrictions:</h4>
                        <p className="text-gray-600">{visaInfo.restrictions}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Additional Notes:</h4>
                        <p className="text-gray-600">{visaInfo.notes}</p>
                      </div>
                    </div>
                  )}
                </div>

                {visaInfo.duration > visaInfo.maxStay && (
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                      ⚠️ Your planned stay exceeds the maximum allowed duration.
                      Please consider adjusting your travel dates or applying for a
                      different type of visa.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaCheckerPage; 