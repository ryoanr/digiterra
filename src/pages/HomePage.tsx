import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { ArrowRight, Award, Users, Globe, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Projects Delivered', value: '500+', icon: <Zap className="w-6 h-6 text-accent-500" /> },
    { label: 'Happy Clients', value: '200+', icon: <Users className="w-6 h-6 text-accent-500" /> },
    { label: 'Countries Served', value: '25+', icon: <Globe className="w-6 h-6 text-accent-500" /> },
    { label: 'Industry Awards', value: '15+', icon: <Award className="w-6 h-6 text-accent-500" /> }
  ];

  return (
    <>
      <Hero />
      <Services />
      
      {/* Stats Section */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">Case Studies</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Revolution",
                client: "Fashion Retailer",
                image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                result: "250% increase in online sales"
              },
              {
                title: "Digital Transformation",
                client: "Healthcare Provider",
                image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                result: "40% improvement in patient engagement"
              },
              {
                title: "Mobile App Success",
                client: "Fitness Brand",
                image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                result: "1M+ app downloads in first month"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{study.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-accent-600 font-semibold mb-4">{study.result}</p>
                  <a href="/work" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's work together to create something extraordinary for your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;