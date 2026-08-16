import React from 'react';
import { Link } from 'react-router-dom';
import { travelServices } from '../data/travelServices';
import TravelServiceCard from '../components/TravelServiceCard';
import ProcessTimeline from '../components/ProcessTimeline';
import {
  ShieldCheck,
  Plane,
  Building,
  Shield,
  ArrowRight,
  CheckCircle2,
  Info
} from 'lucide-react';

export default function ServicesPage() {
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
      description: "Enter your travel dates, passenger names, and itinerary requirements."
    },
    {
      step: "03",
      title: "Team Verification",
      description: "Our travel specialists verify formatting for visa submissions."
    },
    {
      step: "04",
      title: "Receive Documents",
      description: "Receive your verified itinerary document or booking clearance."
    }
  ];

  return (
    <div className="min-h-screen bg-page text-slate-800 pb-16">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-3 py-1.5 text-center text-[11px] font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Secondary travel services details and fees are sample placeholders.
        </span>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-dark py-8 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-block rounded-full bg-white/10 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-300 border border-white/10">
            TRAVEL SERVICES
          </span>

          <h1 className="mt-2 text-xl sm:text-4xl font-extrabold tracking-tight text-white">
            Complete Your Travel Plans
          </h1>

          <p className="mt-1.5 text-xs sm:text-base text-slate-200 max-w-2xl">
            Flight itineraries, hotel vouchers, travel insurance, and actual booking support.
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-dark transition"
            >
              Request Assistance
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              to="/visa"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
            >
              Explore Visa Services
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Services Catalog — Clean 2-Column Mobile Grid */}
      <section className="py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-4 border-b border-slate-200 pb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Catalog Options
            </span>
            <h2 className="text-base sm:text-2xl font-extrabold text-brand-dark">
              Travel Assistance Services
            </h2>
          </div>

          {/* 2-Column Mobile Grid for Travel Services */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {travelServices.map((service) => (
              <TravelServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Insurance Summary Section */}
      <section className="py-8 bg-brand-light/50 border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl bg-white p-5 sm:p-8 border border-blue-100 shadow-sm grid gap-4 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-light px-2.5 py-0.5 text-[10px] font-bold text-brand border border-blue-100">
                <Shield className="h-3 w-3 text-brand" />
                Insurance Protection
              </span>

              <h2 className="mt-2 text-base sm:text-2xl font-extrabold text-brand-dark">
                Travel Insurance: Travel With Confidence
              </h2>

              <p className="mt-1 text-xs text-muted">
                Embassy-compliant travel medical insurance for Schengen, UK, and global travel.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100">
              <div>
                <span className="block text-[9px] font-bold text-muted uppercase">Starting from</span>
                <span className="text-sm sm:text-xl font-extrabold text-brand-dark">₹XXX</span>
              </div>

              <Link
                to="/contact"
                className="rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-dark transition"
              >
                Inquire Insurance →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Services Work */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Simple Workflow
            </span>
            <h2 className="text-base sm:text-2xl font-extrabold text-brand-dark">
              How Travel Services Work
            </h2>
          </div>

          <ProcessTimeline steps={travelProcessSteps} />
        </div>
      </section>

      {/* Primary Visa Cross-Sell CTA Banner */}
      <section className="bg-brand-dark py-8 text-white border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
            Primary Service
          </span>
          <h2 className="mt-1 text-lg sm:text-2xl font-extrabold">
            Need Visa Assistance Too?
          </h2>
          <p className="mt-1.5 text-xs text-slate-300">
            Explore entry requirements, document lists, and apply online on our main visa platform.
          </p>

          <Link
            to="/visa"
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-brand-dark hover:bg-brand-light transition"
          >
            Explore Visa Services →
          </Link>
        </div>
      </section>
    </div>
  );
}