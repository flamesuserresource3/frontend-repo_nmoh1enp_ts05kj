import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />

      <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Rocket size={16} />
              <span>Jasa Pembuatan Website UMKM • SEO & Responsif</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Tingkatkan Penjualan dengan Website UMKM yang Cepat & SEO-Ready
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              Kami membuat website profesional yang mobile-first, optimasi SEO on-page, dan performa tinggi agar bisnis Anda mudah ditemukan di Google.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20UMKM"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-gray-900 shadow hover:bg-gray-100 transition"
              >
                Konsultasi Gratis
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition"
              >
                Lihat Portofolio
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Kata kunci: jasa pembuatan website UMKM, website toko online, company profile, optimasi SEO, web cepat & responsif.
            </p>
          </div>

          {/* Spacer on large screens for layout balance; 3D is background so this just adds breathing room */}
          <div className="h-64 rounded-2xl border border-white/10 bg-white/0 lg:h-[28rem]" />
        </div>
      </div>
    </section>
  );
}
