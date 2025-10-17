# Boswell Digital Solutions LLC - SolidJS Website

A modern, responsive website built with SolidJS, Tailwind CSS, and TypeScript. Features Netlify Forms integration and optimized for performance.

## 🚀 Features

- **SolidJS** - Reactive JavaScript framework for fast, efficient UIs
- **TypeScript** - Type-safe development
- **Tailwind CSS v3** - Utility-first CSS framework
- **@solidjs/router** - Client-side routing
- **Netlify Forms** - Contact form handling
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, structured data, and performance
- **Veteran-Owned Business** - Professional services in Lexington, KY

## 🛠️ Development

### Prerequisites
- **Bun** (recommended) or Node.js 18+

### Installation
```bash
bun install
```

### Development Server
```bash
bun run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
bun run build
```

### Preview Production Build
```bash
bun run preview
```

## 🌐 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Connect your GitHub repository to Netlify
   - Set build command: `bun run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   - Copy `.env` variables to Netlify dashboard
   - All variables are prefixed with `VITE_`

3. **Form Handling**
   - Netlify Forms are automatically enabled
   - Contact form submissions will appear in Netlify dashboard

### Manual Deployment
```bash
# Build the project
bun run build

# Deploy the dist/ folder to your hosting provider
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component with variants
│   ├── Navbar.tsx      # Navigation with mobile menu
│   └── SEOHead.tsx     # SEO meta tags and structured data
├── pages/              # Route components
│   ├── LandingPage.tsx # Homepage with hero and features
│   ├── AboutPage.tsx   # Company and founder information
│   ├── ContactPage.tsx # Pricing packages and contact form
│   ├── PortfolioPage.tsx # Project showcase
│   ├── ServicesPage.tsx # Service offerings
│   └── ResumePage.tsx  # Professional experience
├── App.tsx             # Main app with routing
└── index.tsx           # Application entry point
```

## 🎨 Styling

- **Tailwind CSS v3** with custom configuration
- **Custom color palette** with blue primary colors
- **Responsive breakpoints** for all screen sizes
- **Custom animations** (fade-in, slide-up, bounce-slow)
- **Component classes** for buttons and utilities

## 📧 Contact Form

The contact form uses Netlify Forms with:
- **Package selection** - Automatically fills pricing and timeline
- **Form validation** - Required fields and email validation
- **Success/error handling** - Toast notifications
- **Spam protection** - Honeypot field

## 🔧 Configuration

### Environment Variables
```bash
VITE_GITHUB_USERNAME=CharlesWBoswell
VITE_CONTACT_EMAIL=charlesboswell@boswelldigitalsolutions.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/charles-boswell-0057b1340
VITE_GITHUB_URL=https://github.com/CharlesWBoswell
VITE_LOGO_URL=https://storage.googleapis.com/...
VITE_CERTIFICATE_URL=https://storage.googleapis.com/...
```

### Tailwind Configuration
- Custom blue color palette
- Typography plugin enabled
- Custom animations and keyframes
- Responsive design utilities

## 📱 Pages

1. **Landing Page** - Hero section, featured projects, service preview
2. **About Page** - Company story, founder background, values
3. **Portfolio Page** - Project showcase with live demos and code links
4. **Services Page** - Service packages, pricing, process overview
5. **Contact Page** - Pricing packages, contact form, business info
6. **Resume Page** - Professional experience, skills, education

## 🏢 Business Information

- **Company**: Boswell Digital Solutions LLC
- **Owner**: Charles Boswell
- **Location**: Lexington, Kentucky
- **Email**: charlesboswell@boswelldigitalsolutions.com
- **Phone**: (859) 436-7304
- **Specialties**: React, SolidJS, AI Integration, Custom Web Apps

## 📄 License

© 2025 Boswell Digital Solutions LLC. All rights reserved.
