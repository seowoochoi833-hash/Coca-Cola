import { motion } from 'motion/react';

export function Campaigns() {
  return (
    <section id="campaigns" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase tracking-tight mb-4">
            Uncap the Magic
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Join the movement. Find your rhythm. Share your story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="group relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop" 
              alt="Summer Music Festival" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="inline-block px-4 py-1 bg-red-600 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                Live Event
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Joy Sounds<br/>Summer Fest
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-sm">
                Win VIP tickets to the biggest music event of the year. Scan any Joy bottle to enter.
              </p>
              <button className="text-white font-bold border-b-2 border-white pb-1 hover:text-red-400 hover:border-red-400 transition-colors uppercase tracking-wider">
                Join the Party
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="group relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1964&auto=format&fit=crop" 
              alt="Gaming Tournament" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="inline-block px-4 py-1 bg-purple-600 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                Gaming
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Level Up<br/>Your Game
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-sm">
                Unlock exclusive in-game content and gear. Fuel your late-night sessions.
              </p>
              <button className="text-white font-bold border-b-2 border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-colors uppercase tracking-wider">
                Unlock Rewards
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
