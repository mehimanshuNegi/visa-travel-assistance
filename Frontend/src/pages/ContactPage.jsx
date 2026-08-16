export default function ContactPage() {
    return (
        <div className="bg-white">

            {/* Page Header */}
            <section className="bg-brand-light">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Contact Us
                    </p>

                    <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
                        Get in touch with our team
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                        Have a question about our services or need help with
                        your travel requirements? We're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

                    {/* Contact Information */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                            Contact Information
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark">
                            We're here to assist you
                        </h2>

                        <p className="mt-4 max-w-xl leading-7 text-muted">
                            Whether you have questions about dummy tickets,
                            visa assistance or another travel service, you
                            can contact the team directly.
                        </p>

                        <div className="mt-8 space-y-5">

                            {/* WhatsApp */}
                            <div className="rounded-lg border border-blue-100 bg-brand-light p-5">
                                <p className="text-sm font-semibold text-brand-dark">
                                    WhatsApp
                                </p>

                                <p className="mt-1 text-sm text-muted">
                                    [Client WhatsApp Number]
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="rounded-lg border border-blue-100 bg-white p-5">
                                <p className="text-sm font-semibold text-brand-dark">
                                    Phone
                                </p>

                                <p className="mt-1 text-sm text-muted">
                                    [Client Phone Number]
                                </p>
                            </div>

                            {/* Email */}
                            <div className="rounded-lg border border-blue-100 bg-white p-5">
                                <p className="text-sm font-semibold text-brand-dark">
                                    Email
                                </p>

                                <p className="mt-1 text-sm text-muted">
                                    [Client Email]
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Quick Query */}
                    <div className="rounded-xl border border-blue-100 bg-brand-light p-6 sm:p-8">

                        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                            Quick Query
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-brand-dark">
                            Need help choosing a service?
                        </h2>

                        <p className="mt-3 text-muted">
                            Send us your requirements and the team will contact
                            you directly.
                        </p>

                        <form className="mt-8 space-y-5">

                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Name
                                </label>

                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Email
                                </label>

                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-phone"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Phone / WhatsApp
                                </label>

                                <input
                                    id="contact-phone"
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-service"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Service
                                </label>

                                <select
                                    id="contact-service"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                                >
                                    <option value="">Select a service</option>
                                    <option value="dummy-ticket">
                                        Dummy Flight Ticket
                                    </option>
                                    <option value="visa">
                                        Visa Assistance
                                    </option>
                                    <option value="hotel">
                                        Hotel Booking
                                    </option>
                                    <option value="insurance">
                                        Travel Insurance
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Your Query
                                </label>

                                <textarea
                                    id="contact-message"
                                    rows="4"
                                    placeholder="Tell us what you need help with..."
                                    className="w-full resize-none rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                            >
                                Send Query
                            </button>

                        </form>
                    </div>

                </div>
            </section>

        </div>
    );
}