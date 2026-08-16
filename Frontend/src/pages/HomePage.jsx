import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { visaData } from '../data/visaData';
import VisaCard from '../components/VisaCard';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQ from '../components/FAQ';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  FileText,
  Plane,
  Building,
  Shield,
  Info,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [heroSearch, setHeroSearch] = useState('');
  const [selectedVisaCategory, setSelectedVisaCategory] = useState('All');

  // Handle Search submit from Hero
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!heroSearch.trim()) {
      navigate('/visa');
      return;
    }

    // Check if hero search matches a specific country id or name directly
    const matched = visaData.find(
      (c) => c.country.toLowerCase().includes(heroSearch.trim().toLowerCase())
    );

    if (matched) {
      navigate(`/visa/${matched.id}`);
    } else {
      navigate(`/visa`);
    }
  };

  // Popular visa destinations subset (first 5 or popular tagged)
  const popularDestinations = visaData.filter((c) => c.popular).slice(0, 5);

  // Sample homepage FAQs
  const homepageFaqs = [
    {
      question: "What visa services do you provide?",
      answer: "We provide comprehensive visa assistance, document review, and online application guidance for top tourist, business, and e-visa destinations worldwide."
    },
    {
      question: "What countries can I apply for?",
      answer: "You can explore visa requirements for destinations including UAE, France (Schengen), United Kingdom, Singapore, Japan, Thailand, Vietnam, Turkey, Indonesia/Bali, and more."
    },
    {
      question: "What documents are generally required for visa applications?",
      answer: "Most applications require a valid passport (minimum 6 months validity), passport photographs, flight itinerary, hotel reservation, and financial proof. Specific checklists are provided per country."
    },
    {
      question: "How does the visa application process work?",
      answer: "Select your destination, review the requirements, submit your applicant details online, and our visa specialists review your documents before final processing."
    },
    {
      question: "Do you provide dummy flight tickets for visa applications?",
      answer: "Yes! We offer secondary travel assistance including flight ticket reservations and hotel booking proof for visa application documentation."
    },
    {
      question: "Do you offer travel insurance assistance?",
      answer: "Yes, we assist with Schengen-compliant and global travel medical insurance policies required for visa applications."
    }
  ];

  return (
    <div className="min-h-screen bg-page text-slate-800">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Visa Services Platform — Prices and document lists are sample placeholders for client review.
        </span>
      </div>

      {/* ===================================================
          1. HERO SECTION (VISA SERVICES FIRST)
      ==================================================== */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24 text-white">
        {/* Subtle background ambient glows */}
        <div className="absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-brand/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            {/* Small Label */}
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-md border border-white/10 shadow-xs mb-4">
              VISA SERVICES FIRST
            </span>

            {/* Large Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Find the right visa for your trip
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200">
              Explore global visa options, check document checklists, understand processing timelines, and start your application with expert guidance.
            </p>
          </div>

          {/* Visa Discovery / Search Bar (Prominent Element) */}
          <div className="mt-10 mx-auto max-w-4xl">
            <form
              onSubmit={handleSearchSubmit}
              className="rounded-2xl border border-white/20 bg-white/95 p-3 shadow-2xl backdrop-blur-md sm:p-4 text-slate-800"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                {/* Search Country Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    placeholder="Where are you travelling? (e.g. UAE, France, Japan)..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3.5 text-xs sm:text-sm text-brand-dark placeholder-slate-400 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  />
                </div>

                {/* Select Visa Type */}
                <div className="w-full md:w-56">
                  <select
                    value={selectedVisaCategory}
                    onChange={(e) => setSelectedVisaCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3.5 text-xs font-semibold text-brand-dark outline-none transition focus:border-brand focus:bg-white cursor-pointer"
                  >
                    <option value="All">Visa Type: All</option>
                    <option value="E-VISA">E-Visa</option>
                    <option value="SCHENGEN VISA">Schengen Visa</option>
                    <option value="STICKER VISA">Sticker Visa</option>
                    <option value="E-VOA">E-VOA</option>
                  </select>
                </div>

                {/* Explore Button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-brand-dark hover:scale-[1.02] active:scale-95 shrink-0"
                >
                  Explore Visa
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {/* Quick Popular Destination Tags */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
              <span className="font-semibold text-slate-400">Popular Searches:</span>
              {['UAE', 'France', 'United Kingdom', 'Singapore', 'Thailand'].map((cName) => (
                <button
                  key={cName}
                  type="button"
                  onClick={() => setHeroSearch(cName)}
                  className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white hover:bg-white/20 transition border border-white/10"
                >
                  {cName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. POPULAR VISA DESTINATIONS
      ==================================================== */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Featured Destinations
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                Popular Visa Destinations
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Explore visa requirements and processing details for top global travel spots.
              </p>
            </div>

            <Link
              to="/visa"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition self-start sm:self-auto"
            >
              View All Destinations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 2-Column Mobile Card Grid matching Visa Services page */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {popularDestinations.map((country) => (
              <VisaCard key={country.id} countryData={country} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          3. EXPLORE ALL VISAS SECTION
      ==================================================== */}
      <section className="bg-brand-light/50 border-y border-blue-100/80 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-white p-8 md:p-12 border border-blue-100 shadow-sm grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Complete Destination Catalog
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Explore Visa Options Across 10+ Global Regions
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted max-w-2xl">
                Whether you are planning a European Schengen tour, a quick UAE weekend getaway, or Southeast Asian travel, compare validity, max stay, and document checklists in one place.
              </p>

              {/* Quick Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                  🇦🇪 UAE E-Visa
                </span>
                <span className="rounded-lg bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                  🇫🇷 Schengen Visa
                </span>
                <span className="rounded-lg bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                  🇬🇧 UK Visitor Visa
                </span>
                <span className="rounded-lg bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                  🇯🇵 Japan eVisa
                </span>
                <span className="rounded-lg bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                  🇹🇭 Thailand EVOA
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/visa"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-dark px-7 py-4 text-xs font-bold text-white shadow-md hover:bg-brand transition"
              >
                Explore All Visas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4. HOW VISA APPLICATION WORKS
      ==================================================== */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Simple 4-Step Process
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              How It Works
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Clear application steps from selecting your trip to receiving your visa clearance.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ===================================================
          5. WHY CHOOSE US
      ==================================================== */}
      <section className="bg-white border-t border-slate-200 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Platform Benefits
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Why Choose Us
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Dedicated assistance designed to make your visa application effortless.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 transition hover:shadow-md hover:border-brand/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <Users className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Expert Assistance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Get clear guidance throughout the visa process from travel specialists.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 transition hover:shadow-md hover:border-brand/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <CheckCircle2 className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Simple Process
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Clear requirements and easy online application steps with zero confusion.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 transition hover:shadow-md hover:border-brand/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Online Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Submit your applicant details and document copies digitally from anywhere.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 transition hover:shadow-md hover:border-brand/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <Zap className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Fast Assistance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Get help with your visa requirements quickly with prompt response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          6 & 7. SECONDARY SERVICES & DUMMY TICKET SECTION
      ==================================================== */}
      <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                Secondary Travel Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Complete Your Travel Plans
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Additional travel support services to complement your visa application.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand transition self-start sm:self-auto"
            >
              All Travel Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Visually Secondary Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1: Dummy Flight Ticket */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Plane className="h-5 w-5 text-brand" />
              </div>

              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Dummy Flight Ticket
              </h3>

              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                Verifiable flight reservation itinerary for embassy visa submissions.
              </p>

              <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-muted uppercase">Starting from</span>
                  <span className="text-sm font-bold text-brand-dark">₹XXX</span>
                </div>
                <Link
                  to="/services"
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-brand-dark hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 2: Dummy Hotel Reservation */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Building className="h-5 w-5 text-brand" />
              </div>

              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Dummy Hotel Reservation
              </h3>

              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                Confirmed hotel voucher proof for travel accommodation requirements.
              </p>

              <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-muted uppercase">Starting from</span>
                  <span className="text-sm font-bold text-brand-dark">₹XXX</span>
                </div>
                <Link
                  to="/services"
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-brand-dark hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 3: Travel Insurance */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Shield className="h-5 w-5 text-brand" />
              </div>

              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Travel Insurance
              </h3>

              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                Embassy-approved travel medical insurance for global destinations.
              </p>

              <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-muted uppercase">Starting from</span>
                  <span className="text-sm font-bold text-brand-dark">₹XXX</span>
                </div>
                <Link
                  to="/services"
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-brand-dark hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Service 4: Flight & Hotel Booking */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <FileText className="h-5 w-5 text-brand" />
              </div>

              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Actual Bookings
              </h3>

              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                Actual flight ticket and hotel bookings for confirmed travel plans.
              </p>

              <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-muted uppercase">Starting from</span>
                  <span className="text-sm font-bold text-brand-dark">₹XXX</span>
                </div>
                <Link
                  to="/services"
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-brand-dark hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8. HOMEPAGE FAQ SECTION
      ==================================================== */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Got Questions?
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Find answers to common visa application and travel questions.
            </p>
          </div>

          <FAQ faqs={homepageFaqs} />
        </div>
      </section>

      {/* ===================================================
          9. FINAL ASSISTANCE CTA
      ==================================================== */}
      <section className="bg-brand-dark py-14 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Personalized Assistance
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight">
            Need Help With Your Visa?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Not sure which visa category you need? Tell us about your travel plans and our team can guide you through the process.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs font-bold text-brand-dark shadow-md transition hover:bg-brand-light hover:text-brand"
            >
              Get Assistance →
            </Link>

            <Link
              to="/visa"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-bold text-white transition hover:bg-white/20"
            >
              Explore Visa Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}