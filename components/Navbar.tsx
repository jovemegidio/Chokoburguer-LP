'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'

const links = [
  { label: 'Início',     href: '#hero' },
  { label: 'Destaques',  href: '#destaques' },
  { label: 'Cardápio',   href: '#cardapio' },
  { label: 'Sobre',      href: '#sobre' },
  { label: 'Contato',    href: '#contato' },
]

const SECTIONS = ['hero', 'destaques', 'cardapio', 'sobre', 'contato']

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-brand-dark/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold tracking-tight">
            <span className="shimmer-gold">Choko</span>
            <span className="text-brand-cream">burguer</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => {
            const id = l.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? '#E8A630' : 'rgba(26,10,0,0.60)' }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <a
          href="https://pedido.anota.ai/loja/chokoburguer"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-xs py-2.5 px-5"
        >
          <ShoppingBag size={15} />
          Pedir agora
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-dark/70 hover:text-brand-gold transition-colors p-1"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-brand-dark/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-brand-dark/70 hover:text-brand-gold transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://pedido.anota.ai/loja/chokoburguer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit text-xs"
                onClick={() => setOpen(false)}
              >
                <ShoppingBag size={14} />
                Pedir agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
