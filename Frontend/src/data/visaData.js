// Centralized Visa Data (Sample / Placeholder Data for Client Prototype)
// Easily modify any country, visa type, prices, or documents from this single file.

export const visaData = [
  {
    id: "uae",
    country: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    region: "Middle East",
    visaDelivery: "Express (3-5 Days)",
    category: "E-VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "tourist-30",
        name: "Tourist Visa (30 Days)",
        validity: "60 Days",
        maxStay: "30 Days",
        processingTime: "3-5 Days",
        entryType: "Single Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism, Family Visit & Leisure",
        description: "Sample visa option for short stays in the UAE. Detailed requirements will be provided by client.",
        documents: [
          {
            id: "doc-passport",
            title: "Valid Passport",
            subtitle: "Original passport scan",
            description: "Color scan of passport first and last page with at least 6 months validity.",
            iconName: "FileText"
          },
          {
            id: "doc-photo",
            title: "Passport Photo",
            subtitle: "Recent photograph",
            description: "Passport-size photograph with white background.",
            iconName: "Camera"
          },
          {
            id: "doc-flight",
            title: "Flight Itinerary",
            subtitle: "Confirmed round trip",
            description: "Tentative or confirmed flight booking for departure and return.",
            iconName: "Plane"
          },
          {
            id: "doc-hotel",
            title: "Accommodation Proof",
            subtitle: "Hotel voucher or address",
            description: "Hotel reservation or host invitation details.",
            iconName: "Building"
          }
        ],
        process: [
          {
            step: "01",
            title: "Submit Online Application",
            description: "Fill out basic personal and travel information in under 5 minutes."
          },
          {
            step: "02",
            title: "Expert Document Review",
            description: "Our visa specialists verify your documents to avoid rejections."
          },
          {
            step: "03",
            title: "Visa Processing",
            description: "Application submitted for official processing."
          },
          {
            step: "04",
            title: "Receive E-Visa",
            description: "Approved e-visa delivered directly via email and WhatsApp."
          }
        ],
        faqs: [
          {
            question: "What are the passport validity requirements for UAE?",
            answer: "Sample Answer: Passports must generally be valid for at least 6 months from the intended date of entry. Final terms to be confirmed by client."
          },
          {
            question: "Can I extend my 30-day UAE Tourist Visa?",
            answer: "Sample Answer: Extension policies depend on official immigration guidelines. Final rules will be updated when confirmed."
          }
        ],
        sampleReviews: [
          {
            id: "rev-1",
            name: "Sample Traveller 1",
            rating: 5,
            date: "Sample Date",
            comment: "Sample Review: UI experience is smooth and quick. Real feedback will appear here."
          },
          {
            id: "rev-2",
            name: "Sample Traveller 2",
            rating: 5,
            date: "Sample Date",
            comment: "Sample Review: Easy application process. Placeholder test review."
          }
        ]
      }
    ]
  },
  {
    id: "france",
    country: "France",
    code: "FR",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    region: "Europe",
    visaDelivery: "Standard (10-15 Days)",
    category: "SCHENGEN VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "schengen-tourist",
        name: "Schengen Tourist Visa",
        validity: "90 Days",
        maxStay: "90 Days",
        processingTime: "10-15 Days",
        entryType: "Short Stay",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism across Schengen countries",
        description: "Sample Schengen tourist visa information. Final documentation and embassy fees to be confirmed.",
        documents: [
          {
            id: "doc-passport",
            title: "Original Passport",
            subtitle: "Minimum 6 months validity",
            description: "Passport with at least two blank pages.",
            iconName: "FileText"
          },
          {
            id: "doc-insurance",
            title: "Travel Insurance",
            subtitle: "Schengen compliant",
            description: "Minimum €30,000 medical coverage across Europe.",
            iconName: "Shield"
          },
          {
            id: "doc-financial",
            title: "Bank Statements",
            subtitle: "Last 6 months",
            description: "Stamped bank statements proving sufficient travel funds.",
            iconName: "Wallet"
          },
          {
            id: "doc-itinerary",
            title: "Travel Itinerary",
            subtitle: "Flight & hotel proof",
            description: "Confirmed hotel bookings and flight ticket reservation.",
            iconName: "Plane"
          }
        ],
        process: [
          {
            step: "01",
            title: "Select Visa Type",
            description: "Choose Schengen Tourist Visa and fill out applicant details."
          },
          {
            step: "02",
            title: "Document Assistance",
            description: "We help prepare cover letters, flight itineraries, and checklists."
          },
          {
            step: "03",
            title: "VFS Appointment Booking",
            description: "Appointment slot scheduled at the nearest VFS application center."
          },
          {
            step: "04",
            title: "Passport Collection",
            description: "Collect passport with stamped visa after embassy approval."
          }
        ],
        faqs: [
          {
            question: "How far in advance should I apply for a Schengen Visa?",
            answer: "Sample Answer: Applications can usually be submitted up to 6 months before travel. Final guidelines to be confirmed."
          }
        ],
        sampleReviews: [
          {
            id: "rev-3",
            name: "Sample Traveller",
            rating: 5,
            date: "Sample Date",
            comment: "Sample Review: Great guidance on document preparation."
          }
        ]
      }
    ]
  },
  {
    id: "uk",
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    region: "Europe",
    visaDelivery: "Standard (15 Days)",
    category: "STICKER VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "uk-visitor",
        name: "Standard Visitor Visa",
        validity: "6 Months",
        maxStay: "180 Days",
        processingTime: "15 Business Days",
        entryType: "Multiple Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism, Holiday & Business Meetings",
        description: "Sample UK Visitor Visa description. Final pricing and checklist to be confirmed by client.",
        documents: [
          {
            id: "doc-passport",
            title: "Valid Passport",
            subtitle: "Original passport",
            description: "Must contain blank pages for visa stamping.",
            iconName: "FileText"
          },
          {
            id: "doc-financial",
            title: "Financial Documents",
            subtitle: "Income & Bank proof",
            description: "6 months bank statement and tax returns.",
            iconName: "Wallet"
          },
          {
            id: "doc-employment",
            title: "Employment Proof",
            subtitle: "NOC or Pay slips",
            description: "Letter from employer or business registration certificate.",
            iconName: "Briefcase"
          }
        ],
        process: [
          {
            step: "01",
            title: "Fill Application Form",
            description: "Provide personal details and travel history."
          },
          {
            step: "02",
            title: "Expert Document Review",
            description: "Review financial and supporting paperwork."
          },
          {
            step: "03",
            title: "Biometrics Appointment",
            description: "Attend VFS center for passport submission & biometrics."
          },
          {
            step: "04",
            title: "Visa Approval",
            description: "Stamped passport returned via courier."
          }
        ],
        faqs: [
          {
            question: "Is biometrics mandatory for UK visa?",
            answer: "Sample Answer: Yes, biometrics are required for first-time applicants."
          }
        ],
        sampleReviews: [
          {
            id: "rev-4",
            name: "Sample User",
            rating: 5,
            date: "Sample Date",
            comment: "Sample Review: Clean UI layout."
          }
        ]
      }
    ]
  },
  {
    id: "singapore",
    country: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Express (3-4 Days)",
    category: "E-VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "sg-tourist",
        name: "Tourist E-Visa",
        validity: "30-90 Days",
        maxStay: "30 Days",
        processingTime: "3-4 Days",
        entryType: "Multiple Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Short Visits",
        description: "Sample Singapore E-Visa details. Fast online processing.",
        documents: [
          {
            id: "doc-passport",
            title: "Passport Bio Page",
            subtitle: "Color scan",
            description: "Passport valid for 6 months beyond stay.",
            iconName: "FileText"
          },
          {
            id: "doc-photo",
            title: "Digital Photograph",
            subtitle: "White background",
            description: "35mm x 45mm matte finish photograph scan.",
            iconName: "Camera"
          },
          {
            id: "doc-tickets",
            title: "Flight Tickets",
            subtitle: "Confirmed tickets",
            description: "Inbound and outbound flight tickets.",
            iconName: "Plane"
          }
        ],
        process: [
          { step: "01", title: "Submit Form", description: "Upload passport and photo." },
          { step: "02", title: "Document Review", description: "Verification by visa team." },
          { step: "03", title: "E-Visa Issuance", description: "Approved e-visa sent via email." }
        ],
        faqs: [
          { question: "Do I need physical passport submission?", answer: "Sample Answer: No, Singapore e-visa is processed 100% online." }
        ],
        sampleReviews: [
          { id: "rev-5", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Fast process demo." }
        ]
      }
    ]
  },
  {
    id: "japan",
    country: "Japan",
    code: "JP",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Standard (5-7 Days)",
    category: "E-VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "japan-tourist",
        name: "e-Visa Tourist",
        validity: "90 Days",
        maxStay: "15 Days",
        processingTime: "5-7 Days",
        entryType: "Single Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Sightseeing",
        description: "Sample Japan eVisa information. Requirements to be confirmed by client.",
        documents: [
          { id: "doc-passport", title: "Passport Scan", subtitle: "Clear copy", description: "Original passport scan.", iconName: "FileText" },
          { id: "doc-financial", title: "Bank Statement", subtitle: "Last 3 months", description: "Proof of financial stability.", iconName: "Wallet" },
          { id: "doc-itinerary", title: "Day-wise Itinerary", subtitle: "Travel schedule", description: "Detailed plan of places to visit.", iconName: "Calendar" }
        ],
        process: [
          { step: "01", title: "Apply Online", description: "Fill online application form." },
          { step: "02", title: "Verification", description: "Document check by experts." },
          { step: "03", title: "Issuance", description: "Receive digital eVisa clearance." }
        ],
        faqs: [
          { question: "Is Japan eVisa available for all nationalities?", answer: "Sample Answer: Eligibility depends on passport jurisdiction. Details to be confirmed." }
        ],
        sampleReviews: [
          { id: "rev-6", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Great preview!" }
        ]
      }
    ]
  },
  {
    id: "thailand",
    country: "Thailand",
    code: "TH",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Express (24-48 Hours)",
    category: "E-VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "thai-evoa",
        name: "E-Visa / EVOA",
        validity: "30 Days",
        maxStay: "15 Days",
        processingTime: "24-48 Hours",
        entryType: "Single Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Vacation",
        description: "Sample Thailand E-Visa / EVOA details. Fast approval option.",
        documents: [
          { id: "doc-passport", title: "Passport Scan", subtitle: "Minimum 6 months validity", description: "Bio page scan.", iconName: "FileText" },
          { id: "doc-flight", title: "Flight Confirmation", subtitle: "Round trip", description: "Confirmed return ticket.", iconName: "Plane" },
          { id: "doc-hotel", title: "Hotel Voucher", subtitle: "Stay proof", description: "Confirmed hotel booking in Thailand.", iconName: "Building" }
        ],
        process: [
          { step: "01", title: "Quick Application", description: "Fill form in 3 minutes." },
          { step: "02", title: "Review", description: "Instant pre-check." },
          { step: "03", title: "Approval", description: "Receive EVOA approval PDF." }
        ],
        faqs: [
          { question: "Is Thailand Visa on Arrival fast?", answer: "Sample Answer: E-VOA allows bypassing long airport queues." }
        ],
        sampleReviews: [
          { id: "rev-7", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Super quick process." }
        ]
      }
    ]
  },
  {
    id: "vietnam",
    country: "Vietnam",
    code: "VN",
    flag: "🇻🇳",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Express (2-3 Days)",
    category: "E-VISA",
    popular: false,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "vn-evisa",
        name: "Tourist E-Visa",
        validity: "90 Days",
        maxStay: "90 Days",
        processingTime: "2-3 Days",
        entryType: "Single / Multiple Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Exploration",
        description: "Sample Vietnam E-Visa description. Simple 100% online application.",
        documents: [
          { id: "doc-passport", title: "Passport Photo Page", subtitle: "Clear scan", description: "Valid passport page.", iconName: "FileText" },
          { id: "doc-photo", title: "Digital Portrait Photo", subtitle: "Straight facing", description: "Passport format digital image.", iconName: "Camera" }
        ],
        process: [
          { step: "01", title: "Submit Documents", description: "Upload passport and photo." },
          { step: "02", title: "Verification", description: "Automated & manual validation." },
          { step: "03", title: "E-Visa Delivery", description: "PDF Visa issued." }
        ],
        faqs: [
          { question: "Can I enter Vietnam at any airport with E-Visa?", answer: "Sample Answer: E-Visas are accepted at major international airports and land ports." }
        ],
        sampleReviews: [
          { id: "rev-8", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Easy layout." }
        ]
      }
    ]
  },
  {
    id: "turkey",
    country: "Turkey",
    code: "TR",
    flag: "🇹🇷",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop",
    region: "Europe",
    visaDelivery: "Express (24 Hours)",
    category: "E-VISA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "tr-evisa",
        name: "Tourist E-Visa",
        validity: "180 Days",
        maxStay: "30 Days",
        processingTime: "24 Hours",
        entryType: "Single Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Trade",
        description: "Sample Turkey E-Visa information. Quick online approval for eligible passport holders.",
        documents: [
          { id: "doc-passport", title: "Passport Scan", subtitle: "Minimum 6 months validity", description: "Passport details page.", iconName: "FileText" },
          { id: "doc-supporting", title: "Supporting Visa/PR", subtitle: "Schengen / US / UK / Ireland visa", description: "If applicable for e-visa eligibility.", iconName: "ShieldCheck" }
        ],
        process: [
          { step: "01", title: "Fill Details", description: "Enter passport & travel dates." },
          { step: "02", title: "Document Review", description: "Check eligibility requirements." },
          { step: "03", title: "Get E-Visa", description: "Download approved e-visa." }
        ],
        faqs: [
          { question: "Do Indian passport holders qualify for Turkey E-Visa?", answer: "Sample Answer: Qualification requires a valid supporting visa from Schengen/US/UK/Ireland. Details to be confirmed." }
        ],
        sampleReviews: [
          { id: "rev-9", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Clear overview." }
        ]
      }
    ]
  },
  {
    id: "indonesia",
    country: "Indonesia (Bali)",
    code: "ID",
    flag: "🇮🇩",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Express (24 Hours)",
    category: "E-VOA",
    popular: true,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "id-evoa",
        name: "E-VOA (B1 Tourist)",
        validity: "90 Days",
        maxStay: "30 Days",
        processingTime: "24 Hours",
        entryType: "Single Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Holiday in Bali",
        description: "Sample Indonesia/Bali E-VOA information. Skip airport queues with pre-approved e-visa.",
        documents: [
          { id: "doc-passport", title: "Passport Copy", subtitle: "6 months validity", description: "Passport cover and bio page.", iconName: "FileText" },
          { id: "doc-photo", title: "Passport Photo", subtitle: "White background", description: "Recent passport photo.", iconName: "Camera" },
          { id: "doc-flight", title: "Return Ticket", subtitle: "Flight booking", description: "Outbound flight ticket from Indonesia.", iconName: "Plane" }
        ],
        process: [
          { step: "01", title: "Submit Passport", description: "Upload passport scan." },
          { step: "02", title: "Review", description: "Instant verification." },
          { step: "03", title: "Approval", description: "E-VOA issued for airport immigration." }
        ],
        faqs: [
          { question: "Can B1 Tourist visa be extended in Bali?", answer: "Sample Answer: Yes, B1 E-VOA can usually be extended once for 30 additional days." }
        ],
        sampleReviews: [
          { id: "rev-10", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Perfect prototype." }
        ]
      }
    ]
  },
  {
    id: "malaysia",
    country: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Express (24-48 Hours)",
    category: "E-VISA / MDAC",
    popular: false,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "my-evisa",
        name: "Tourist Visa / MDAC",
        validity: "90 Days",
        maxStay: "30 Days",
        processingTime: "24-48 Hours",
        entryType: "Multiple Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Leisure",
        description: "Sample Malaysia Visa / Digital Arrival Card registration sample details.",
        documents: [
          { id: "doc-passport", title: "Passport Bio Page", subtitle: "Original scan", description: "Passport scan.", iconName: "FileText" },
          { id: "doc-photo", title: "Passport Photo", subtitle: "Digital photo", description: "Passport photograph.", iconName: "Camera" },
          { id: "doc-hotel", title: "Hotel Reservation", subtitle: "Stay proof", description: "Confirmed hotel voucher.", iconName: "Building" }
        ],
        process: [
          { step: "01", title: "Apply Online", description: "Fill applicant info." },
          { step: "02", title: "Expert Check", description: "Check passport validity & details." },
          { step: "03", title: "Issuance", description: "Receive digital visa clearance." }
        ],
        faqs: [
          { question: "Is Malaysia Digital Arrival Card (MDAC) required?", answer: "Sample Answer: Most visitors must register MDAC prior to arrival." }
        ],
        sampleReviews: [
          { id: "rev-11", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Great setup." }
        ]
      }
    ]
  },
  {
    id: "egypt",
    country: "Egypt",
    code: "EG",
    flag: "🇪🇬",
    image: "https://images.unsplash.com/photo-1572252821143-035a72462bdf?q=80&w=800&auto=format&fit=crop",
    region: "Middle East",
    visaDelivery: "Express (3-5 Days)",
    category: "E-VISA",
    popular: false,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "eg-evisa",
        name: "Tourist E-Visa",
        validity: "90 Days",
        maxStay: "30 Days",
        processingTime: "3-5 Days",
        entryType: "Single Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Pyramids Tour",
        description: "Sample Egypt E-Visa details. Requirements to be confirmed by client.",
        documents: [
          { id: "doc-passport", title: "Passport Scan", subtitle: "Minimum 6 months validity", description: "Clear passport copy.", iconName: "FileText" },
          { id: "doc-itinerary", title: "Travel Itinerary", subtitle: "Hotels & Flights", description: "Hotel details and return ticket.", iconName: "Plane" }
        ],
        process: [
          { step: "01", title: "Online Application", description: "Submit personal & trip details." },
          { step: "02", title: "Review", description: "Document checklist check." },
          { step: "03", title: "Visa Issuance", description: "Official E-Visa delivered via email." }
        ],
        faqs: [
          { question: "Can I get Visa on Arrival in Egypt?", answer: "Sample Answer: E-Visa is recommended in advance to avoid waiting at immigration." }
        ],
        sampleReviews: [
          { id: "rev-12", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Clear sample data." }
        ]
      }
    ]
  },
  {
    id: "srilanka",
    country: "Sri Lanka",
    code: "LK",
    flag: "🇱🇰",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
    region: "Asia",
    visaDelivery: "Express (24 Hours)",
    category: "ETA / E-VISA",
    popular: false,
    startingPrice: "₹XXXX",
    visaTypes: [
      {
        id: "lk-eta",
        name: "Tourist ETA",
        validity: "180 Days",
        maxStay: "30 Days",
        processingTime: "24 Hours",
        entryType: "Double Entry",
        price: "₹XXXX",
        priceSubtext: "To be confirmed by client",
        govtFee: "₹XXXX",
        serviceFee: "₹XXXX",
        total: "₹XXXX",
        purpose: "Tourism & Sightseeing",
        description: "Sample Sri Lanka Tourist ETA details. Express digital approval.",
        documents: [
          { id: "doc-passport", title: "Passport Bio Page", subtitle: "6 months validity", description: "Scanned copy of passport.", iconName: "FileText" },
          { id: "doc-flight", title: "Flight Details", subtitle: "Return flight", description: "Tentative flight booking.", iconName: "Plane" }
        ],
        process: [
          { step: "01", title: "Enter Passport Info", description: "Fill quick online form." },
          { step: "02", title: "Quick Processing", description: "Fast document validation." },
          { step: "03", title: "ETA Approval", description: "Approval notice delivered." }
        ],
        faqs: [
          { question: "Is Sri Lanka ETA double entry?", answer: "Sample Answer: Standard tourist ETA generally permits two entries within 30 days." }
        ],
        sampleReviews: [
          { id: "rev-13", name: "Sample User", rating: 5, date: "Sample Date", comment: "Sample Review: Works great." }
        ]
      }
    ]
  }
];

// Helper functions for easy lookup
export function getCountryById(id) {
  return visaData.find((item) => item.id.toLowerCase() === id?.toLowerCase());
}

export function getAllRegions() {
  return ["All", "Asia", "Europe", "Middle East"];
}

export function getAllVisaCategories() {
  return ["All", "E-VISA", "SCHENGEN VISA", "STICKER VISA", "E-VOA"];
}