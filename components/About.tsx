'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cookie, IceCream, Star, ChefHat } from 'lucide-react'

const features = [
  {
    icon: <Cookie className="w-6 h-6" />,
    title: 'Hambúrguer com Chocolate',
    description:
      'A ideia que ninguém tinha ousado: combinamos o mundo salgado das marmitas com a doçura única do chocolate artesanal.',
  },
  {
    icon: <IceCream className="w-6 h-6" />,
    title: 'Sorvetes Artesanais',
    description:
      'Mais de 20 sabores de sorvetes artesanais em potes de 2 litros, feitos com muito amor e ingredientes selecionados.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Primeira do Brasil',
    description:
      'Pioneiros no conceito de hambúrgueria doce, unindo tradição brasileira com uma experiência gastronômica inovadora.',
  },
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: 'Receitas com Carinho',
    description:
      'Cada prato é preparado na hora com os melhores ingredientes, garantindo sabor e qualidade em cada entrega.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="sobre" className="relative py-24 bg-brand-paper-soft overflow-hidden">
      {/* Borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      {/* Glow */}
      <div
        className="absolute right-[-200px] top-[10%] w-[600px] h-[600px] rounded-full opacity-10 blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8A630, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <div>
            <motion.p
              className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-4"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              Nossa história
            </motion.p>

            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6"
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              A primeira{' '}
              <span className="gold-gradient">hambúrgueria doce</span>{' '}
              do Brasil
            </motion.h2>

            <motion.p
              className="text-brand-dark/60 leading-relaxed mb-5"
              variants={fadeUp}
              custom={0.16}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              O <strong className="text-brand-caramel">Chokoburguer</strong> nasceu de um sonho simples e ousado: provar que chocolate e hambúrguer podem dividir o mesmo espaço, a mesma mesa e o mesmo coração.
            </motion.p>

            <motion.p
              className="text-brand-dark/60 leading-relaxed mb-8"
              variants={fadeUp}
              custom={0.22}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              Com marmitas caprichadas, sorvetes artesanais em potes de 2 litros, doces importados e muito mais, somos pioneiros em uma experiência gastronômica que une o salgado ao doce de um jeito único e inesquecível.
            </motion.p>

            {/* Slogan banner */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-brand-gold/10 border border-brand-gold/30"
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <span className="text-2xl">🍫</span>
              <p className="text-brand-gold font-display font-semibold text-sm italic">
                &ldquo;A primeira hambúrgueria doce do Brasil!&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right – feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="glass-card p-5 hover:border-brand-gold/30 hover:shadow-[0_0_28px_#E8A63015] transition-all duration-300 group"
                variants={fadeUp}
                custom={0.1 + i * 0.1}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-brand-dark font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-brand-dark/50 text-xs leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
