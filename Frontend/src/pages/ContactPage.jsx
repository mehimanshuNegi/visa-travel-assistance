import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import FAQ from '../components/FAQ';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Visa Assistance',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const element = document.getElementById('query-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Common contact FAQs
  const contactFaqs = [
    {
      question: "How can I get visa assistance?",
      answer: "You can submit a query using the form on this page or explore our Visa Services catalog at /visa."
    },
    {
      question: "What information should I provide in my query?",
      answer: "Please mention your destination country, travel dates, and visa type requirements."
    },
    {
      question: "Can I contact your team directly on WhatsApp?",
      answer: "Yes, our team is available on WhatsApp for quick inquiries regarding visa requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-page text-slate-800 pb-16">
      {/* 1. Contact Hero */}
      <section className="bg-brand-dark py-8 sm:py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-block rounded-full bg-white/10 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-300 border border-white/10">
            CONTACT US
          </span>

          <h1 className="mt-2 text-xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Can We Help?
          </h1>

          <p className="mt-1.5 text-xs sm:text-base text-slate-200 max-w-2xl">
            Have questions about visas or travel documents? Get in touch with our team.
          </p>

          <div className="mt-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-dark transition cursor-pointer"
            >
              Send Query
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact Cards */}
      <section className="py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-4 border-b border-slate-200 pb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Direct Channels
            </span>
            <h2 className="text-base sm:text-2xl font-extrabold text-brand-dark">
              Reach Out Directly
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            <ContactCard
              type="whatsapp"
              title="WhatsApp"
              subtitle="Chat instantly"
              value="+91 XXXXX XXXXX"
              link="https://wa.me/919876543210"
              buttonText="Chat on WhatsApp"
            />

            <ContactCard
              type="phone"
              title="Phone Call"
              subtitle="Talk to specialist"
              value="+91 XXXXX XXXXX"
              link="tel:+919876543210"
              buttonText="Call Us"
            />

            <ContactCard
              type="email"
              title="Email Inquiry"
              subtitle="Send requirements"
              value="info@example.com"
              link="mailto:info@example.com"
              buttonText="Send Email"
            />
          </div>
        </div>
      </section>

      {/* 3. Assistance / Query Form */}
      <section id="query-form" className="py-6 sm:py-12 bg-brand-light/40 border-t border-blue-100 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-4 text-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand">
              Assistance Request
            </span>
            <h2 className="text-base sm:text-2xl font-extrabold text-brand-dark">
              Send Us Your Query
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-md">
            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  Query Submitted!
                </h3>
                <p className="text-xs text-muted max-w-sm mx-auto">
                  Thank you! Our visa team will review your query and get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl bg-brand-dark px-4 py-2 text-xs font-bold text-white hover:bg-brand transition"
                >
                  Send Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-[11px] font-bold text-brand-dark mb-1">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-brand-dark outline-none focus:border-brand"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-[11px] font-bold text-brand-dark mb-1">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-brand-dark outline-none focus:border-brand"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-brand-dark mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-brand-dark outline-none focus:border-brand"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-brand-dark mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-brand-dark outline-none focus:border-brand"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-[11px] font-bold text-brand-dark mb-1">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-brand-dark outline-none focus:border-brand"
                  >
                    <option value="Visa Assistance">Visa Assistance</option>
                    <option value="Dummy Flight Ticket">Dummy Flight Ticket</option>
                    <option value="Dummy Hotel Reservation">Dummy Hotel Reservation</option>
                    <option value="Travel Insurance">Travel Insurance</option>
                    <option value="Actual Flight Booking">Actual Flight Booking</option>
                    <option value="Actual Hotel Booking">Actual Hotel Booking</option>
                    <option value="Other Query">Other General Query</option>
                  </select>
                </div>

                {/* Query Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-brand-dark mb-1">
                    Your Message / Travel Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    required
                    placeholder="Tell us about your travel plans or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs text-brand-dark outline-none focus:border-brand"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-dark py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition hover:bg-brand active:scale-[0.99]"
                >
                  Send Query →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Visa Assistance CTA (Near Bottom) */}
      <section className="py-6 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl bg-brand-dark text-white p-5 text-center shadow-md">
            <h3 className="text-base sm:text-xl font-extrabold">
              Need Visa Assistance?
            </h3>
            <p className="mt-1 text-xs text-slate-300 max-w-md mx-auto">
              Explore visa options, document checklists, and application guidelines for top global travel destinations.
            </p>
            <div className="mt-4">
              <Link
                to="/visa"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-brand-dark hover:bg-brand-light hover:text-brand transition"
              >
                Explore Visa Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Support FAQs */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-4">
            <h2 className="text-base sm:text-xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ faqs={contactFaqs} />
        </div>
      </section>
    </div>
  );
}