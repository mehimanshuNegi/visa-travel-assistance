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
  onResetAll
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      {/* Backdrop overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Clean Compact Bottom Sheet Modal */}
      <div className="relative z-10 w-full max-w-md rounded-t-3xl bg-white p-5 shadow-2xl space-y-4 border-t border-slate-200">
        {/* Drag Handle Indicator */}
        <div className="w-10 h-1 rounded-full bg-slate-300 mx-auto" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2 text-brand-dark font-extrabold text-base">
            <SlidersHorizontal className="h-4 w-4 text-brand" />
            <span>Filter Visas</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Region Options */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Region
          </label>
          <div className="flex flex-wrap gap-1.5">
            {['All', 'Asia', 'Europe', 'Middle East'].map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => onRegionChange(reg)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition border ${
                  selectedRegion === reg
                    ? 'bg-brand-dark text-white border-brand-dark'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Category Options */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Visa Type
          </label>
          <div className="flex flex-wrap gap-1.5">
            {['All', 'E-VISA', 'SCHENGEN VISA', 'STICKER VISA', 'E-VOA'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition border ${
                  selectedCategory === cat
                    ? 'bg-brand text-white border-brand'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              onResetAll();
              onClose();
            }}
            className="flex-1 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
          >
            Clear Filters
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl bg-brand-dark py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
