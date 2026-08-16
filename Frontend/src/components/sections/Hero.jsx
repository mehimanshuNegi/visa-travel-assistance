export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-brand-light py-16 md:py-24">
            {/* Subtle Abstract Background Shapes */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40">
                <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
                <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-dark/10 blur-3xl" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

                {/* Hero Content */}
                <div>
                    <span className="inline-block rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand shadow-xs border border-blue-100">
                        Travel & Visa Assistance
                    </span>

                    <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                        Get Your Dummy Flight Ticket for Your Visa Application
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                        Get a professional travel itinerary for visa applications,
                        travel planning and other travel requirements.
                    </p>

                    {/* Trust Points */}
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-dark">
                        <span className="flex items-center gap-1.5"><span className="text-brand font-bold">✓</span> Simple process</span>
                        <span className="flex items-center gap-1.5"><span className="text-brand font-bold">✓</span> Professional assistance</span>
                        <span className="flex items-center gap-1.5"><span className="text-brand font-bold">✓</span> Quick service</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/apply"
                            className="rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand hover:shadow-md"
                        >
                            Get Your Ticket
                        </a>

                        <a
                            href="/visa"
                            className="rounded-md border border-brand-dark/30 bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-xs transition hover:bg-white hover:border-brand-dark hover:shadow-sm"
                        >
                            Visa Assistance
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
                            alt="Travel destination"
                            className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}