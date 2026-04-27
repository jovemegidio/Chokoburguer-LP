'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'

const links = [
  { label: 'Início',     href: '#hero' },
  { label: 'Categorias', href: '#destaques' },
  { label: 'Cardápio',   href: '#cardapio' },
  { label: 'Sobre',      href: '#sobre' },
  { label: 'Contato',    href: '#contato' },
]

const SECTIONS = ['hero', 'destaques', 'cardapio', 'sobre', 'contato']

export default function Navbar() {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('hero')

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
    <header className="sticky top-0 z-50 px-4 sm:px-6 pt-4 pb-0">
      <div
        className="flex items-center justify-between gap-6 px-5 py-3.5 rounded-3xl"
        style={{
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(12,18,26,0.84)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 20px 48px rgba(0,0,0,0.28)',
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Chokoburguer-LP/images/logo.png"
            alt="Chokoburguer"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              if (t.nextElementSibling) (t.nextElementSibling as HTMLElement).style.display = 'block'
            }}
          />
          <span
            className="text-xl font-display font-black tracking-tight hidden"
            style={{ color: '#f1c643' }}
          >
            Choko<span style={{ color: '#ff5a36' }}>burguer</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const id = l.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative inline-flex items-center h-10 px-4 rounded-full font-black text-sm transition-all duration-200 hover:-translate-y-px"
                style={{
                  color: isActive ? '#f9f4ed' : 'rgba(249,244,237,0.68)',
                  background: isActive ? 'rgba(255,255,255,0.10)' : 'transparent',
                }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-3 right-3 h-px"
                    style={{ background: '#f1c643' }}
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
          className="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-xs"
        >
          <ShoppingBag size={14} />
          Pedir agora
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-xl p-2.5 transition-colors"
          style={{
            border: '1px solid rgba(255,255,255,0.14)',
            background: 'rgba(255,255,255,0.06)',
            color: '#f9f4ed',
          }}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden mt-2 rounded-2xl"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(12,18,26,0.96)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <nav className="flex flex-col px-5 py-4 gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-black text-sm transition-colors hover:text-brand-yellow"
                  style={{ color: 'rgba(249,244,237,0.78)' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://pedido.anota.ai/loja/chokoburguer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit text-xs mt-1"
                onClick={() => setOpen(false)}
              >
                <ShoppingBag size={13} />
                Pedir agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
