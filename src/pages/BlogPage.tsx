import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const BlogPage = () => {
  const navigate = useNavigate();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [nlMessage, setNlMessage] = useState('');

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNlStatus('loading');
    setNlMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setNlStatus('success');
        setNlMessage(data.message);
        setNewsletterEmail('');
        setTimeout(() => {
          setNlStatus('idle');
          setNlMessage('');
        }, 5000);
      } else {
        setNlStatus('error');
        setNlMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch {
      setNlStatus('error');
      setNlMessage('Unable to subscribe. Please check your connection.');
    }
  };

  const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Buying Your First Home in 2024',
    excerpt: 'Navigate the complex world of real estate with our comprehensive guide designed specifically for first-time homebuyers. Learn about market trends, financing options, and essential tips.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Buying Guide',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 Neighborhoods to Watch in 2024',
      excerpt: 'Discover the emerging neighborhoods that offer the best investment potential and lifestyle benefits for homebuyers.',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Market Trends',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'How to Stage Your Home for a Quick Sale',
      excerpt: 'Professional staging tips that can help you sell your property faster and for a better price in today\'s competitive market.',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Selling Tips',
      image: 'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Understanding Mortgage Rates and Market Predictions',
      excerpt: 'Get insights into current mortgage rates, market predictions, and how they might affect your home buying decisions.',
      author: 'David Thompson',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Finance',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Luxury Real Estate: What Buyers Want in 2024',
      excerpt: 'Explore the latest trends in luxury real estate and what high-end buyers are looking for in premium properties.',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Luxury Market',
      image: 'https://images.pexels.com/photos/2846142/pexels-photo-2846142.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Investment Properties: Building Wealth Through Real Estate',
      excerpt: 'Learn the fundamentals of real estate investing and how to build a profitable property portfolio.',
      author: 'Robert Martinez',
      date: 'March 3, 2024',
      readTime: '9 min read',
      category: 'Investment',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 7,
      title: 'The Rise of Smart Homes: Technology in Real Estate',
      excerpt: 'Discover how smart home technology is transforming the real estate market and what buyers should know.',
      author: 'Sarah Johnson',
      date: 'March 1, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const categories = [
    'All Posts',
    'Buying Guide',
    'Selling Tips',
    'Market Trends',
    'Investment',
    'Luxury Market',
    'Finance',
    'Technology'
  ];

  const BlogCard = ({ post }: { post: any }) => (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <button 
          onClick={() => navigate(`/blog/${post.id}`)}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Estate Insights & News
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and expert advice from our real estate professionals
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Article</h2>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-bold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate(`/blog/${featuredPost.id}`)}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-fit"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest real estate insights, market updates, and expert tips.
          </p>
          <form onSubmit={handleNewsletterSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={nlStatus === 'loading'}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {nlStatus === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>

            {/* Inline Feedback */}
            {nlStatus === 'success' && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-green-600 text-sm">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span>{nlMessage}</span>
              </div>
            )}
            {nlStatus === 'error' && (
              <div className="mt-4 flex items-center justify-center space-x-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{nlMessage}</span>
              </div>
            )}
          </form>
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
  );
};

export default BlogPage;