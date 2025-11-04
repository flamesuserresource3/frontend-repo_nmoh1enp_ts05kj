import { Check, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Rp 3.5jt',
    period: 'once',
    highlight: false,
    features: [
      'Landing page profesional',
      'Responsive mobile & desktop',
      'Optimasi kecepatan dasar',
      'Form kontak & integrasi WA',
      'Deploy & domain setup bantuan',
    ],
    cta: 'Mulai Sekarang',
  },
  {
    name: 'Pro',
    price: 'Rp 7.5jt',
    period: 'once',
    highlight: true,
    features: [
      'Hingga 6-8 halaman',
      'Animasi & micro-interactions',
      'Blog/portfolio section',
      'Optimasi SEO dasar',
      'Support 1 bulan',
    ],
    cta: 'Paket Terpopuler',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    highlight: false,
    features: [
      'E-commerce atau fitur khusus',
      'Integrasi API/CRM/Payment',
      'Arsitektur scalable',
      'Performance & SEO advanced',
      'Prioritas support',
    ],
    cta: 'Diskusi Kebutuhan',
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
            <Sparkles size={16} />
            <span>Paket Harga Transparan</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Sesuaikan Paket dengan Kebutuhan</h2>
          <p className="mt-3 text-gray-600">Harga sekali bayar termasuk setup & handover. Bisa request fitur tambahan sesuai kebutuhan.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border ${t.highlight ? 'border-indigo-300 bg-white shadow-xl' : 'border-gray-200 bg-white shadow-sm'} p-6`}>
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Rekomendasi</div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold">{t.price}</div>
                  <div className="text-xs text-gray-500">{t.period === 'once' ? 'sekali bayar' : 'by quote'}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check size={14} />
                    </span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={t.name === 'Enterprise' ? 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20diskusi%20paket%20Enterprise' : 'https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20paket%20' + encodeURIComponent(t.name)}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-medium transition ${t.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black'}`}
              >
                {t.cta}
              </a>
              <div className="mt-3 text-xs text-gray-500">Estimasi 7-21 hari kerja tergantung kompleksitas.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
