import React from 'react';
import {
  FileText,
  Camera,
  Plane,
  Building,
  Shield,
  Wallet,
  Briefcase,
  Calendar,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

// Map icon string names to Lucide icons cleanly
const iconMap = {
  FileText,
  Camera,
  Plane,
  Building,
  Shield,
  Wallet,
  Briefcase,
  Calendar,
  ShieldCheck
};

export default function DocumentCard({ document }) {
  const { title, subtitle, description, iconName } = document;

  const IconComponent = iconMap[iconName] || FileText;

  return (
    <div className="flex flex-col justify-between rounded-xl border border-blue-100/80 bg-white p-5 shadow-sm transition-all duration-200 hover:border-brand/30 hover:shadow-md">
      <div>
        {/* Header with Icon and Check badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
            <IconComponent className="h-5.5 w-5.5" />
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="h-3 w-3" />
            Required
          </span>
        </div>

        {/* Document Title & Subtitle */}
        <h4 className="mt-4 text-base font-bold text-brand-dark">
          {title}
        </h4>

        {subtitle && (
          <p className="mt-0.5 text-xs font-semibold text-brand">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {description}
        </p>
      </div>

      <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-400">
        Digital upload available during application
      </div>
    </div>
  );
}
