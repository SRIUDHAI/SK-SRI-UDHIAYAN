import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://cdn.pixabay.com/video/2019/12/30/30744-382902640_large.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-[0.2em] mb-4">
            SRI UDHAIYAN
          </h1>
          <div className="h-px w-24 bg-white/50 mx-auto mb-8" />
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-[0.5em] uppercase">
            Creator <span className="text-white/20 mx-2">·</span> Developer <span className="text-white/20 mx-2">·</span> Visionary
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
