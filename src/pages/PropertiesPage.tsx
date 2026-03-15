import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Filter, Grid, List } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const PropertiesPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    location: '',
    type: 'all',
    status: 'all',
    priceRange: 'all',
    bedrooms: 'all',
    bathrooms: 'all'
  });

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
      featured: true,
      type: 'apartment',
      status: 'sale'
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
      featured: false,
      type: 'villa',
      status: 'sale'
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
      featured: true,
      type: 'apartment',
      status: 'sale'
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
      featured: false,
      type: 'condo',
      status: 'sale'
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
      featured: true,
      type: 'townhouse',
      status: 'sale'
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
      featured: false,
      type: 'loft',
      status: 'rent'
    },
    {
      id: 7,
      title: 'Garden Apartment',
      location: 'Seattle, WA',
      price: '$850,000',
      beds: 2,
      baths: 1,
      area: '1,200 sq ft',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: false,
      type: 'apartment',
      status: 'rent'
    },
    {
      id: 8,
      title: 'Executive Office Suite',
      location: 'Downtown LA, CA',
      price: '$4,500/month',
      beds: 0,
      baths: 2,
      area: '1,500 sq ft',
      image: 'https://images.pexels.com/photos/2846142/pexels-photo-2846142.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      featured: false,
      type: 'office',
      status: 'rent'
    }
  ];

  const handleViewDetails = (propertyId: number) => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/property/${propertyId}` } } });
    } else {
      navigate(`/property/${propertyId}`);
    }
  };

  const PropertyCard = ({ property }: { property: any }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {property.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
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
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Properties
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover your perfect property from our extensive collection
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                  >
                    <option value="all">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="office">Office</option>
                    <option value="condo">Condo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                  >
                    <option value="all">All Status</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  >
                    <option value="all">Any Price</option>
                    <option value="0-500k">$0 - $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="2m+">$2M+</option>
                  </select>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            {/* View Toggle and Results */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {properties.length} Properties Found
                </h2>
                <p className="text-gray-600">Showing all available properties</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Properties Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;