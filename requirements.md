# Requirements

## 1. Project Overview

A professional commercial travel/visa service website for a real freelance client.

Primary UI/layout inspiration:
- CheapDummyTicket-style travel-service website.

Visa workflow inspiration:
- Atlys-style guided application experience.

The site must not copy either platform's code, branding, assets, or exact design.

---

# 2. Project Goals

The website must:

1. Present the client's travel and visa services professionally.
2. Generate leads and service requests.
3. Allow customers to start visa applications.
4. Provide a guided multi-step visa application experience.
5. Allow secure document uploads.
6. Support online payment where required.
7. Give administrators a private dashboard to manage applications/orders.
8. Allow customers to track application status.
9. Notify customers/admins about important events.
10. Be affordable for the client's initial traffic.
11. Be scalable without requiring a complete rewrite.

---

# 3. Expected Initial Scale

Initial target:

- Approximately 100–200 visitors/day.
- Approximately 20–30 applications/orders/day.

The architecture should be capable of scaling through infrastructure upgrades toward:

- 500 visitors/day
- 1,000 visitors/day
- 5,000 visitors/day
- 20,000+ visitors/day

No premature enterprise infrastructure is required.

---

# 4. Public Website

## Required/expected sections

### Header
- Logo
- Navigation
- Primary CTA
- Mobile navigation

### Hero
- Strong value proposition
- Main CTA
- Supporting message
- Travel/visa visual

### Services

Potential services:
- Dummy flight ticket
- Visa assistance
- Hotel booking
- Travel insurance
- Other client-approved travel services

Exact services and pricing must be confirmed with the client.

### Why Choose Us
Communicate:
- Trust
- Convenience
- Professional assistance
- Transparent process
- Customer support

### How It Works
Show a simple process from service selection to completion.

### Visa Services
Highlight countries/visa categories approved for V1.

### Pricing
Only show pricing that has been confirmed by the client.

### Testimonials
Client-approved testimonials only.

### FAQ
Common customer questions.

### Blog / Information
Optional for V1 depending on client requirements.

### Contact
Business contact details and inquiry options.

### Assistance CTA/Form

A small form should be available near the end of the website for visitors who need assistance without starting a full application.

Suggested fields:
- Name
- Email
- Phone/WhatsApp
- Service interested in
- Destination
- Message

Initial implementation may use Web3Forms.

Do not send sensitive visa documents or full visa applications through Web3Forms.

### Footer
- Contact information
- Navigation
- Legal links
- Social links if provided
- Copyright

---

# 5. Dummy Ticket / Travel Service Flow

Customer should be able to:

1. Select a service.
2. Enter required details.
3. Submit request.
4. Pay if required.
5. Receive confirmation.

The exact service fields, pricing, and workflow must be confirmed with the client.

Admin must be able to manage submitted service requests.

---

# 6. Visa Application System

## Core flow

```text
Select Country
        ↓
Select Visa / Service Type
        ↓
Start Application
        ↓
Personal Information
        ↓
Passport Information
        ↓
Travel Information
        ↓
Employment / Financial Information
        ↓
Previous Travel / Visa Information
        ↓
Visa-specific Questions
        ↓
Document Upload
        ↓
Review
        ↓
Payment
        ↓
Submit
        ↓
Application ID / Confirmation
```

---

# 7. Visa Application Steps

Possible V1 structure:

### Step 1 — Personal Information
Examples:
- Full name
- Date of birth
- Contact information
- Address
- Nationality

### Step 2 — Passport Information
Examples:
- Passport number
- Issue date
- Expiry date
- Issuing country

### Step 3 — Travel Information
Examples:
- Destination
- Travel dates
- Purpose of travel
- Accommodation information

### Step 4 — Employment / Financial Information
Questions depend on visa type.

### Step 5 — Previous Travel / Visa Information
Questions depend on visa type.

### Step 6 — Documents
Upload required supporting documents.

### Step 7 — Review
Display entered information before final submission.

### Step 8 — Payment
Calculate applicable service fee and initiate payment.

### Step 9 — Submission
Create final application and application ID.

The exact fields must be confirmed per country and visa type.

---

# 8. Application Drafts

The system should ideally support saving progress so users do not lose a long application because of accidental navigation or temporary connection problems.

Final implementation method can be decided during backend development.

---

# 9. Document Requirements

Potential documents:

- Passport
- Passport-size photograph
- Bank statement
- Address proof
- Employment documents
- Invitation letter
- Other supporting documents

The exact document requirements must be configurable/defined per visa type.

---

# 10. Document Storage

Documents must not be stored directly inside MongoDB.

Preferred initial architecture:

```text
Customer
   ↓
Backend
   ↓
Cloudinary/private object storage
   ↓
MongoDB stores metadata/reference
```

Metadata may include:

- Document ID
- Application ID
- Document type
- Original filename
- File size
- MIME type
- Storage reference
- Upload timestamp
- Verification status

Sensitive documents must not be permanently public.

---

# 11. Payment Requirements

Potential payment provider:

- Razorpay

Expected flow:

```text
Application
    ↓
Calculate fee
    ↓
Create payment order on backend
    ↓
Razorpay Checkout
    ↓
Payment
    ↓
Backend verification
    ↓
Webhook/reconciliation
    ↓
Mark payment successful
    ↓
Submit application
```

Frontend-only payment success must never be treated as authoritative.

---

# 12. Admin Dashboard

## Authentication

Admin must have secure login.

## Dashboard

Display useful metrics such as:

- Total applications
- Pending applications
- Documents required
- Applications under review
- Processing applications
- Completed applications
- Recent orders

## Application Management

Admin can:

- View applications
- Search
- Filter
- Open individual applications
- View applicant details
- View travel/passport information
- View documents
- Check payment status
- Change application status
- Add internal notes
- Review status history

---

# 13. Application Status

Initial example:

```text
Received
↓
Under Review
↓
Documents Required
↓
Documents Verified
↓
Processing
↓
Submitted
↓
Approved / Rejected
```

The final workflow must be confirmed by the client.

Status history should be retained where practical.

---

# 14. Customer Tracking

Customers should receive an application/order ID.

Initial tracking can use a secure tracking page instead of a full customer account.

Potential flow:

```text
Application ID
+
email/phone/OTP
       ↓
Application Status
```

Customer may see:

- Application status
- Payment status
- Required documents
- Relevant customer-facing updates

Admin-only notes must not be exposed.

---

# 15. Notifications

Potential automated notifications:

### Customer
- Application received
- Payment successful
- Documents required
- Status updated
- Application completed

### Admin
- New application received
- New order received
- Payment received
- Important system failures

Email provider can initially be inexpensive.

---

# 16. Business Workflow

The website does not automatically submit applications to embassies unless an official API/integration is specifically requested and available.

Normal workflow:

```text
Customer
   ↓
Application
   ↓
Documents
   ↓
Payment
   ↓
Website
   ↓
Admin
   ↓
Manual review/processing
   ↓
Official visa channel
```

---

# 17. Legal / Business Pages

Before launch, client should provide/approve:

- Privacy Policy
- Terms and Conditions
- Refund/Cancellation Policy
- Contact/business information
- Data retention information
- Appropriate visa-service disclaimers

The website should clearly distinguish the client's assistance/service from the final visa decision made by the relevant authority.

---

# 18. Features Not Required for Initial V1

Unless the client explicitly approves them:

- Automatic embassy submission
- Customer social login
- Complex customer portal
- Real-time chat
- AI visa decision engine
- OCR/document AI
- Microservices
- Kubernetes
- Redis
- Elasticsearch
- Complex CMS
- Drag-and-drop visa form builder
- Multi-region deployment

These may be considered later.

---

# 19. Non-Functional Requirements

## Performance
- Fast initial load
- Optimized images
- Responsive UI
- Lazy loading where useful
- Efficient API calls

## Security
- HTTPS
- Secure authentication
- Authorization
- Password hashing
- Input validation
- Rate limiting
- Helmet
- CORS
- Secure file uploads
- Private document access
- Payment verification
- Secrets management
- Backups
- Logging

## Reliability
- Error handling
- Health endpoint
- Monitoring
- Backup/recovery strategy

## Maintainability
- Modular code
- Reusable components
- Clear naming
- Environment-based configuration
- No hardcoded secrets
- Documented deployment process

---

# 20. Client Approval Milestones

## Milestone 1 — Public UI
Client approves:
- Design
- Layout
- Content
- Navigation
- Responsive behavior

## Milestone 2 — Visa UX
Client approves:
- Steps
- Questions
- Documents
- Pricing
- Review flow

## Milestone 3 — Functional System
Client tests:
- Application
- Upload
- Payment
- Tracking
- Admin

## Milestone 4 — Production
Client approves:
- Final content
- Domain
- Business details
- Policies
- Production workflow

---

# 21. Out of Scope Unless Separately Approved

- New features after final approval
- Major redesign
- Additional visa systems requiring new workflows
- New payment gateways
- Third-party integrations
- Advanced SEO campaign
- Content writing
- Paid marketing
- Major infrastructure migration
- Unlimited maintenance
