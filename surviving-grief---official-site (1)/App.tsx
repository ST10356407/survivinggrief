
import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAuthor from './components/AboutAuthor';
import ReflectionTool from './components/ReflectionTool';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-zinc-800 selection:text-white">
      <Preloader />
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="py-24 flex items-center justify-center border-y border-white/5">
          <div className="text-center px-4">
            <h3 className="text-xl md:text-3xl font-light italic text-gray-500 max-w-2xl mx-auto leading-relaxed">
              "Grief is not a disorder, a disease or a sign of weakness. It is an emotional, physical and spiritual necessity, the price you pay for love."
            </h3>
          </div>
        </section>

        <AboutAuthor />
        
        <ReflectionTool />

        <Reviews />

        <section id="order" className="py-32 px-8 md:px-24 bg-black flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-12">Begin the <span className="italic">Journey</span>.</h2>
          <div className="w-24 h-[1px] bg-white/20 mb-12"></div>
          <p className="text-gray-400 max-w-xl mb-12 text-lg">
            Hardcover, eBook, and Audio editions available worldwide through all major retailers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {['Amazon', 'Barnes & Noble', 'Apple Books', 'IndieBound'].map(store => (
              <button key={store} className="py-6 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
                {store}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
