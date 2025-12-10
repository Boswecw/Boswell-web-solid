import { Component } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

export const Header: Component = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header>
      <nav>
        <A href="/" aria-current={isActive('/') ? 'page' : undefined}>
          Home
        </A>
        <A href="/apps" aria-current={isActive('/apps') ? 'page' : undefined}>
          Apps
        </A>
        <A href="/about" aria-current={isActive('/about') ? 'page' : undefined}>
          About
        </A>
        <A href="/government" aria-current={isActive('/government') ? 'page' : undefined}>
          Government
        </A>
        <A href="/services" aria-current={isActive('/services') ? 'page' : undefined}>
          Services
        </A>
        <A href="/portfolio" aria-current={isActive('/portfolio') ? 'page' : undefined}>
          Portfolio
        </A>
        <A href="/contact" aria-current={isActive('/contact') ? 'page' : undefined}>
          Contact
        </A>
      </nav>
    </header>
  )
}
