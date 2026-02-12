import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-accent-border py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="text-2xl font-bold">
            <span className="text-accent">Explore</span>
            <span className="text-white">with Story Sir</span>
          </div>
          <p className="text-text-tertiary text-sm max-w-xs text-center md:text-left">
            Capturing the soul of travel through slow journeys, deep observations, and honest storytelling.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-text-secondary">
          <Link to={ROUTES.STORIES} className="hover:text-accent transition-colors">Stories</Link>
          <Link to={ROUTES.ABOUT} className="hover:text-accent transition-colors">About</Link>
          <Link to={ROUTES.CONTACT} className="hover:text-accent transition-colors">Contact</Link>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <div className="flex space-x-6 text-text-secondary">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
          <div className="text-xs text-text-tertiary uppercase tracking-wider">
            © 2026 Explore with Story Sir
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;