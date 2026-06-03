import { motion } from 'motion/react';
import { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

export default function EasterEgg() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden cursor-pointer group bg-black"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 ${isRevealed ? 'blur-0 scale-100' : 'blur-2xl scale-110 opacity-30'}`}
      >
        {/* Using a high-end car reveal placeholder video */}
        <source src="https://cdn.pixabay.com/video/2019/12/30/30744-382902640_large.mp4" type="video/mp4" />
      </video>
      
      <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-colors duration-1000 ${isRevealed ? 'bg-black/20' : 'bg-black/90'}`}>
        <motion.div 
          animate={{ 
            scale: isRevealed ? 0.8 : 1,
            opacity: isRevealed ? 0 : 1
          }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center">
            {isRevealed ? <Unlock size={64} className="text-white" /> : <Lock size={64} className="text-white/40" />}
          </div>
          <p className="text-4xl md:text-6xl font-black text-white tracking-[1em] mb-4">CLASSIFIED</p>
          <p className="text-lg text-gray-500 uppercase tracking-[0.5em]">Hover to bypass security</p>
        </motion.div>

        {isRevealed && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-4">
              THE BEAST
            </h2>
            <p className="text-red-500 font-mono text-xl tracking-widest animate-pulse">
              ACCESS GRANTED : PROJECT VELOCITY
            </p>
          </motion.div>
        )}
      </div>

      <div className="absolute top-10 right-10 z-20">
         <p className="text-[10px] text-white/20 font-mono rotate-90 origin-right tracking-[2em]">AUTHENTICATION REQUIRED</p>
      </div>
    </section>
  );
}
