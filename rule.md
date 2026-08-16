# Project Rules

## 1. Project Goal

Build a professional, production-ready travel and visa service website for a real freelance client.

The website must feel like a commercial travel-service platform, not a student/demo project.

Primary UI inspiration:
- CheapDummyTicket-style travel service website structure and conversion-focused layout.

Visa workflow inspiration:
- Atlys-style guided, multi-step application experience.

These references are inspiration only. Do not copy their code, branding, assets, or exact design.

---

## 2. Development Roadmap

The project must be developed in controlled phases:

1. Requirements and scope finalization
2. Frontend foundation
3. Public website UI
4. Client frontend review
5. Frontend refinement
6. Visa application UX with mock data
7. Client workflow review
8. Backend development
9. Frontend/backend integration
10. Admin dashboard
11. Payment, document, and email integrations
12. Security hardening
13. Testing
14. Production deployment
15. Client handover

Do not begin large backend features before the corresponding frontend workflow is reasonably approved by the client.

---

## 3. Scope Control

Do not add features simply because they are technically possible.

Any feature outside the approved requirements must be treated as a scope change.

Potential future features should not be implemented in V1 unless the client explicitly approves them.

Avoid:
- Microservices
- Kubernetes
- Unnecessary Redis usage
- Complex AI systems
- Automated embassy submission without an official supported integration
- Complex customer account systems unless required
- Custom no-code form builders

Prefer a clean modular monolith.

---

## 4. Frontend Rules

The frontend must be:

- Responsive
- Mobile-first where practical
- Professional
- Accessible
- Conversion-focused
- Consistent
- Fast
- Easy to maintain

Reusable components should be created for repeated UI patterns.

Avoid:
- Huge monolithic components
- Repeated styling
- Hardcoded duplicated content
- Unnecessary animation
- Excessive visual effects
- Poor mobile layouts

The public website should prioritize:
1. Trust
2. Clarity
3. Conversion
4. Ease of navigation

---

## 5. Visa Application Rules

The visa application must use a logical multi-step flow.

Typical flow:

Country
→ Visa type
→ Personal information
→ Passport information
→ Travel information
→ Employment/financial information
→ Previous visa/travel information
→ Documents
→ Review
→ Payment
→ Submission

Questions and required documents may vary by country and visa type.

Do not assume visa requirements. They must be confirmed by the client and/or appropriate official sources.

The frontend may initially use mock data during UI development.

---

## 6. Sensitive Data Rules

Visa applications may contain highly sensitive personal information.

Never:
- Commit sensitive data to GitHub
- Log passports, bank statements, passwords, payment secrets, or unnecessary personal data
- Store uploaded documents directly in MongoDB
- Expose private documents through permanent public URLs
- Store payment card data

Documents must use private/controlled object storage.

MongoDB should store document metadata and secure references rather than the actual files.

---

## 7. Authentication and Authorization

Admin authentication must be secure.

Requirements include:
- Strong password hashing
- Secure token/session handling
- HTTP-only secure cookies where applicable
- Role-based authorization
- Login rate limiting
- Session/token expiry
- Admin access controls

Never rely only on frontend checks for authorization.

Every protected backend endpoint must verify authorization server-side.

---

## 8. File Upload Rules

Uploaded files must be validated.

Validate:
- File size
- File type
- MIME type
- File signature/magic bytes where practical
- Required documents
- Upload errors

Use randomized/safe storage identifiers.

Uploaded files must not be executable.

Sensitive documents should be accessible only after authorization, preferably through signed or otherwise time-limited access.

---

## 9. Payment Rules

Razorpay/payment status must never be trusted solely from frontend data.

Required flow:

Backend creates payment order
→ Customer pays
→ Backend verifies payment signature
→ Backend processes webhook/reconciliation
→ Application/payment status is updated

Payment processing must be idempotent so duplicate callbacks or retries do not create duplicate application/payment records.

Never store card numbers, CVV, UPI PINs, or other payment credentials.

---

## 10. API Rules

Backend APIs must:

- Validate all external input
- Authenticate protected requests
- Authorize access
- Return consistent errors
- Avoid leaking internal implementation details
- Avoid exposing sensitive fields unnecessarily
- Use appropriate HTTP status codes
- Log meaningful operational events without logging sensitive payloads

Public and admin APIs must be clearly separated where appropriate.

---

## 11. Database Rules

MongoDB should contain structured application/business data such as:

- Customer information
- Visa applications
- Application status
- Orders
- Payment references/status
- Service information
- Admin accounts
- Document metadata
- Audit information

Use indexes for commonly searched/filtered fields.

Avoid unnecessary duplication of sensitive data.

Use timestamps and status history where useful for auditability.

---

## 12. Environment and Secrets

Secrets must never be committed to GitHub.

Examples:

- MONGODB_URI
- JWT_SECRET
- CLOUDINARY credentials
- RAZORPAY secrets
- EMAIL credentials

Development and production credentials must be separate.

Use environment variables or the hosting provider's secret-management system.

---

## 13. Error Handling

The application must handle:

- Invalid input
- Authentication failure
- Unauthorized access
- Database failure
- File upload failure
- Payment failure
- Email failure
- Third-party service failure
- Network interruptions

Do not expose stack traces, secrets, database details, or internal errors to customers.

---

## 14. Logging and Audit

Log meaningful operational events such as:

- Admin login
- Application creation
- Status changes
- Payment events
- Document access
- Important administrative actions
- System errors

Do not log complete request bodies containing sensitive visa information.

Maintain application status history and meaningful admin audit records.

---

## 15. Deployment Rules

Initial production architecture:

React frontend
→ Vercel

Node/Express backend
→ Render

MongoDB
→ MongoDB Atlas

Documents
→ Cloudinary initially

Payment
→ Razorpay

Domain
→ Client-owned domain account

The architecture must remain portable so the backend can later move to a VPS/cloud server without major application rewrites.

---

## 16. Ownership Rules

The client should own:

- Domain
- Hosting accounts
- MongoDB organization/account
- Cloudinary account
- Razorpay account
- Business email accounts
- Production data
- Project repository where practical

The developer should receive the access necessary to build and maintain the system.

Do not make the developer the permanent owner of the client's infrastructure.

---

## 17. Testing Rules

Before production, test:

- Desktop
- Mobile
- Forms
- Validation
- Authentication
- Authorization
- File uploads
- Invalid files
- Payment success
- Payment failure
- Duplicate payment callbacks
- Application submission
- Email notifications
- Unauthorized document access
- Database failures
- Network interruptions
- Admin permissions

Test both successful and failure scenarios.

---

## 18. Client Review Rules

There should be clear approval checkpoints.

### Frontend approval
Client approves:
- Layout
- Colors
- Typography
- Content
- Navigation
- Responsive behavior

### Workflow approval
Client approves:
- Visa steps
- Questions
- Documents
- Pricing
- Status workflow
- Customer tracking

Do not assume approval.

Keep significant client decisions documented.

---

## 19. Maintenance Rules

Maintenance is separate from development unless explicitly included.

New features, redesigns, major integrations, infrastructure migrations, and major changes to visa workflows should be separately estimated and quoted.

Do not promise unlimited support.

---

## 20. Design Principle

Keep the initial architecture simple.

The goal is:

> Simple enough to build and maintain as a first freelance project, but serious enough to safely operate a real business handling sensitive customer visa information.

Avoid both extremes:
- Under-engineered insecure CRUD app
- Over-engineered enterprise architecture for low initial traffic
