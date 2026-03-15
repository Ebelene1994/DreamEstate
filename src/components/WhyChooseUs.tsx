import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Agents',
      description: 'Our certified real estate professionals have years of experience and a proven track record of success.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Verified Listings',
      description: 'All properties are thoroughly verified and inspected to ensure quality and authenticity.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Get round-the-clock assistance from our dedicated customer support team whenever you need help.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the leading real estate platform with multiple industry awards and certifications.',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose DreamEstate?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional service and helping you find your perfect property
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;