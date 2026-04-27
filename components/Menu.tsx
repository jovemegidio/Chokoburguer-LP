'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ShoppingBag, ChevronRight } from 'lucide-react'

type MenuItem = {
  name: string
  description: string
  price: string | null
  image?: string
}

type Category = {
  id: string
  label: string
  emoji: string
  items: MenuItem[]
}

const categories: Category[] = [
  {
    id: 'pequena',
    label: 'Marmita Pequena',
    emoji: '🍱',
    items: [
      { name: 'Marmitex Omelete',      description: 'Arroz, feijão, farofa temperada, vinagrete e omelete com queijo',                        price: 'R$ 13', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Marmitex%20Pequeno%20-%20Omelete1677797474593blob.webp' },
      { name: 'Filézinho de Frango',    description: 'Arroz, feijão, farofa, vinagrete e 3 tirinhas de frango empanadas',                      price: 'R$ 13', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1721225956155blob.webp' },
      { name: 'Linguiça Calabresa',     description: 'Arroz, feijão, farofa temperada, vinagrete e calabresa acebolada',                       price: 'R$ 13', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Marmitex%20Pequeno%20-%20Lingui%C3%A7a%20Calabresa1677792795011blob.webp' },
      { name: 'Linguiça Toscana',       description: 'Arroz, feijão, linguiça toscana fresca frita acebolada, ovo frito, farofa e vinagrete',  price: 'R$ 13', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Marmitex%20Pequeno%20-%20Lingui%C3%A7a%20Toscana1677779338085blob.webp' },
      { name: 'Frango com Fritas',      description: 'Arroz, feijão, farofa, vinagrete, batatas fritas e filézinhos de frango',                price: 'R$ 15' },
      { name: 'Peixe (Filezinho)',       description: 'Arroz, feijão, fritas, salada e filézinhos de peixe empanados',                         price: 'R$ 17' },
    ],
  },
  {
    id: 'media',
    label: 'Marmita Média',
    emoji: '🍛',
    items: [
      { name: 'Bife à Cavalo',     description: 'Arroz, feijão, ovo e batata frita',                                          price: 'R$ 27', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Bife%20%C3%A1%20Cavalo1677780023118blob.webp' },
      { name: 'Bife Parmegiana',   description: 'Arroz, feijão, salada e batata frita',                                       price: 'R$ 28', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/63ffbc7ecb78e3001cdd33ef1677790113437blob.webp' },
      { name: 'Frango Parmegiana', description: 'Arroz, feijão, salada e batata frita',                                       price: 'R$ 23', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Frango%20Parmegiana1677780375204blob.webp' },
      { name: 'Contra Filé',       description: 'Arroz, feijão, salada e batata frita',                                       price: 'R$ 26', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Contra%20Fil%C3%A91677798179641blob.webp' },
      { name: 'Filé de Frango',    description: 'Arroz, feijão, salada e batata frita',                                       price: 'R$ 19', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Fil%C3%A9%20de%20Frango1677800424169blob.webp' },
      { name: 'Frango Pizzaiolo',  description: 'Arroz, feijão, salada, frango grelhado com mussarela e tomate',              price: 'R$ 22', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Frango%20Pizzaiolo1677789059728blob.webp' },
      { name: 'Feijoada',          description: 'Arroz, lombo, bisteca, couve, torresmo, farofa, vinagrete e molho',          price: null,    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/63ffbc7dcb78e3001cdd33b9/63ffbc7ecb78e3001cdd3499blob.webp' },
      { name: 'Toscana',           description: 'Arroz, feijão, linguiça toscana, ovo frito, farofa e vinagrete',             price: 'R$ 18', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/Toscana1677800374434blob.webp' },
    ],
  },
  {
    id: 'sorvetes',
    label: 'Sorvetes',
    emoji: '🍦',
    items: [
      { name: 'Chocolate',       description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/64e610f006626e00279acf75/1c162196-4c16-4465-a47f-af9e3fef9c89-1692800787943blob.webp' },
      { name: 'Ninho Trufado',   description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/64e610f006626e00279acf75/fd25889b-8cf1-44df-9626-4d13eefca835-1692800682044blob.webp' },
      { name: 'ChocoBueno',      description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1763819821404blob.webp' },
      { name: 'Paçoca Amendoim', description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/64e610f006626e00279acf75/09c272f7-9e97-459a-a277-74862aae541d-1692799898088blob.webp' },
      { name: 'Choco Menta',     description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1709854877867blob.webp' },
      { name: 'Torta de Limão',  description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1709854854313blob.webp' },
      { name: 'Pistache',        description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1739403154368blob.webp' },
      { name: 'Napolitano',      description: 'Pote artesanal de 2 litros', price: 'R$ 27', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/64e610f006626e00279acf75/69c3eab6-ed3a-4327-a31b-4158d62aa76c-1692801852054blob.webp' },
    ],
  },
  {
    id: 'doces',
    label: 'Doces',
    emoji: '🍫',
    items: [
      { name: 'Kit Kat Chocolate Preto',   description: 'Peso liq. 41,5g',            price: 'R$ 6',  image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1721225419416blob.webp' },
      { name: 'Kit Kat Chocolate Branco',  description: 'Peso liq. 41,5g',            price: 'R$ 6',  image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1721225486273blob.webp' },
      { name: 'Suflair',                   description: 'Peso liq. 50g',              price: 'R$ 7',  image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1721225844314blob.webp' },
      { name: 'Kinder Bueno',              description: '39g – Cremoso e irresistível', price: 'R$ 10', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1721827861598blob.webp' },
      { name: 'Ferrero Rocher',            description: 'O clássico ouro do chocolate', price: 'R$ 11' },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    emoji: '🥤',
    items: [
      { name: 'Água',                          description: 'Gelada e refrescante',    price: 'R$ 3',  image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/63ffbc82cb78e3001cdd3bb61677789227656blob.webp' },
      { name: 'Água com Gás',                  description: 'Gelada e refrescante',    price: 'R$ 3',  image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1709853710440blob.webp' },
      { name: 'Refrigerante 200ml',            description: 'Lata gelada',             price: null,    image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/63ffbc7dcb78e3001cdd33c7/63ffbc82cb78e3001cdd3af4blob.webp' },
      { name: 'Energético Monster',            description: 'Monster Original',        price: 'R$ 12' },
      { name: 'Energético Monster Mango Loko', description: 'Sabor manga',             price: 'R$ 12', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1772217295899blob.webp' },
      { name: 'Red Bull',                      description: 'Energético clássico',     price: 'R$ 12' },
      { name: 'Chopp de Vinho Draft',          description: 'Refrescante e especial',  price: 'R$ 13', image: 'https://anotaai.s3.us-west-2.amazonaws.com/produtos/63ffbc82cb78e3001cdd3ba51677789308757blob.webp' },
      { name: 'Schweppes',                     description: 'Citrus original de limão', price: 'R$ 6', image: 'https://client-assets.anota.ai/produtos/63ed187ad3accd0018c370d5/-1744658751331blob.webp' },
    ],
  },
]

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card overflow-hidden group hover:border-brand-gold/35 hover:shadow-[0_0_36px_#C07C3B25] transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 bg-brand-paper-soft overflow-hidden">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-20">🍔</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {item.price && (
          <span className="absolute bottom-3 right-3 bg-brand-gold text-brand-dark text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
            {item.price}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-brand-dark font-semibold text-sm leading-tight">{item.name}</h3>
        <p className="text-brand-dark/50 text-xs leading-relaxed flex-1">{item.description}</p>
        <a
          href="https://pedido.anota.ai/loja/chokoburguer"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-brand-gold text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 group/link"
        >
          Adicionar ao pedido
          <ChevronRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('pequena')
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const current = categories.find((c) => c.id === active)!

  return (
    <section ref={ref} id="cardapio" className="relative py-24 bg-brand-paper overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-3">Nosso Cardápio</p>
          <h2 className="section-title mb-4">
            O que vai <span className="gold-gradient">pedir hoje?</span>
          </h2>
          <p className="text-brand-dark/50 max-w-md mx-auto text-sm leading-relaxed">
            De marmitas caprichadas a sorvetes artesanais e doces importados.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex overflow-x-auto gap-2 pb-2 mb-10 scrollbar-none justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-brand-gold text-brand-dark shadow-[0_0_20px_#E8A63040]'
                  : 'glass-card text-brand-dark/60 hover:text-brand-gold hover:border-brand-gold/30'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid with AnimatePresence for tab switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {current.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://pedido.anota.ai/loja/chokoburguer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ShoppingBag size={16} />
            Ver cardápio completo e pedir
          </a>
        </div>
      </div>
    </section>
  )
}
