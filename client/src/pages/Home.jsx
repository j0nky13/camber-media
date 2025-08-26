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
      <section className="mt-14">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold">Featured Titles</h2>
          <a href="/books" className="text-sm">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((b) => (
            <TitleCard
              key={b.slug}
              cover={b.cover}
              title={b.title}
              author={authorName(b.author)}
              tag={b.tag}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-10">
        <div className="panel">
          <h3 className="text-xl font-semibold mb-2">About Camber</h3>
          <p className="text-neutralx-400">
            We champion durable ideas and unforgettable voices. From business to fiction, our catalog bends toward craft, clarity, and courage.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-brand-800 bg-tealish/20">
          <h3 className="text-xl font-semibold mb-2">Submissions</h3>
          <p className="text-neutralx-400">
            Open to agented and select unagented submissions. See guidelines and timelines.
          </p>
          <a href="/submissions" className="inline-block mt-3 underline">Submission guidelines</a>
        </div>
      </section>
    </>
  );
}