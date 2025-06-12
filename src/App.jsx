import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import TestimonialsSection from './components/Testimonial';
import Expertise from './components/Expertise';
import { ContactForm } from './components/Contact';
import useSmoothScroll from './hooks/useSmoothScroll';  // adjust path if different

const Home = () => {

  useSmoothScroll(); // activate Lenis magic

  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <TestimonialsSection />
      <ContactForm />
      <Expertise />
    </>
  )
}

export default Home;
