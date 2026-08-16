import React from 'react';
import { X, SlidersHorizontal, Check } from 'lucide-react';

export default function MobileFilterBottomSheet({
  isOpen,
  onClose,
  selectedRegion,
  onRegionChange,
  selectedCategory,
  onCategoryChange,
  selectedDelivery,
  onDeliveryChange,
  popularOnly,
  onPopularToggle,
  onResetAll
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      {/* Backdrop overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Bottom Sheet Modal Container */}
      <div className="relative z-10 w-full max-w-lg rounded-t-3xl bg-white p-5 shadow-2xl space-y-5 border-t border-slate-200 max-h-[85vh] overflow-y-auto">
        {/* Drag Handle Top Indicator */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-brand-dark font-extrabold text-lg">
            <SlidersHorizontal className="h-5 w-5 text-brand" />
            <span>Filters</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Group 1: Visa Delivery Speed */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            Visa Delivery Speed
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Any Delivery', value: 'All' },
              { label: 'Express (< 5 Days)', value: 'Express' },
              { label: 'Standard (> 5 Days)', value: 'Standard' }
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => onDeliveryChange(item.value)}
                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition border ${
                  selectedDelivery === item.value
                    ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {selectedDelivery === item.value && <Check className="h-3.5 w-3.5 text-sky-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Group 2: Visa Category / Type */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            Visa Category Type
          </label>
          <div className="flex flex-wrap gap-2">
            {['All', 'E-VISA', 'SCHENGEN VISA', 'STICKER VISA', 'E-VOA'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition border ${
                  selectedCategory === cat
                    ? 'bg-brand text-white border-brand shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Group 3: Region */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            Destination Region
          </label>
          <div className="flex flex-wrap gap-2">
            {['All', 'Asia', 'Europe', 'Middle East'].map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => onRegionChange(reg)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition border ${
                  selectedRegion === reg
                    ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Group 4: Popular Only */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => onPopularToggle(!popularOnly)}
            className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition border ${
              popularOnly
                ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>Show Popular Destinations Only</span>
            {popularOnly && <Check className="h-4 w-4 text-white" />}
          </button>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => {
              onResetAll();
              onClose();
            }}
            className="flex-1 rounded-xl border border-slate-300 bg-white py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Clear Filters
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl bg-brand-dark py-3 text-xs font-bold text-white shadow-md hover:bg-brand transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
