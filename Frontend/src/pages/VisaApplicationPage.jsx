import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VisaApplicationPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-brand-light">

            {/* Header */}
            <section className="border-b border-blue-100 bg-white">
                <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">

                    <Link
                        to="/visa"
                        className="text-sm font-semibold text-brand hover:text-brand-dark"
                    >
                        ← Back to Visa Services
                    </Link>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-brand">
                        Visa Application
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                        Continue Your Visa Application
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-7 text-muted">
                        Tell us about your travel plans and requirements.
                        Our team will review your information and contact you
                        regarding the next steps.
                    </p>

                </div>
            </section>

            {/* Application Form */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-4xl px-6">

                    {submitted ? (
                        <div className="rounded-xl border border-blue-100 bg-white p-8 text-center shadow-sm">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-xl font-bold text-brand">
                                ✓
                            </div>

                            <h2 className="mt-5 text-2xl font-bold text-brand-dark">
                                Application Received
                            </h2>

                            <p className="mx-auto mt-3 max-w-lg leading-6 text-muted">
                                This is currently a frontend demo. Once the
                                backend is connected, your application details
                                will be sent to the client's team.
                            </p>

                            <Link
                                to="/visa"
                                className="mt-6 inline-block rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                            >
                                Back to Visa Services
                            </Link>

                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8"
                        >

                            {/* ================================
                                01 — APPLICANT DETAILS
                            ================================= */}
                            <FormSection
                                number="01"
                                title="Applicant Details"
                                description="Provide the basic details of the person applying for the visa."
                            />

                            <div className="mt-6 grid gap-5 md:grid-cols-2">

                                <FormField
                                    label="First Name"
                                    name="firstName"
                                    placeholder="Enter first name"
                                />

                                <FormField
                                    label="Last Name"
                                    name="lastName"
                                    placeholder="Enter last name"
                                />

                                <FormField
                                    label="Date of Birth"
                                    name="dateOfBirth"
                                    type="date"
                                />

                                <FormField
                                    label="Nationality"
                                    name="nationality"
                                    placeholder="Enter nationality"
                                />

                                <FormField
                                    label="Passport Number"
                                    name="passportNumber"
                                    placeholder="Enter passport number"
                                />

                            </div>

                            {/* ================================
                                02 — CONTACT DETAILS
                            ================================= */}
                            <div className="mt-12 border-t border-blue-100 pt-10">

                                <FormSection
                                    number="02"
                                    title="Contact Details"
                                    description="How should our team contact you regarding your application?"
                                />

                                <div className="mt-6 grid gap-5 md:grid-cols-2">

                                    <FormField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />

                                    <FormField
                                        label="Phone / WhatsApp"
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter phone number"
                                    />

                                </div>

                            </div>

                            {/* ================================
                                03 — TRAVEL DETAILS
                            ================================= */}
                            <div className="mt-12 border-t border-blue-100 pt-10">

                                <FormSection
                                    number="03"
                                    title="Travel Details"
                                    description="Tell us about the visa you are interested in."
                                />

                                <div className="mt-6 grid gap-5 md:grid-cols-2">

                                    <SelectField
                                        label="Destination Country"
                                        name="country"
                                        options={[
                                            'United Arab Emirates',
                                            'France',
                                            'United Kingdom',
                                        ]}
                                    />

                                    <SelectField
                                        label="Visa Type"
                                        name="visaType"
                                        options={[
                                            'Tourist Visa',
                                            'Business Visa',
                                            'Other',
                                        ]}
                                    />

                                    <FormField
                                        label="Planned Travel Date"
                                        name="travelDate"
                                        type="date"
                                    />

                                    <FormField
                                        label="Number of Travellers"
                                        name="travellers"
                                        type="number"
                                        placeholder="1"
                                        min="1"
                                    />

                                </div>

                            </div>

                            {/* ================================
                                04 — DOCUMENTS
                            ================================= */}
                            <div className="mt-12 border-t border-blue-100 pt-10">

                                <FormSection
                                    number="04"
                                    title="Documents"
                                    description="Upload the documents requested by our team."
                                />

                                <div className="mt-6 rounded-lg border border-dashed border-blue-200 bg-brand-light p-6">

                                    <label
                                        htmlFor="documents"
                                        className="block cursor-pointer text-center"
                                    >
                                        <span className="text-sm font-semibold text-brand-dark">
                                            Upload Documents
                                        </span>

                                        <span className="mt-2 block text-sm text-muted">
                                            Passport, photograph and other
                                            supporting documents
                                        </span>

                                        <input
                                            id="documents"
                                            name="documents"
                                            type="file"
                                            multiple
                                            className="mt-5 block w-full text-sm text-muted"
                                        />

                                    </label>

                                </div>

                            </div>

                            {/* ================================
                                05 — ADDITIONAL INFORMATION
                            ================================= */}
                            <div className="mt-12 border-t border-blue-100 pt-10">

                                <FormSection
                                    number="05"
                                    title="Additional Information"
                                    description="Add anything else our team should know."
                                />

                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your requirements..."
                                    className="mt-6 w-full resize-none rounded-md border border-blue-100 px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-slate-400 focus:border-brand focus:ring-1 focus:ring-brand"
                                />

                            </div>

                            {/* ================================
                                TERMS
                            ================================= */}
                            <div className="mt-8 flex items-start gap-3">

                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    className="mt-1 h-4 w-4 accent-blue-700"
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-sm leading-6 text-muted"
                                >
                                    I agree to the terms and conditions and
                                    privacy policy.
                                </label>

                            </div>

                            {/* ================================
                                SUBMIT
                            ================================= */}
                            <div className="mt-8 border-t border-blue-100 pt-8">

                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-brand-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand"
                                >
                                    Continue Application →
                                </button>

                                <p className="mt-3 text-center text-xs text-muted">
                                    Our team will review your requirements
                                    and contact you regarding the next steps.
                                </p>

                            </div>

                        </form>
                    )}

                </div>
            </section>

        </div>
    );
}


/* ============================================
   FORM SECTION
============================================ */

function FormSection({ number, title, description }) {
    return (
        <div>
            <div className="flex items-center gap-3">

                <span className="text-sm font-bold text-brand">
                    {number}
                </span>

                <h2 className="text-xl font-bold text-brand-dark">
                    {title}
                </h2>

            </div>

            <p className="mt-2 text-sm leading-6 text-muted">
                {description}
            </p>
        </div>
    );
}


/* ============================================
   TEXT / DATE / NUMBER INPUT
============================================ */

function FormField({
    label,
    name,
    type = 'text',
    placeholder,
    min,
}) {
    return (
        <div>

            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-brand-dark"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                min={min}
                required
                className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-slate-400 focus:border-brand focus:ring-1 focus:ring-brand"
            />

        </div>
    );
}


/* ============================================
   SELECT FIELD
============================================ */

function SelectField({
    label,
    name,
    options,
}) {
    return (
        <div>

            <label
                htmlFor={name}
                className="mb-2 block text-sm font-semibold text-brand-dark"
            >
                {label}
            </label>

            <select
                id={name}
                name={name}
                required
                className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand focus:ring-1 focus:ring-brand"
            >
                <option value="">
                    Select an option
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}

            </select>

        </div>
    );
}