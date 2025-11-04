import { Code, Smartphone, Shield } from 'lucide-react';

const services = [
  {
    title: 'Website Company Profile',
    desc: 'Tampil profesional dengan situs cepat, mobile-friendly, dan mudah dikelola.',
    icon: Code,
  },
  {
    title: 'E-Commerce & Catalog',
    desc: 'Jual produk dengan lancar. Integrasi pembayaran, ongkir, dan manajemen produk.',
    icon: Smartphone,
  },
  {
    title: 'Optimasi SEO & Kecepatan',
    desc: 'Meningkatkan visibilitas di Google dan performa agar pengunjung betah.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Layanan Kami</h2>
          <p className="mt-3 text-gray-600">Solusi lengkap untuk hadirkan bisnis Anda di dunia digital.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">Pelajari lebih lanjut →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
