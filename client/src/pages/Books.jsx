import TitleCard from '../components/home/TitleCard';
import books from '../data/books.json';
import authors from '../data/authors.json';
import BookPromo from '../components/home/BookPromo.jsx';

const authorName = (slug) => authors.find(a => a.slug === slug)?.name ?? '';

export default function Books() {
  return (
    <>
      <BookPromo />
    </>
  );
}