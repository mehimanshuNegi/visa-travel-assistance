// Centralized Travel Services Data (Secondary Services)
// Easily maintain or modify secondary travel services from this single file.

export const travelServices = [
  {
    id: "dummy-flight",
    title: "Dummy Flight Ticket",
    tagline: "Visa Application Essential",
    description: "Verifiable flight reservation itinerary for embassy visa submissions, proof of return, and travel requirements.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    price: "₹XXX",
    priceSubtext: "Sample Price — To be confirmed",
    category: "RESERVATION",
    featured: true,
    features: [
      "Embassy Compliant Format",
      "Instant PDF Delivery",
      "One-Way or Round-Trip Proof"
    ],
    purposes: [
      "Visa Applications",
      "Proof of Return Journey",
      "Travel Itinerary Support"
    ],
    ctaText: "Request Flight Reservation",
    link: "/visa/application"
  },
  {
    id: "dummy-hotel",
    title: "Dummy Hotel Reservation",
    tagline: "Accommodation Proof",
    description: "Temporary hotel booking voucher for accommodation proof during visa application processing.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    price: "₹XXX",
    priceSubtext: "Sample Price — To be confirmed",
    category: "RESERVATION",
    featured: false,
    features: [
      "Hotel Voucher Format",
      "Fast Processing",
      "Embassy Checklist Compliant"
    ],
    purposes: [
      "Visa Accommodation Proof",
      "Travel Planning Proof"
    ],
    ctaText: "Request Hotel Voucher",
    link: "/visa/application"
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance Assistance",
    tagline: "Medical & Trip Protection",
    description: "Comprehensive travel medical insurance assistance meeting Schengen and international visa requirements.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
    price: "₹XXX",
    priceSubtext: "Sample Price — To be confirmed",
    category: "PROTECTION",
    featured: false,
    features: [
      "Schengen Compliant (€30,000+)",
      "Medical Emergency Support",
      "Baggage & Trip Protection"
    ],
    purposes: [
      "International Travel Protection",
      "Embassy Insurance Proof"
    ],
    ctaText: "Explore Insurance Options",
    link: "/contact"
  },
  {
    id: "actual-flight",
    title: "Actual Flight Booking",
    tagline: "Genuine Ticket Booking",
    description: "Book genuine commercial flight tickets for your journey with competitive rates and booking support.",
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
    price: "₹XXX",
    priceSubtext: "Market Rates — Contact Team",
    category: "REAL BOOKING",
    featured: false,
    features: [
      "Confirmed Airline Tickets",
      "Competitive Airfares",
      "Booking & Schedule Support"
    ],
    purposes: [
      "Confirmed Flight Journey",
      "International & Domestic Travel"
    ],
    ctaText: "Book Actual Flight",
    link: "/contact"
  },
  {
    id: "actual-hotel",
    title: "Actual Hotel Booking",
    tagline: "Verified Accommodations",
    description: "Reserve actual hotel rooms for your trip with verified accommodation vouchers and travel guidance.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    price: "₹XXX",
    priceSubtext: "Market Rates — Contact Team",
    category: "REAL BOOKING",
    featured: false,
    features: [
      "Verified Hotel Partners",
      "Wide Property Selection",
      "Personalized Stay Guidance"
    ],
    purposes: [
      "Confirmed Stay",
      "Holiday Accommodation"
    ],
    ctaText: "Book Actual Hotel",
    link: "/contact"
  }
];

export function getFeaturedTravelService() {
  return travelServices.find((s) => s.featured) || travelServices[0];
}
