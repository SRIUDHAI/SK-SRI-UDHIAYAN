import { motion } from 'motion/react';
import { Company } from '../types.ts';
import { COMPANIES } from '../data.ts';

export default function CompanyShowcase() {
  return (
    <div className="bg-black">
      {COMPANIES.map((company, index) => (
        <section 
          key={company.id}
          className={`relative min-h-screen w-full overflow-hidden flex items-center bg-gradient-to-br ${company.gradient || ''}`}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          >
            <source src={company.videoUrl} type="video/mp4" />
          </video>
          
          <div className="relative z-10 container mx-auto px-8 py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {company.logo && (
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`}
                  className="w-48 md:w-64 h-auto mx-auto mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  referrerPolicy="no-referrer"
                />
              )}
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">{company.name}</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                {company.description}
              </p>
              
              {company.images && company.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
                  {company.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="relative group overflow-hidden rounded-lg shadow-2xl border border-white/10"
                    >
                      <img 
                        src={img} 
                        className="w-full h-80 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
