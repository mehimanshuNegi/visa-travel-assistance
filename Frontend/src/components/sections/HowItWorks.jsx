export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Choose a Service',
            description:
                'Select the travel or visa service that matches your requirements.',
        },
        {
            number: '02',
            title: 'Enter Your Details',
            description:
                'Provide the information needed to process your service request.',
        },
        {
            number: '03',
            title: 'Submit Your Request',
            description:
                'Review your information and submit your request through our website.',
        },
        {
            number: '04',
            title: 'Get Assistance',
            description:
                'Our team reviews your request and helps you with the next steps.',
        },
    ];

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                        How It Works
                    </span>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                        A simple process from start to finish
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-muted">
                        Choose your service, provide the required details and let us
                        guide you through the process.
                    </p>
                </div>

                {/* Steps Cards */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
                        >
                            <div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-dark text-sm font-bold text-white shadow-xs">
                                    {step.number}
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-brand-dark">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-muted">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}