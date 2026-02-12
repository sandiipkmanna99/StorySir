import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-surface border border-white/5 hover:border-accent/30 transition-colors duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={story.image} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
            {story.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center space-x-2 text-text-tertiary text-xs uppercase tracking-widest font-medium mb-3">
          <MapPin size={12} className="text-accent" />
          <span>{story.location}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
          {story.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
          {story.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-text-tertiary font-medium">{story.date}</span>
            <Link 
              to={`/story/${story.id}`}
              className="flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors gap-2"
            >
              <span>Read</span>
              <ArrowRight size={14} />
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;