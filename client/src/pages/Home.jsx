import Hero from '../components/home/Hero';
import TitleCard from '../components/home/TitleCard';
import books from '../data/books.json';
import authors from '../data/authors.json';

const authorName = (slug) => authors.find(a => a.slug === slug)?.name ?? '';

export default function Home() {
  const featured = books.slice(0, 3);
  return (
    <>
      <Hero />

      {/* FEATURED – refined layout */} 
      <section className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Featured Titles</h2>
          <a
            href="/books"
            className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((b) => (
            <div
              key={b.slug}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] shadow-sm hover:shadow-md md:hover:-translate-y-1 transition-all duration-300"
            >
              {/* Mobile: compact horizontal */}
              <div className="flex items-center gap-4 p-4 md:hidden">
                <div className="flex-shrink-0 w-[132px] h-[176px] overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={b.cover}
                    alt={`${b.title} cover`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white leading-snug truncate">{b.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 mt-1 truncate">
                    {authorName(b.author)}
                  </p>
                  <span className="mt-2 inline-block text-[11px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/[0.02]">
                    {b.tag}
                  </span>
                </div>
              </div>

              {/* ≥ md: vertical card */}
              <div className="hidden md:block">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={b.cover}
                    alt={`${b.title} cover`}
                    className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white leading-tight mb-1 truncate">{b.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">{authorName(b.author)}</p>
                  <span className="inline-block text-[11px] px-2 py-1 rounded border border-white/10 text-neutral-300 bg-white/[0.02]">
                    {b.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="panel">
          <h3 className="text-xl font-semibold mb-2">About Camber</h3>
          <p className="text-neutral-400">
            We champion durable ideas and unforgettable voices. From business to fiction, our catalog bends toward craft, clarity, and courage.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-brand-800 bg-tealish/20">
          <h3 className="text-xl font-semibold mb-2">Submissions</h3>
          <p className="text-neutral-400">
            Open to agented and select unagented submissions. See guidelines and timelines.
          </p>
          <a href="/submissions" className="inline-block mt-3 underline">Submission guidelines</a>
        </div>
      </section>
    </>
  );
}