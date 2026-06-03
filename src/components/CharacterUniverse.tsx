import { motion } from 'motion/react';
import { CHARACTERS } from '../data.ts';

export default function CharacterUniverse() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-black via-[#0a001a] to-purple-950 py-32">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-white text-center mb-4 tracking-tighter"
          >
            CHARACTER UNIVERSE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-purple-300 text-center max-w-2xl mx-auto"
          >
            Meet the coaches and guides from our upcoming animation film production. Each character is meticulously designed for high-fidelity storytelling.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {CHARACTERS.map((char, index) => (
            <motion.div 
              key={char.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] border border-white/5">
                <img 
                  src={char.imageUrl} 
                  alt={char.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{char.name}</h3>
                  <div className="h-0.5 w-0 group-hover:w-12 bg-purple-500 transition-all duration-300" />
                  <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">Master Character</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
