const works = [
  {
    name: 'Sagara Coffee',
    type: 'Company Profile',
    image: 'https://images.unsplash.com/photo-1728777183929-eb0f632c93ad?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWdhcmElMjBDb2ZmZWV8ZW58MHwwfHx8MTc2MjI3MDg4MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
  },
  {
    name: 'Urban Fit Store',
    type: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1671536341906-d356152e12ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVcmJhbiUyMEZpdCUyMFN0b3JlfGVufDB8MHx8fDE3NjIyNzA4OTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
  },
  {
    name: 'Nusantara Travel',
    type: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1580656892401-dbb61d99ba8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOdXNhbnRhcmElMjBUcmF2ZWx8ZW58MHwwfHx8MTc2MjI3MDg5Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Portofolio Terpilih</h2>
          <p className="mt-3 text-gray-600">Contoh karya yang telah membantu klien berkembang.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <a key={w.name} href={w.url} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.image} alt={w.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500">{w.type}</div>
                <div className="font-semibold">{w.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
