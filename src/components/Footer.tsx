import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-black text-5xl tracking-tighter block mb-6 text-red-600">JOY.</span>
            <p className="text-zinc-400 max-w-sm mb-8 text-lg">
              Spreading happiness, one drop at a time. Join the global community of joy seekers.
            </p>
            <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
              <span>Find Near You</span>
            </button>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-zinc-500">Explore</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Campaigns</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">History</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-zinc-500">Support</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Joy Beverage Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Global</a>
            <a href="#" className="hover:text-white transition-colors">English</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
