
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = ['Home', 'About', 'Readings', 'Order'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter"
      >
        SG.
      </motion.div>
      <div className="flex space-x-8">
        {navItems.map((item, idx) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
