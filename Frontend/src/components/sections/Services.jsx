import { services } from '../../data/services';

export default function Services() {
    const featuredService = services.find((s) => s.id === 'dummy-flight') || services[0];
    const otherServices = services.filter((s) => s.id !== 'dummy-flight');

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Our Services
                    </span>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                        Travel services made simple
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-muted">
                        Choose the service you need and get started with a simple, hassle-free process.
                    </p>
                </div>

                {/* Featured Service: Dummy Flight Ticket */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-brand/20 bg-brand-light p-6 sm:p-8 md:p-10 shadow-sm transition hover:shadow-md">
                    <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                    Most Popular for Visa
                                </span>
                                {featuredService.price && (
                                    <span className="text-sm font-semibold text-brand-dark">
                                        {featuredService.priceLabel} <span className="text-lg font-bold text-brand">{featuredService.price}</span>
                                    </span>
                                )}
                            </div>

                            <h3 className="mt-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                                {featuredService.title}
                            </h3>

                            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                                {featuredService.description}
                            </p>

                            {featuredService.features && (
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {featuredService.features.map((feature) => (
                                        <span key={feature} className="rounded-md bg-white px-3 py-1 text-xs font-medium text-brand-dark border border-blue-100">
                                            ✓ {feature}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-3 justify-center">
                            <a
                                href={featuredService.link}
                                className="inline-flex items-center justify-center rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand"
                            >
                                {featuredService.buttonText || 'Get Started'} →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Remaining Services Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {otherServices.map((service) => (
                        <div
                            key={service.id || service.title}
                            className="flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <h4 className="text-lg font-bold text-brand-dark">
                                        {service.title}
                                    </h4>
                                    {service.price && (
                                        <span className="text-xs font-semibold text-brand bg-brand-light px-2.5 py-1 rounded-full">
                                            {service.price}
                                        </span>
                                    )}
                                </div>

                                <p className="mt-3 text-sm leading-6 text-muted">
                                    {service.description}
                                </p>
                            </div>

                            <a
                                href={service.link}
                                className="mt-6 inline-flex items-center text-sm font-semibold text-brand transition hover:text-brand-dark"
                            >
                                {service.buttonText || 'Learn More'} →
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}