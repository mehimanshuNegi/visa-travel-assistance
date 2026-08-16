import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-100/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-dark"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
            <Globe className="h-5 w-5" />
          </div>
          <span>YOUR BRAND</span>
        </Link>

        {/* Desktop Navigation Hierarchy (Visa Services First) */}
        <div className="hidden items-center gap-7 md:flex text-xs sm:text-sm font-semibold">
          <Link
            to="/"
            className={`transition ${
              isActive('/') ? 'text-brand font-bold' : 'text-slate-600 hover:text-brand'
            }`}
          >
            Home
          </Link>

          <Link
            to="/visa"
            className={`flex items-center gap-1 transition ${
              isActive('/visa') || location.pathname.startsWith('/visa/')
                ? 'text-brand font-bold bg-brand-light/60 px-3 py-1.5 rounded-lg'
                : 'text-brand-dark hover:text-brand'
            }`}
          >
            Visa Services
          </Link>

          <Link
            to="/services"
            className={`transition ${
              isActive('/services') ? 'text-brand font-bold' : 'text-slate-600 hover:text-brand'
            }`}
          >
            Travel Services
          </Link>

          <Link
            to="/contact"
            className={`transition ${
              isActive('/contact') ? 'text-brand font-bold' : 'text-slate-600 hover:text-brand'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Primary CTA: Start Visa Application */}
        <div className="hidden md:block">
          <Link
            to="/visa/application"
            className="rounded-xl bg-brand-dark px-4.5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-brand active:scale-95"
          >
            Start Visa Application
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 text-brand-dark hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-blue-100 bg-white px-6 py-5 md:hidden shadow-lg">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
            <Link to="/" onClick={closeMenu} className="hover:text-brand">
              Home
            </Link>

            <Link
              to="/visa"
              onClick={closeMenu}
              className="flex items-center justify-between text-brand font-bold bg-brand-light/50 p-2.5 rounded-xl"
            >
              <span>Visa Services</span>
              <span className="text-[10px] uppercase font-extrabold bg-brand text-white px-2 py-0.5 rounded-md">
                Primary
              </span>
            </Link>

            <Link to="/services" onClick={closeMenu} className="hover:text-brand">
              Travel Services
            </Link>

            <Link to="/contact" onClick={closeMenu} className="hover:text-brand">
              Contact
            </Link>

            <Link
              to="/visa/application"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-brand-dark px-5 py-3 text-center text-xs font-bold text-white shadow-sm transition hover:bg-brand"
            >
              Start Visa Application
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}