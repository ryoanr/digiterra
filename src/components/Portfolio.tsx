import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

const categories = ['All', 'Web Design', 'Mobile', 'Branding', 'Marketing'];

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A complete e-commerce solution with advanced product filtering, user accounts, and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/3912368/pexels-photo-3912368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive mobile app for tracking workouts, nutrition, and personal health metrics.',
    tags: ['React Native', 'Firebase', 'HealthKit'],
    link: '#'
  },
  {
    id: 3,
    title: 'Corporate Identity Design',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/4048419/pexels-photo-4048419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete brand identity including logo design, color palette, typography, and brand guidelines.',
    tags: ['Branding', 'Logo Design', 'Brand Strategy'],
    link: '#'
  },
  {
    id: 4,
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Integrated marketing campaign that increased conversions by 45% through targeted advertising.',
    tags: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
    link: '#'
  },
  {
    id: 5,
    title: 'Financial Services Dashboard',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/7821479/pexels-photo-7821479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Real-time data visualization dashboard for financial metrics and analytics reporting.',
    tags: ['Vue.js', 'D3.js', 'Python', 'REST API'],
    link: '#'
  },
  {
    id: 6,
    title: 'Travel Companion App',
    category: 'Mobile',
    image: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Location-based travel app with personalized recommendations and offline capabilities.',
    tags: ['Flutter', 'Firebase', 'Google Maps API'],
    link: '#'
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">Our Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
            Our Latest Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our recent projects that showcase our expertise and creativity across different industries.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-primary-900/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a 
                    href={project.link} 
                    className="px-5 py-3 bg-white text-primary-600 rounded-full font-medium flex items-center"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs uppercase tracking-wider rounded-full px-3 py-1 font-medium">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;