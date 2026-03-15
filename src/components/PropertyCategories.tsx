import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Home, Building2, Store } from 'lucide-react';

const PropertyCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Luxury Apartments',
      icon: Building,
      image: 'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      count: '150+ Properties'
    },
    {
      id: 2,
      title: 'Premium Villas',
      icon: Home,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      count: '85+ Properties'
    },
    {
      id: 3,
      title: 'Modern Offices',
      icon: Building2,
      image: 'https://images.pexels.com/photos/2846142/pexels-photo-2846142.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      count: '120+ Properties'
    },
    {
      id: 4,
      title: 'Commercial Spaces',
      icon: Store,
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      count: '95+ Properties'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Property Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of premium properties tailored to your lifestyle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Background Image */}
              <div className="h-64 bg-cover bg-center relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm text-white/80">{category.count}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <button 
                    onClick={() => navigate('/properties')}
                    className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
                  >
                    View Properties →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;