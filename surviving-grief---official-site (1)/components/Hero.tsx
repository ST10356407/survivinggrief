
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50 z-0"></div>
      
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center mb-12 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-500 uppercase tracking-[0.3em] text-sm block mb-4">A journey through loss</span>
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight">
            Surviving <br />
            <span className="italic text-gray-400">Grief</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed font-light">
            Finding light in the architecture of loss. A contemporary guide to navigating the most difficult human experience with grace and resilience.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300">
              Buy Now
            </button>
            <button className="px-10 py-4 border border-white/20 text-white text-sm uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
              Read Sample
            </button>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 z-10 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="w-64 h-auto md:w-80 shadow-2xl overflow-hidden relative group">
             {/* Book Image */}
             <img 
               src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" 
               alt="Surviving Grief by Shashika Ramesar" 
               className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-700"
               style={{ boxShadow: '20px 20px 60px rgba(0,0,0,0.5)' }}
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
             {/* Using the user's provided book cover visual style if the local image is missing */}
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity">
                <span className="text-white text-xs tracking-widest uppercase">Shashika Ramesar</span>
             </div>
          </div>
          {/* Subtle shadow glow */}
          <div className="absolute -inset-10 bg-white/5 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
