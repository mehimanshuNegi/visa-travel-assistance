import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                <Globe className="h-4 w-4" />
              </div>
              <span>YOUR BRAND</span>
            </Link>

            <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-300">
              Modern travel and visa assistance platform. Exploring global visa options made clear, fast, and simple.
            </p>
          </div>

          {/* Visa & Travel Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Visa Platform
            </h3>

            <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <Link
                to="/visa"
                className="block text-slate-300 transition hover:text-white"
              >
                Explore All Visas
              </Link>

              <Link
                to="/visa/application"
                className="block text-slate-300 transition hover:text-white"
              >
                Start Visa Application
              </Link>

              <Link
                to="/visa/uae"
                className="block text-slate-300 transition hover:text-white"
              >
                UAE Tourist Visa
              </Link>

              <Link
                to="/visa/france"
                className="block text-slate-300 transition hover:text-white"
              >
                Schengen Tourist Visa
              </Link>
            </div>
          </div>

          {/* Secondary Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Secondary Services
            </h3>

            <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
              <Link
                to="/services"
                className="block text-slate-300 transition hover:text-white"
              >
                Dummy Flight Ticket
              </Link>

              <Link
                to="/services"
                className="block text-slate-300 transition hover:text-white"
              >
                Dummy Hotel Reservation
              </Link>

              <Link
                to="/services"
                className="block text-slate-300 transition hover:text-white"
              >
                Travel Insurance
              </Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Contact & Support
            </h3>

            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p>Email: info@example.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>WhatsApp Support Available</p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition"
                >
                  Contact Form →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 YOUR BRAND. All rights reserved. Visa Services Platform.
            </p>

            <div className="flex gap-5">
              <Link to="/contact" className="transition hover:text-slate-200">
                Privacy Policy
              </Link>

              <Link to="/contact" className="transition hover:text-slate-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}