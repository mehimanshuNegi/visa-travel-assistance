import React from 'react';
import { MessageSquare, PhoneCall, Mail, ArrowRight } from 'lucide-react';

const iconMap = {
  whatsapp: MessageSquare,
  phone: PhoneCall,
  email: Mail
};

export default function ContactCard({ type, title, subtitle, value, link, buttonText }) {
  const IconComponent = iconMap[type] || MessageSquare;

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/40">
      <div>
        <div className="flex items-center gap-3">
          {/* Header Icon */}
          <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand-light text-brand shadow-xs group-hover:bg-brand group-hover:text-white transition-colors shrink-0">
            <IconComponent className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
          </div>

          <div>
            <h3 className="text-xs sm:text-lg font-extrabold text-brand-dark">
              {title}
            </h3>
            <p className="text-[10px] sm:text-xs text-muted line-clamp-1">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Contact Value */}
        <div className="mt-2.5 rounded-xl bg-slate-50 p-2 sm:p-3 text-[10px] sm:text-xs font-bold text-brand-dark border border-slate-100 truncate">
          {value}
        </div>
      </div>

      {/* Functional Action CTA Button */}
      <div className="mt-3 pt-1">
        <a
          href={link}
          target={type === 'whatsapp' ? '_blank' : '_self'}
          rel={type === 'whatsapp' ? 'noopener noreferrer' : ''}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-dark py-2 sm:py-3 px-3 text-[10px] sm:text-xs font-bold text-white shadow-xs transition hover:bg-brand active:scale-95"
        >
          <span>{buttonText}</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </a>
      </div>
    </div>
  );
}
