import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactCTA from './components/ContactCTA';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white"><Rocket size={18} /></span>
            <span>Flames Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#layanan" className="hover:text-indigo-600">Layanan</a>
            <a href="#portfolio" className="hover:text-indigo-600">Portofolio</a>
            <a href="#kontak" className="hover:text-indigo-600">Kontak</a>
          </nav>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            Konsultasi Gratis
          </a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <ContactCTA />
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-8 text-sm text-gray-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Flames Studio. Semua hak dilindungi.</div>
            <div className="flex items-center gap-4">
              <a href="#layanan" className="hover:text-indigo-600">Layanan</a>
              <a href="#portfolio" className="hover:text-indigo-600">Portofolio</a>
              <a href="#kontak" className="hover:text-indigo-600">Kontak</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
