import React from 'react';
import Services from '../components/Services';
import { Code, Smartphone, Palette, BarChart3, Lightbulb, Globe, CheckCircle2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const technologies = [
    { name: 'React', icon: '/react.svg' },
    { name: 'Node.js', icon: '/nodejs.svg' },
    { name: 'Python', icon: '/python.svg' },
    { name: 'AWS', icon: '/aws.svg' },
    { name: 'Flutter', icon: '/flutter.svg' },
    { name: 'Firebase', icon: '/firebase.svg' }
  ];

  const processSteps = [
    {
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Strategy',
      description: 'Our team develops a comprehensive plan tailored to your specific needs and objectives.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Design',
      description: 'We create beautiful, user-centered designs that align with your brand identity.',
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: 'Development',
      description: 'Our developers bring the designs to life using the latest technologies and best practices.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Testing',
      description: 'Rigorous testing ensures your product works flawlessly across all devices and platforms.',
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: 'Launch',
      description: 'We handle the deployment and provide ongoing support to ensure your success.',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20">
      <Services />
      
      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our proven development process ensures successful project delivery and exceeds client expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">Technologies</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
              Built with the Latest Tech
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We use cutting-edge technologies to build scalable and efficient solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </div>
                <p className="text-gray-900 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-gray-900">
              Common Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to frequently asked questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months."
              },
              {
                question: "What is your pricing model?",
                answer: "We offer flexible pricing models including fixed-price projects and time-and-materials arrangements. Each project is quoted based on specific requirements."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch."
              },
              {
                question: "How do you handle project communication?",
                answer: "We maintain regular communication through scheduled meetings, progress reports, and dedicated project management tools to keep you informed every step of the way."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;