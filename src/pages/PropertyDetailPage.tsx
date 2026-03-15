import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, Car, Wifi, Dumbbell, Shield, Phone, Mail, Heart, Share2, Camera } from 'lucide-react';

const PropertyDetailPage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  const property = {
    id: 1,
    title: 'Luxury Penthouse Downtown',
    location: 'Manhattan, New York',
    price: '$2,450,000',
    beds: 3,
    baths: 2,
    area: '2,500 sq ft',
    yearBuilt: 2020,
    parking: 2,
    type: 'Penthouse',
    status: 'For Sale',
    description: 'Experience luxury living at its finest in this stunning penthouse located in the heart of Manhattan. This exceptional property offers breathtaking city views, premium finishes, and world-class amenities. The open-concept design seamlessly blends modern sophistication with comfort, featuring floor-to-ceiling windows that flood the space with natural light.',
    features: [
      'Floor-to-ceiling windows',
      'Private rooftop terrace',
      'Premium hardwood floors',
      'Gourmet kitchen with island',
      'Master suite with walk-in closet',
      'Smart home automation',
      'Central air conditioning',
      'In-unit laundry'
    ],
    amenities: [
      { icon: Wifi, name: 'High-Speed Internet' },
      { icon: Dumbbell, name: 'Fitness Center' },
      { icon: Car, name: 'Parking Garage' },
      { icon: Shield, name: '24/7 Security' }
    ],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2846142/pexels-photo-2846142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    agent: {
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      phone: '+1 (555) 123-4567',
      email: 'sarah@dreamestate.com',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Image Gallery */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Image Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors">
            <Camera className="h-5 w-5 text-gray-600" />
          </button>
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                    {property.price}
                  </div>
                  <div className="text-sm text-gray-600">{property.status}</div>
                </div>
              </div>
              
              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center">
                  <Bed className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{property.area}</div>
                  <div className="text-sm text-gray-600">Area</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{property.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Year Built</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                    <amenity.icon className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-sm text-gray-700 text-center">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
              <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.3111418599!2d-73.969231!3d40.7590615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sgh!4v1772326992859!5m2!1sen!2sgh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Agent Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{property.agent.name}</h3>
                  <p className="text-purple-600 font-medium">{property.agent.title}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{property.agent.email}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Tour
                  </button>
                  <button 
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Contact Agent
                  </button>
                </div>
                
                {/* Contact Form */}
                {showContactForm && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Mortgage Calculator */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount</label>
                    <input
                      type="text"
                      defaultValue="$2,450,000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="text"
                      defaultValue="3.5"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (years)</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>30</option>
                      <option>25</option>
                      <option>20</option>
                      <option>15</option>
                    </select>
                  </div>
                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                    Calculate
                  </button>
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
                    <p className="text-2xl font-bold text-purple-600">$11,247</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;