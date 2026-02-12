import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, MapPin, Share2 } from 'lucide-react';
import { STORIES, ROUTES } from '../constants';

const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = STORIES.find(s => s.id === id);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Story not found</h2>
        <Link to={ROUTES.STORIES} className="text-accent underline">Return to Stories</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/30 via-transparent to-[#070709]" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6">
          <motion.div 
            style={{ opacity }}
            className="max-w-[1000px] mx-auto w-full text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 mx-auto">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{story.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
              {story.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-white/90">
               <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {story.date}</span>
               <span className="flex items-center gap-2"><Clock size={16} className="text-accent" /> {story.readTime}</span>
               <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> {story.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-[#0f0f14] p-8 md:p-12 rounded-t-3xl border-t border-l border-r border-accent-border/30 shadow-2xl">
          <p className="text-xl md:text-2xl leading-relaxed font-serif text-white/90 mb-12 border-l-4 border-accent pl-6 italic">
            {story.excerpt}
          </p>

          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-p:text-text-secondary prose-p:leading-8 prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: story.fullContent || '<p>Content coming soon...</p>' }} 
          />
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="aspect-[4/5] bg-surface rounded-lg overflow-hidden">
                <img src={`https://picsum.photos/600/800?random=${parseInt(story.id) + 20}`} alt="Atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="aspect-[4/5] bg-surface rounded-lg overflow-hidden mt-0 md:mt-12">
                <img src={`https://picsum.photos/600/800?random=${parseInt(story.id) + 30}`} alt="Details" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
          </div>

          <p className="text-text-secondary leading-8">
            As the sun set, casting long shadows across the valley, I realized that some places don't just exist on a map. They exist in the spaces between our thoughts, waiting for us to be quiet enough to find them.
          </p>

          {/* Footer Actions */}
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
             <Link to={ROUTES.STORIES} className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
                <ArrowLeft size={20} />
                <span>Back to Stories</span>
             </Link>
             <button className="flex items-center gap-2 text-accent hover:text-white transition-colors">
                <Share2 size={20} />
                <span>Share Story</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;