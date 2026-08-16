import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, ShieldCheck } from 'lucide-react';

// Atlys-inspired Vertical Destination Country Card
export default function VisaCard({ countryData }) {
  const {
    id,
    country,
    flag,
    image,
    category,
    startingPrice,
    visaTypes
  } = countryData;

  const defaultVisa = visaTypes && visaTypes.length > 0 ? visaTypes[0] : {};
  const validity = defaultVisa.validity || 'To be confirmed';
  const maxStay = defaultVisa.maxStay || 'To be confirmed';
  const processingTime = defaultVisa.processingTime || 'Fast';

  return (
    <Link
      to={`/visa/${id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/40"
    >
      {/* Background Image Container with Gradient Overlay */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={country}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold tracking-wide text-brand-dark shadow-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" />
          <span>{category || 'VISA'}</span>
        </div>

        {/* Processing Badge */}
        <div className="absolute top-3 right-3 rounded-full bg-brand-dark/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white flex items-center gap-1">
          <Clock className="h-3 w-3 text-sky-400" />
          <span>{processingTime}</span>
        </div>

        {/* Flag and Country Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl filter drop-shadow-md" role="img" aria-label={country}>
              {flag}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">
              {country}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Details / Content Body */}
      <div className="flex flex-1 flex-col justify-between p-4 bg-white">
        {/* Visa Metadata Row */}
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-brand-light/60 p-3 text-xs border border-blue-100/60">
          <div>
            <span className="block font-medium uppercase tracking-wider text-muted text-[10px]">
              Validity
            </span>
            <span className="font-semibold text-brand-dark flex items-center gap-1 mt-0.5">
              <Calendar className="h-3 w-3 text-brand" />
              {validity}
            </span>
          </div>

          <div>
            <span className="block font-medium uppercase tracking-wider text-muted text-[10px]">
              Max Stay
            </span>
            <span className="font-semibold text-brand-dark flex items-center gap-1 mt-0.5">
              <Clock className="h-3 w-3 text-brand" />
              {maxStay}
            </span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <span className="block text-[11px] font-medium text-muted">
              Starting from
            </span>
            <span className="text-lg font-extrabold text-brand-dark">
              {startingPrice}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-lg bg-brand-dark px-3 py-2 text-xs font-bold text-white transition-colors group-hover:bg-brand">
            View Visa
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
