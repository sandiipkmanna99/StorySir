import React from 'react';
import { motion } from 'framer-motion';
import { Camera, PenTool, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-[120px] pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           >
              <h1 className="text-5xl md:text-6xl font-bold mb-8">About <span className="text-accent">Story Sir</span></h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-6">
                A solo traveler, observer, and storyteller capturing India one quiet moment at a time.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I started "Explore with Story Sir" not to document vacations, but to archive feelings. In a world that rushes, I choose to pause. My work is an ode to the slow, the overlooked, and the beautifully mundane aspects of travel.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
           >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-accent-border relative z-10">
                 <img src="https://picsum.photos/600/800?grayscale" alt="Portrait" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dashed border-accent/30 rounded-2xl z-0" />
           </motion.div>
        </div>

        <div className="mb-24">
           <h2 className="text-2xl font-bold mb-12 text-center">My Philosophy</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Observe', icon: <Camera size={28} />, text: 'Seeing what others miss in the rush.' },
                { title: 'Reflect', icon: <PenTool size={28} />, text: 'Turning sights into insights.' },
                { title: 'Connect', icon: <Map size={28} />, text: 'Finding home in unknown places.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-xl border border-white/5 text-center hover:border-accent/30 transition-colors">
                   <div className="text-accent flex justify-center mb-4">{item.icon}</div>
                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                   <p className="text-text-secondary">{item.text}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="text-center p-12 bg-surface/50 rounded-2xl border border-accent-border">
           <h3 className="text-3xl font-bold mb-4">Join the Journey</h3>
           <p className="text-text-secondary mb-8">Follow along for daily stories and visual inspiration.</p>
           <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-[#070709] rounded text-xs uppercase tracking-widest text-accent border border-accent/20">Instagram</span>
              <span className="px-4 py-2 bg-[#070709] rounded text-xs uppercase tracking-widest text-accent border border-accent/20">Twitter</span>
              <span className="px-4 py-2 bg-[#070709] rounded text-xs uppercase tracking-widest text-accent border border-accent/20">YouTube</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;