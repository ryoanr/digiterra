import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-primary-950' }) => {
  return (
    <div className={`flex items-center ${color}`}>
      <Zap className="w-7 h-7 text-accent-500" strokeWidth={2} />
      <span className="ml-2 text-xl font-display font-semibold">Digiterra</span>
    </div>
  );
};

export default Logo;