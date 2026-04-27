'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'burguers',
    label: 'Hambúrgueres',
    eyebrow: 'Categoria',
    description: 'Artesanais, suculentos e feitos na hora. Escolha seu favorito e faça seu pedido agora.',
    accent: '#2b67ff',
    accentSoft: 'rgba(43,103,255,0.12)',
    accentBorder: 'rgba(43,103,255,0.28)',
    image: '/Chokoburguer-LP/images/burger.png',
    cta: 'Ver hambúrgueres',
    badge: 'Clássicos & especiais',
  },
  {
    id: 'almoco',
    label: 'Almoço executivo',
    eyebrow: 'Categoria',
    description: 'Marmitas completas, saborosas e quentinhas. Arroz, feijão, proteína e muito mais.',
    accent: '#19b66b',
    accentSoft: 'rgba(25,182,107,0.12)',
    accentBorder: 'rgba(25,182,107,0.28)',
    image: '/Chokoburguer-LP/images/lunch.png',
    cta: 'Ver marmitas',
    badge: 'Marmitas completas',
  },
]

export default function Destaques() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="destaques" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow--light">Categorias</span>
          <h2
            className="font-display font-black mt-4 leading-[0.94] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#f9f4ed' }}
          >
            O que você vai{' '}
            <span style={{ color: '#f1c643' }}>querer hoje?</span>
          </h2>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="paper-card overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image area */}
              <div
                className="relative h-60 overflow-hidden"
                style={{ background: `radial-gradient(circle at 80% 50%, ${cat.accentSoft}, transparent 70%), #f0e8d8` }}
              >
                {/* Decorative circle */}
                <div
                  className="absolute -right-10 -top-10 w-52 h-52 rounded-full opacity-20"
                  style={{ background: cat.accent }}
                />
                <div
                  className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full opacity-10"
                  style={{ background: cat.accent }}
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="relative z-10 w-full h-full object-contain p-6 drop-shadow-2xl"
                  loading="lazy"
                />

                {/* Badge */}
                <span
                  className="absolute top-4 left-4 z-20 inline-flex items-center h-7 px-3 rounded-full text-[11px] font-black tracking-wide uppercase"
                  style={{
                    background: cat.accentSoft,
                    border: `1px solid ${cat.accentBorder}`,
                    color: cat.accent,
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                <div>
                  <p
                    className="text-[11px] font-black tracking-widest uppercase mb-2"
                    style={{ color: cat.accent }}
                  >
                    {cat.eyebrow}
                  </p>
                  <h3
                    className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-3"
                    style={{ color: '#121820' }}
                  >
                    {cat.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5f6772' }}>
                    {cat.description}
                  </p>
                </div>

                <a
                  href="https://pedido.anota.ai/loja/chokoburguer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-black text-sm transition-all duration-200 hover:gap-3"
                  style={{ color: cat.accent }}
                >
                  <ShoppingBag size={15} />
                  {cat.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

  {
    name: 'Sorvete Chocolate',
    tag: '🔥 Mais pedido',
    tagColor: 'bg-brand-red/90 text-white',
    price: 'R$ 27',
    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/64e610f006626e00279acf75/1c162196-4c16-4465-a47f-af9e3fef9c89-1692800787943blob.webp',
    description: 'Pote artesanal cremoso de 2 litros',
    bg: 'radial-gradient(circle at 50% 80%, #3B1A00, #1A0A00)',
  },
  {
    name: 'Sorvete ChocoBueno',
    tag: '⭐ Favorito',
    tagColor: 'bg-brand-gold text-brand-dark',
    price: 'R$ 27',
    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1763819821404blob.webp',
    description: 'Pote 2 litros com recheio de Bueno',
    bg: 'radial-gradient(circle at 50% 80%, #2D1500, #1A0A00)',
  },
  {
    name: 'Bife Parmegiana',
    tag: '💪 Clássico',
    tagColor: 'bg-brand-caramel/90 text-brand-dark',
    price: 'R$ 28',
    image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/63ffbc7ecb78e3001cdd33ef1677790113437blob.webp',
    description: 'Arroz, feijão, salada e batata frita',
    bg: 'radial-gradient(circle at 50% 80%, #3D1200, #1A0A00)',
  },
  {
    name: 'Kinder Bueno',
    tag: '✨ Premium',
    tagColor: 'bg-brand-gold/90 text-brand-dark',
    price: 'R$ 10',
    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1721827861598blob.webp',
    description: 'Cremoso e irresistível, 39g',
    bg: 'radial-gradient(circle at 50% 80%, #2B1800, #1A0A00)',
  },
  {
    name: 'Sorvete Ninho Trufado',
    tag: '🍦 Artesanal',
    tagColor: 'bg-white/20 text-white border border-white/30',
    price: 'R$ 27',
    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/64e610f006626e00279acf75/fd25889b-8cf1-44df-9626-4d13eefca835-1692800682044blob.webp',
    description: 'Pote 2 litros com trufas de leite',
    bg: 'radial-gradient(circle at 50% 80%, #3A1000, #1A0A00)',
  },
  {
    name: 'Sorvete Pistache',
    tag: '🌿 Novidade',
    tagColor: 'bg-green-700/80 text-white',
    price: 'R$ 27',
    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1739403154368blob.webp',
    description: 'Pote artesanal 2 litros de pistache',
    bg: 'radial-gradient(circle at 50% 80%, #1C3000, #1A0A00)',
  },
]

function FeaturedCard({ item, index, inView }: { item: FeaturedItem; index: number; inView: boolean }) {
  return (
    <motion.div
      className="flex-shrink-0 w-72 snap-start"
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group glass-card overflow-hidden hover:border-brand-gold/40 hover:shadow-[0_8px_48px_#C07C3B25] transition-all duration-500 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-56 overflow-hidden" style={{ background: item.bg }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Tag */}
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${item.tagColor}`}>
            {item.tag}
          </span>

          {/* Price */}
          <span className="absolute bottom-3 right-3 font-display font-bold text-xl text-brand-gold drop-shadow-lg">
            {item.price}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex-1 flex flex-col gap-3">
          <div>
            <h3 className="text-brand-dark font-semibold leading-tight mb-1">{item.name}</h3>
            <p className="text-brand-dark/50 text-xs">{item.description}</p>
          </div>
          <a
            href="https://pedido.anota.ai/loja/chokoburguer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto btn-primary text-xs py-2.5 justify-center"
          >
            <ShoppingBag size={13} />
            Pedir agora
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Destaques() {
  const ref     = useRef<HTMLElement>(null)
  const inView  = useInView(ref, { once: true, margin: '-100px' })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'l' | 'r') => {
    scrollRef.current?.scrollBy({ left: dir === 'l' ? -300 : 300, behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="destaques" className="relative py-24 bg-brand-paper-soft overflow-hidden">
      {/* Borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      {/* Glow */}
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8 blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8A630, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-2">
              <Flame size={13} className="fill-brand-gold" />
              Destaques
            </p>
            <h2 className="section-title">
              Os <span className="gold-gradient">queridinhos</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('l')}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-dark/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('r')}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-brand-dark/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {featured.map((item, i) => (
            <FeaturedCard key={item.name} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
