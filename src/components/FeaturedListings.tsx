import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const FeaturedListings = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleViewDetails = (propertyId: number) => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/property/${propertyId}` } } });
    } else {
      navigate(`/property/${propertyId}`);
    }
  };

  const properties = [
    {
      id: 1,
      title: 'Luxury Penthouse Downtown',
      location: 'Manhattan, New York',
      price: '$2,450,000',
      beds: 3,
      baths: 2,
      area: '2,500 sq ft',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Villa with Pool',
      location: 'Beverly Hills, CA',
      price: '$3,250,000',
      beds: 4,
      baths: 3,
      area: '3,200 sq ft',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Contemporary Apartment',
      location: 'Miami Beach, FL',
      price: '$1,850,000',
      beds: 2,
      baths: 2,
      area: '1,800 sq ft',
      image: 'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Waterfront Condo',
      location: 'San Francisco, CA',
      price: '$2,100,000',
      beds: 3,
      baths: 2,
      area: '2,200 sq ft',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Historic Townhouse',
      location: 'Boston, MA',
      price: '$1,650,000',
      beds: 4,
      baths: 3,
      area: '2,800 sq ft',
      image: 'https://images.pexels.com/photos/2846142/pexels-photo-2846142.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 6,
      title: 'Skyline Loft',
      location: 'Chicago, IL',
      price: '$1,950,000',
      beds: 2,
      baths: 2,
      area: '1,900 sq ft',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in prime locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Favorite Button */}
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>
              
              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-purple-600">
                    {property.price}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleViewDetails(property.id)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {user ? 'View Details' : 'Sign In to View'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/properties')}
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;