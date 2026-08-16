import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function VisaFilters({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedCategory,
  onCategoryChange,
  selectedDelivery,
  onDeliveryChange,
  onOpenMobileFilters
}) {
  return (
    <div className="w-full">
      {/* Compact Top Bar: Search Input + Filter Button */}
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:p-3">
        {/* Search Field */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search Country..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-7 py-2 text-xs sm:text-sm text-brand-dark placeholder-slate-400 outline-none transition focus:border-brand focus:bg-white"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Filter Button */}
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="flex items-center gap-1.5 rounded-xl bg-brand-dark px-3 py-2 text-xs font-bold text-white shadow-xs hover:bg-brand transition shrink-0 cursor-pointer"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>Filter</span>
        </button>

        {/* Desktop Filter Dropdowns (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-2">
          <select
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-brand-dark outline-none cursor-pointer"
          >
            <option value="All">Region: All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-brand-dark outline-none cursor-pointer"
          >
            <option value="All">Type: All</option>
            <option value="E-VISA">E-Visa</option>
            <option value="SCHENGEN VISA">Schengen Visa</option>
            <option value="STICKER VISA">Sticker Visa</option>
            <option value="E-VOA">E-VOA</option>
          </select>
        </div>
      </div>
    </div>
  );
}
