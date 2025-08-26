import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Press from './pages/Press';
import Submissions from './pages/Submissions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-auto max-w-7xl px-4 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/press" element={<Press />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}