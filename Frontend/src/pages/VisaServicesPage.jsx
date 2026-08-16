import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { visaData } from '../data/visaData';
import VisaCard from '../components/VisaCard';
import VisaFilters from '../components/VisaFilters';
import MobileFilterBottomSheet from '../components/MobileFilterBottomSheet';
import { ShieldCheck, Zap, FileCheck, ArrowRight, Info } from 'lucide-react';

export default function VisaServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDelivery, setSelectedDelivery] = useState('All');
  const [popularOnly, setPopularOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter countries based on user selection & search term
  const filteredCountries = visaData.filter((country) => {
    // Search matching country name or region or category
    const matchesSearch =
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.category.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter matching region
    const matchesRegion =
      selectedRegion === 'All' || country.region === selectedRegion;

    // Filter matching category
    const matchesCategory =
      selectedCategory === 'All' || country.category === selectedCategory;

    // Filter matching delivery speed
    const matchesDelivery =
      selectedDelivery === 'All' ||
      (selectedDelivery === 'Express' && country.visaDelivery.includes('Express')) ||
      (selectedDelivery === 'Standard' && country.visaDelivery.includes('Standard'));

    // Filter matching popular toggle
    const matchesPopular = !popularOnly || country.popular;

    return (
      matchesSearch &&
      matchesRegion &&
      matchesCategory &&
      matchesDelivery &&
      matchesPopular
    );
  });

  const handleResetAll = () => {
    setSearchTerm('');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setSelectedDelivery('All');
    setPopularOnly(false);
  };

  return (
    <div className="min-h-screen bg-page text-slate-800 pb-20">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Visa prices, processing timelines, and fee details are sample placeholders.
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-brand-dark py-10 sm:py-16 md:py-20 text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-sm border border-white/10">
              Visa Services
            </span>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Find the right visa for your trip
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-lg leading-relaxed text-slate-200">
              Explore visa options, document checklists, processing timelines, and step-by-step application guidance.
            </p>
          </div>

          {/* Search & Filter Component */}
          <div className="mt-6 sm:mt-10">
            <VisaFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDelivery={selectedDelivery}
              onDeliveryChange={setSelectedDelivery}
              popularOnly={popularOnly}
              onPopularToggle={setPopularOnly}
              onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Mobile Filter Bottom Sheet Modal */}
      <MobileFilterBottomSheet
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedDelivery={selectedDelivery}
        onDeliveryChange={setSelectedDelivery}
        popularOnly={popularOnly}
        onPopularToggle={setPopularOnly}
        onResetAll={handleResetAll}
      />

      {/* Explore Countries Grid Section (2-Column Mobile Grid) */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Title & Results Count */}
          <div className="flex items-center justify-between mb-6 border-b border-slate-200/80 pb-3">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-brand-dark tracking-tight">
                Explore Destinations
              </h2>
              <p className="text-[11px] sm:text-xs text-muted mt-0.5">
                Select a country to view visa requirements.
              </p>
            </div>

            <div className="text-[11px] sm:text-xs font-bold text-brand bg-brand-light px-2.5 py-1 rounded-lg border border-blue-100">
              {filteredCountries.length} destinations
            </div>
          </div>

          {/* 2-Column Mobile Grid (grid-cols-2 on mobile, 5-cols on desktop) */}
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredCountries.map((country) => (
                <VisaCard key={country.id} countryData={country} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 sm:p-12 text-center">
              <p className="text-sm sm:text-base font-semibold text-brand-dark">
                No visas found for your search
              </p>
              <p className="mt-1.5 text-xs text-muted">
                Try searching for another country or reset filters.
              </p>
              <button
                type="button"
                onClick={handleResetAll}
                className="mt-4 inline-block rounded-xl bg-brand-dark px-4 py-2 text-xs font-semibold text-white hover:bg-brand transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="border-t border-slate-200 bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Why Choose Us
            </span>
            <h2 className="mt-1 text-xl sm:text-3xl font-bold text-brand-dark">
              Streamlined Visa Platform
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-5 text-center">
              <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-3 text-sm sm:text-base font-bold text-brand-dark">
                100% Online Assistance
              </h3>
              <p className="mt-1 text-xs text-muted">
                Complete your visa requirements digitally.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-5 text-center">
              <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-3 text-sm sm:text-base font-bold text-brand-dark">
                Fast Processing Support
              </h3>
              <p className="mt-1 text-xs text-muted">
                Express timeline tracking for approvals.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-5 text-center">
              <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
                <FileCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-3 text-sm sm:text-base font-bold text-brand-dark">
                Expert Document Review
              </h3>
              <p className="mt-1 text-xs text-muted">
                Pre-check paperwork to avoid rejections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-brand-dark py-10 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-xl sm:text-3xl font-bold">
            Ready to start your visa application?
          </h2>
          <Link
            to="/visa/application"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-brand-dark hover:bg-brand-light transition"
          >
            Start Visa Application
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}