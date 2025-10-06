export default function Footer() {
  return (
    <footer className="border-t border-brand-800 mt-auto pt-10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-neutralx-400">
        <div className="text-center md:text-center lg:text-left">
          <h3 className="text-neutralx-50 font-semibold mb-2">Camber Media</h3>
          <p>Independent book & media publisher based in Charleston.</p>
        </div>

        <div className="text-center md:text-center lg:text-left">
          <h3 className="text-neutralx-50 font-semibold mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="/books">Books</a></li>
            <li><a className="hover:underline" href="/authors">Authors</a></li>
            {/* <li><a className="hover:underline" href="/press">Press Kit</a></li> */}
          </ul>
        </div>

        <div className="text-center md:text-center lg:text-left">
          <h3 className="text-neutralx-50 font-semibold mb-2">Contact</h3>
          <p><a className="hover:underline" href="mailto:press@camber.media">press@camber.media</a></p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} Camber Media</p>
        </div>
      </div>
    </footer>
  );
}