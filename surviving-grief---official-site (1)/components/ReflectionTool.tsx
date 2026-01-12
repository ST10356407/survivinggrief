
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGriefReflection } from '../services/geminiService';
import { ReflectionResponse } from '../types';

const ReflectionTool: React.FC = () => {
  const [reflection, setReflection] = useState<ReflectionResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchReflection = async () => {
    setLoading(true);
    const data = await getGriefReflection();
    setReflection(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchReflection();
  }, []);

  return (
    <section id="readings" className="py-24 px-8 md:px-24 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-light mb-8">Daily Reflection</h2>
          <div className="h-64 flex flex-col items-center justify-center relative bg-black/40 border border-white/5 p-8 rounded-sm">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-500 italic"
                >
                  Listening to the silence...
                </motion.div>
              ) : (
                reflection && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xl md:text-2xl font-serif text-gray-200 mb-6 italic leading-relaxed">
                      "{reflection.reflection}"
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                      {reflection.authorNote}
                    </p>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
          
          <button
            onClick={fetchReflection}
            disabled={loading}
            className="mt-12 group flex items-center justify-center mx-auto space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-widest">New Reflection</span>
            <div className={`w-2 h-2 rounded-full bg-white transition-all duration-300 group-hover:scale-125 ${loading ? 'animate-pulse' : ''}`}></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReflectionTool;
