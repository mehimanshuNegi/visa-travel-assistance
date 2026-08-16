import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { visaData } from '../data/visaData';
import VisaCard from '../components/VisaCard';
import VisaFilters from '../components/VisaFilters';
import { ShieldCheck, Zap, FileCheck, ArrowRight, Info } from 'lucide-react';

export default function VisaServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDelivery, setSelectedDelivery] = useState('All');
  const [popularOnly, setPopularOnly] = useState(false);

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

  return (
    <div className="min-h-screen bg-page text-slate-800">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Visa prices, processing timelines, and fee details are sample placeholders. Final details will be provided by the client.
        </span>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-brand-dark py-14 md:py-20 text-white">
        {/* Subtle background gradient glow */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-sm border border-white/10">
              Visa Services
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Find the right visa for your trip
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200">
              Explore visa options, document checklists, processing timelines, and step-by-step application guidance for top global destinations.
            </p>
          </div>

          {/* Search & Filter Component */}
          <div className="mt-10">
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
            />
          </div>
        </div>
      </section>

      {/* Explore Countries Grid Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Title & Results Count */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-8 border-b border-slate-200/80 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark tracking-tight">
                Explore Destinations
              </h2>
              <p className="text-xs text-muted mt-1">
                Select a country to view detailed visa requirements and start your application.
              </p>
            </div>

            <div className="text-xs font-bold text-brand bg-brand-light px-3 py-1.5 rounded-lg border border-blue-100 self-start sm:self-auto">
              Showing {filteredCountries.length} of {visaData.length} countries
            </div>
          </div>

          {/* Country Cards Grid (5-column desktop layout) */}
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredCountries.map((country) => (
                <VisaCard key={country.id} countryData={country} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-base font-semibold text-brand-dark">
                No countries match your search filter
              </p>
              <p className="mt-2 text-xs text-muted">
                Try clearing your search keyword or resetting the region filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedRegion('All');
                  setSelectedCategory('All');
                  setSelectedDelivery('All');
                  setPopularOnly(false);
                }}
                className="mt-5 inline-block rounded-xl bg-brand-dark px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand transition"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-brand-dark">
              Streamlined Visa Application Platform
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              We make travel authorization clear, fast, and stress-free.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Benefit 1 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 text-center transition hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                100% Online Assistance
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Complete your visa requirements from home with step-by-step digital guidance.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 text-center transition hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Fast Processing Support
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Express timeline tracking to ensure your visa is processed on schedule.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl border border-blue-100 bg-brand-light/30 p-6 text-center transition hover:shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                Expert Document Review
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Pre-submission document verification to prevent errors or application delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-brand-dark py-12 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to start your travel application?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300">
            Submit your basic details and let our visa specialists handle the rest.
          </p>
          <Link
            to="/visa/application"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-dark transition hover:bg-brand-light hover:text-brand"
          >
            Start Visa Application
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}