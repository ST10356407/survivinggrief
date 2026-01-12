
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-8 md:px-24 bg-black border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-2">Surviving Grief</h2>
          <p className="text-xs text-gray-500 tracking-wider">© 2024 Shashika Ramesar. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <a href="#" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Press Inquiries</a>
          <a href="#" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Speaking</a>
          <a href="#" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Newsletter</a>
        </div>
      </div>
      <div className="mt-12 text-[10px] text-gray-700 tracking-widest uppercase text-center">
        Photography by Minimalist Collective
      </div>
    </footer>
  );
};

export default Footer;
