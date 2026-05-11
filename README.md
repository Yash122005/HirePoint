<p align="center">
  <img src="public/logo (2).png" alt="HirePoint Logo" width="200" />
</p>

<h1 align="center">HirePoint</h1>

<p align="center">
  <strong>Where recruiters and candidates meet — hiring, simplified.</strong>
</p>

<p align="center">
  A modern, full-stack hiring platform that bridges the gap between companies looking for talent and candidates looking for opportunity. Built with React 19, Supabase, and Clerk.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Supabase-Database%20%2B%20Storage-3FCF8E?logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Clerk-Authentication-6C47FF?logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs Welcome" />
</p>

---

## Table of Contents

- [About HirePoint](#about-hirepoint)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Authentication Flow](#authentication-flow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About HirePoint

The hiring industry is broken. Job boards are cluttered, applicant tracking is fragmented, and the experience for both recruiters and candidates is unnecessarily painful. Most platforms are either too enterprise-heavy for startups or too simplistic to handle real recruitment workflows.

**HirePoint** was built to solve this.

It is a modern hiring platform designed to streamline the entire recruitment lifecycle — from job posting to candidate application to hiring decisions. The platform provides distinct, role-based experiences for two primary users:

- **Recruiters** who need to post job openings, manage applicants, track hiring pipelines, and control hiring status.
- **Candidates** who need to discover relevant jobs, apply with their resume and credentials, save listings for later, and track application status in real time.

### Problems HirePoint Solves

| Traditional Hiring Pain Point | How HirePoint Addresses It |
|---|---|
| Scattered job postings across platforms | Centralized job board with search, location, and company filters |
| No visibility into application status | Real-time status tracking (Applied, Interviewing, Hired, Rejected) |
| Complex onboarding for new users | One-click role selection (Candidate / Recruiter) with Clerk auth |
| Difficult resume management | Direct resume upload to cloud storage via Supabase |
| No control over hiring pipeline | Recruiters can open/close positions and update applicant statuses |
| Generic, one-size-fits-all dashboards | Role-aware views that adapt based on user type |

HirePoint is not an AI interview tool or a mock interview platform. It is a **production-grade hiring management system** built with a startup-first mindset.

---

## Core Features

### Role-Based Onboarding

New users are guided through a clean onboarding flow where they select their role — **Candidate** or **Recruiter**. This choice determines navigation paths, available actions, and dashboard content for the rest of the session. Users who have already onboarded are automatically redirected to the appropriate view.

### Job Posting System (Recruiters)

Recruiters can create detailed job listings with:

- Job title and description
- Location selection (state-level, powered by `country-state-city`)
- Company association (select existing or add new)
- Requirements section with full **Markdown editor** support (`@uiw/react-md-editor`)
- Form validation via **Zod** schemas and **React Hook Form**

### Company Management

Recruiters can register new companies on-the-fly via a drawer component. Company logos are uploaded directly to **Supabase Storage** and associated with job listings. Companies are available globally across the platform for filtering and display.

### Job Discovery and Search (Candidates)

Candidates browse a responsive grid of job cards with:

- **Keyword search** by job title
- **Location filter** (Indian states)
- **Company filter** (dynamic, based on registered companies)
- One-click filter clearing
- Glassmorphism-styled cards with gradient accents

### Job Application Workflow

Candidates apply to open positions through a slide-up drawer form that collects:

- Years of experience
- Skills (comma-separated)
- Education level (Intermediate / Graduate / Post Graduate)
- Resume upload (PDF or Word, stored in Supabase Storage)

Applications are validated client-side with Zod before submission.

### Application Tracking

- **Candidates** see their submitted applications with current status in the "My Applications" view.
- **Recruiters** see all applicants for their posted jobs, with the ability to update each application's status through a dropdown: `Applied` → `Interviewing` → `Hired` / `Rejected`.

### Saved Jobs

Candidates can bookmark jobs for later review. The save state is persisted in Supabase and toggled via a heart icon on each job card. Saved jobs are accessible from a dedicated page.

### Hiring Status Control

Recruiters can toggle job listings between **Open** and **Closed** states directly from the job detail page. Closed jobs prevent new applications while keeping existing applicant data intact.

### Resume Management

Resumes are uploaded to Supabase Storage with randomized filenames to prevent collisions. Recruiters can download any applicant's resume directly from the application card.

### Dark Theme with Grid Background

The platform defaults to a dark theme using a custom `ThemeProvider` with `localStorage` persistence. A subtle CSS grid background with radial gradient overlay gives the interface depth.

### Responsive Design

All pages and components are built with Tailwind CSS responsive utilities, adapting from mobile to desktop with grid-based layouts (`grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3`).

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 | UI library with hooks and functional components |
| **Build Tool** | Vite 7 | Fast dev server and production bundler |
| **Routing** | React Router DOM 6 | Client-side routing with protected routes and nested layouts |
| **Authentication** | Clerk | User auth, session management, role metadata, sign-in/sign-up UI |
| **Database** | Supabase (PostgreSQL) | Structured data storage for jobs, applications, companies, saved jobs |
| **File Storage** | Supabase Storage | Resume and company logo uploads |
| **Styling** | Tailwind CSS 4 + tw-animate-css | Utility-first styling with animation utilities |
| **UI Components** | shadcn/ui (New York style) | Pre-built accessible components (Cards, Drawers, Selects, Accordions, Carousels) |
| **Component Primitives** | Radix UI | Headless, accessible primitives under shadcn/ui |
| **Icons** | Lucide React | Consistent SVG icon library |
| **Forms** | React Hook Form + Zod | Performant form handling with schema-based validation |
| **Markdown** | @uiw/react-md-editor | Rich text editing for job requirements |
| **Carousel** | Embla Carousel + Autoplay | Company logo carousel on the landing page |
| **Geo Data** | country-state-city | Location dropdowns with Indian state data |
| **Theming** | Custom ThemeProvider | Dark/light mode with localStorage persistence |
| **Deployment** | Vercel | SPA hosting with client-side rewrite rules |

---

## System Architecture

HirePoint is a **client-heavy single-page application** with no custom backend server. The React frontend communicates directly with Supabase (acting as both database and API layer) and Clerk (for authentication). Supabase Row Level Security (RLS) policies enforce data access at the database level.

```
+---------------------------------------------------+
|                    Client (Browser)                |
|                                                    |
|   React 19 + React Router + Clerk Provider         |
|   ThemeProvider (Dark Mode)                        |
+----+--------------------+-------------------------+
     |                    |
     v                    v
+----+--------+    +------+---------+
|   Clerk     |    |   Supabase     |
|   Auth      |    |   Backend      |
|             |    |                |
| - Sign In   |    | - PostgreSQL   |
| - Sign Up   |    |   (jobs,       |
| - Sessions  |    |    applications,|
| - User      |    |    companies,  |
|   Metadata  |    |    saved_jobs) |
| - JWT Token |    |                |
|   (Supabase |    | - Storage      |
|    template)|    |   (resumes,    |
+------+------+    |    logos)      |
       |           +-------+-------+
       |                   ^
       |                   |
       +---[ JWT Token ]---+
           passed as
         Authorization
            header
```

### Request Lifecycle

1. User interacts with the React UI
2. The `useFetch` custom hook is called, which retrieves a **Supabase-scoped JWT** from the active Clerk session
3. A new Supabase client is instantiated with the JWT in the `Authorization` header
4. Supabase processes the request against PostgreSQL, applying RLS policies based on the JWT claims
5. Response data flows back through the hook into React state, triggering re-renders

### Database Schema (Inferred)

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────┐
│   companies  │     │      jobs        │     │ applications │
├──────────────┤     ├──────────────────┤     ├──────────────┤
│ id           │◄────│ company_id       │     │ id           │
│ name         │     │ id               │◄────│ job_id       │
│ logo_url     │     │ title            │     │ candidate_id │
└──────────────┘     │ description      │     │ name         │
                     │ location         │     │ experience   │
                     │ recruiter_id     │     │ skills       │
                     │ requirements     │     │ education    │
                     │ isOpen           │     │ resume       │
                     └────────┬─────────┘     │ status       │
                              │               │ created_at   │
                              │               └──────────────┘
                     ┌────────┴─────────┐
                     │   saved_jobs     │
                     ├──────────────────┤
                     │ id               │
                     │ user_id          │
                     │ job_id           │
                     └──────────────────┘
```

---

## Project Structure

```
hirepoint/
├── public/
│   ├── banner.png                  # Landing page hero banner
│   ├── logo (2).png                # HirePoint logo
│   ├── companies/                  # Company logos (Amazon, Google, Meta, etc.)
│   └── vite.svg
├── src/
│   ├── api/                        # Supabase data access layer
│   │   ├── apiJobs.js              # CRUD operations for jobs + saved jobs
│   │   ├── apiApplication.js       # Apply, update status, get applications
│   │   └── apiCompanies.js         # Fetch and create companies
│   ├── components/
│   │   ├── ui/                     # shadcn/ui primitives (Button, Card, Select, etc.)
│   │   ├── Header.jsx              # Navigation bar with auth controls
│   │   ├── Footer.jsx              # Site footer
│   │   ├── ProtectedRoute.jsx      # Auth + role guard wrapper
│   │   ├── job-card.jsx            # Job listing card with save/delete
│   │   ├── application-card.jsx    # Application display with status management
│   │   ├── apply-job.jsx           # Application form drawer
│   │   ├── add-company-drawer.jsx  # Company registration drawer
│   │   ├── created-jobs.jsx        # Recruiter's posted jobs list
│   │   ├── created-applications.jsx # Candidate's submitted applications
│   │   └── theme-provider.jsx      # Dark/light theme context
│   ├── data/
│   │   ├── companies.json          # Static company logos for landing carousel
│   │   └── faq.json                # FAQ content for landing page
│   ├── hooks/
│   │   └── use-fetch.jsx           # Generic data fetching hook with Clerk token
│   ├── layout/
│   │   └── App.layout.jsx          # Root layout (Header + Outlet + Footer)
│   ├── lib/
│   │   └── utils.js                # Utility (cn helper for class merging)
│   ├── pages/
│   │   ├── LandingPage.jsx         # Public landing with hero, carousel, FAQ
│   │   ├── Onboarding.jsx          # Role selection (Candidate / Recruiter)
│   │   ├── JobListing.jsx          # Searchable, filterable job board
│   │   ├── Job.jsx                 # Job detail with apply/manage
│   │   ├── PostJob.jsx             # Job creation form (recruiters only)
│   │   ├── MyJobs.jsx              # Role-aware: My Jobs or My Applications
│   │   └── SaveJobs.jsx            # Candidate's saved/bookmarked jobs
│   ├── utils/
│   │   └── supabase.js             # Supabase client factory with JWT injection
│   ├── App.jsx                     # Router definition and theme wrapper
│   ├── App.css                     # Grid background styles
│   ├── index.css                   # Tailwind config, design tokens, gradient utilities
│   └── main.jsx                    # App entry point with ClerkProvider
├── components.json                 # shadcn/ui configuration
├── vercel.json                     # SPA rewrite rules for Vercel
├── vite.config.js                  # Vite + React + Tailwind plugin config
├── package.json                    # Dependencies and scripts
└── .gitignore
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- A **Clerk** account (free tier works)
- A **Supabase** project (free tier works)

### Installation

```bash
# Clone the repository
git clone https://github.com/Yash122005/HirePoint.git
cd HirePoint

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Supabase Setup

1. Create a new Supabase project
2. Create the following tables: `jobs`, `applications`, `companies`, `saved_jobs` (schema described in [System Architecture](#system-architecture))
3. Create two storage buckets: `resumes` and `company-logo`
4. Set up Row Level Security (RLS) policies on all tables
5. In your Clerk dashboard, create a **JWT template** named `supabase` that signs tokens with your Supabase JWT secret

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Supabase anonymous/public API key | Yes |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk frontend publishable key | Yes |

All variables are prefixed with `VITE_` to be accessible in the client-side bundle via `import.meta.env`.

---

## API Reference

HirePoint does not have a custom REST API. All data operations go through the **Supabase JavaScript client**, organized into three modules:

### Jobs (`src/api/apiJobs.js`)

| Function | Description | Role |
|---|---|---|
| `getJobs(token, { location, company_id, searchQuery })` | Fetch jobs with optional filters | All |
| `getSingleJob(token, { job_id })` | Fetch a single job with company and applications | All |
| `getSavedJobs(token)` | Fetch all saved jobs for the current user | Candidate |
| `saveJob(token, { alreadySaved }, saveData)` | Toggle save/unsave a job | Candidate |
| `addNewJob(token, _, jobData)` | Create a new job listing | Recruiter |
| `getMyJobs(token, { recruiter_id })` | Fetch jobs posted by the current recruiter | Recruiter |
| `deleteJob(token, { job_id })` | Delete a job listing | Recruiter |
| `updateHiringStatus(token, { job_id }, isOpen)` | Toggle hiring open/closed | Recruiter |

### Applications (`src/api/apiApplication.js`)

| Function | Description | Role |
|---|---|---|
| `applyToJob(token, _, jobData)` | Submit application with resume upload | Candidate |
| `updateApplicationStatus(token, { job_id }, status)` | Change application status | Recruiter |
| `getApplications(token, { user_id })` | Fetch applications by candidate | Candidate |

### Companies (`src/api/apiCompanies.js`)

| Function | Description | Role |
|---|---|---|
| `getCompanies(token)` | Fetch all registered companies | All |
| `addNewCompany(token, _, companyData)` | Register company with logo upload | Recruiter |

---

## Authentication Flow

HirePoint uses **Clerk** as its authentication provider, integrated at the React level via `ClerkProvider`. The auth flow works as follows:

```
User visits site
       │
       ▼
┌─ Signed Out? ──────────────────────────┐
│                                        │
│  Click "Login" → Clerk SignIn modal    │
│  (supports email, Google, GitHub, etc.)│
│                                        │
│  On success → redirect to /onboarding  │
└────────────────────────┬───────────────┘
                         │
                         ▼
┌─ /onboarding ──────────────────────────┐
│                                        │
│  Has role in unsafeMetadata?           │
│  ├── YES → redirect to /jobs or        │
│  │         /post-job based on role     │
│  └── NO  → show role selection:        │
│            [Candidate] or [Recruiter]  │
│            Role is saved to Clerk      │
│            user.unsafeMetadata.role     │
└────────────────────────┬───────────────┘
                         │
                         ▼
┌─ Protected Routes ─────────────────────┐
│                                        │
│  ProtectedRoute component checks:      │
│  1. Is Clerk loaded? (loading state)   │
│  2. Is user signed in?                 │
│     └── NO → redirect to /?sign-in=true│
│  3. Does user have a role?             │
│     └── NO → redirect to /onboarding   │
│  4. All clear → render child route     │
└────────────────────────────────────────┘
```

### Clerk-Supabase JWT Integration

Clerk issues a custom JWT (via a template named `supabase`) that Supabase can verify. This token is attached to every Supabase request as a `Bearer` token in the `Authorization` header, allowing Supabase RLS policies to identify the requesting user.

---

## Deployment

HirePoint is configured for deployment on **Vercel**.

### Vercel Configuration

The included `vercel.json` handles SPA routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploy Steps

1. Push the repository to GitHub
2. Import the project in Vercel
3. Set the environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`, `VITE_CLERK_PUBLISHABLE_KEY`)
4. Vercel auto-detects Vite and runs `npm run build`
5. The app is live

---

## Contributing

Contributions are welcome. If you'd like to improve HirePoint, here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** your changes (`git commit -m 'Add: your feature description'`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

Please make sure your code follows the existing patterns (component structure, API layer conventions, Zod validation, etc.).

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with care by <a href="https://github.com/Yash122005">Yash Gupta</a>
</p>
