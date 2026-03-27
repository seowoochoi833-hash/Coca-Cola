import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export function Social() {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
              #JoyMoments
            </h2>
            <p className="text-xl text-zinc-400">
              Real people. Real joy. Tag us to be featured on our global wall.
            </p>
          </div>
          <div className="flex space-x-4 mt-8 md:mt-0">
            <a href="#" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Masonry-style grid placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1523624536762-212d28f0b71b?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1530649581165-4f3020c02117?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop'
          ].map((img, i) => (
            <motion.div 
              key={i}
              className={`rounded-2xl overflow-hidden ${i === 1 || i === 2 ? 'md:col-span-2 md:row-span-2' : ''} aspect-square`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img src={img} alt="User generated content" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
