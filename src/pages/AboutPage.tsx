import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <About />
      <Testimonials />
    </div>
  );
};

export default AboutPage;