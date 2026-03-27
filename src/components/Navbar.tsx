import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Search, User, MapPin } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-red-600 text-white shadow-lg' : 'bg-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer lg:hidden" />
            <span className="font-black text-3xl tracking-tighter">JOY.</span>
          </div>
          <div className="hidden lg:flex space-x-8 font-bold text-sm uppercase tracking-wider">
            <a href="#explore" className="hover:text-red-200 transition-colors">Explore</a>
            <a href="#campaigns" className="hover:text-red-200 transition-colors">Campaigns</a>
            <a href="#products" className="hover:text-red-200 transition-colors">Products</a>
            <a href="#stories" className="hover:text-red-200 transition-colors">Stories</a>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer hover:text-red-200" />
            <MapPin className="h-5 w-5 cursor-pointer hover:text-red-200" />
            <User className="h-5 w-5 cursor-pointer hover:text-red-200" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
