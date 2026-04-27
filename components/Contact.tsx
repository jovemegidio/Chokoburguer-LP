'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, Instagram, ShoppingBag } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const WHATSAPP = '5511999999999'

const infoCards = [
  { icon: Clock,  label: 'Horário',    value: 'Aberto até as 15h',     sub: 'Confira disponibilidade no app' },
  { icon: MapPin, label: 'Entrega',    value: 'Delivery na região',    sub: 'Consulte cobertura de entrega' },
  { icon: Phone,  label: 'Pedidos',    value: 'Pelo link do cardápio', sub: 'pedido.anota.ai/loja/chokoburguer' },
]

export default function Contact() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="contato" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Contact card — dark with gradients */}
        <motion.div
          className="relative overflow-hidden"
          style={{
            borderRadius: '36px',
            border: '1px solid rgba(255,255,255,0.10)',
            background: 'radial-gradient(ellipse at 0% 0%, rgba(255,90,54,0.22), transparent 48%), radial-gradient(ellipse at 100% 100%, rgba(43,103,255,0.18), transparent 48%), radial-gradient(ellipse at 100% 0%, rgba(25,182,107,0.12), transparent 36%), linear-gradient(160deg, #14202b, #0b1118)',
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-0">

            {/* Left — info */}
            <div className="p-8 sm:p-12">
              <span className="eyebrow--light">Fale conosco</span>

              <h2
                className="font-display font-black mt-5 mb-2 leading-[0.94] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#f9f4ed' }}
              >
                Estamos aqui{' '}
                <span style={{ color: '#f1c643' }}>pra você</span>
              </h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(249,244,237,0.6)' }}>
                Pedido mínimo R$ 15,00 · Entrega na região
              </p>

              <div className="space-y-3">
                {infoCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    className="flex items-start gap-4 p-4 rounded-2xl"
                    style={{ border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.05)' }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(241,198,67,0.14)', color: '#f1c643' }}
                    >
                      <card.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: 'rgba(249,244,237,0.5)' }}>{card.label}</p>
                      <p className="font-black text-sm" style={{ color: '#f9f4ed' }}>{card.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(249,244,237,0.42)' }}>{card.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — paper panel + CTAs */}
            <motion.div
              className="paper-card m-5 p-8 flex flex-col items-center justify-center text-center gap-5"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
                style={{ background: 'rgba(255,90,54,0.12)' }}
              >
                🍫
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl mb-2" style={{ color: '#121820' }}>
                  Pronto para pedir?
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5f6772' }}>
                  Acesse nosso cardápio, escolha seus favoritos e receba na porta.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <a
                  href="https://pedido.anota.ai/loja/chokoburguer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <ShoppingBag size={16} />
                  Fazer pedido agora
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Chokoburguer`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full font-black text-sm tracking-wide uppercase transition-all duration-200 hover:opacity-90"
                  style={{ background: '#25D366', color: '#fff' }}
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>

                <a
                  href="https://www.instagram.com/chokoburguer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full h-12 rounded-full font-black text-sm tracking-wide uppercase transition-all duration-200 hover:opacity-90"
                  style={{ border: '1px solid rgba(18,26,32,0.18)', color: '#121820' }}
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

    label: 'Horário de funcionamento',
    value: 'Aberto até as 15h',
    sub: 'Confira disponibilidade no app',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Localização',
    value: 'Delivery na região',
    sub: 'Consulte cobertura de entrega',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Pedidos online',
    value: 'Pelo link do cardápio',
    sub: 'pedido.anota.ai/loja/chokoburguer',
  },
]

export default function Contact() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="contato" className="relative py-24 bg-brand-paper overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      {/* Glow */}
      <div
        className="absolute left-[-200px] bottom-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C07C3B, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">Fale conosco</p>
          <h2 className="section-title mb-4">
            Estamos aqui <span className="gold-gradient">pra você</span>
          </h2>
          <p className="text-brand-dark/50 max-w-sm mx-auto text-sm">
            Pedido mínimo R$ 15,00 · Entrega na região
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info cards */}
          <div className="space-y-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="glass-card p-5 flex items-start gap-4 hover:border-brand-gold/30 transition-all duration-300"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
                  {card.icon}
                </div>
                <div>
                  <p className="text-brand-dark/50 text-xs mb-0.5">{card.label}</p>
                  <p className="text-brand-dark font-semibold text-sm">{card.value}</p>
                  <p className="text-brand-dark/40 text-xs mt-0.5">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA box */}
          <motion.div
            className="glass-card p-8 flex flex-col items-center justify-center text-center gap-5 border-brand-gold/20"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-3xl">
              🍫
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">
                Pronto para pedir?
              </h3>
              <p className="text-brand-dark/50 text-sm leading-relaxed">
                Acesse nosso cardápio, escolha seus favoritos e receba na porta.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <a
                href="https://pedido.anota.ai/loja/chokoburguer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <ShoppingBag size={16} />
                Fazer pedido agora
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Chokoburguer%20🍫`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#25D366] text-[#25D366] font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:scale-105 active:scale-95 w-full"
              >
                <WhatsAppIcon />
                Chamar no WhatsApp
              </a>

              <a
                href="https://www.instagram.com/chokoburguer/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                <Instagram size={16} />
                Seguir no Instagram
              </a>
            </div>

            {/* Promo badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-semibold">
              🎉 10% OFF na primeira compra
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
