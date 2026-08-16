import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import FAQ from '../components/FAQ';
import {
  MessageSquare,
  PhoneCall,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe,
  Info,
  Clock
} from 'lucide-react';

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
      answer: "You can submit a query using the form on this page, explore our Visa Services catalog at /visa, or start an online application directly."
    },
    {
      question: "What information should I provide in my query?",
      answer: "Please mention your destination country, tentative travel dates, visa type (e.g. tourist, business), and any specific documentation requirements."
    },
    {
      question: "Can I contact your team directly on WhatsApp?",
      answer: "Yes, our team is available on WhatsApp for quick inquiries regarding visa requirements and travel document support."
    },
    {
      question: "What travel services do you provide alongside visa assistance?",
      answer: "In addition to visa guidance, we offer secondary travel services such as dummy flight reservations, dummy hotel vouchers, travel insurance assistance, and actual booking support."
    }
  ];

  return (
    <div className="min-h-screen bg-page text-slate-800">
      {/* Sample Prototype Disclaimer Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-semibold text-amber-900 flex items-center justify-center gap-2">
        <Info className="h-4 w-4 text-amber-600 shrink-0" />
        <span>
          Prototype Preview: Contact information and business hours are sample placeholders for client review.
        </span>
      </div>

      {/* ===================================================
          1. HERO SECTION (VISA/TRAVEL CONTACT HERO)
      ==================================================== */}
      <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24 text-white">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-md border border-white/10 shadow-xs mb-4">
                CONTACT US
              </span>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                How Can We Help With Your Travel Plans?
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200">
                Have questions about visas, travel documents, or our travel services? Get in touch with our team and we will guide you through the next steps.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-brand-dark hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Send a Query
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  to="/visa"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  Explore Visa Services
                </Link>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                  alt="Customer Support"
                  className="h-80 w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="rounded-full bg-brand/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    Dedicated Support
                  </span>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    Prompt Guidance for Visas & Travel Documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. DIRECT CONTACT OPTIONS (3 CARDS)
      ==================================================== */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Direct Channels
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Reach Out Directly
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Choose your preferred contact method to connect with our team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* WhatsApp Card */}
            <ContactCard
              type="whatsapp"
              title="WhatsApp"
              subtitle="Chat instantly with our travel team"
              value="+91 XXXXX XXXXX"
              link="https://wa.me/919876543210"
              buttonText="Chat on WhatsApp"
            />

            {/* Phone Card */}
            <ContactCard
              type="phone"
              title="Phone Call"
              subtitle="Talk to a visa specialist"
              value="+91 XXXXX XXXXX"
              link="tel:+919876543210"
              buttonText="Call Us"
            />

            {/* Email Card */}
            <ContactCard
              type="email"
              title="Email Inquiry"
              subtitle="Send us detailed requirements"
              value="info@example.com"
              link="mailto:info@example.com"
              buttonText="Send Email"
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          3. ASSISTANCE / QUERY FORM SECTION
      ==================================================== */}
      <section id="query-form" className="py-14 md:py-20 bg-brand-light/50 border-t border-blue-100 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Assistance Request
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Send Us Your Query
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Tell us what you need help with and our team will get back to you promptly.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <h3 className="text-2xl font-bold text-brand-dark">
                  Query Submitted Successfully!
                </h3>

                <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-muted">
                  Thank you! Your query has been received. Our visa and travel team will review your requirements and contact you soon.
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl bg-brand-dark px-6 py-3 text-xs font-bold text-white hover:bg-brand transition"
                  >
                    Send Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First & Last Name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-brand-dark mb-1.5">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-brand-dark mb-1.5">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="e.g. Sharma"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-dark mb-1.5">
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-dark mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>

                {/* Service Selection Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-brand-dark mb-1.5">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="Visa Assistance">Visa Assistance (Primary Service)</option>
                    <option value="Dummy Flight Ticket">Dummy Flight Ticket</option>
                    <option value="Dummy Hotel Reservation">Dummy Hotel Reservation</option>
                    <option value="Travel Insurance">Travel Insurance</option>
                    <option value="Actual Flight Booking">Actual Flight Booking</option>
                    <option value="Actual Hotel Booking">Actual Hotel Booking</option>
                    <option value="Other Query">Other General Query</option>
                  </select>
                </div>

                {/* Query Message Area */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-brand-dark mb-1.5">
                    Your Message / Travel Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your travel plans, destination country, travel dates, or specific questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-dark px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand active:scale-[0.99]"
                >
                  Send Query →
                </button>
                <p className="text-center text-[11px] text-muted">
                  Frontend prototype submission. No personal data stored.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          4 & 5. QUICK VISA & TRAVEL SERVICES CTAS
      ==================================================== */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">

          {/* Primary Visa CTA Block */}
          <div className="rounded-3xl bg-brand-dark text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 border border-white/10 mb-3">
                Primary Business Service
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Looking for Visa Assistance?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Explore visa options, document checklists, and application guidelines for top global travel destinations.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/visa"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-brand-dark shadow-md transition hover:bg-brand-light hover:text-brand"
              >
                Explore Visa Services →
              </Link>
            </div>
          </div>

          {/* Secondary Travel Services CTA Block */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <span className="inline-block rounded-full bg-slate-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Supporting Services
              </span>
              <h3 className="text-2xl font-extrabold text-brand-dark">
                Need Other Travel Services?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                Dummy Flight Tickets, Hotel Vouchers, Travel Insurance, and Actual Booking Assistance.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold text-slate-800 transition hover:bg-brand-dark hover:text-white"
              >
                Explore Travel Services →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================
          6. COMMON QUESTIONS (FAQ ACCORDION)
      ==================================================== */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Contact & Support FAQs
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-brand-dark">
              Common Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted">
              Quick answers about contacting our visa and travel assistance team.
            </p>
          </div>

          <FAQ faqs={contactFaqs} />
        </div>
      </section>

      {/* ===================================================
          7. FINAL ASSISTANCE CTA
      ==================================================== */}
      <section className="bg-brand-dark py-14 text-white border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Not Sure What You Need?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Tell us about your travel plans and we will help you find the right service for your journey.
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs font-bold text-brand-dark shadow-md transition hover:bg-brand-light hover:text-brand cursor-pointer"
            >
              Get Assistance →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}