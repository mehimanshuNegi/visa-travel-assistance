import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCountryById } from '../data/visaData';
import DocumentCard from '../components/DocumentCard';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQ from '../components/FAQ';
import {
  ChevronRight,
  Clock,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowRight,
  Star,
  MessageSquare,
  Info
} from 'lucide-react';

export default function VisaCountryPage() {
  const { countryId } = useParams();
  const navigate = useNavigate();

  // Lookup country data from visaData.js
  const country = getCountryById(countryId);

  // Active tab state for navigation bar
  const [activeTab, setActiveTab] = useState('visa-info');

  // Selected visa type index (if country has multiple visa options)
  const [selectedVisaIndex, setSelectedVisaIndex] = useState(0);

  // Travellers count selector state
  const [travellersCount, setTravellersCount] = useState(1);

  // If country ID is invalid
  if (!country) {
    return (
      <div className="min-h-screen bg-page py-20 px-6 text-center">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-brand-dark">
            Destination Not Found
          </h2>
          <p className="mt-2 text-xs text-muted">
            The destination country you are looking for is not available in our sample data.
          </p>
          <Link
            to="/visa"
            className="mt-6 inline-block rounded-xl bg-brand-dark px-5 py-2.5 text-xs font-bold text-white hover:bg-brand transition"
          >
            ← Back to Visa Services
          </Link>
        </div>
      </div>
    );
  }

  const selectedVisa = country.visaTypes[selectedVisaIndex] || country.visaTypes[0];

  // Helper function to handle smooth scroll on tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -90; // sticky header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Navigate to application page with pre-filled query parameters
  const handleStartApplication = () => {
    const params = new URLSearchParams({
      country: country.id,
      type: selectedVisa.name,
      travellers: travellersCount
    });
    navigate(`/visa/application?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-page text-slate-800 pb-20">
      {/* Sample Prototype Disclaimer Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Visa terms, fee structures, and document requirements for {country.country} are sample placeholders.
        </span>
      </div>

      {/* ==============================================
          1. DESTINATION HERO BANNER (ATLYS STYLE)
      =============================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Destination Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={country.image}
            alt={country.country}
            className="h-full w-full object-cover opacity-40 blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link to="/visa" className="hover:text-white transition">
              Visa Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-white">{country.country}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md border border-white/10 mb-4">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                <span>{country.category}</span>
              </div>

              {/* Title & Flag */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-4xl sm:text-5xl" role="img" aria-label={country.country}>
                  {country.flag}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  {country.country} Visa
                </h1>
              </div>

              <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl">
                {selectedVisa.description}
              </p>

              {/* Highlight Metadata Badges Row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white border border-white/10 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-sky-400" />
                  <span>Validity: {selectedVisa.validity}</span>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white border border-white/10 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sky-400" />
                  <span>Max Stay: {selectedVisa.maxStay}</span>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span>Entry: {selectedVisa.entryType}</span>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white border border-white/10 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Processing: {selectedVisa.processingTime}</span>
                </div>
              </div>
            </div>

            {/* Hero CTA Button for Desktop */}
            <div className="lg:col-span-4 lg:text-right">
              <button
                type="button"
                onClick={handleStartApplication}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-brand-dark hover:scale-105 active:scale-95"
              >
                Start Application →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================
          2. STICKY TAB NAVIGATION BAR (ATLYS STYLE)
      =============================================== */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex space-x-8 overflow-x-auto no-scrollbar py-1" aria-label="Tabs">
            {[
              { id: 'visa-info', label: 'Visa Info' },
              { id: 'documents', label: 'Documents' },
              { id: 'visa-process', label: 'Visa Process' },
              { id: 'reviews', label: 'Sample Reviews' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 text-xs sm:text-sm font-bold border-b-2 transition ${
                    isActive
                      ? 'border-brand text-brand'
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-6 py-10 space-y-16">

        {/* ==============================================
            3. VISA INFORMATION SECTION (#visa-info)
        =============================================== */}
        <section id="visa-info" className="scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* Left Main Details Column */}
            <div className="space-y-6">

              {/* Visa Options Switcher (if country has multiple options) */}
              {country.visaTypes.length > 1 && (
                <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Select Visa Type Option
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {country.visaTypes.map((vType, idx) => (
                      <button
                        key={vType.id || idx}
                        type="button"
                        onClick={() => setSelectedVisaIndex(idx)}
                        className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                          selectedVisaIndex === idx
                            ? 'bg-brand-dark text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {vType.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  Visa Details
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  {selectedVisa.name} Overview
                </h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                  Purpose of trip: <span className="font-semibold text-slate-700">{selectedVisa.purpose}</span>.
                </p>
              </div>

              {/* 4 Detail Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                  <span className="block text-[11px] font-semibold text-muted uppercase">Validity</span>
                  <span className="mt-1 block text-sm sm:text-base font-bold text-brand-dark">
                    {selectedVisa.validity}
                  </span>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                  <span className="block text-[11px] font-semibold text-muted uppercase">Max Stay</span>
                  <span className="mt-1 block text-sm sm:text-base font-bold text-brand-dark">
                    {selectedVisa.maxStay}
                  </span>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                  <span className="block text-[11px] font-semibold text-muted uppercase">Entry Type</span>
                  <span className="mt-1 block text-sm sm:text-base font-bold text-brand-dark">
                    {selectedVisa.entryType}
                  </span>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                  <span className="block text-[11px] font-semibold text-muted uppercase">Processing</span>
                  <span className="mt-1 block text-sm sm:text-base font-bold text-emerald-600">
                    {selectedVisa.processingTime}
                  </span>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="rounded-2xl border border-blue-100 bg-brand-light/40 p-6">
                <h3 className="text-sm font-bold text-brand-dark mb-3">
                  Application Highlights
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                    <span>100% Online Document Upload</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                    <span>Expert Document Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                    <span>Digital E-Visa Clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                    <span>24/7 Applicant Support</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Sticky Pricing & Application Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    Selected Option
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark mt-0.5">
                    {selectedVisa.name}
                  </h3>
                </div>

                {/* Travellers Selector */}
                <div>
                  <label htmlFor="travellers" className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-brand" />
                    Number of Travellers
                  </label>
                  <select
                    id="travellers"
                    value={travellersCount}
                    onChange={(e) => setTravellersCount(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-bold text-brand-dark outline-none focus:border-brand focus:bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Traveller' : 'Travellers'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fee Breakdown Table */}
                <div className="rounded-xl bg-slate-50 p-4 text-xs space-y-2 border border-slate-100">
                  <div className="flex justify-between text-slate-600">
                    <span>Government Fee</span>
                    <span className="font-semibold text-slate-800">{selectedVisa.govtFee}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Service Fee</span>
                    <span className="font-semibold text-slate-800">{selectedVisa.serviceFee}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-brand-dark text-sm">
                    <span>Estimated Total</span>
                    <span className="text-base text-brand">{selectedVisa.total}</span>
                  </div>
                </div>

                <p className="text-[11px] text-muted italic text-center">
                  * {selectedVisa.priceSubtext}
                </p>

                {/* Start Application CTA */}
                <button
                  type="button"
                  onClick={handleStartApplication}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-dark py-3.5 text-xs font-bold text-white shadow-md hover:bg-brand transition"
                >
                  Start Application →
                </button>

                <div className="text-center pt-1">
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-brand hover:underline"
                  >
                    Need assistance before applying? Contact us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==============================================
            4. REQUIRED DOCUMENTS SECTION (#documents)
        =============================================== */}
        <section id="documents" className="scroll-mt-28 border-t border-slate-200/80 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Required Documents
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
                Documents You Need to Apply
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Digital copies can be uploaded online during your application.
              </p>
            </div>

            <button
              type="button"
              onClick={handleStartApplication}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition self-start sm:self-auto"
            >
              Start Application <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {selectedVisa.documents && selectedVisa.documents.map((doc) => (
              <DocumentCard key={doc.id || doc.title} document={doc} />
            ))}
          </div>
        </section>

        {/* ==============================================
            5. VISA PROCESS SECTION (#visa-process)
        =============================================== */}
        <section id="visa-process" className="scroll-mt-28 border-t border-slate-200/80 pt-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Timeline & Steps
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
              How the Application Process Works
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              Simple 4-step process from submission to visa delivery.
            </p>
          </div>

          <ProcessTimeline steps={selectedVisa.process} />
        </section>

        {/* ==============================================
            6. SAMPLE REVIEWS SECTION (#reviews)
        =============================================== */}
        <section id="reviews" className="scroll-mt-28 border-t border-slate-200/80 pt-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Sample Feedback
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Sample Reviews (Prototype Content)
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              These sample reviews are included for layout demonstration purposes only.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {selectedVisa.sampleReviews && selectedVisa.sampleReviews.map((rev) => (
              <div key={rev.id} className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500">
                    Sample Review
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-700 italic">
                  "{rev.comment}"
                </p>

                <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-dark">{rev.name}</span>
                  <span className="text-muted">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================================
            7. FAQS SECTION (#faqs)
        =============================================== */}
        <section id="faqs" className="scroll-mt-28 border-t border-slate-200/80 pt-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Questions & Answers
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-muted">
              Common queries about {country.country} visa applications.
            </p>
          </div>

          <FAQ faqs={selectedVisa.faqs} />
        </section>

      </div>

      {/* Mobile Fixed Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md p-3 shadow-lg flex items-center justify-between">
        <div>
          <span className="block text-[10px] font-bold uppercase text-muted">Starting Price</span>
          <span className="text-base font-extrabold text-brand-dark">{selectedVisa.price}</span>
        </div>

        <button
          type="button"
          onClick={handleStartApplication}
          className="rounded-xl bg-brand-dark px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand transition"
        >
          Start Application →
        </button>
      </div>
    </div>
  );
}
