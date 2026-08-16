import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What services do you provide?',
            answer:
                'We provide travel and visa-related services such as dummy flight tickets, visa assistance and other travel services approved by the business.',
        },
        {
            question: 'How do I request a dummy flight ticket?',
            answer:
                'Choose the dummy ticket service, provide the required travel details and submit your request through the website.',
        },
        {
            question: 'Can I get help with my visa application?',
            answer:
                'Yes. You can select the relevant visa service and follow the guided application process.',
        },
        {
            question: 'What documents will I need?',
            answer:
                'Document requirements depend on the service and visa type. The application process will show the documents required for your specific application.',
        },
        {
            question: 'How will I receive assistance after submitting my request?',
            answer:
                'After submitting your request, the client team will contact you directly using the contact information you provide.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">

                {/* Header */}
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                        FAQ
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                        Frequently asked questions
                    </h2>

                    <p className="mt-4 text-lg text-muted">
                        Find answers to some common questions about our services.
                    </p>
                </div>

                {/* Questions */}
                <div className="mt-10 space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="overflow-hidden rounded-md border border-blue-100 bg-white"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-brand-light"
                            >
                                <span className="font-semibold text-brand-dark">
                                    {faq.question}
                                </span>

                                <span className="ml-4 text-xl text-brand">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="border-t border-blue-100 bg-brand-light px-5 py-4">
                                    <p className="text-sm leading-6 text-muted">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}