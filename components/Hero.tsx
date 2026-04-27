'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, ChevronRight, Clock, Zap, Smartphone } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

const highlights = [
  { icon: Smartphone, label: '100% on-line' },
  { icon: Zap,        label: 'Pedido rápido' },
  { icon: Clock,      label: 'Entrega ágil' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-6 pb-16 px-4 sm:px-6"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-5">

        {/* ── Left — dark copy card ── */}
        <motion.div
          className="glass-card p-8 sm:p-12 flex flex-col justify-between gap-8 min-h-[580px] relative overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 10% 20%, rgba(255,90,54,0.16), transparent 54%), radial-gradient(ellipse at 90% 80%, rgba(43,103,255,0.14), transparent 50%), linear-gradient(160deg, #14202b 0%, #0b1118 100%)',
            borderRadius: '40px',
          }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="eyebrow--light">
              Hambúrguer artesanal de verdade
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="flex-1 flex flex-col justify-center">
            <h1
              className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: '#f9f4ed' }}
            >
              O burguer{' '}
              <span style={{ color: '#f1c643' }}>artesanal</span>
              <br />
              para o seu{' '}
              <span style={{ color: '#19b66b' }}>almoço</span>
              <br />
              de{' '}
              <span style={{ color: '#2b67ff' }}>todos os dias</span>
            </h1>
            <p
              className="mt-5 text-base sm:text-lg leading-relaxed max-w-md"
              style={{ color: 'rgba(249,244,237,0.74)' }}
            >
              Hambúrgueres artesanais, marmitas caprichadas e sorvetes — pedidos rápidos, entrega ágil.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="https://pedido.anota.ai/loja/chokoburguer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ShoppingBag size={16} />
              Fazer pedido
            </a>
            <a href="#cardapio" className="btn-outline">
              Ver cardápio
              <ChevronRight size={15} />
            </a>
          </motion.div>

          {/* Mini-highlights */}
          <motion.div variants={item} className="grid grid-cols-3 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 py-4 px-2 rounded-2xl text-center"
                style={{
                  border: '1px solid rgba(255,255,255,0.10)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <Icon size={18} style={{ color: '#f1c643' }} />
                <span className="text-xs font-black" style={{ color: 'rgba(249,244,237,0.82)' }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — image card ── */}
        <motion.div
          className="relative rounded-[40px] overflow-hidden min-h-[420px] lg:min-h-[580px]"
          style={{ border: '1px solid rgba(255,255,255,0.10)' }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Chokoburguer-LP/images/hero-scene.png"
            alt="Hambúrgueres artesanais Chokoburguer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.62) 100%)',
            }}
          />

          {/* "Peça agora" badge — top-left */}
          <motion.div
            className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: '#ff5a36',
              color: '#fff',
              fontWeight: 900,
              fontSize: '0.78rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              boxShadow: '0 8px 24px rgba(255,90,54,0.46)',
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <ShoppingBag size={13} />
            Peça agora
          </motion.div>

          {/* Bubble — top-right */}
          <motion.div
            className="absolute top-5 right-5 px-4 py-3 rounded-2xl max-w-[180px] text-center"
            style={{
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(12,18,26,0.80)',
              backdropFilter: 'blur(16px)',
              color: '#f9f4ed',
              fontSize: '0.75rem',
              fontWeight: 800,
              lineHeight: 1.35,
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            Burger ou almoço?<br />
            <span style={{ color: '#f1c643' }}>Aqui tem os dois.</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
