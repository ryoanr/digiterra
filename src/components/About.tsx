import React from 'react';
import { Check, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Completed Projects', value: '250+' },
  { label: 'Happy Clients', value: '100+' },
  { label: 'Team Members', value: '30+' }
];

const values = [
  {
    title: 'Innovation',
    description: 'We continuously explore new technologies and approaches to deliver cutting-edge solutions.',
    icon: <TrendingUp className="h-6 w-6 text-accent-500" />
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do, from code quality to client communication.',
    icon: <Award className="h-6 w-6 text-accent-500" />
  },
  {
    title: 'Collaboration',
    description: 'We believe in working closely with our clients, treating their goals as our own and becoming true partners.',
    icon: <Users className="h-6 w-6 text-accent-500" />
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">About Digiterra</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
              We Create Digital Experiences That Matter
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2015, Digiterra has grown from a small team of passionate developers to a full-service digital agency with a global client base. We combine technical expertise with creative thinking to deliver solutions that drive real business results.
            </p>
            
            <div className="mt-8 space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {value.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-1 text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                Work With Us
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team meeting" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team working" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Design discussion" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8">
                  <img 
                    src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Coding" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-6 w-11/12 z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="p-2">
                    <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;