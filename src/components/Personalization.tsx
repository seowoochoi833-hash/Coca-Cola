import { useState } from 'react';
import { motion } from 'motion/react';

export function Personalization() {
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setGenerated(true);
    }
  };

  return (
    <section className="py-32 bg-red-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Share a Joy
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Create a personalized digital bottle for someone special. Share the feeling.
        </motion.p>

        {!generated ? (
          <motion.form 
            onSubmit={handleGenerate}
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..." 
              className="w-full px-8 py-5 rounded-full text-zinc-900 text-xl font-bold focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl"
              maxLength={12}
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-zinc-900 text-white px-8 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
            >
              Create
            </button>
          </motion.form>
        ) : (
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="relative w-64 h-96 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center mb-8 overflow-hidden">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-red-700 flex items-center justify-center transform -skew-y-6 shadow-inner">
                <span className="text-4xl font-black text-white uppercase tracking-widest transform skew-y-6">
                  {name}
                </span>
              </div>
              {/* Bottle silhouette hint */}
              <div className="absolute inset-0 border-4 border-white/10 rounded-[4rem] m-4 pointer-events-none"></div>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg">
                Share to IG
              </button>
              <button 
                onClick={() => setGenerated(false)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Make Another
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
