import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-red-600">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop" 
          alt="Friends laughing and sharing a drink" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-transparent to-red-600/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Taste the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">Feeling.</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-3xl text-white/90 font-medium mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Every drop is a moment waiting to be shared.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-white text-red-600 font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 uppercase tracking-wide">
            Share a Joy
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
