export default function WhyChooseUs() {
    const benefits = [
        {
            title: 'Simple Process',
            description:
                'Get started without dealing with a complicated process.',
        },
        {
            title: 'Professional Assistance',
            description:
                'Get support with your travel and visa-related requirements.',
        },
        {
            title: 'Transparent Service',
            description:
                'Clear information about the service you are requesting.',
        },
        {
            title: 'Customer Support',
            description:
                'Get assistance when you need help with your request.',
        },
    ];

    return (
        <section className="bg-brand-light py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                        Why Choose Us
                    </span>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                        A simpler way to manage your travel requirements
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-muted">
                        We make the process straightforward, convenient and easy to understand.
                    </p>
                </div>

                {/* Benefits Cards */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="rounded-xl border border-blue-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                        >
                            <div className="mb-4 h-2 w-10 rounded-full bg-brand" />
                            
                            <h3 className="text-lg font-bold text-brand-dark">
                                {benefit.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}