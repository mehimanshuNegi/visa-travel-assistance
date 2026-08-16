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
    <div className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand/40">
      <div>
        {/* Header Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand shadow-xs group-hover:bg-brand group-hover:text-white transition-colors">
          <IconComponent className="h-6 w-6" />
        </div>

        {/* Title & Subtitle */}
        <h3 className="mt-4 text-xl font-bold text-brand-dark">
          {title}
        </h3>

        <p className="mt-1 text-xs text-muted">
          {subtitle}
        </p>

        {/* Contact Value */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs font-bold text-brand-dark border border-slate-100">
          {value}
        </div>
      </div>

      {/* Functional Action CTA Button */}
      <div className="mt-6 pt-2">
        <a
          href={link}
          target={type === 'whatsapp' ? '_blank' : '_self'}
          rel={type === 'whatsapp' ? 'noopener noreferrer' : ''}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark py-3 px-4 text-xs font-bold text-white shadow-sm transition hover:bg-brand active:scale-95"
        >
          {buttonText}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
