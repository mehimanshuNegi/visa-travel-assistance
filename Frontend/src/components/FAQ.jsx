import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) {
    return (
      <p className="text-sm text-muted">
        No FAQs available for this visa destination currently.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question || index}
            className="overflow-hidden rounded-xl border border-blue-100 bg-white transition-all shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-slate-50/80"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-bold text-brand-dark md:text-base">
                {faq.question}
              </span>

              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand text-white' : ''}`}>
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-slate-100 bg-brand-light/30 px-5 py-4">
                <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
