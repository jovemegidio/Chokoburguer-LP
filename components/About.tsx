'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, Leaf, Star, ChefHat } from 'lucide-react'

const features = [
  {
    icon: Flame,
    color: '#ff5a36',
    title: 'Hambúrguer artesanal',
    description: 'Preparados na hora com ingredientes frescos e muito sabor, direto pra você.',
  },
  {
    icon: Leaf,
    color: '#19b66b',
    title: 'Marmitas caprichadas',
    description: 'Arroz, feijão, proteína e acompanhamentos — refeição completa e gostosa.',
  },
  {
    icon: Star,
    color: '#f1c643',
    title: 'Sorvetes artesanais',
    description: 'Mais de 10 sabores em potes de 2 litros, feitos com ingredientes selecionados.',
  },
  {
    icon: ChefHat,
    color: '#2b67ff',
    title: 'Feito com carinho',
    description: 'Cada prato preparado para garantir sabor e qualidade em cada entrega.',
  },
]

export default function About() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="sobre" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">

          {/* Left — dark card */}
          <motion.div
            className="glass-card p-8 sm:p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'radial-gradient(ellipse at 0% 0%, rgba(255,90,54,0.14), transparent 54%), radial-gradient(ellipse at 100% 100%, rgba(43,103,255,0.12), transparent 44%), linear-gradient(160deg, #14202b, #0b1118)',
            }}
          >
            <span className="eyebrow--light">Nossa história</span>

            <h2
              className="font-display font-black mt-5 mb-5 leading-[0.94] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#f9f4ed' }}
            >
              A primeira{' '}
              <span style={{ color: '#f1c643' }}>hambúrgueria</span>
              <br />
              <span style={{ color: '#ff5a36' }}>doce</span>{' '}
              do Brasil
            </h2>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(249,244,237,0.72)' }}>
              O <strong style={{ color: '#f1c643' }}>Chokoburguer</strong> nasceu de um sonho simples e ousado: provar que chocolate e hambúrguer podem dividir o mesmo espaço, a mesma mesa e o mesmo coração.
            </p>

            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(249,244,237,0.72)' }}>
              Com marmitas caprichadas, sorvetes artesanais em potes de 2 litros, doces importados e muito mais, somos pioneiros em uma experiência gastronômica única.
            </p>

            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ border: '1px solid rgba(241,198,67,0.28)', background: 'rgba(241,198,67,0.08)' }}
            >
              <span className="text-xl">🍫</span>
              <p className="text-sm font-black italic" style={{ color: '#f1c643' }}>
                &ldquo;A primeira hambúrgueria doce do Brasil!&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right — feature cards grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="paper-card p-6"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}18`, color: f.color }}
                >
                  <f.icon size={20} />
                </div>
                <h3 className="font-black text-sm mb-2" style={{ color: '#121820' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5f6772' }}>{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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
