/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Campaigns } from './components/Campaigns';
import { Personalization } from './components/Personalization';
import { Products } from './components/Products';
import { Social } from './components/Social';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="bg-white text-zinc-900 font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Campaigns />
        <Personalization />
        <Products />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
