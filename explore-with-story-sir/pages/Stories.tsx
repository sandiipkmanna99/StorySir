import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STORIES } from '../constants';
import StoryCard from '../components/StoryCard';

const CATEGORIES = ['All', 'Mountains', 'Temples', 'Villages', 'Solitude'];

const Stories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStories = activeCategory === 'All' 
    ? STORIES 
    : STORIES.filter(story => story.category === activeCategory);

  return (
    <div className="min-h-screen pt-[120px] pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Journals</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of visual essays and written memories from the road less traveled.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-accent text-[#070709]' 
                  : 'bg-surface border border-white/10 text-text-secondary hover:border-accent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </motion.div>

        {filteredStories.length === 0 && (
          <div className="text-center py-20 text-text-tertiary">
            No stories found in this category yet.
          </div>
        )}

        {/* Infinite Scroll Indicator (Visual Only) */}
        <div className="text-center mt-24">
          <div className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce mx-1" style={{ animationDelay: '0s' }} />
          <div className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce mx-1" style={{ animationDelay: '0.2s' }} />
          <div className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce mx-1" style={{ animationDelay: '0.4s' }} />
        </div>

      </div>
    </div>
  );
};

export default Stories;