export default function VisaServices() {
    const visaOptions = [
        {
            title: 'Tourist Visa',
            description:
                'Get assistance with the requirements and application process for your trip.',
        },
        {
            title: 'Business Visa',
            description:
                'Get guidance with the documents and information required for business travel.',
        },
        {
            title: 'Other Visa Services',
            description:
                'Explore additional visa assistance options based on your travel requirements.',
        },
    ];

    return (
        <section className="bg-brand-light py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Visa Services
                    </span>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                        Get assistance with your visa application
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-muted">
                        Choose the visa service that matches your travel requirements
                        and start your application.
                    </p>
                </div>

                {/* Visa Options Cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {visaOptions.map((visa) => (
                        <div
                            key={visa.title}
                            className="flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark">
                                    {visa.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-muted">
                                    {visa.description}
                                </p>
                            </div>

                            <a
                                href="/apply"
                                className="mt-6 inline-block rounded-md bg-brand-dark px-5 py-2.5 text-center text-sm font-semibold text-white shadow-xs transition hover:bg-brand"
                            >
                                Start Application
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}