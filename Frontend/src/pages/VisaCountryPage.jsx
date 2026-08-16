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
  Info
} from 'lucide-react';

export default function VisaCountryPage() {
  const { countryId } = useParams();
  const navigate = useNavigate();

  // Lookup country data from visaData.js
  const country = getCountryById(countryId);

  // Active tab state for navigation bar
  const [activeTab, setActiveTab] = useState('visa-info');

  // Selected visa type index
  const [selectedVisaIndex, setSelectedVisaIndex] = useState(0);

  // Travellers count selector state
  const [travellersCount, setTravellersCount] = useState(1);

  // If country ID is invalid
  if (!country) {
    return (
      <div className="min-h-screen bg-page py-20 px-6 text-center">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 border border-slate-200 shadow-xs">
          <h2 className="text-xl font-bold text-brand-dark">
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

  // Helper function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -80;
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
    <div className="min-h-screen bg-page text-slate-800 pb-28">
      {/* Sample Prototype Disclaimer Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-3 py-1.5 text-center text-[11px] sm:text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Terms and pricing for {country.country} are sample placeholders.
        </span>
      </div>

      {/* ==============================================
          1. DESTINATION HERO BANNER (MOBILE & DESKTOP)
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 mb-4">
            <Link to="/visa" className="hover:text-white transition">
              Visa Services
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-white truncate">{country.country}</span>
          </nav>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md border border-white/10 mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                <span>{country.category}</span>
              </div>

              {/* Title & Flag */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="text-3xl sm:text-5xl" role="img" aria-label={country.country}>
                  {country.flag}
                </span>
                <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
                  {country.country} Visa
                </h1>
              </div>

              <p className="mt-2.5 text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                {selectedVisa.description}
              </p>

              {/* Highlight Metadata Badges Row */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-sky-400" />
                  <span>Validity: {selectedVisa.validity}</span>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  <span>Max Stay: {selectedVisa.maxStay}</span>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                  <span>Entry: {selectedVisa.entryType}</span>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Processing: {selectedVisa.processingTime}</span>
                </div>
              </div>
            </div>

            {/* Hero CTA Button */}
            <div className="lg:col-span-4 lg:text-right pt-2 lg:pt-0">
              <button
                type="button"
                onClick={handleStartApplication}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:bg-brand-dark active:scale-95 cursor-pointer"
              >
                Start Application →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================
          2. HORIZONTALLY SCROLLABLE STICKY TAB NAV BAR
      =============================================== */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex space-x-6 overflow-x-auto no-scrollbar py-1" aria-label="Tabs">
            {[
              { id: 'visa-info', label: 'Visa Info' },
              { id: 'documents', label: 'Documents' },
              { id: 'visa-process', label: 'Process' },
              { id: 'reviews', label: 'Sample Reviews' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`whitespace-nowrap py-3.5 px-1 text-xs sm:text-sm font-bold border-b-2 transition cursor-pointer ${
                    isActive
                      ? 'border-brand text-brand'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 space-y-12 sm:space-y-16">

        {/* ==============================================
            3. VISA INFORMATION SECTION (#visa-info)
        =============================================== */}
        <section id="visa-info" className="scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

            {/* Left Details */}
            <div className="space-y-5">
              {/* Visa Options Switcher */}
              {country.visaTypes.length > 1 && (
                <div className="rounded-2xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Select Visa Type Option
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {country.visaTypes.map((vType, idx) => (
                      <button
                        key={vType.id || idx}
                        type="button"
                        onClick={() => setSelectedVisaIndex(idx)}
                        className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                          selectedVisaIndex === idx
                            ? 'bg-brand-dark text-white shadow-xs'
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
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand">
                  Visa Overview
                </span>
                <h2 className="mt-1 text-xl sm:text-3xl font-extrabold text-brand-dark">
                  {selectedVisa.name} Details
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-muted">
                  Purpose of trip: <span className="font-semibold text-slate-700">{selectedVisa.purpose}</span>.
                </p>
              </div>

              {/* 4 Detail Cards (Stacked 2x2 grid on mobile) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <span className="block text-[10px] font-semibold text-muted uppercase">Validity</span>
                  <span className="mt-1 block text-xs sm:text-base font-bold text-brand-dark">
                    {selectedVisa.validity}
                  </span>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <span className="block text-[10px] font-semibold text-muted uppercase">Max Stay</span>
                  <span className="mt-1 block text-xs sm:text-base font-bold text-brand-dark">
                    {selectedVisa.maxStay}
                  </span>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <span className="block text-[10px] font-semibold text-muted uppercase">Entry Type</span>
                  <span className="mt-1 block text-xs sm:text-base font-bold text-brand-dark">
                    {selectedVisa.entryType}
                  </span>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                  <span className="block text-[10px] font-semibold text-muted uppercase">Processing</span>
                  <span className="mt-1 block text-xs sm:text-base font-bold text-emerald-600">
                    {selectedVisa.processingTime}
                  </span>
                </div>
              </div>

              {/* Bullet Checklist */}
              <div className="rounded-2xl border border-blue-100 bg-brand-light/40 p-5">
                <h3 className="text-xs font-bold text-brand-dark mb-2.5">
                  Application Highlights
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>100% Online Document Upload</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>Expert Document Review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>Digital E-Visa Clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>24/7 Applicant Support</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Sticky Pricing & Application Card */}
            <div className="lg:sticky lg:top-20 h-fit">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                    Selected Category
                  </span>
                  <h3 className="text-base font-bold text-brand-dark mt-0.5">
                    {selectedVisa.name}
                  </h3>
                </div>

                {/* Travellers Selector */}
                <div>
                  <label htmlFor="travellers" className="block text-xs font-bold text-slate-600 mb-1 flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-brand" />
                    Number of Travellers
                  </label>
                  <select
                    id="travellers"
                    value={travellersCount}
                    onChange={(e) => setTravellersCount(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-brand-dark outline-none focus:border-brand"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Traveller' : 'Travellers'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fee Breakdown Table */}
                <div className="rounded-xl bg-slate-50 p-3.5 text-xs space-y-1.5 border border-slate-100">
                  <div className="flex justify-between text-slate-600">
                    <span>Government Fee</span>
                    <span className="font-semibold text-slate-800">{selectedVisa.govtFee}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Service Fee</span>
                    <span className="font-semibold text-slate-800">{selectedVisa.serviceFee}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-brand-dark text-xs sm:text-sm">
                    <span>Estimated Total</span>
                    <span className="text-brand">{selectedVisa.total}</span>
                  </div>
                </div>

                <p className="text-[10px] text-muted italic text-center">
                  * {selectedVisa.priceSubtext}
                </p>

                {/* Start Application CTA */}
                <button
                  type="button"
                  onClick={handleStartApplication}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-dark py-3 text-xs font-bold text-white shadow-sm hover:bg-brand transition active:scale-95 cursor-pointer"
                >
                  Start Application →
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ==============================================
            4. REQUIRED DOCUMENTS SECTION (#documents)
        =============================================== */}
        <section id="documents" className="scroll-mt-24 border-t border-slate-200/80 pt-10">
          <div className="mb-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Required Documents
            </span>
            <h2 className="mt-1 text-xl sm:text-3xl font-extrabold text-brand-dark">
              Required to Apply
            </h2>
            <p className="mt-1 text-xs text-muted">
              Digital copies can be uploaded online during your application.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {selectedVisa.documents && selectedVisa.documents.map((doc) => (
              <DocumentCard key={doc.id || doc.title} document={doc} />
            ))}
          </div>
        </section>

        {/* ==============================================
            5. VISA PROCESS SECTION (#visa-process)
        =============================================== */}
        <section id="visa-process" className="scroll-mt-24 border-t border-slate-200/80 pt-10">
          <div className="mb-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Timeline & Steps
            </span>
            <h2 className="mt-1 text-xl sm:text-3xl font-extrabold text-brand-dark">
              Visa Process
            </h2>
          </div>

          <ProcessTimeline steps={selectedVisa.process} />
        </section>

        {/* ==============================================
            6. SAMPLE REVIEWS SECTION (#reviews)
        =============================================== */}
        <section id="reviews" className="scroll-mt-24 border-t border-slate-200/80 pt-10">
          <div className="mb-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Sample Feedback
            </span>
            <h2 className="mt-1 text-xl sm:text-3xl font-extrabold text-brand-dark">
              Sample Reviews
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {selectedVisa.sampleReviews && selectedVisa.sampleReviews.map((rev) => (
              <div key={rev.id} className="rounded-xl border border-blue-100 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                    Sample Review
                  </span>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-700 italic">
                  "{rev.comment}"
                </p>

                <div className="mt-3 border-t border-slate-100 pt-2 flex items-center justify-between text-[11px]">
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
        <section id="faqs" className="scroll-mt-24 border-t border-slate-200/80 pt-10">
          <div className="mb-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Questions & Answers
            </span>
            <h2 className="mt-1 text-xl sm:text-3xl font-extrabold text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQ faqs={selectedVisa.faqs} />
        </section>

      </div>

      {/* Mobile Sticky Application CTA Action Bar (Offset above bottom nav) */}
      <div className="fixed bottom-16 left-0 right-0 z-40 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md p-3 shadow-xl flex items-center justify-between">
        <div>
          <span className="block text-[9px] font-bold uppercase text-muted">Estimated Starting</span>
          <span className="text-sm font-extrabold text-brand-dark">{selectedVisa.price}</span>
        </div>

        <button
          type="button"
          onClick={handleStartApplication}
          className="rounded-xl bg-brand-dark px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand transition active:scale-95 cursor-pointer"
        >
          Start Application →
        </button>
      </div>
    </div>
  );
}
