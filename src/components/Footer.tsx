import { Mail, Instagram, Twitter, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">SRI UDHAIYAN</h2>
            <p className="text-gray-500 max-w-md text-lg leading-relaxed mb-8">
              Building the future through code, cinema, and character. Join the ecosystem and witness the evolution of digital storytelling.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Github, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#fff' }}
                  className="text-gray-500 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h3>
            <ul className="space-y-4 text-gray-500">
              {['Companies', 'Applications', 'Music Player', 'Character Universe', 'Productions'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get in Touch</h3>
            <a 
              href="mailto:techtamilsk1@gmail.com" 
              className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors mb-4"
            >
              <Mail size={18} />
              <span>techtamilsk1@gmail.com</span>
            </a>
            <div className="p-1 px-3 border border-white/10 rounded-full inline-block text-[10px] text-gray-600 uppercase tracking-widest">
              Available for collaborations
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-gray-600 text-sm font-mono">
            © 2026 SRI UDHAIYAN DIGITAL ECOSYSTEM. ALL RIGHTS RESERVED.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
