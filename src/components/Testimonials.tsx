import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Buyer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'DreamEstate made finding my dream home effortless. Their team was professional, knowledgeable, and helped me through every step of the process. I couldn\'t be happier with the service!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Real Estate Investor',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As an investor, I need reliable market insights and quality listings. DreamEstate consistently delivers both. Their platform is intuitive and their agents are top-notch.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'First-time Homebuyer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Being a first-time buyer was overwhelming, but DreamEstate\'s team guided me through everything. They were patient, informative, and helped me secure the perfect home within my budget.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Property Seller',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Selling my property through DreamEstate was a smooth experience. They provided excellent marketing, professional photography, and found qualified buyers quickly. Highly recommended!'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
            
            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTest.text}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {currentTest.name}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {currentTest.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;