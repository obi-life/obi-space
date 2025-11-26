# OBI Nature Escapes

A modern marketing website for OBI Space - a lakeside event venue in Bengaluru, India. This website showcases event spaces, packages, afterschool programs, and provides an enquiry form for potential customers.

## Project Overview

OBI Space is a 2-acre lakeside event space designed for families, teams, and communities. The website features:

- Event space showcases
- Package information
- Afterschool programs
- Image gallery
- Customer testimonials
- Contact/enquiry form
- Virtual tour section

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Backend/Database**: Supabase (PostgreSQL)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd obi-nature-escapes
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
obi-nature-escapes/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...              # Feature components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External service integrations
│   │   └── supabase/       # Supabase client & types
│   └── assets/             # Images and static assets
├── supabase/
│   └── migrations/         # Database migrations
└── public/                 # Public static files
```

## Database Schema

The project uses Supabase with the following main tables:

- `event_spaces` - Event space information
- `packages` - Package details
- `afterschool_programs` - Afterschool program information
- `gallery_images` - Gallery image metadata
- `testimonials` - Customer testimonials
- `enquiries` - Contact form submissions

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Scroll Animations**: Smooth scroll-triggered animations throughout
- **Form Handling**: Enquiry form with Supabase integration
- **Modern UI**: Custom design system with gradient effects and animations
- **SEO Optimized**: Semantic HTML and meta tags

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service (Vercel, Netlify, AWS S3, etc.).

## License

Private project - All rights reserved.
