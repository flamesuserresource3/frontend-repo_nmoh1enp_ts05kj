import { ArrowRight, Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 sm:p-12 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Siap Memulai Proyek Anda?</h3>
              <p className="mt-2 text-indigo-100">Konsultasi gratis untuk menemukan solusi terbaik sesuai kebutuhan bisnis Anda.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-indigo-700 shadow hover:bg-indigo-50 transition"
              >
                Chat WhatsApp
                <ArrowRight size={18} />
              </a>
              <a
                href="mailto:halo@agencymu.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                <Mail size={18} />
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
