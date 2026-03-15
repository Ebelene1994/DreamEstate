import React from 'react';
import { Phone, Mail, MapPin, Star, Award, Users, TrendingUp } from 'lucide-react';

const AgentsPage = () => {

  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      specialization: 'Luxury Properties',
      experience: '8 years',
      phone: '+1 (555) 123-4567',
      email: 'sarah@dreamestate.com',
      location: 'Manhattan, NY',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 127,
      sales: 156,
      bio: 'Sarah specializes in luxury properties in Manhattan with over 8 years of experience. She has helped hundreds of clients find their dream homes and investment properties.',
      achievements: ['Top Agent 2023', 'Luxury Specialist', 'Client Choice Award']
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Investment Property Specialist',
      specialization: 'Commercial & Investment',
      experience: '12 years',
      phone: '+1 (555) 234-5678',
      email: 'michael@dreamestate.com',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 89,
      sales: 203,
      bio: 'Michael is an expert in commercial and investment properties with a proven track record of maximizing returns for his clients.',
      achievements: ['Investment Expert', 'Commercial Specialist', 'Top Performer']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Residential Sales Agent',
      specialization: 'First-Time Buyers',
      experience: '5 years',
      phone: '+1 (555) 345-6789',
      email: 'emily@dreamestate.com',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 94,
      sales: 78,
      bio: 'Emily specializes in helping first-time homebuyers navigate the real estate market with patience and expertise.',
      achievements: ['Rising Star', 'First-Time Buyer Expert', 'Customer Service Award']
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Luxury Home Specialist',
      specialization: 'High-End Properties',
      experience: '15 years',
      phone: '+1 (555) 456-7890',
      email: 'david@dreamestate.com',
      location: 'Beverly Hills, CA',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5.0,
      reviews: 156,
      sales: 234,
      bio: 'David is a veteran agent specializing in luxury properties with an impeccable reputation and extensive network.',
      achievements: ['Luxury Expert', 'Top Producer', 'Lifetime Achievement']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      title: 'Property Manager & Agent',
      specialization: 'Rental Properties',
      experience: '7 years',
      phone: '+1 (555) 567-8901',
      email: 'lisa@dreamestate.com',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 73,
      sales: 145,
      bio: 'Lisa combines property management expertise with sales skills to provide comprehensive real estate services.',
      achievements: ['Property Management Expert', 'Rental Specialist', 'Service Excellence']
    },
    {
      id: 6,
      name: 'Robert Martinez',
      title: 'Commercial Real Estate Agent',
      specialization: 'Office & Retail Spaces',
      experience: '10 years',
      phone: '+1 (555) 678-9012',
      email: 'robert@dreamestate.com',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 112,
      sales: 189,
      bio: 'Robert specializes in commercial real estate with extensive experience in office buildings and retail spaces.',
      achievements: ['Commercial Expert', 'Deal Maker', 'Industry Leader']
    }
  ];

  const AgentCard = ({ agent }: { agent: any }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative">
        <img 
          src={agent.image} 
          alt={agent.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">{agent.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{agent.name}</h3>
          <p className="text-purple-600 font-medium mb-2">{agent.title}</p>
          <p className="text-sm text-gray-600">{agent.specialization} • {agent.experience} experience</p>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{agent.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{agent.bio}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="text-lg font-bold text-purple-600">{agent.sales}</div>
            <div className="text-xs text-gray-600">Sales</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">{agent.reviews}</div>
            <div className="text-xs text-gray-600">Reviews</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">{agent.rating}</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {agent.achievements.slice(0, 2).map((achievement: string, index: number) => (
            <span key={index} className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
              {achievement}
            </span>
          ))}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{agent.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            <span>{agent.email}</span>
          </div>
        </div>
        

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Expert Agents
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our experienced team of real estate professionals is here to help you achieve your property goals
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Expert Agents</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">1,200+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Top Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who will guide you through your real estate journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you a passionate real estate professional? Join our award-winning team and take your career to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Careers
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;