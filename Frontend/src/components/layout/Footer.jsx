export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white">
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <a
                            href="/"
                            className="text-xl font-bold tracking-tight text-white"
                        >
                            YOUR BRAND
                        </a>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100">
                            Travel and visa assistance made simple.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Services
                        </h3>

                        <div className="mt-4 space-y-3">
                            <a
                                href="/apply"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                Dummy Flight Ticket
                            </a>

                            <a
                                href="/visa"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                Visa Assistance
                            </a>

                            <a
                                href="/services"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                Hotel Booking
                            </a>

                            <a
                                href="/services"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                Travel Insurance
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Company
                        </h3>

                        <div className="mt-4 space-y-3">
                            <a
                                href="/about"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                About Us
                            </a>

                            <a
                                href="/faq"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                FAQ
                            </a>

                            <a
                                href="/contact"
                                className="block text-sm text-blue-100 transition hover:text-white"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-blue-100">
                            <p>Phone: [Client Phone]</p>
                            <p>Email: [Client Email]</p>
                            <p>WhatsApp: [Client WhatsApp]</p>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-blue-900 pt-6">
                    <div className="flex flex-col gap-3 text-sm text-blue-100 sm:flex-row sm:items-center sm:justify-between">

                        <p>
                            © 2026 YOUR BRAND. All rights reserved.
                        </p>

                        <div className="flex gap-5">
                            <a
                                href="/privacy"
                                className="transition hover:text-white"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="/terms"
                                className="transition hover:text-white"
                            >
                                Terms & Conditions
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}