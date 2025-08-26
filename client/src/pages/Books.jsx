import TitleCard from '../components/home/TitleCard';
import books from '../data/books.json';
import authors from '../data/authors.json';

const authorName = (slug) => authors.find(a => a.slug === slug)?.name ?? '';

export default function Books() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-semibold">Books</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((b) => (
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
  );
}