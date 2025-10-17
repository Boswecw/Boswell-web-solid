import { createSignal, For } from 'solid-js'
import { A } from '@solidjs/router'
import { Menu, X } from 'lucide-solid'

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <div class="w-full">
        <div class="flex items-center justify-between h-16 px-2 sm:px-3 md:px-4">
          {/* Logo */}
          <div class="flex-shrink-0 hover:scale-105 transition-transform">
            <A href="/" class="flex items-center gap-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/siglogo.webp?alt=media&token=43e15d27-e6fa-4fa0-b7c4-2972b1c1d03a"
                alt="Boswell Digital Solutions"
                class="h-9 w-auto select-none"
                width="180"
                height="36"
                loading="eager"
              />
              <span class="sr-only">Boswell Digital Solutions</span>
            </A>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-8 ml-auto pr-2">
            <For each={navItems}>
              {(item) => (
                <A
                  href={item.href}
                  class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group hover:-translate-y-0.5"
                  activeClass="text-white"
                >
                  {item.name}
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </A>
              )}
            </For>
          </div>

          {/* Mobile menu button */}
          <div class="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen())}
              class="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen() ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          class={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen() ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-md border-t border-gray-700">
            <For each={navItems}>
              {(item) => (
                <A
                  href={item.href}
                  class="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors hover:bg-gray-700/50 rounded-md"
                  activeClass="text-white bg-gray-700/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </A>
              )}
            </For>
          </div>
        </div>
      </div>
    </nav>
  )
}
