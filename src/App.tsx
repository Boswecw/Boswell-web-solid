import { Router, Route } from '@solidjs/router'
import { lazy } from 'solid-js'

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProcessPage = lazy(() => import('./pages/ProcessPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/process" component={ProcessPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="*" component={NotFoundPage} />
    </Router>
  )
}

export default App
