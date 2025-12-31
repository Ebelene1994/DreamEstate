import React from 'react';
import Hero from '../components/Hero';
import PropertyCategories from '../components/PropertyCategories';
import FeaturedListings from '../components/FeaturedListings';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PropertyCategories />
      <FeaturedListings />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;