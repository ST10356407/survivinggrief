
import React from 'react';
import { motion } from 'framer-motion';

const AboutAuthor: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-zinc-900 overflow-hidden relative"
          >
            <img 
              src="https://picsum.photos/seed/author_shashika/800/1000?grayscale" 
              alt="Shashika Ramesar" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">About the Author</h2>
            <div className="w-12 h-[1px] bg-white/20 mb-8"></div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Shashika Ramesar is a profound voice in the landscape of contemporary healing and emotional wellness. With a background in psychology and a deep, personal understanding of loss, Shashika has dedicated her work to guiding others through the shadows.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              In "Surviving Grief," she bridges the gap between clinical understanding and the raw, unpolished human experience. This book isn't just a guide; it's a companion for the long nights when the world feels far away.
            </p>
            <div className="pt-6">
               <h4 className="text-sm uppercase tracking-widest mb-4">Inside the Book</h4>
               <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>The Physics of Loss: Why time slows down.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>Rebuilding the Architecture of Self.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>The Art of Remembering without Hurting.</span>
                  </li>
               </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
