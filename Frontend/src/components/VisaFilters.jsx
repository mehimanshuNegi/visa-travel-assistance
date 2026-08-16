import React from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

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
  onPopularToggle
}) {
  return (
    <div className="w-full space-y-4">
      {/* Main Search Input & Primary Filters Bar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white p-3 shadow-md sm:p-4 md:flex-row md:items-center">
        {/* Search Field */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search destination country (e.g., UAE, France, Japan)..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-11 pr-4 py-3 text-sm text-brand-dark placeholder-slate-400 outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Dropdowns Bar */}
        <div className="flex flex-wrap items-center gap-2">
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

          {/* Visa Type / Category */}
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

      {/* Quick Filter Pill Buttons */}
      <div className="flex flex-wrap items-center gap-2 px-1">
        <span className="flex items-center gap-1 text-xs font-semibold text-muted mr-1">
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
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'All' && selectedCategory === 'All' && selectedDelivery === 'All' && !popularOnly
              ? 'bg-brand-dark text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All Destinations
        </button>

        {/* Popular Only */}
        <button
          type="button"
          onClick={() => onPopularToggle(!popularOnly)}
          className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
            popularOnly
              ? 'bg-brand text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="h-3 w-3" />
          Popular Destinations
        </button>

        {/* Quick Asia Pill */}
        <button
          type="button"
          onClick={() => onRegionChange(selectedRegion === 'Asia' ? 'All' : 'Asia')}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'Asia'
              ? 'bg-brand text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Asia
        </button>

        {/* Quick Europe Pill */}
        <button
          type="button"
          onClick={() => onRegionChange(selectedRegion === 'Europe' ? 'All' : 'Europe')}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'Europe'
              ? 'bg-brand text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Europe
        </button>

        {/* Quick Middle East Pill */}
        <button
          type="button"
          onClick={() => onRegionChange(selectedRegion === 'Middle East' ? 'All' : 'Middle East')}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
            selectedRegion === 'Middle East'
              ? 'bg-brand text-white shadow-sm'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Middle East
        </button>
      </div>
    </div>
  );
}
