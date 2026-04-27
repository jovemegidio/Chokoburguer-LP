'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Mariana S.',
    avatar: 'M',
    avatarColor: '#ff5a36',
    rating: 5,
    text: 'Melhor sorvete artesanal que já comi! O ChocoBueno é simplesmente perfeito. Entrega rápida e embalagem impecável.',
    item: 'Sorvete ChocoBueno',
    date: 'há 2 dias',
  },
  {
    name: 'Rafael L.',
    avatar: 'R',
    avatarColor: '#f1c643',
    rating: 5,
    text: 'Pedi a marmita de Bife Parmegiana e chegou quente, bem temperada e com porção generosa. Já é o meu delivery favorito!',
    item: 'Bife Parmegiana',
    date: 'há 5 dias',
  },
  {
    name: 'Camila F.',
    avatar: 'C',
    avatarColor: '#2b67ff',
    rating: 5,
    text: 'O conceito é único! Hambúrgueria doce mesmo – com sorvetes incríveis e ainda marmitas deliciosas. Amei cada detalhe.',
    item: 'Sorvete Chocolate',
    date: 'há 1 semana',
  },
  {
    name: 'Lucas M.',
    avatar: 'L',
    avatarColor: '#19b66b',
    rating: 5,
    text: 'O sorvete de Pistache acabou me surpreendendo muito. Pote enorme, artesanal de verdade. Recomendo demais!',
    item: 'Sorvete Pistache',
    date: 'há 2 semanas',
  },
]

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} style={{ color: '#f1c643', fill: '#f1c643' }} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow--light">Avaliações</span>
          <h2
            className="font-display font-black mt-4 leading-[0.94] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#f9f4ed' }}
          >
            O que nossos clientes{' '}
            <span style={{ color: '#f1c643' }}>dizem</span>
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <Stars />
            <span className="text-sm" style={{ color: 'rgba(249,244,237,0.54)' }}>5.0 · +200 avaliações</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="paper-card p-6 flex flex-col gap-4 relative"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote size={18} className="absolute top-4 right-4" style={{ color: 'rgba(18,26,32,0.12)' }} />

              <Stars count={r.rating} />

              <p className="text-sm leading-relaxed flex-1 italic" style={{ color: '#5f6772' }}>
                &ldquo;{r.text}&rdquo;
              </p>

              <span
                className="text-[10px] font-black px-2.5 py-1 rounded-full w-fit"
                style={{ background: 'rgba(241,198,67,0.14)', color: '#8d6400' }}
              >
                Pediu: {r.item}
              </span>

              <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(18,26,32,0.10)' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: r.avatarColor }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-black text-sm leading-none" style={{ color: '#121820' }}>{r.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#5f6772' }}>{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

    item: 'Sorvete ChocoBueno',
    date: 'há 2 dias',
  },
  {
    name: 'Rafael L.',
    avatar: 'R',
    avatarBg: '#E8A630',
    rating: 5,
    text: 'Pedi a marmita de Bife Parmegiana e chegou quente, bem temperada e com porção generosa. Já é o meu delivery favorito!',
    item: 'Bife Parmegiana',
    date: 'há 5 dias',
  },
  {
    name: 'Camila F.',
    avatar: 'C',
    avatarBg: '#D94F2B',
    rating: 5,
    text: 'O conceito é único! Hambúrgueria doce mesmo – com sorvetes incríveis e ainda marmitas deliciosas. Amei cada detalhe.',
    item: 'Sorvete Chocolate',
    date: 'há 1 semana',
  },
  {
    name: 'Lucas M.',
    avatar: 'L',
    avatarBg: '#5C2D0A',
    rating: 5,
    text: 'O sorvete de Pistache acabou me surpreendendo muito. Pote enorme, artesanal de verdade. Recomendo demais pra toda a família!',
    item: 'Sorvete Pistache',
    date: 'há 2 semanas',
  },
]

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-brand-gold fill-brand-gold" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 bg-brand-paper overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #E8A630, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">Avaliações</p>
          <h2 className="section-title mb-4">
            O que nossos clientes <span className="gold-gradient">dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Stars />
            <span className="text-brand-dark/50 text-sm">5.0 · +200 avaliações</span>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="glass-card p-6 hover:border-brand-gold/30 hover:shadow-[0_0_30px_#E8A63012] transition-all duration-300 flex flex-col gap-4 relative"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Quote icon */}
              <Quote size={20} className="text-brand-gold/20 absolute top-4 right-4" />

              <Stars count={r.rating} />

              <p className="text-brand-dark/70 text-sm leading-relaxed flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Ordered item badge */}
              <span className="text-[10px] font-semibold text-brand-gold/70 bg-brand-gold/10 px-2.5 py-1 rounded-full w-fit">
                Pediu: {r.item}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-brand-dark/8">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: r.avatarBg }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="text-brand-dark text-sm font-semibold leading-none">{r.name}</p>
                  <p className="text-brand-dark/40 text-xs mt-0.5">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
