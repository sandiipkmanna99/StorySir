import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${scrolled ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-bold text-black text-lg">S</div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">Story Sir</span>
          </div>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', path: ROUTES.HOME },
            { label: 'Stories', path: ROUTES.STORIES },
            { label: 'About', path: ROUTES.ABOUT },
            { label: 'Contact', path: ROUTES.CONTACT },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(link.path) ? 'text-accent' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA (Desktop) */}
        <div className="hidden md:block">
          <Link
            to={ROUTES.STORIES}
            className="px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-semibold hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
          >
            Start Reading
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#070709] z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
             {[
                { label: 'Home', path: ROUTES.HOME },
                { label: 'Stories', path: ROUTES.STORIES },
                { label: 'About', path: ROUTES.ABOUT },
                { label: 'Contact', path: ROUTES.CONTACT },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;