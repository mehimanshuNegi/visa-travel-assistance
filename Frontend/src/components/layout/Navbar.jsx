import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="w-full border-b border-blue-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold tracking-tight text-brand-dark"
                >
                    YOUR BRAND
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        to="/"
                        className="text-sm font-medium text-brand-dark/80 transition hover:text-brand"
                    >
                        Home
                    </Link>

                    <Link
                        to="/services"
                        className="text-sm font-medium text-brand-dark/80 transition hover:text-brand"
                    >
                        Services
                    </Link>

                    <Link
                        to="/visa"
                        className="text-sm font-medium text-brand-dark/80 transition hover:text-brand"
                    >
                        Visa Services
                    </Link>

                    <Link
                        to="/about"
                        className="text-sm font-medium text-brand-dark/80 transition hover:text-brand"
                    >
                        About
                    </Link>

                    <Link
                        to="/faq"
                        className="text-sm font-medium text-brand-dark/80 transition hover:text-brand"
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/contact"
                        className="text-sm font-medium text-brand-dark/80 transition hover:text-brand"
                    >
                        Contact
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        to="/apply"
                        className="rounded-md bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md p-2 text-brand-dark md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-blue-100 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">

                        <Link to="/" onClick={closeMenu} className="text-sm font-medium text-brand-dark">
                            Home
                        </Link>

                        <Link to="/services" onClick={closeMenu} className="text-sm font-medium text-brand-dark">
                            Services
                        </Link>

                        <Link to="/visa" onClick={closeMenu} className="text-sm font-medium text-brand-dark">
                            Visa Services
                        </Link>

                        <Link to="/about" onClick={closeMenu} className="text-sm font-medium text-brand-dark">
                            About
                        </Link>

                        <Link to="/faq" onClick={closeMenu} className="text-sm font-medium text-brand-dark">
                            FAQ
                        </Link>

                        <Link to="/contact" onClick={closeMenu} className="text-sm font-medium text-brand-dark">
                            Contact
                        </Link>

                        <Link
                            to="/apply"
                            onClick={closeMenu}
                            className="mt-2 rounded-md bg-brand-dark px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand"
                        >
                            Get Started
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}