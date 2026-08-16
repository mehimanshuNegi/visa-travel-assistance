import { services } from '../data/services';

export default function ServicesPage() {
    const featuredService = services.find((s) => s.id === 'dummy-flight') || services[0];
    const catalogServices = services.filter((s) => s.id !== 'dummy-flight');

    return (
        <div className="bg-white">

            {/* Header */}
            <section className="relative overflow-hidden bg-brand-light py-16 md:py-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30">
                    <div className="absolute -top-24 right-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
                </div>
                <div className="mx-auto max-w-7xl px-6">
                    <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand border border-blue-100 shadow-xs">
                        Our Catalogue
                    </span>

                    <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
                        Travel services designed around your needs
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                        Explore our complete suite of travel, visa and documentation services. Simple pricing, fast delivery, and dedicated customer support.
                    </p>
                </div>
            </section>

            {/* Featured Service Banner */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="overflow-hidden rounded-2xl border border-brand/30 bg-brand-light shadow-sm transition hover:shadow-md">
                        <div className="grid md:grid-cols-[1fr_320px]">
                            
                            {/* Main Details */}
                            <div className="p-8 sm:p-10">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                        Flagship Service
                                    </span>
                                    <span className="text-xs font-medium text-brand uppercase tracking-wider">
                                        Visa Application Essential
                                    </span>
                                </div>

                                <h2 className="mt-4 text-3xl font-extrabold text-brand-dark sm:text-4xl">
                                    {featuredService.title}
                                </h2>

                                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                                    {featuredService.description}
                                </p>

                                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                                            Features Included
                                        </h3>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {featuredService.features.map((feature) => (
                                                <span key={feature} className="rounded-md bg-white border border-blue-100 px-3 py-1 text-xs font-medium text-brand-dark">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                                            Suitable For
                                        </h3>
                                        <ul className="mt-3 space-y-1.5 text-xs text-muted">
                                            {featuredService.purposes.map((p) => (
                                                <li key={p} className="flex items-center gap-1.5">
                                                    <span className="text-brand font-bold">✓</span> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Price Side Card */}
                            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-blue-100 bg-white p-8">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                                        {featuredService.priceLabel}
                                    </p>
                                    <p className="mt-2 text-4xl font-extrabold text-brand-dark">
                                        {featuredService.price}
                                    </p>
                                    <p className="mt-3 text-xs leading-5 text-muted">
                                        Instant confirmation & verifiably formatted travel itinerary.
                                    </p>
                                </div>

                                <a
                                    href={featuredService.link}
                                    className="mt-8 block rounded-md bg-brand-dark px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand"
                                >
                                    {featuredService.buttonText} →
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Remaining Services Grid */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-8 border-b border-blue-100 pb-4">
                        <h2 className="text-2xl font-bold text-brand-dark">
                            Additional Travel & Visa Services
                        </h2>
                        <p className="mt-1 text-sm text-muted">
                            Complete your documentation with our full range of assistance packages.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {catalogServices.map((service) => (
                            <article
                                key={service.id}
                                className="flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-xl font-bold text-brand-dark">
                                            {service.title}
                                        </h3>
                                        <span className="shrink-0 rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                                            {service.price}
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-muted">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mt-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                                            Key Features
                                        </p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="rounded bg-brand-light px-2.5 py-1 text-xs font-medium text-brand-dark"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-blue-50 pt-4">
                                    <a
                                        href={service.link}
                                        className="block rounded-md border border-brand-dark/20 bg-white px-4 py-2.5 text-center text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
                                    >
                                        {service.buttonText} →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* Assistance CTA */}
            <section className="bg-brand-light py-16 md:py-20">
                <div className="mx-auto max-w-3xl px-6 text-center">

                    <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Need Help?
                    </span>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                        Not sure which service is right for you?
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-muted">
                        Tell us what you need and our team can help you
                        choose the appropriate service.
                    </p>

                    <a
                        href="/contact"
                        className="mt-7 inline-block rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand"
                    >
                        Get Assistance
                    </a>

                </div>
            </section>

        </div>
    );
}