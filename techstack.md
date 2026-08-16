# Technology Stack

## 1. Architecture

Initial architecture:

```text
React Frontend
      ↓ HTTPS
Express / Node.js API
      ↓
MongoDB Atlas

Additional services:
- Cloudinary for documents
- Razorpay for payments
- Email provider for notifications
```

Use a modular monolith.

Do not use microservices for the initial scale.

---

# 2. Frontend

## React

Use React for the customer-facing website and admin dashboard.

Reason:
- Familiar ecosystem
- Component-based architecture
- Good fit for complex multi-step forms
- Easy deployment
- Easy future maintenance

## Vite

Use Vite as the React build tool.

## Tailwind CSS

Use Tailwind CSS for styling.

Goals:
- Consistent design system
- Responsive layouts
- Rapid UI iteration
- Reusable component styling

## React Router

Use React Router for:
- Public pages
- Visa application routes
- Tracking
- Admin routes

## Axios

Use Axios for API communication.

Keep API configuration centralized.

## React Hook Form

Use React Hook Form for:
- Multi-step forms
- Validation state
- Form performance
- Complex visa forms

## Zod

Use Zod for frontend validation.

Validation should also be repeated on the backend.

---

# 3. Backend

## Node.js

Use Node.js for the backend runtime.

## Express.js

Use Express.js for REST APIs.

Suggested backend structure:

```text
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── validators/
├── utils/
├── app.js
└── server.js
```

Keep business logic out of route files where practical.

---

# 4. Database

## MongoDB Atlas

Use MongoDB Atlas for production database hosting.

Use Mongoose for:
- Schemas
- Validation
- Models
- Relationships/references
- Indexes

Initial collections may include:

```text
users
admins
visaApplications
documents
orders
payments
services
visaTypes
countries
notifications
auditLogs
```

Potential additional collection:

```text
applicationStatusHistory
```

---

# 5. Authentication

## JWT

JWT may be used for authentication.

Prefer secure HTTP-only cookies for browser-based admin authentication rather than storing sensitive tokens in localStorage.

## Password hashing

Use bcrypt or Argon2.

Never store plaintext passwords.

## Authorization

Implement role-based authorization.

Example:

```text
ADMIN
STAFF
```

Only add additional roles if the business requires them.

---

# 6. Security Middleware

Use appropriate security libraries/middleware such as:

## Helmet
Security-related HTTP headers.

## CORS
Allow only approved frontend origins in production.

## express-rate-limit
Rate limit:
- Login
- Tracking
- Public form endpoints
- File upload
- Sensitive API endpoints

## Input validation
Use Zod or an equivalent validation layer.

## NoSQL injection protection
Sanitize/validate MongoDB inputs.

## XSS protection
Validate/sanitize user-controlled content before rendering or storing where appropriate.

---

# 7. Document Storage

## Initial: Cloudinary

Cloudinary can be used initially for uploaded documents.

MongoDB stores:

```text
documentId
applicationId
documentType
storageReference
filename
mimeType
size
uploadedAt
verificationStatus
```

Do not store actual passport PDFs/images directly inside MongoDB.

Sensitive assets should use private/authenticated/signed access rather than permanent public URLs.

## Future

If document volume/security requirements increase, consider:

```text
AWS S3
or
S3-compatible object storage
```

with:
- Private buckets
- Encryption
- Pre-signed URLs
- Lifecycle policies
- Separate backup strategy

---

# 8. Payments

## Razorpay

Use Razorpay for payment processing if approved by the client.

Required backend responsibilities:

1. Calculate/validate amount.
2. Create Razorpay order.
3. Return necessary checkout data.
4. Verify payment signature.
5. Process webhook events.
6. Reconcile payment status.
7. Update application/order safely.
8. Prevent duplicate processing.

Never trust frontend payment success alone.

Do not store:
- Card number
- CVV
- UPI PIN
- Other payment credentials

Store only necessary payment references/status.

---

# 9. Email

Use a transactional email provider or SMTP service.

Potential implementation:

```text
Backend
  ↓
Email service abstraction
  ↓
Provider
```

Create templates for:

- Application received
- Payment confirmation
- Documents required
- Status update
- Application completed
- Admin notification

Keep the provider behind a service layer so it can be replaced later.

---

# 10. Assistance Form

The small end-of-page assistance/contact form can initially use Web3Forms.

Flow:

```text
React
 ↓
Web3Forms
 ↓
Client email
```

Use Web3Forms only for lightweight inquiries.

Do not send:
- Passport files
- Bank statements
- Full visa applications
- Sensitive financial information

through the public assistance form.

If the client later wants these inquiries stored in the CRM/database, replace or supplement Web3Forms with the project's backend.

---

# 11. Frontend Deployment

## Vercel

Use Vercel for the React frontend.

Production should use a business-appropriate Vercel plan.

Configure:
- Production domain
- Environment variables
- Preview deployments
- Build settings
- Redirects/rewrites if needed

Do not put backend secrets in frontend environment variables.

Only variables intended to be public may use the Vite frontend environment system.

---

# 12. Backend Deployment

## Render

Use Render initially for the Node/Express backend.

Initial production target:
- Paid production service rather than Free service.

Configure:
- Environment variables
- Health check
- Build/start commands
- Production CORS
- Logs
- Auto deploy from GitHub

Expose:

```text
GET /health
```

for service health checking.

---

# 13. Database Hosting

## MongoDB Atlas

Development:
- Free tier where appropriate.

Production:
- Use an appropriate paid tier once real customer data is stored and production requirements justify it.

Configure:
- Database user
- Network access
- Backups
- Monitoring
- Indexes
- Least-privilege credentials

Do not use the same database credentials for development and production.

---

# 14. Domain

The client should own the production domain.

Recommended:

```text
example.com
```

Developer receives DNS/hosting access as needed.

Do not register the client's domain permanently under the developer's personal account.

---

# 15. Source Control

## GitHub

Recommended ownership:

```text
Client GitHub organization/repository
```

or another client-controlled repository.

Use:
- Protected main branch where practical
- Feature branches
- Meaningful commits
- Pull requests where useful
- Release tags

Never commit:
- .env files
- API keys
- Database credentials
- Payment secrets
- Cloudinary secrets
- Email passwords
- Customer data

---

# 16. Environment Configuration

Example backend variables:

```env
NODE_ENV=
PORT=

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

EMAIL_HOST=
EMAIL_USER=
EMAIL_PASSWORD=
```

Frontend may contain only non-secret public configuration such as:

```env
VITE_API_URL=
VITE_RAZORPAY_KEY_ID=
```

Never expose:
- MongoDB URI
- JWT secret
- Razorpay secret
- Cloudinary API secret
- Email password

to the frontend.

---

# 17. Docker / Portability

Docker is not mandatory for the first Render deployment, but the application should remain container-friendly.

Future architecture can move toward:

```text
VPS
├── Nginx
├── Node/Express
├── Docker
└── Monitoring
```

The application must not depend on Render-specific application logic.

Keep:
- Environment configuration external
- File storage external
- Database external
- Payment configuration external
- Email provider behind an abstraction

This makes migration easier.

---

# 18. Monitoring

Initial monitoring should cover:

### Frontend
- Build failures
- Runtime errors
- Performance

### Backend
- Uptime
- 4xx/5xx errors
- Response time
- Memory
- Crashes

### Database
- Storage
- Connections
- Operations
- Slow queries

### Business-critical systems
- Payment failures
- Document upload failures
- Email failures
- Application submission failures

---

# 19. Backup

Database:
- Managed Atlas backups according to production tier.
- Periodic independent encrypted export where appropriate.

Documents:
- Use storage-provider backup/versioning capabilities where appropriate.
- Establish a retention and recovery strategy before production.

Code:
- GitHub repository
- Protected branches
- Release tags

Recovery tests should be performed periodically.

---

# 20. Initial Hosting

Recommended initial production stack:

```text
Frontend
→ Vercel Pro

Backend
→ Render Starter

Database
→ MongoDB Atlas Flex / suitable production tier

Documents
→ Cloudinary initially

Payments
→ Razorpay

Email
→ Low-cost transactional provider

Domain
→ Client-owned .com
```

Actual plan selection should be reviewed against current provider pricing and expected usage immediately before production launch.

---

# 21. Future Scaling

### Stage 1
100–200 visitors/day

Use:
- Vercel
- Render
- Atlas
- Cloudinary

### Stage 2
500–1,000 visitors/day

Consider:
- More backend CPU/RAM
- Database optimization
- Indexing
- Query optimization
- Monitoring improvements

### Stage 3
5,000 visitors/day

Consider:
- Larger backend instance
- Caching where justified
- Background jobs
- Better document storage
- Database scaling

### Stage 4
20,000+ visitors/day

Consider:
- Multiple backend instances
- Load balancing
- Redis/cache
- Queue workers
- Dedicated database resources
- Object storage
- CDN strategy
- Centralized observability

Do not add these technologies before actual requirements justify them.
