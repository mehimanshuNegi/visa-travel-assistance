import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, ShieldCheck } from 'lucide-react';

// Atlys-inspired Vertical Destination Country Card (2-column responsive mobile setup)
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
  const validity = defaultVisa.validity || '60 Days';
  const maxStay = defaultVisa.maxStay || '30 Days';
  const processingTime = defaultVisa.processingTime || '3-5 Days';

  return (
    <Link
      to={`/visa/${id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/40"
    >
      {/* Background Image Container with Gradient Overlay */}
      <div className="relative h-44 sm:h-56 lg:h-64 w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={country}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        {/* Category Pill Tag */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold tracking-wide text-brand-dark shadow-xs">
          <ShieldCheck className="h-3 w-3 text-brand" />
          <span>{category || 'VISA'}</span>
        </div>

        {/* Processing Speed Badge */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 rounded-full bg-brand-dark/85 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-white flex items-center gap-1">
          <Clock className="h-2.5 w-2.5 text-sky-400" />
          <span>{processingTime}</span>
        </div>

        {/* Flag and Country Title */}
        <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4">
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="text-2xl sm:text-3xl filter drop-shadow-md shrink-0" role="img" aria-label={country}>
              {flag}
            </span>
            <h3 className="text-sm sm:text-xl font-bold tracking-tight text-white drop-shadow-md line-clamp-1">
              {country}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Details / Content Body */}
      <div className="flex flex-1 flex-col justify-between p-3 sm:p-4 bg-white">
        {/* Visa Metadata Row */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 rounded-xl bg-brand-light/60 p-2 sm:p-3 text-[10px] sm:text-xs border border-blue-100/60">
          <div>
            <span className="block font-medium uppercase tracking-wider text-muted text-[9px] sm:text-[10px]">
              Validity
            </span>
            <span className="font-semibold text-brand-dark flex items-center gap-1 mt-0.5 truncate">
              <Calendar className="h-2.5 w-2.5 text-brand shrink-0" />
              {validity}
            </span>
          </div>

          <div>
            <span className="block font-medium uppercase tracking-wider text-muted text-[9px] sm:text-[10px]">
              Max Stay
            </span>
            <span className="font-semibold text-brand-dark flex items-center gap-1 mt-0.5 truncate">
              <Clock className="h-2.5 w-2.5 text-brand shrink-0" />
              {maxStay}
            </span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between border-t border-slate-100 pt-2.5 sm:pt-3">
          <div>
            <span className="block text-[9px] sm:text-[11px] font-medium text-muted">
              Starting
            </span>
            <span className="text-sm sm:text-lg font-extrabold text-brand-dark">
              {startingPrice}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-lg bg-brand-dark px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-bold text-white transition-colors group-hover:bg-brand">
            <span className="hidden sm:inline">View Visa</span>
            <span className="sm:hidden">View</span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
