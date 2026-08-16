import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

export default function TravelServiceCard({ service }) {
  const {
    title,
    tagline,
    description,
    image,
    price,
    category,
    features,
    ctaText,
    link
  } = service;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/40">
      {/* Cover Image (Same Proportions as VisaCard) */}
      <div className="relative h-36 sm:h-52 lg:h-60 w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-bold tracking-wider text-brand-dark shadow-xs uppercase">
          <Shield className="h-3 w-3 text-brand" />
          <span>{category}</span>
        </div>

        {/* Title and Tagline Overlaid */}
        <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4">
          <span className="block text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-300 drop-shadow-xs">
            {tagline}
          </span>
          <h3 className="text-xs sm:text-lg font-extrabold tracking-tight text-white drop-shadow-md line-clamp-1">
            {title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-2.5 sm:p-4 bg-white flex flex-col justify-between flex-1 space-y-2">
        {/* Short description on desktop / hidden or compact on mobile */}
        <p className="hidden sm:block text-xs leading-relaxed text-muted line-clamp-2">
          {description}
        </p>

        {/* Features Pills (Desktop Only) */}
        {features && (
          <div className="hidden sm:flex flex-wrap gap-1.5 pt-1">
            {features.map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1 rounded-md bg-brand-light/70 px-2 py-0.5 text-[10px] font-semibold text-brand-dark border border-blue-100/60"
              >
                {feat}
              </span>
            ))}
          </div>
        )}

        {/* Price & Simple Arrow Action */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] sm:text-xs">
          <div>
            <span className="block text-[8px] sm:text-[9px] font-bold text-muted uppercase">
              From
            </span>
            <span className="text-xs sm:text-base font-extrabold text-brand-dark">
              {price}
            </span>
          </div>

          <Link
            to={link || '/contact'}
            className="inline-flex items-center gap-1 rounded-lg bg-brand-dark px-2.5 py-1.5 text-[10px] sm:text-xs font-bold text-white transition hover:bg-brand active:scale-95"
          >
            <span className="hidden sm:inline">{ctaText || 'Inquire'}</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
