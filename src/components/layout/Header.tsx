import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
          <Zap className="h-5 w-5 text-primary" />
          <span>SwiftSign-In</span>
        </Link>
        {/* Navigation could be added here in the future */}
      </div>
    </header>
  );
};

export default Header;