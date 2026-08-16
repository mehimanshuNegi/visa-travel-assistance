import React from 'react';
import { Link } from 'react-router-dom';
import { travelServices, getFeaturedTravelService } from '../data/travelServices';
import TravelServiceCard from '../components/TravelServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import {
  ShieldCheck,
  Plane,
  Building,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  MessageSquare,
  Info
} from 'lucide-react';

export default function ServicesPage() {
  const featuredService = getFeaturedTravelService();
  const catalogServices = travelServices.filter((s) => !s.featured);

  // Timeline steps tailored for travel services
  const travelProcessSteps = [
    {
      step: "01",
      title: "Choose a Service",
      description: "Select flight reservations, hotel vouchers, insurance, or actual bookings."
    },
    {
      step: "02",
      title: "Provide Your Details",
      description: "Enter your travel dates, passenger names, and specific itinerary requirements."
    },
    {
      step: "03",
      title: "Team Verification",
      description: "Our travel specialists verify formatting and compliance for visa submissions."
    },
    {
      step: "04",
      title: "Receive Assistance",
      description: "Receive your verified itinerary document or booking clearance via email."
    }
  ];

  return (
    <div className="min-h-screen bg-page text-slate-800">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Secondary travel services details and fees are sample placeholders for client review.
        </span>
      </div>

      {/* ===================================================
          1. HERO SECTION (TRAVEL SERVICES SECONDARY HUB)
      ==================================================== */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24 text-white">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Text Column */}
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-md border border-white/10 shadow-xs mb-4">
                TRAVEL SERVICES
              </span>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                Complete Your Travel Plans
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200">
                Convenient travel-related services to complement your visa application. Get verifiable flight itineraries, hotel vouchers, and travel insurance support in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#featured-service"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-brand-dark hover:scale-105 active:scale-95"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  Need Assistance?
                </Link>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
                  alt="Travel Services"
                  className="h-80 w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="rounded-full bg-brand/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    Supporting Services
                  </span>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    Visa Reservations & Travel Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. FEATURED SERVICE BANNER (DUMMY FLIGHT TICKET)
      ==================================================== */}
      <section id="featured-service" className="py-14 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-brand/30 bg-white shadow-xl grid md:grid-cols-12">
            {/* Left Content */}
            <div className="p-8 sm:p-12 md:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Featured Reservation Service
                  </span>
                  <span className="text-xs font-bold text-brand uppercase tracking-wider">
                    Visa Application Essential
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-brand-dark">
                  {featuredService.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted max-w-2xl">
                  {featuredService.description}
                </p>

                {/* Features & Purposes Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                      Features Included
                    </h3>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      {featuredService.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                      Suitable For
                    </h3>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      {featuredService.purposes.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-muted">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>Verifiable itinerary formatting accepted by embassies and airlines.</span>
              </div>
            </div>

            {/* Right Pricing Card */}
            <div className="bg-brand-light/60 border-t md:border-t-0 md:border-l border-blue-100 p-8 md:col-span-4 flex flex-col justify-between">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                  Starting Price
                </span>
                <p className="mt-2 text-4xl font-extrabold text-brand-dark">
                  {featuredService.price}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500 italic">
                  * {featuredService.priceSubtext}
                </p>

                <p className="mt-4 text-xs text-muted leading-relaxed">
                  Includes instant document confirmation and digital PDF delivery.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  to="/visa/application"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-dark py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand transition"
                >
                  Request Flight Reservation →
                </Link>

                <Link
                  to="/contact"
                  className="w-full block text-center rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Need Custom Details? Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. SUPPORTING TRAVEL SERVICES GRID
      ==================================================== */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Additional Services
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Explore Our Travel Assistance Options
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              Select any supporting service to assist with your travel planning.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {catalogServices.map((service) => (
              <TravelServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          4. TRAVEL INSURANCE PRESENTATION ("Travel with Confidence")
      ==================================================== */}
      <section className="py-14 bg-brand-light/50 border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-white p-8 md:p-12 border border-blue-100 shadow-sm grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand border border-blue-100">
                <Shield className="h-3.5 w-3.5 text-brand" />
                Travel Protection Service
              </span>

              <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-brand-dark">
                Travel Insurance: Travel With Confidence
              </h2>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted max-w-2xl">
                Get guidance on embassy-compliant travel medical insurance for Schengen visas, North America, UK, and global destinations.
              </p>

              {/* Benefit Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <span className="block text-xs font-bold text-brand-dark">Medical Coverage</span>
                  <span className="block text-[11px] text-muted mt-0.5">Schengen €30,000+ compliant</span>
                </div>

                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <span className="block text-xs font-bold text-brand-dark">Trip Protection</span>
                  <span className="block text-[11px] text-muted mt-0.5">Flight delay & cancellation</span>
                </div>

                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <span className="block text-xs font-bold text-brand-dark">Travel Support</span>
                  <span className="block text-[11px] text-muted mt-0.5">24/7 global emergency help</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right space-y-4">
              <div>
                <span className="block text-xs font-bold uppercase text-muted">Starting from</span>
                <span className="text-3xl font-extrabold text-brand-dark">₹XXX</span>
                <span className="block text-[11px] text-slate-500 italic">Sample price</span>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand-dark transition"
              >
                Explore Insurance Options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          5. REAL TRAVEL BOOKINGS ("Book Your Actual Travel")
      ==================================================== */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Genuine Bookings
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Book Your Actual Travel
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              In addition to visa reservations, we assist with confirmed flight tickets and hotel bookings.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Actual Flight Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition grid gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Actual Flight Booking</h3>
                  <span className="text-xs text-muted">Confirmed flight tickets for your journey</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-600">
                Book genuine flight tickets with competitive rates, flexible schedules, and dedicated booking assistance.
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-xs font-bold text-brand-dark">Market Rates — Contact Team</span>
                <Link
                  to="/contact"
                  className="rounded-xl bg-brand-dark px-4 py-2 text-xs font-bold text-white hover:bg-brand transition"
                >
                  Book a Flight →
                </Link>
              </div>
            </div>

            {/* Actual Hotel Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition grid gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Actual Hotel Booking</h3>
                  <span className="text-xs text-muted">Verified accommodations for your trip</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-600">
                Reserve verified hotel rooms worldwide with flexible booking options and accommodation guidance.
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-xs font-bold text-brand-dark">Market Rates — Contact Team</span>
                <Link
                  to="/contact"
                  className="rounded-xl bg-brand-dark px-4 py-2 text-xs font-bold text-white hover:bg-brand transition"
                >
                  Book a Hotel →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          6. HOW OUR TRAVEL SERVICES WORK
      ==================================================== */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Simple Workflow
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              How Our Travel Services Work
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              4 straightforward steps to request your travel documents or bookings.
            </p>
          </div>

          <ProcessTimeline steps={travelProcessSteps} />
        </div>
      </section>

      {/* ===================================================
          7. WHY USE OUR SERVICES ("Travel Assistance Made Simple")
      ==================================================== */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Service Benefits
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Travel Assistance Made Simple
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Reliable secondary travel support designed to make your journey hassle-free.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6">
              <h3 className="text-base font-bold text-brand-dark">Simple Process</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Easy way to request flight itineraries, hotel vouchers, or travel insurance.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6">
              <h3 className="text-base font-bold text-brand-dark">Professional Assistance</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Get guidance from travel specialists when you need custom details.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6">
              <h3 className="text-base font-bold text-brand-dark">Convenient Service</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Handle both visa requirements and travel reservations from one platform.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6">
              <h3 className="text-base font-bold text-brand-dark">Clear Communication</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Always know what information is needed for your travel application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8. VISA CROSS-SELL SECTION (PRIMARY BUSINESS LINK)
      ==================================================== */}
      <section className="bg-brand-dark text-white py-14 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 border border-white/10 mb-3">
            Primary Service
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Need Visa Assistance Too?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Planning an international trip? Explore visa entry requirements, document checklists, and start your application on our primary visa platform.
          </p>

          <div className="mt-8">
            <Link
              to="/visa"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs font-bold text-brand-dark shadow-md transition hover:bg-brand-light hover:text-brand"
            >
              Explore Visa Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          9. FINAL ASSISTANCE CTA
      ==================================================== */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Not Sure Which Service You Need?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-muted">
            Tell us about your travel plans and our team can help you choose the right service.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-dark px-7 py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand transition"
          >
            Get Assistance →
          </Link>
        </div>
      </section>
    </div>
  );
}