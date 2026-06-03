/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import CompanyShowcase from './components/CompanyShowcase.tsx';
import AppShowcase from './components/AppShowcase.tsx';
import SkWavelab from './components/SkWavelab.tsx';
import CharacterUniverse from './components/CharacterUniverse.tsx';
import EasterEgg from './components/EasterEgg.tsx';
import Footer from './components/Footer.tsx';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Hero />
      <About />
      <CompanyShowcase />
      <AppShowcase />
      
      {/* WaveLab Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] py-32 flex items-center">
        {/* Ambient Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-xl z-0 scale-110"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/30/86866-595333596_large.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container mx-auto px-8">
          <div className="text-center mb-16">
            <motion.img 
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              src="https://i.ibb.co/zH453sBf/Gemini-Generated-Image-21vyon21vyon21vy.png" 
              alt="SK WaveLab Logo"
              className="w-32 h-32 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">SK WAVELAB</h2>
            <p className="text-xl text-purple-400 font-mono tracking-widest uppercase">Original Music Production</p>
          </div>
          
          <SkWavelab />
          
          {/* Additional WaveLab Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
              <img 
                src="https://i.ibb.co/KP7psmG/Generated-Image-September-18-2025-7-22-AM.png" 
                alt="SK WaveLab Studio"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-2xl font-bold text-white tracking-widest uppercase italic">The Studio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CharacterUniverse />
      
      {/* Productions Section */}
      <section className="bg-black py-32 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase">Productions</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/9nnDMMmlI78?si=2OMqR4hDiuVIkEMb" 
                title="SK Dreamforge Productions #1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            
            <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Qd-Ma0xfETA?si=wlE_Wsuzr54wgiLD" 
                title="SK Dreamforge Productions #2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <EasterEgg />
      <Footer />

      {/* Global Cinematic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] border-[1.5rem] border-black opacity-10" />
      <div className="fixed inset-0 pointer-events-none z-[99] radial-gradient shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
    </div>
  );
}

