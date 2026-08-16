import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Ultra-Clean Atlys-Inspired Vertical Country Card
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

  return (
    <Link
      to={`/visa/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/40"
    >
      {/* Destination Image (Main Visual Element) */}
      <div className="relative h-36 sm:h-52 lg:h-60 w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={country}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        {/* Flag and Country Name Overlaid */}
        <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl sm:text-2xl filter drop-shadow-md shrink-0" role="img" aria-label={country}>
              {flag}
            </span>
            <h3 className="text-xs sm:text-lg font-extrabold tracking-tight text-white drop-shadow-md line-clamp-1">
              {country}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-2.5 sm:p-3.5 bg-white space-y-2">
        {/* TYPE & VALID Row */}
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-50 p-2 text-[9px] sm:text-xs border border-slate-100 font-semibold">
          <div>
            <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Type
            </span>
            <span className="text-slate-800 truncate block">
              {category || 'E-VISA'}
            </span>
          </div>

          <div>
            <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Valid
            </span>
            <span className="text-slate-800 truncate block">
              {validity}
            </span>
          </div>
        </div>

        {/* Fee Line Below Card */}
        <div className="flex items-center justify-between pt-0.5 text-[10px] sm:text-xs">
          <span className="text-slate-500 font-medium truncate">
            Fee: <strong className="text-brand-dark font-extrabold">{startingPrice}</strong>
          </span>

          <span className="text-brand font-bold inline-flex items-center gap-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
