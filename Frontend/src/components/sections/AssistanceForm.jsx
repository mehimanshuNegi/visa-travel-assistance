export default function AssistanceForm() {
    return (
        <section className="bg-brand-light py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-6">

                <div className="rounded-lg border border-blue-100 bg-white p-6 sm:p-8 md:p-10">

                    {/* Header */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                            Need Assistance?
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark">
                            Have a question or need help?
                        </h2>

                        <p className="mt-4 text-muted">
                            Tell us what you need and our team will get in touch with you.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-8 space-y-6">

                        <div className="grid gap-6 sm:grid-cols-2">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Phone / WhatsApp
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label
                                    htmlFor="service"
                                    className="mb-2 block text-sm font-medium text-brand-dark"
                                >
                                    Service Interested In
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                                >
                                    <option value="">Select a service</option>
                                    <option value="dummy-ticket">Dummy Flight Ticket</option>
                                    <option value="visa">Visa Assistance</option>
                                    <option value="hotel">Hotel Booking</option>
                                    <option value="insurance">Travel Insurance</option>
                                </select>
                            </div>

                        </div>

                        {/* Destination */}
                        <div>
                            <label
                                htmlFor="destination"
                                className="mb-2 block text-sm font-medium text-brand-dark"
                            >
                                Destination
                            </label>

                            <input
                                id="destination"
                                name="destination"
                                type="text"
                                placeholder="Where are you travelling?"
                                className="w-full rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-brand-dark"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Tell us how we can help..."
                                className="w-full resize-none rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-brand-dark outline-none placeholder:text-muted focus:border-brand focus:ring-1 focus:ring-brand"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
                        >
                            Get Assistance
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}