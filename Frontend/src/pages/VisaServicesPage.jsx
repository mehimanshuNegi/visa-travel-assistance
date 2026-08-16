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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter countries based on user selection & search term
  const filteredCountries = visaData.filter((country) => {
    const matchesSearch =
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      selectedRegion === 'All' || country.region === selectedRegion;

    const matchesCategory =
      selectedCategory === 'All' || country.category === selectedCategory;

    const matchesDelivery =
      selectedDelivery === 'All' ||
      (selectedDelivery === 'Express' && country.visaDelivery.includes('Express')) ||
      (selectedDelivery === 'Standard' && country.visaDelivery.includes('Standard'));

    return matchesSearch && matchesRegion && matchesCategory && matchesDelivery;
  });

  const handleResetAll = () => {
    setSearchTerm('');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setSelectedDelivery('All');
  };

  return (
    <div className="min-h-screen bg-page text-slate-800 pb-16">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-3 py-1.5 text-center text-[11px] font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-3.5 w-3.5 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Visa details and prices are sample placeholders for client review.
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="bg-brand-dark py-6 sm:py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-block rounded-full bg-white/10 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-300 border border-white/10">
            VISA SERVICES
          </span>

          <h1 className="mt-2 text-xl sm:text-4xl font-extrabold tracking-tight text-white">
            Find the right visa for your trip
          </h1>

          <p className="mt-1.5 text-xs sm:text-base text-slate-200">
            Explore visa options, document checklists, and application processes.
          </p>

          {/* Search & Filter Component */}
          <div className="mt-4 sm:mt-6">
            <VisaFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDelivery={selectedDelivery}
              onDeliveryChange={setSelectedDelivery}
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
        onResetAll={handleResetAll}
      />

      {/* 2-Column Mobile Country Cards Grid */}
      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h2 className="text-sm sm:text-xl font-bold text-brand-dark tracking-tight">
              Visa Destinations
            </h2>
            <span className="text-[11px] font-bold text-brand bg-brand-light px-2 py-0.5 rounded-md border border-blue-100">
              {filteredCountries.length} countries
            </span>
          </div>

          {/* 2-Column Mobile Grid */}
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredCountries.map((country) => (
                <VisaCard key={country.id} countryData={country} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-sm font-semibold text-brand-dark">
                No visas found for your search
              </p>
              <p className="mt-1 text-xs text-muted">
                Try searching for another country or clear filters.
              </p>
              <button
                type="button"
                onClick={handleResetAll}
                className="mt-3 inline-block rounded-xl bg-brand-dark px-4 py-2 text-xs font-semibold text-white hover:bg-brand transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Desktop Platform Benefits (Hidden on small mobile screens to keep mobile clean) */}
      <section className="hidden sm:block border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-5 text-center">
              <ShieldCheck className="mx-auto h-6 w-6 text-brand" />
              <h3 className="mt-2 text-sm font-bold text-brand-dark">100% Online Assistance</h3>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-5 text-center">
              <Zap className="mx-auto h-6 w-6 text-brand" />
              <h3 className="mt-2 text-sm font-bold text-brand-dark">Fast Processing Support</h3>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-5 text-center">
              <FileCheck className="mx-auto h-6 w-6 text-brand" />
              <h3 className="mt-2 text-sm font-bold text-brand-dark">Expert Document Review</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}