import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AnimatedMockup() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Tampilan Modern di Semua Perangkat</h2>
          <p className="mt-3 text-gray-600">Responsive, cepat, dan terasa premium — kita pastikan terlihat tajam di desktop, tablet, dan smartphone.</p>
        </div>

        <div className="relative mt-12 grid gap-10 lg:grid-cols-2">
          {/* Laptop Mockup with real image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-4 shadow-lg">
              <div className="mx-auto h-5 w-24 rounded-full bg-gray-200" />
              <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-black">
                {/* Real website screenshot inside laptop */}
                <div className="relative h-[320px] w-full overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
                    alt="Contoh tampilan website di desktop"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.02 }}
                    animate={{ scale: [1.02, 1.07, 1.02], y: [0, -8, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Subtle glass top bar */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup Stack with real images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto grid w-full max-w-xl place-items-center"
          >
            <div className="relative">
              {/* Back phone */}
              <motion.div
                initial={{ rotate: -8, y: 0 }}
                whileHover={{ y: -6 }}
                className="absolute -left-10 top-8 -z-0 rotate-[-8deg] rounded-3xl border border-gray-200 bg-white p-3 shadow-xl"
              >
                <div className="h-[520px] w-[260px] rounded-[2rem] border border-gray-200 bg-black p-2">
                  <div className="mx-auto h-5 w-20 rounded-full bg-gray-200" />
                  <div className="mt-2 h-[470px] overflow-hidden rounded-[1.5rem] border border-gray-800">
                    <motion.img
                      src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"
                      alt="Tampilan mobile 1"
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.03, y: 0 }}
                      animate={{ scale: [1.03, 1.08, 1.03], y: [0, -12, 0] }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Front phone */}
              <motion.div
                initial={{ rotate: 8, y: 0 }}
                whileHover={{ y: -6 }}
                className="relative z-10 rotate-[8deg] rounded-3xl border border-gray-200 bg-white p-3 shadow-2xl"
              >
                <div className="h-[520px] w-[260px] rounded-[2rem] border border-gray-200 bg-black p-2">
                  <div className="mx-auto h-5 w-20 rounded-full bg-gray-200" />
                  <div className="mt-2 h-[470px] overflow-hidden rounded-[1.5rem] border border-gray-800">
                    <motion.img
                      src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop"
                      alt="Tampilan mobile 2"
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.02, y: 0 }}
                      animate={{ scale: [1.02, 1.06, 1.02], y: [0, -10, 0] }}
                      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <a
              href="#harga"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-black"
            >
              Lihat Paket Harga
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-50" />
    </section>
  );
}
