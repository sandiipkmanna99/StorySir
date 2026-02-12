import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES, STORIES } from '../constants';
import StoryCard from '../components/StoryCard';

const Home: React.FC = () => {
  const featuredStories = STORIES.slice(0, 3);
  
  // Specific images for the hero cluster
  const heroImages = [
    STORIES[0].image, // Center
    STORIES[1].image, // Top Right
    STORIES[2].image, // Bottom Left
    STORIES[3].image, // Top Left
    STORIES[4].image  // Bottom Right
  ];

  return (
    <div className="w-full bg-[#070709] overflow-hidden">
      
      {/* HERO SECTION - MATCHING SCREENSHOT */}
      <section className="relative min-h-screen flex items-center pt-[80px] pb-20 px-6">
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  IMMERSIVE TRAVEL SERIES
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Explore <span className="text-accent">The World</span> That Actually Matters
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
                20 years of travel. 6 years archiving stories. I don't show tourists spots — I show you the soul of the place.
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-6 mb-10 text-sm font-medium text-white/50">
                 <span className="text-white">6,700+ Subscribers</span>
                 <span className="w-1 h-1 rounded-full bg-white/20"></span>
                 <span>20+ Years Experience</span>
                 <span className="w-1 h-1 rounded-full bg-white/20"></span>
                 <span>NatGeo Featured</span>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to={ROUTES.STORIES}
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-[#070709] rounded-lg font-bold text-base hover:bg-white transition-colors duration-300 text-center"
                >
                  Explore Stories
                </Link>
                <Link 
                  to={ROUTES.ABOUT}
                  className="w-full sm:w-auto px-8 py-4 border border-accent text-accent rounded-lg font-bold text-base hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={18} fill="currentColor" />
                  Watch Film
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Floating Image Cluster */}
          <div className="relative h-[400px] md:h-[600px] w-full order-1 lg:order-2 perspective-1000">
             {/* Center Main Image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[280px] aspect-[3/4] z-20 rounded-2xl overflow-hidden border-4 border-[#070709] shadow-2xl"
             >
                <img src={heroImages[0]} alt="Hero Center" className="w-full h-full object-cover" />
             </motion.div>

             {/* Surrounding Images */}
             <motion.div 
               initial={{ opacity: 0, x: 50, y: -50 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="absolute top-[5%] right-[10%] md:right-[15%] w-[140px] md:w-[180px] aspect-[3/4] z-10 rounded-xl overflow-hidden opacity-80 rotate-6 shadow-xl"
             >
                <img src={heroImages[1]} alt="Hero 1" className="w-full h-full object-cover" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -50, y: 50 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="absolute bottom-[5%] left-[5%] md:left-[10%] w-[150px] md:w-[200px] aspect-[3/4] z-10 rounded-xl overflow-hidden opacity-80 -rotate-3 shadow-xl"
             >
                <img src={heroImages[2]} alt="Hero 2" className="w-full h-full object-cover" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -50, y: -50 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="absolute top-[10%] left-[5%] w-[120px] md:w-[160px] aspect-[3/4] z-0 rounded-xl overflow-hidden opacity-60 -rotate-12 blur-[1px]"
             >
                <img src={heroImages[3]} alt="Hero 3" className="w-full h-full object-cover" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50, y: 50 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="absolute bottom-[15%] right-[5%] w-[130px] md:w-[170px] aspect-[3/4] z-0 rounded-xl overflow-hidden opacity-60 rotate-12 blur-[1px]"
             >
                <img src={heroImages[4]} alt="Hero 4" className="w-full h-full object-cover" />
             </motion.div>
          </div>

        </div>
      </section>

      {/* RECENT STORIES GRID */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Dispatches</h2>
              <p className="text-text-secondary">Fresh from the archives.</p>
            </div>
            <Link to={ROUTES.STORIES} className="text-sm font-bold text-accent hover:text-white transition-colors mb-2 flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStories.map((story, idx) => (
              <StoryCard key={story.id} story={story} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 px-6 bg-[#0f0f14]">
        <div className="max-w-[1000px] mx-auto text-center">
           <Star className="w-12 h-12 text-accent mx-auto mb-6" />
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
             Not just a travel blog. <br />
             <span className="text-white/40">A study in solitude.</span>
           </h2>
           <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto">
             Most travel content is about "Top 10 places to visit". This is about the feeling of being there. 
             The smell of rain in the Himalayas, the chaos of Varanasi, the silence of Spiti.
           </p>
           <Link to={ROUTES.ABOUT} className="text-accent font-bold uppercase tracking-widest border-b border-accent pb-1 hover:text-white hover:border-white transition-all">
             Read Our Manifesto
           </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;