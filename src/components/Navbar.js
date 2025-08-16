import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                    {/* Logo and Left Navigation */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
              <img 
                src="/assets/logo.png" 
                alt="Create Music Group Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  console.log('Logo failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent hidden"
                style={{ display: 'none' }}
              >
                
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/label-bridge" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Label Bridge
              </Link>
            </div>
          </div>

                    {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/label-bridge">
              <button
                className="px-6 py-2 rounded-full font-semibold oio-animated-gradient text-white transition-all duration-500 relative overflow-hidden"
                style={{
                  minWidth: '120px',
                }}
              >
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/label-bridge" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                Label Bridge
              </Link>
              <Link to="/label-bridge">
                <button
                  className="w-full px-6 py-2 rounded-full font-semibold oio-animated-gradient text-white transition-all duration-500 relative overflow-hidden"
                >
                  Label Bridge Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;