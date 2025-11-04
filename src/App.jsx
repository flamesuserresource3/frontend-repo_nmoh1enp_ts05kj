import Hero from './components/Hero';
import Services from './components/Services';
import AnimatedMockup from './components/AnimatedMockup';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import ContactCTA from './components/ContactCTA';
import { Rocket } from 'lucide-react';

function App() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Flames Studio — Jasa Pembuatan Website UMKM',
    description:
      'Jasa pembuatan website UMKM yang cepat, responsif, dan SEO-ready. Company profile, toko online, hingga landing page profesional.',
    areaServed: 'ID',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    sameAs: [
      'https://wa.me/6281234567890',
      'mailto:halo@agencymu.com'
    ],
    serviceType: 'Web Development',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa biaya pembuatan website UMKM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mulai Rp 3,5 juta untuk landing page profesional. Paket Pro untuk 6-8 halaman mulai Rp 7,5 juta. Kami juga menyediakan paket custom untuk e-commerce dan fitur khusus.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah websitenya SEO-friendly dan responsif?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya. Kami menerapkan struktur heading, title, meta description, dan performa yang baik sehingga ramah SEO. Desain mobile-first memastikan tampilan optimal di semua perangkat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa lama proses pengerjaan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rata-rata 7–21 hari kerja tergantung kompleksitas dan kelengkapan konten. Kami komunikasikan timeline sejak awal.',
        },
      },
    ],
  };

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
            <a href="#harga" className="hover:text-indigo-600">Harga</a>
            <a href="#kontak" className="hover:text-indigo-600">Kontak</a>
          </nav>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20UMKM"
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
        <AnimatedMockup />
        <Portfolio />
        <Pricing />

        {/* FAQ for SEO & clarity */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Pertanyaan yang Sering Ditanyakan</h2>
              <p className="mt-3 text-gray-600">Ringkas dan jelas untuk membantu Anda mengambil keputusan.</p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200">
              <details className="py-4" open>
                <summary className="cursor-pointer text-lg font-semibold">Berapa biaya pembuatan website UMKM?</summary>
                <p className="mt-2 text-gray-600">Mulai Rp 3,5 juta untuk landing page. Paket Pro Rp 7,5 juta untuk 6-8 halaman. Untuk e-commerce atau fitur khusus, gunakan paket Enterprise (custom).</p>
              </details>
              <details className="py-4">
                <summary className="cursor-pointer text-lg font-semibold">Apakah websitenya SEO-friendly dan responsif?</summary>
                <p className="mt-2 text-gray-600">Ya. Kami menerapkan praktik SEO on-page (title, meta description, struktur H1-H3) dan performa optimal. Desain mobile-first memastikan nyaman di semua perangkat.</p>
              </details>
              <details className="py-4">
                <summary className="cursor-pointer text-lg font-semibold">Berapa lama pengerjaan website?</summary>
                <p className="mt-2 text-gray-600">Estimasi 7–21 hari kerja sesuai kompleksitas dan ketersediaan konten. Kami sediakan timeline dan update rutin selama proses.</p>
              </details>
            </div>
          </div>
        </section>

        <ContactCTA />

        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-8 text-sm text-gray-600">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Flames Studio. Semua hak dilindungi.</div>
            <div className="flex items-center gap-4">
              <a href="#layanan" className="hover:text-indigo-600">Layanan</a>
              <a href="#portfolio" className="hover:text-indigo-600">Portofolio</a>
              <a href="#harga" className="hover:text-indigo-600">Harga</a>
              <a href="#kontak" className="hover:text-indigo-600">Kontak</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
