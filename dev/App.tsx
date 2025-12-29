import type { Component } from 'solid-js'
import { Router, Route } from '@solidjs/router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import VibeForge from './pages/VibeForge'
import Shop from './pages/Shop'
import ShopDetail from './pages/ShopDetail'
import ForgeCharter from './pages/ForgeCharter'
import ForgeEcosystem from './pages/ForgeEcosystem'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Support from './pages/Support'
import HowWeHelp from './pages/HowWeHelp'
import Intake from './pages/Intake'

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
      <Route path="/products" component={Products} />
      <Route path="/products/vibeforge" component={VibeForge} />
      <Route path="/shop" component={Shop} />
      <Route path="/shop/:slug" component={ShopDetail} />
      <Route path="/forge/charter" component={ForgeCharter} />
      <Route path="/forge/ecosystem" component={ForgeEcosystem} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/support" component={Support} />
      <Route path="/how-we-help" component={HowWeHelp} />
      <Route path="/intake" component={Intake} />
    </Router>
  )
}

export default App
