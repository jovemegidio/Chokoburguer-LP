<div align="center">

# 🍫 Chokoburguer — Landing Page

**Site delivery de alta performance para a primeira hambúrgueria doce do Brasil.**

[![Deploy](https://github.com/jovemegidio/Chokoburguer-LP/actions/workflows/deploy.yml/badge.svg)](https://github.com/jovemegidio/Chokoburguer-LP/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)](https://www.framer.com/motion/)

**[🌐 Ver site ao vivo](https://jovemegidio.github.io/Chokoburguer-LP)**

</div>

---

## Visão geral

Landing page de delivery completa, desenvolvida do zero com foco em **performance**, **UX premium** e **conversão**. O projeto simula um produto real para uma hambúrgueria com conceito único — entregando uma experiência visual de alto nível alinhada à identidade da marca.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS 3 |
| Animações | Framer Motion 11 |
| Ícones | Lucide React |
| Package manager | pnpm |
| Deploy | GitHub Pages via GitHub Actions |

---

## Funcionalidades

- **Hero animado** — parallax por mouse com `useMotionValue` + `useSpring`, emojis flutuantes, stagger sequence nas entradas
- **Navbar inteligente** — indicador de seção ativa via `IntersectionObserver`, animado com `layoutId` do Framer Motion, menu mobile com `AnimatePresence`
- **Seção Destaques** — carrossel horizontal com `scroll-snap`, setas de navegação e animações escalonadas ao entrar na viewport
- **Cardápio completo** — 5 categorias com `AnimatePresence` na troca de tabs e cards em stagger
- **Sobre** — animações de scroll com `useInView` e `fadeUp` customizado
- **Depoimentos** — cards de avaliação com estrelas e entrada escalonada
- **Contato** — CTAs para anota.ai, WhatsApp e Instagram
- **WhatsApp FAB** — botão flutuante com pulse ring, tooltip animado e entrada spring
- **Design responsivo** — mobile-first, otimizado para todos os tamanhos de tela
- **SEO** — metadata, OpenGraph e descrição configurados no App Router

---

## Destaques técnicos

```
✓ Zero erros de TypeScript (strict mode)
✓ Animações com spring physics — não apenas CSS transitions
✓ Scroll-triggered animations com useInView sem biblioteca extra
✓ AnimatePresence para transições de estado suaves
✓ Lazy loading em todas as imagens do cardápio
✓ Deploy automatizado via GitHub Actions (CI/CD)
✓ Export estático — sem servidor, zero custo de infraestrutura
```

---

## Estrutura do projeto

```
chokoburguer/
├── app/
│   ├── layout.tsx        # Metadata, fontes Google, body global
│   ├── page.tsx          # Composição das seções
│   └── globals.css       # Design tokens, utilitários, animações
├── components/
│   ├── Navbar.tsx        # Navegação com active-section tracking
│   ├── Hero.tsx          # Hero com parallax e stagger
│   ├── Destaques.tsx     # Carrossel de produtos em destaque
│   ├── Menu.tsx          # Cardápio com tabs animadas
│   ├── About.tsx         # Seção sobre com scroll reveal
│   ├── Reviews.tsx       # Depoimentos de clientes
│   ├── Contact.tsx       # Contato e CTAs
│   ├── Footer.tsx        # Rodapé
│   └── WhatsAppFab.tsx   # Botão flutuante WhatsApp
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD para GitHub Pages
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/jovemegidio/Chokoburguer-LP.git
cd Chokoburguer-LP

# Instalar dependências
pnpm install

# Iniciar em desenvolvimento
pnpm dev
# Abrir http://localhost:3000
```

---

## Deploy

O projeto usa **export estático** (`output: 'export'`) com **GitHub Actions**. A cada push na branch `main`, o workflow:

1. Instala dependências com pnpm
2. Executa `pnpm build` gerando a pasta `/out`
3. Publica automaticamente no GitHub Pages

Para ativar: `Settings → Pages → Source: GitHub Actions`.

---

## Sobre o projeto

Projeto de portfólio demonstrando domínio em:

- Arquitetura de componentes React com TypeScript
- Animações avançadas com Framer Motion (spring physics, layout animations, scroll-triggered)
- Design system com Tailwind CSS (tokens de cor, utilitários customizados)
- CI/CD com GitHub Actions
- Boas práticas de acessibilidade e SEO

---

<div align="center">

Feito com ☕ e muito chocolate · [@jovemegidio](https://github.com/jovemegidio)

</div>
