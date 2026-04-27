'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ShoppingBag, ArrowDown, Star } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const floaters = [
  { emoji: '🍫', left: '7%',  top: '18%', delay: 0.6,  dur: 4.2 },
  { emoji: '🍦', left: '89%', top: '14%', delay: 1.1,  dur: 5.0 },
  { emoji: '🍔', left: '4%',  top: '72%', delay: 0.9,  dur: 4.6 },
  { emoji: '🍰', left: '93%', top: '68%', delay: 1.4,  dur: 3.8 },
  { emoji: '🍬', left: '14%', top: '87%', delay: 0.7,  dur: 5.2 },
  { emoji: '🧁', left: '82%', top: '82%', delay: 1.2,  dur: 4.4 },
  { emoji: '🍮', left: '50%', top: '6%',  delay: 0.8,  dur: 4.8 },
]

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 25, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 25, damping: 18 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-paper hero-pattern noise"
      onMouseMove={(e) => {
        mouseX.set((e.clientX / window.innerWidth - 0.5) * 35)
        mouseY.set((e.clientY / window.innerHeight - 0.5) * 35)
      }}
    >
      {/* Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E8A630, #C07C3B)',
          x: springX,
          y: springY,
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-8 blur-[100px] animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8A63050, #C07C3B30)' }}
      />
      <div
        className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full opacity-8 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F4A5C050, transparent)' }}
      />

      {/* Floating food emojis */}
      {floaters.map((f) => (
        <motion.div
          key={f.emoji + f.left}
          className="absolute select-none pointer-events-none text-2xl"
          style={{ left: f.left, top: f.top }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: f.delay, duration: 0.7, ease: 'backOut' }}
        >
          <motion.span
            className="block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: f.dur, repeat: Infinity, ease: 'easeInOut' }}
          >
            {f.emoji}
          </motion.span>
        </motion.div>
      ))}

      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full border border-brand-gold/20 animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-brand-caramel/15 animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-widest uppercase">
            <Star size={11} fill="currentColor" />
            A primeira hambúrgueria doce do Brasil
            <Star size={11} fill="currentColor" />
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-brand-dark">Onde o</span>{' '}
          <span className="shimmer-gold">chocolate</span>{' '}
          <span className="text-brand-dark">encontra</span>
          <br />
          <span className="text-brand-dark">o</span>{' '}
          <span className="shimmer-gold">burguer</span>
          <span className="text-brand-caramel">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="max-w-xl mx-auto text-brand-dark/55 text-lg md:text-xl leading-relaxed mb-10"
        >
          Marmitas, sorvetes artesanais, doces e a experiência mais doce de delivery que você já provou.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://pedido.anota.ai/loja/chokoburguer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingBag size={16} />
            Fazer pedido agora
          </motion.a>
          <motion.a
            href="#cardapio"
            className="btn-outline text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver cardápio
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {[
            { value: '100+', label: 'Itens no cardápio' },
            { value: '5★',   label: 'Avaliação média' },
            { value: '1ª',   label: 'Hambúrgueria doce' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-display font-bold text-brand-gold">{s.value}</div>
              <div className="text-xs text-brand-dark/50 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#destaques"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-dark/30 hover:text-brand-gold transition-colors"
        aria-label="Rolar para baixo"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
