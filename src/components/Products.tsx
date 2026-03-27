import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Joy Original',
    desc: 'The classic taste that brings people together.',
    color: 'bg-red-600',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Joy Zero',
    desc: 'Zero sugar. 100% feeling.',
    color: 'bg-zinc-900',
    img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Joy Cherry',
    desc: 'A bold twist on the classic.',
    color: 'bg-purple-800',
    img: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1974&auto=format&fit=crop'
  }
];

export function Products() {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase tracking-tight mb-4">
            Find Your Flavor
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Refreshment for every mood, every moment, everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="group relative rounded-3xl overflow-hidden bg-zinc-100 aspect-[3/4] flex flex-col items-center justify-end p-8 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Product Image Placeholder */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Abstract Bottle Shape */}
              <motion.div 
                className={`w-32 h-64 ${product.color} rounded-t-3xl rounded-b-xl mb-8 shadow-2xl relative z-10`}
                whileHover={{ y: -20, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-1/3 w-full h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                   <span className="text-white font-black tracking-widest text-sm uppercase transform -rotate-90">JOY</span>
                </div>
              </motion.div>

              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-2">{product.name}</h3>
                <p className="text-zinc-600 font-medium mb-6">{product.desc}</p>
                <button className="text-zinc-900 font-bold border-b-2 border-zinc-900 pb-1 hover:text-red-600 hover:border-red-600 transition-colors uppercase tracking-wider text-sm">
                  Discover More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
