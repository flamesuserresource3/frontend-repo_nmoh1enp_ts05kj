import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 560">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="120" r="120" fill="url(#g1)" />
          <circle cx="1200" cy="240" r="180" fill="url(#g1)" />
          <circle cx="800" cy="80" r="90" fill="url(#g1)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-24 sm:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Rocket size={16} />
            <span>Konsultan & Jasa Pembuatan Website</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Bangun Website Profesional untuk Bisnis Anda
          </h1>
          <p className="mt-4 text-lg text-indigo-100 md:text-xl">
            Kami merancang website cepat, aman, dan SEO-ready yang membantu Anda mendapatkan lebih banyak pelanggan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-indigo-700 shadow hover:bg-indigo-50 transition"
            >
              Konsultasi Gratis
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500/30 px-6 py-3 font-medium text-white ring-1 ring-white/30 hover:bg-indigo-500/40 transition"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
