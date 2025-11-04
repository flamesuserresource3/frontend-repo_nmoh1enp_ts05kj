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
          {/* Laptop Mockup */}
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
                {/* Animated UI screenshot */}
                <div className="relative h-[320px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-violet-600/30 to-cyan-500/30" />
                  <motion.div
                    className="absolute inset-0"
                    initial={{ y: 0 }}
                    animate={{ y: ['0%', '-20%', '0%'] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="grid h-full grid-cols-12 gap-4 p-6">
                      <div className="col-span-3 space-y-3">
                        <div className="h-3 w-20 rounded bg-white/30" />
                        <div className="h-3 w-24 rounded bg-white/20" />
                        <div className="h-3 w-16 rounded bg-white/20" />
                        <div className="h-3 w-28 rounded bg-white/20" />
                      </div>
                      <div className="col-span-9">
                        <div className="grid grid-cols-3 gap-4">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="rounded-xl border border-white/20 bg-white/10 p-4">
                              <div className="h-24 rounded-lg bg-white/10" />
                              <div className="mt-3 h-3 w-24 rounded bg-white/30" />
                              <div className="mt-2 h-3 w-16 rounded bg-white/20" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto grid w-full max-w-xl place-items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ rotate: -8, y: 0 }}
                whileHover={{ y: -6 }}
                className="absolute -left-10 top-8 -z-0 rotate-[-8deg] rounded-3xl border border-gray-200 bg-white p-3 shadow-xl"
              >
                <div className="h-[520px] w-[260px] rounded-[2rem] border border-gray-200 bg-black p-2">
                  <div className="mx-auto h-5 w-20 rounded-full bg-gray-200" />
                  <div className="mt-2 h-[470px] overflow-hidden rounded-[1.5rem] border border-gray-800">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: ['0%', '-25%', '0%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-full w-full bg-gradient-to-b from-indigo-500/40 via-fuchsia-500/40 to-cyan-500/40"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ rotate: 8, y: 0 }}
                whileHover={{ y: -6 }}
                className="relative z-10 rotate-[8deg] rounded-3xl border border-gray-200 bg-white p-3 shadow-2xl"
              >
                <div className="h-[520px] w-[260px] rounded-[2rem] border border-gray-200 bg-black p-2">
                  <div className="mx-auto h-5 w-20 rounded-full bg-gray-200" />
                  <div className="mt-2 h-[470px] overflow-hidden rounded-[1.5rem] border border-gray-800">
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: ['0%', '-25%', '0%'] }}
                      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_40%)]"
                    >
                      <div className="p-4">
                        <div className="h-8 w-24 rounded-lg bg-white/30" />
                        <div className="mt-3 h-3 w-36 rounded bg-white/20" />
                        <div className="mt-6 space-y-3">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-10 rounded-xl bg-white/10" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
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
