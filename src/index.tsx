/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')

render(() => <App />, root!)

// Service worker disabled for now - causing performance issues in Lighthouse
// Re-enable after optimizing caching strategy
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js').catch(() => {
//       // Service worker registration failed, app will still work
//     })
//   })
// }
