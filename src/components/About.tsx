import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="bg-black py-40 px-8 relative overflow-hidden" id="about">
       {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
               <span className="text-purple-500 font-mono tracking-[0.5em] uppercase text-sm">Autobiography</span>
               <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-8">
                  SRI UDHAIYAN
               </h2>
            </div>

            <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light text-justify">
              <p>
                Sri Udhaiyan is a determined and self-taught young creator from Thanjavur, Tamil Nadu, India, who has begun building a strong foundation in technology at just fifteen years old. With nothing more than a mobile phone in his early days, he explored the digital world out of pure curiosity and passion. 
              </p>
              <p>
                His journey took a turning point during a science exhibition inspired by Puthiya Thalaimurai. Motivated to build a robot, he received a crucial gift from his elder brother, Pugazh Vendhan: a Dell Inspiron 15 5000 series (Ryzen 5 2500U, 8GB RAM). This laptop became the backbone of his learning and creation, for which he remains deeply grateful.
              </p>
              <p>
                At age 15, he successfully published his website, "SK Group of Company," as a testament to his self-learning ability. Beyond web development, he is crafting a digital ecosystem of applications, media productions like "Dreamforge Productions," and visual content with "SpiEoH Pictures."
              </p>
              <p>
                Son of Sridevi and Karthikeyan, Sri studied at Seventh Day Adventist Matriculation Higher Secondary School, balancing academic life with his relentless pursuit of technological mastery. His story is one of resilience, starting with a phone and ending with the creation of a vast digital identity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
               <div>
                  <p className="text-5xl font-black text-white italic tracking-tighter">15</p>
                  <p className="text-xs text-purple-500 uppercase tracking-widest mt-1">Founder Since age</p>
               </div>
               <div>
                  <p className="text-5xl font-black text-white italic tracking-tighter">5+</p>
                  <p className="text-xs text-purple-500 uppercase tracking-widest mt-1">Active Companies</p>
               </div>
               <div>
                  <p className="text-5xl font-black text-white italic tracking-tighter">15+</p>
                  <p className="text-xs text-purple-500 uppercase tracking-widest mt-1">Original Characters</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.1)] relative group">
               <img 
                 src="https://i.ibb.co/1JKtMrbJ/1780501225576-2.jpg" 
                 alt="Sri Udhaiyan Master Portrait" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
               <div className="absolute bottom-10 left-10">
                  <h3 className="text-white text-2xl font-bold tracking-widest uppercase italic">The Creator</h3>
                  <p className="text-gray-400 font-mono text-sm">Thanjavur, Tamil Nadu</p>
               </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
