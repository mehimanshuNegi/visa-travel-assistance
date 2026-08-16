import { useState } from 'react';
import { Link } from 'react-router-dom';
import { visaData } from '../data/visaData';

export default function VisaServicesPage() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedVisa, setSelectedVisa] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const countryData = visaData.find(
        (country) => country.country === selectedCountry
    );

    const selectedVisaData = countryData?.visaTypes.find(
        (visa) => visa.name === selectedVisa
    );

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedVisa('');
        setShowDetails(false);
    };

    const handleVisaChange = (event) => {
        setSelectedVisa(event.target.value);
        setShowDetails(false);
    };

    const handleViewDetails = () => {
        if (selectedCountry && selectedVisa) {
            setShowDetails(true);

            setTimeout(() => {
                document
                    .getElementById('visa-details')
                    ?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
            }, 100);
        }
    };

    return (
        <div className="bg-white">

            {/* =========================================
                HERO / VISA FINDER
            ========================================= */}
            <section className="bg-brand-light">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">

                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                            Visa Services
                        </p>

                        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                            Find the right visa information for your trip
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-muted">
                            Select your destination and visa type to explore
                            the information, documents and process associated
                            with your application.
                        </p>

                    </div>

                    {/* =====================================
                        VISA FINDER
                    ===================================== */}
                    <div className="mt-10 rounded-xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">

                        <div className="grid gap-5 md:grid-cols-2">

                            {/* Country */}
                            <div>
                                <label
                                    htmlFor="country"
                                    className="mb-2 block text-sm font-semibold text-brand-dark"
                                >
                                    Destination Country
                                </label>

                                <select
                                    id="country"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand focus:ring-1 focus:ring-brand"
                                >
                                    <option value="">
                                        Select a country
                                    </option>

                                    {visaData.map((country) => (
                                        <option
                                            key={country.country}
                                            value={country.country}
                                        >
                                            {country.country}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Visa Type */}
                            <div>
                                <label
                                    htmlFor="visa-type"
                                    className="mb-2 block text-sm font-semibold text-brand-dark"
                                >
                                    Visa Type
                                </label>

                                <select
                                    id="visa-type"
                                    value={selectedVisa}
                                    onChange={handleVisaChange}
                                    disabled={!countryData}
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand focus:ring-1 focus:ring-brand disabled:cursor-not-allowed disabled:bg-slate-50"
                                >
                                    <option value="">
                                        {countryData
                                            ? 'Select visa type'
                                            : 'Select country first'}
                                    </option>

                                    {countryData?.visaTypes.map((visa) => (
                                        <option
                                            key={visa.name}
                                            value={visa.name}
                                        >
                                            {visa.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        {/* =================================
                            VIEW DETAILS BUTTON
                        ================================= */}
                        <div className="mt-6 flex justify-end">

                            <button
                                type="button"
                                onClick={handleViewDetails}
                                disabled={!selectedCountry || !selectedVisa}
                                className="rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand disabled:cursor-not-allowed disabled:bg-slate-300"
                            >
                                View Visa Details →
                            </button>

                        </div>

                        {!selectedCountry && (
                            <p className="mt-3 text-right text-xs text-muted">
                                Select a destination and visa type to continue.
                            </p>
                        )}

                    </div>

                </div>
            </section>


            {/* =========================================
                VISA DETAILS
            ========================================= */}
            {showDetails && selectedVisaData && (
                <div id="visa-details">

                    {/* =====================================
                        VISA INFORMATION
                    ===================================== */}
                    <section className="py-16 md:py-20">
                        <div className="mx-auto max-w-7xl px-6">

                            <div className="mb-10">

                                <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                                    Visa Information
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-brand-dark sm:text-4xl">
                                    {selectedVisaData.name}
                                </h2>

                                <p className="mt-3 text-lg text-muted">
                                    {selectedCountry}
                                </p>

                            </div>

                            {/* Information Cards */}
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                                <InfoCard
                                    title="Processing Time"
                                    value={selectedVisaData.processingTime}
                                />

                                <InfoCard
                                    title="Validity"
                                    value={selectedVisaData.validity}
                                />

                                <InfoCard
                                    title="Maximum Stay"
                                    value={selectedVisaData.stay}
                                />

                                <InfoCard
                                    title="Entry"
                                    value={selectedVisaData.entry}
                                />

                            </div>

                        </div>
                    </section>


                    {/* =====================================
                        REQUIRED DOCUMENTS
                    ===================================== */}
                    <section className="bg-brand-light py-16 md:py-20">
                        <div className="mx-auto max-w-7xl px-6">

                            <div className="grid gap-12 lg:grid-cols-[1fr_400px]">

                                {/* Documents */}
                                <div>

                                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                                        Required Documents
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold text-brand-dark sm:text-4xl">
                                        Documents you may need
                                    </h2>

                                    <p className="mt-4 max-w-2xl leading-7 text-muted">
                                        Document requirements can vary depending
                                        on the applicant, destination and visa
                                        type. The final list will be confirmed
                                        before the application process.
                                    </p>

                                    <div className="mt-8 space-y-3">

                                        {selectedVisaData.documents.map(
                                            (document) => (
                                                <div
                                                    key={document}
                                                    className="flex items-start gap-3 rounded-lg border border-blue-100 bg-white p-4"
                                                >
                                                    <span className="mt-0.5 font-bold text-brand">
                                                        ✓
                                                    </span>

                                                    <span className="text-sm text-brand-dark">
                                                        {document}
                                                    </span>
                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>


                                {/* Application CTA */}
                                <div className="self-start rounded-xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">

                                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                                        Ready to start?
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-brand-dark">
                                        Continue your visa application
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-muted">
                                        Provide your details and tell us about
                                        your travel requirements. Our team will
                                        guide you through the next steps.
                                    </p>

                                    <Link
                                        to="/visa/application"
                                        className="mt-7 block rounded-md bg-brand-dark px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand"
                                    >
                                        Continue Application →
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="mt-3 block rounded-md border border-blue-200 px-6 py-3 text-center text-sm font-semibold text-brand-dark transition hover:bg-brand-light"
                                    >
                                        Need Help?
                                    </Link>

                                </div>

                            </div>

                        </div>
                    </section>


                    {/* =====================================
                        VISA PROCESS
                    ===================================== */}
                    <section className="py-16 md:py-20">
                        <div className="mx-auto max-w-7xl px-6">

                            <div className="max-w-2xl">

                                <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                                    Visa Process
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-brand-dark sm:text-4xl">
                                    How the visa process works
                                </h2>

                                <p className="mt-4 text-lg leading-7 text-muted">
                                    A simple overview of how customers can move
                                    through the visa assistance process.
                                </p>

                            </div>


                            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

                                <ProcessStep
                                    number="01"
                                    title="Choose Your Destination"
                                    description="Select your destination country and visa type."
                                />

                                <ProcessStep
                                    number="02"
                                    title="Check Requirements"
                                    description="Review the information and documents needed."
                                />

                                <ProcessStep
                                    number="03"
                                    title="Submit Your Details"
                                    description="Provide the required applicant information."
                                />

                                <ProcessStep
                                    number="04"
                                    title="Get Assistance"
                                    description="Our team reviews your requirements and guides you."
                                />

                                <ProcessStep
                                    number="05"
                                    title="Complete the Process"
                                    description="Follow the applicable submission and application process."
                                />

                            </div>

                        </div>
                    </section>


                    {/* =====================================
                        IMPORTANT INFORMATION
                    ===================================== */}
                    <section className="bg-brand-light py-12">
                        <div className="mx-auto max-w-4xl px-6">

                            <div className="rounded-lg border border-blue-100 bg-white p-6 sm:p-8">

                                <h3 className="text-lg font-semibold text-brand-dark">
                                    Important information
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Visa requirements, processing times, fees
                                    and required documents can change depending
                                    on the destination, visa category and
                                    applicant. Information shown on this page
                                    should be confirmed before starting an
                                    application.
                                </p>

                            </div>

                        </div>
                    </section>


                    {/* =====================================
                        FINAL CTA
                    ===================================== */}
                    <section className="py-16 md:py-20">
                        <div className="mx-auto max-w-3xl px-6 text-center">

                            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                                Need Assistance?
                            </p>

                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                                Let us help with your visa requirements
                            </h2>

                            <p className="mt-4 text-lg leading-7 text-muted">
                                Tell us about your travel plans and requirements.
                            </p>

                            <Link
                                to="/visa/application"
                                className="mt-7 inline-block rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                            >
                                Start Visa Application →
                            </Link>

                        </div>
                    </section>

                </div>
            )}

        </div>
    );
}


/* ============================================
   INFORMATION CARD
============================================ */

function InfoCard({ title, value }) {
    return (
        <div className="rounded-xl border border-blue-100 bg-white p-6">

            <p className="text-sm text-muted">
                {title}
            </p>

            <p className="mt-2 text-lg font-semibold text-brand-dark">
                {value}
            </p>

        </div>
    );
}


/* ============================================
   PROCESS STEP
============================================ */

function ProcessStep({
    number,
    title,
    description,
}) {
    return (
        <div>

            <span className="text-sm font-bold text-brand">
                {number}
            </span>

            <h3 className="mt-3 text-lg font-semibold text-brand-dark">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
                {description}
            </p>

        </div>
    );
}