import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

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
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/40">
      {/* Background Cover Image with Dark Gradient Overlay */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Category Pill Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold tracking-wider text-brand-dark shadow-sm uppercase">
          <Shield className="h-3.5 w-3.5 text-brand" />
          <span>{category}</span>
        </div>

        {/* Title and Tagline on Overlay */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 drop-shadow-sm">
            {tagline}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-5 bg-white space-y-4">
        <p className="text-xs leading-relaxed text-muted">
          {description}
        </p>

        {/* Key Features Bullet Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {features && features.map((feat) => (
            <span
              key={feat}
              className="inline-flex items-center gap-1 rounded-md bg-brand-light/70 px-2.5 py-1 text-[11px] font-semibold text-brand-dark border border-blue-100/60"
            >
              <CheckCircle2 className="h-3 w-3 text-brand" />
              {feat}
            </span>
          ))}
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
          <div>
            <span className="block text-[10px] font-bold text-muted uppercase">
              Starting from
            </span>
            <span className="text-lg font-extrabold text-brand-dark">
              {price}
            </span>
          </div>

          <Link
            to={link || '/contact'}
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-dark px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-brand active:scale-95"
          >
            {ctaText || 'Learn More'}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
