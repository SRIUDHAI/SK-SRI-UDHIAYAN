import { motion } from 'motion/react';
import { APPS } from '../data.ts';

export default function AppShowcase() {
  return (
    <section className="bg-black py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            APPLICATIONS
          </motion.h2>
          <div className="h-1 w-24 bg-purple-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {APPS.map((app) => (
            <div 
              key={app.id} 
              className="relative h-[80vh] w-full overflow-hidden rounded-3xl group border border-white/5"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src={app.videoUrl} type="video/mp4" />
              </video>
              
              <div className={`relative z-10 flex flex-col items-center justify-center h-full bg-gradient-to-t ${app.accentColor} via-black/40 to-transparent p-12`}>
                <motion.img 
                  src={app.logo} 
                  alt={`${app.name} Logo`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-40 h-40 object-contain mb-8 drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase mb-4"
                >
                  {app.name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 font-light"
                >
                  {app.description}
                </motion.p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all shadow-xl"
                >
                  Launch App
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
