import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block lg:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors
       ${isActive ? 'bg-accent text-white hover:bg-accent hover:text-white' : 'text-neutralx-50 hover:bg-accent hover:text-white'}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-brand/70 border-b border-brand-800">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2" onClick={handleNav}>
          <img
            src="/camber-media.png"
            alt="Camber Media logo"
            className="h-10 w-auto bg-accent rounded-sm p-1"
          />
          <span className="font-display text-xl text-neutralx-50">Camber Media</span>
        </NavLink>

        {/* Desktop nav (lg and up) */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavItem to="/books">Books</NavItem>
          <NavItem to="/authors">Authors</NavItem>
          {/* <NavItem to="/press">Press</NavItem> */}
          <NavItem to="/submissions">Submissions</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Mobile/Tablet toggle (shown below lg) */}
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-neutralx-50 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle navigation menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(!open)}
        >
          {/* hamburger / close icon */}
          <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet menu panel */}
      <div
        className={`lg:hidden overflow-hidden border-t border-brand-800 transition-[max-height] duration-200 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-2 space-y-1 bg-brand shadow-soft">
          <NavItem to="/books" onClick={handleNav}>Books</NavItem>
          <NavItem to="/authors" onClick={handleNav}>Authors</NavItem>
          {/* <NavItem to="/press" onClick={handleNav}>Press</NavItem> */}
          <NavItem to="/submissions" onClick={handleNav}>Submissions</NavItem>
          <NavItem to="/contact" onClick={handleNav}>Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}