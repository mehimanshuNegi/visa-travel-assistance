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
  Info,
  ChevronDown
} from 'lucide-react';

export default function VisaCountryPage() {
  const { countryId } = useParams();
  const navigate = useNavigate();

  // Lookup country data from visaData.js
  const country = getCountryById(countryId);

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
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-3 py-1.5 text-center text-[11px] font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Visa details for {country.country} are sample placeholders.
        </span>
      </div>

      {/* ==============================================
          1. DESTINATION HERO (CLEAN & DIRECT)
      =============================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-6 sm:py-14">
        {/* Destination Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={country.image}
            alt={country.country}
            className="h-full w-full object-cover opacity-40 blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 mb-3">
            <Link to="/visa" className="hover:text-white transition">
              Visa Services
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-white truncate">{country.country}</span>
          </nav>

          {/* Title + Flag */}
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-5xl" role="img" aria-label={country.country}>
              {country.flag}
            </span>
            <div>
              <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-300 border border-white/10">
                {country.category}
              </span>
              <h1 className="text-xl sm:text-4xl font-extrabold text-white">
                {country.country} Visa
              </h1>
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-base text-slate-200 max-w-2xl leading-relaxed">
            {selectedVisa.description}
          </p>

          {/* Start Application Hero Button */}
          <div className="mt-4">
            <button
              type="button"
              onClick={handleStartApplication}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold text-white shadow-md transition hover:bg-brand-dark cursor-pointer active:scale-95"
            >
              Start Application →
            </button>
          </div>
        </div>
      </section>

      {/* ==============================================
          2. SIMPLE VERTICAL SECTIONS
      =============================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10 space-y-8">

        {/* SECTION A: VISA INFORMATION */}
        <section className="space-y-4">
          <h2 className="text-base sm:text-2xl font-bold text-brand-dark border-b border-slate-200 pb-2">
            Visa Information
          </h2>

          {/* Visa Options Switcher */}
          {country.visaTypes.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {country.visaTypes.map((vType, idx) => (
                <button
                  key={vType.id || idx}
                  type="button"
                  onClick={() => setSelectedVisaIndex(idx)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                    selectedVisaIndex === idx
                      ? 'bg-brand-dark text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {vType.name}
                </button>
              ))}
            </div>
          )}

          {/* 4 Information Boxes (2x2 grid on mobile) */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
              <span className="block text-[9px] font-bold text-slate-400 uppercase">Validity</span>
              <span className="mt-0.5 block text-xs sm:text-base font-bold text-brand-dark">
                {selectedVisa.validity}
              </span>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
              <span className="block text-[9px] font-bold text-slate-400 uppercase">Max Stay</span>
              <span className="mt-0.5 block text-xs sm:text-base font-bold text-brand-dark">
                {selectedVisa.maxStay}
              </span>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
              <span className="block text-[9px] font-bold text-slate-400 uppercase">Entry</span>
              <span className="mt-0.5 block text-xs sm:text-base font-bold text-brand-dark">
                {selectedVisa.entryType}
              </span>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
              <span className="block text-[9px] font-bold text-slate-400 uppercase">Processing</span>
              <span className="mt-0.5 block text-xs sm:text-base font-bold text-emerald-600">
                {selectedVisa.processingTime}
              </span>
            </div>
          </div>

          {/* Pricing & Traveller Fee Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Estimated Total Fee</span>
              <span className="text-base font-extrabold text-brand">{selectedVisa.total}</span>
            </div>

            <button
              type="button"
              onClick={handleStartApplication}
              className="w-full rounded-xl bg-brand-dark py-3 text-xs font-bold text-white hover:bg-brand transition"
            >
              Start Application →
            </button>
          </div>
        </section>

        {/* SECTION B: REQUIRED DOCUMENTS */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-2xl font-bold text-brand-dark border-b border-slate-200 pb-2">
            Required Documents
          </h2>

          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {selectedVisa.documents && selectedVisa.documents.map((doc) => (
              <DocumentCard key={doc.id || doc.title} document={doc} />
            ))}
          </div>
        </section>

        {/* SECTION C: VISA PROCESS */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-2xl font-bold text-brand-dark border-b border-slate-200 pb-2">
            Visa Process
          </h2>

          <ProcessTimeline steps={selectedVisa.process} />
        </section>

        {/* SECTION D: FAQS */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-2xl font-bold text-brand-dark border-b border-slate-200 pb-2">
            Frequently Asked Questions
          </h2>

          <FAQ faqs={selectedVisa.faqs} />
        </section>

      </div>

      {/* Mobile Sticky Application Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md p-3 shadow-lg flex items-center justify-between">
        <div>
          <span className="block text-[9px] font-bold uppercase text-slate-400">Total Fee</span>
          <span className="text-sm font-extrabold text-brand-dark">{selectedVisa.price}</span>
        </div>

        <button
          type="button"
          onClick={handleStartApplication}
          className="rounded-xl bg-brand-dark px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand transition cursor-pointer"
        >
          Start Application →
        </button>
      </div>
    </div>
  );
}
