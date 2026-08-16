import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ProcessTimeline({ steps = [] }) {
  // Fallback default timeline steps if none provided
  const timelineSteps = steps.length > 0 ? steps : [
    {
      step: "01",
      title: "Submit Application",
      description: "Fill out basic personal and travel information online in minutes."
    },
    {
      step: "02",
      title: "Expert Document Review",
      description: "Our team double-checks your documents to ensure 100% accuracy."
    },
    {
      step: "03",
      title: "Visa Processing",
      description: "Application is submitted to government immigration authorities."
    },
    {
      step: "04",
      title: "Visa Approved & Delivered",
      description: "Receive your verified visa PDF directly on email and WhatsApp."
    }
  ];

  return (
    <div className="w-full">
      {/* Desktop Horizontal View */}
      <div className="hidden lg:grid grid-cols-4 gap-6 relative">
        {timelineSteps.map((item, index) => (
          <div key={item.step || index} className="relative flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <div>
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark text-sm font-bold text-white shadow-sm">
                  {item.step}
                </span>

                {index < timelineSteps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-brand/40" />
                )}
                {index === timelineSteps.length - 1 && (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                )}
              </div>

              {/* Step title & description */}
              <h4 className="mt-5 text-base font-bold text-brand-dark">
                {item.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] font-semibold text-brand">
              Step {index + 1} of {timelineSteps.length}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet Vertical Timeline View */}
      <div className="lg:hidden space-y-4">
        {timelineSteps.map((item, index) => (
          <div key={item.step || index} className="flex gap-4 items-start rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-sm font-bold text-white shadow-sm">
              {item.step}
            </span>
            <div>
              <h4 className="text-base font-bold text-brand-dark">
                {item.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
