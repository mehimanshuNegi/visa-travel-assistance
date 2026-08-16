import React from 'react';
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';

export default function VisaFilters({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedCategory,
  onCategoryChange,
  selectedDelivery,
  onDeliveryChange,
  popularOnly,
  onPopularToggle,
  onOpenMobileFilters
}) {
  return (
    <div className="w-full space-y-3 sm:space-y-4">
      {/* Main Search Input & Mobile Filter Toggle Button Bar */}
      <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white p-2.5 shadow-md sm:p-4">
        {/* Search Field */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search country (e.g. UAE, France)..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-8 py-2.5 sm:py-3 text-xs sm:text-sm text-brand-dark placeholder-slate-400 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Mobile Filter Button (Side-by-Side Icon Button on Mobile) */}
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white shadow-sm hover:bg-brand transition md:hidden cursor-pointer"
          aria-label="Open Filters"
        >
          <SlidersHorizontal className="h-4.5 w-4.5" />
        </button>

        {/* Desktop Filter Dropdowns Bar (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Region Dropdown */}
          <select
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs font-semibold text-brand-dark outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer"
          >
            <option value="All">Region: All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
          </select>

          {/* Visa Category */}
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs font-semibold text-brand-dark outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer"
          >
            <option value="All">Visa Type: All</option>
            <option value="E-VISA">E-Visa</option>
            <option value="SCHENGEN VISA">Schengen Visa</option>
            <option value="STICKER VISA">Sticker Visa</option>
            <option value="E-VOA">E-VOA</option>
          </select>

          {/* Delivery speed filter */}
          <select
            value={selectedDelivery}
            onChange={(e) => onDeliveryChange(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs font-semibold text-brand-dark outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 cursor-pointer"
          >
            <option value="All">Delivery: All</option>
            <option value="Express">Express (&lt; 5 Days)</option>
            <option value="Standard">Standard (&gt; 5 Days)</option>
          </select>
        </div>
      </div>

      {/* Quick Filter Pill Buttons (Horizontally Scrollable on Mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-1 py-1">
        <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-muted shrink-0 mr-1">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Quick Filters:
        </span>

        {/* All Button */}
        <button
          type="button"
          onClick={() => {
            onRegionChange('All');
            onCategoryChange('All');
            onDeliveryChange('All');
            onPopularToggle(false);
          }}
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'All' && selectedCategory === 'All' && selectedDelivery === 'All' && !popularOnly
              ? 'bg-brand-dark text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All
        </button>

        {/* Popular Only */}
        <button
          type="button"
          onClick={() => onPopularToggle(!popularOnly)}
          className={`shrink-0 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            popularOnly
              ? 'bg-brand text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="h-3 w-3" />
          Popular
        </button>

        {/* Asia */}
        <button
          type="button"
          onClick={() => onRegionChange(selectedRegion === 'Asia' ? 'All' : 'Asia')}
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'Asia'
              ? 'bg-brand text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Asia
        </button>

        {/* Europe */}
        <button
          type="button"
          onClick={() => onRegionChange(selectedRegion === 'Europe' ? 'All' : 'Europe')}
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'Europe'
              ? 'bg-brand text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Europe
        </button>

        {/* Middle East */}
        <button
          type="button"
          onClick={() => onRegionChange(selectedRegion === 'Middle East' ? 'All' : 'Middle East')}
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'Middle East'
              ? 'bg-brand text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Middle East
        </button>
      </div>
    </div>
  );
}
