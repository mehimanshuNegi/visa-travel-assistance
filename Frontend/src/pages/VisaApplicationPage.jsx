import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { visaData } from '../data/visaData';
import { CheckCircle2, ArrowLeft, Info, ShieldCheck } from 'lucide-react';

export default function VisaApplicationPage() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  // Read URL query parameters (?country=uae&type=tourist)
  const initialCountryId = searchParams.get('country') || '';
  const initialVisaType = searchParams.get('type') || '';

  // Find country matching query parameter if provided
  const matchedCountry = visaData.find(
    (c) => c.id.toLowerCase() === initialCountryId.toLowerCase()
  );

  const [selectedCountry, setSelectedCountry] = useState(
    matchedCountry ? matchedCountry.country : ''
  );
  const [selectedVisaType, setSelectedVisaType] = useState(initialVisaType);

  // Update form fields if search params change
  useEffect(() => {
    if (matchedCountry) {
      setSelectedCountry(matchedCountry.country);
    }
    if (initialVisaType) {
      setSelectedVisaType(initialVisaType);
    }
  }, [initialCountryId, initialVisaType]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-page text-slate-800 pb-16">
      {/* Header */}
      <section className="border-b border-slate-200 bg-brand-dark text-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/visa"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Visa Exploration
          </Link>

          <span className="block text-xs font-bold uppercase tracking-wider text-sky-400">
            Visa Application Form
          </span>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Start Your Visa Application
          </h1>

          <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
            Provide your basic travel and personal details below. Our visa specialists will review your paperwork and reach out with the next steps.
          </p>
        </div>
      </section>

      {/* Application Form Body */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">

          {submitted ? (
            <div className="rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-lg sm:p-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-brand-dark">
                Application Submitted!
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-muted">
                Thank you for completing the application form. Our visa processing team will review your submitted details and contact you shortly.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/visa"
                  className="rounded-xl bg-brand-dark px-6 py-3 text-xs font-bold text-white transition hover:bg-brand"
                >
                  Explore Other Destinations
                </Link>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Submit Another Demo Application
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-10 space-y-10"
            >

              {/* ================================
                  01 — APPLICANT DETAILS
              ================================= */}
              <div>
                <FormSection
                  number="01"
                  title="Applicant Details"
                  description="Provide primary passport holder details."
                />

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <FormField
                    label="First Name"
                    name="firstName"
                    placeholder="e.g. Rahul"
                  />

                  <FormField
                    label="Last Name"
                    name="lastName"
                    placeholder="e.g. Sharma"
                  />

                  <FormField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                  />

                  <FormField
                    label="Nationality"
                    name="nationality"
                    placeholder="e.g. Indian"
                  />

                  <FormField
                    label="Passport Number"
                    name="passportNumber"
                    placeholder="Enter valid passport number"
                  />
                </div>
              </div>

              {/* ================================
                  02 — CONTACT DETAILS
              ================================= */}
              <div className="border-t border-slate-100 pt-8">
                <FormSection
                  number="02"
                  title="Contact Information"
                  description="Where should our visa specialists send application updates?"
                />

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                  />

                  <FormField
                    label="Phone / WhatsApp Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* ================================
                  03 — TRAVEL DETAILS
              ================================= */}
              <div className="border-t border-slate-100 pt-8">
                <FormSection
                  number="03"
                  title="Travel Details"
                  description="Pre-filled based on your destination selection."
                />

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {/* Destination Country Select */}
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-xs font-bold text-brand-dark"
                    >
                      Destination Country
                    </label>

                    <select
                      id="country"
                      name="country"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-brand-dark outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    >
                      <option value="">Select a country</option>
                      {visaData.map((c) => (
                        <option key={c.id} value={c.country}>
                          {c.flag} {c.country}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Visa Type Input/Select */}
                  <FormField
                    label="Visa Type / Category"
                    name="visaType"
                    value={selectedVisaType}
                    onChange={(e) => setSelectedVisaType(e.target.value)}
                    placeholder="e.g. Tourist Visa"
                  />

                  <FormField
                    label="Planned Departure Date"
                    name="travelDate"
                    type="date"
                  />

                  <FormField
                    label="Number of Travellers"
                    name="travellers"
                    type="number"
                    defaultValue="1"
                    min="1"
                  />
                </div>
              </div>

              {/* ================================
                  04 — DOCUMENT UPLOADS
              ================================= */}
              <div className="border-t border-slate-100 pt-8">
                <FormSection
                  number="04"
                  title="Document Uploads (Optional Demo)"
                  description="Upload your passport copy or photo scan for review."
                />

                <div className="mt-6 rounded-xl border border-dashed border-blue-200 bg-brand-light/50 p-6 text-center">
                  <label
                    htmlFor="documents"
                    className="block cursor-pointer"
                  >
                    <ShieldCheck className="mx-auto h-8 w-8 text-brand" />
                    <span className="mt-2 block text-xs font-bold text-brand-dark">
                      Upload Passport & Photograph Copies
                    </span>
                    <span className="mt-1 block text-[11px] text-muted">
                      JPG, PNG or PDF format up to 10MB
                    </span>

                    <input
                      id="documents"
                      name="documents"
                      type="file"
                      multiple
                      className="mt-4 block w-full text-xs text-slate-500 file:mr-4 file:rounded-xl file:border-0 file:bg-brand-dark file:px-4 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-brand cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* ================================
                  05 — ADDITIONAL INFORMATION
              ================================= */}
              <div className="border-t border-slate-100 pt-8">
                <FormSection
                  number="05"
                  title="Additional Information"
                  description="Add any special travel requests or questions."
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about special requirements or travel plans..."
                  className="mt-4 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>

              {/* Terms checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded accent-brand"
                />
                <label
                  htmlFor="terms"
                  className="text-xs leading-relaxed text-slate-600"
                >
                  I confirm that all information provided is accurate and agree to the terms and conditions.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="border-t border-slate-100 pt-6">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-dark px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand"
                >
                  Submit Application →
                </button>
                <p className="mt-2 text-center text-[11px] text-muted">
                  No payment will be processed at this step.
                </p>
              </div>

            </form>
          )}

        </div>
      </section>
    </div>
  );
}

// Simple Helper Component for Form Sections
function FormSection({ number, title, description }) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-light text-xs font-extrabold text-brand">
          {number}
        </span>
        <h2 className="text-lg font-bold text-brand-dark">
          {title}
        </h2>
      </div>
      <p className="mt-1 text-xs text-muted">
        {description}
      </p>
    </div>
  );
}

// Simple Helper Component for Inputs
function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  defaultValue,
  min
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-bold text-brand-dark"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        min={min}
        required
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-brand-dark outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}