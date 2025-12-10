import type { Component } from 'solid-js'
import { Router, Route } from '@solidjs/router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Apps from './pages/Apps'
import About from './pages/About'
import Government from './pages/Government'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const App: Component = () => {
  return (
    <Router
      root={(props) => (
        <>
          <a href="#main" class="skip-link">
            Skip to main content
          </a>
          <Header />
          {props.children}
          <Footer />
        </>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/apps" component={Apps} />
      <Route path="/about" component={About} />
      <Route path="/government" component={Government} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
    </Router>
  )
}

export default App
