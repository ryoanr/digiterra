import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const words = ["Innovate", "Transform", "Grow", "Succeed"];
  
  useEffect(() => {
    let currentIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    let typingSpeed = 150;
    
    const type = () => {
      const word = words[currentIndex];
      
      if (isDeleting) {
        currentWord = word.substring(0, currentWord.length - 1);
      } else {
        currentWord = word.substring(0, currentWord.length + 1);
      }
      
      if (textRef.current) {
        textRef.current.textContent = currentWord;
      }
      
      if (!isDeleting && currentWord === word) {
        isDeleting = true;
        typingSpeed = 100;
        setTimeout(type, 1500); // Pause at complete word
      } else if (isDeleting && currentWord === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        typingSpeed = 150;
        setTimeout(type, 500); // Pause before next word
      } else {
        setTimeout(type, typingSpeed);
      }
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 z-0"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik0yOS41IDEyYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwbTE5IDE4LjVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtLTM5IDEuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMG0xOSAxOC41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Helping businesses <br />
              <span className="text-accent-400">
                <span ref={textRef} className="inline-block min-w-[120px]">Innovate</span>
              </span> <br />
              in the digital age
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              We transform ideas into exceptional digital experiences that drive growth and create meaningful connections with your audience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#work" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              >
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digiterra Team Collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="px-3 py-1 bg-accent-500 text-white text-xs uppercase tracking-wider rounded-full font-medium">Featured Project</span>
                <h3 className="mt-2 text-xl font-bold text-white">Transforming Brand Experiences</h3>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary-600/20 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/20 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-[slideDown_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;