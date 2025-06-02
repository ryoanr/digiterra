import React from 'react';
import { Code, Smartphone, Palette, BarChart3, Lightbulb, Globe } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Creating responsive, high-performance websites and web applications that deliver exceptional user experiences.',
    icon: <Code className="h-8 w-8" />,
    href: '#web-dev'
  },
  {
    title: 'Mobile Applications',
    description: 'Building native and cross-platform mobile apps that engage users with intuitive interfaces and powerful functionality.',
    icon: <Smartphone className="h-8 w-8" />,
    href: '#mobile-apps'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting beautiful, user-centered designs that elevate your brand and create meaningful connections with your audience.',
    icon: <Palette className="h-8 w-8" />,
    href: '#design'
  },
  {
    title: 'Digital Marketing',
    description: 'Developing data-driven strategies that increase visibility, drive traffic, and convert visitors into loyal customers.',
    icon: <BarChart3 className="h-8 w-8" />,
    href: '#marketing'
  },
  {
    title: 'Brand Strategy',
    description: 'Creating compelling brand identities and strategies that differentiate your business and resonate with your target audience.',
    icon: <Lightbulb className="h-8 w-8" />,
    href: '#strategy'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your online presence through technical optimization, content strategy, and performance enhancements.',
    icon: <Globe className="h-8 w-8" />,
    href: '#seo'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
            Transforming Ideas into Digital Reality
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a comprehensive suite of digital services to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <a href={service.href} className="block">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 text-primary-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;