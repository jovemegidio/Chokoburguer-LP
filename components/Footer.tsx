import { Instagram, ShoppingBag, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 sm:px-6 py-6 pb-8">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-6 py-4 rounded-[28px]"
        style={{
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(12,18,26,0.82)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Brand */}
        <p className="font-display font-black text-lg tracking-tight" style={{ color: '#f9f4ed' }}>
          <span style={{ color: '#f1c643' }}>Choko</span>
          <span style={{ color: '#ff5a36' }}>burguer</span>
        </p>

        {/* Links */}
        <nav className="flex items-center gap-5 text-sm">
          {[
            { label: 'Início',   href: '#hero' },
            { label: 'Cardápio', href: '#cardapio' },
            { label: 'Sobre',    href: '#sobre' },
            { label: 'Contato',  href: '#contato' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-black transition-colors hover:text-brand-yellow"
              style={{ color: 'rgba(249,244,237,0.54)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Social / CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/chokoburguer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-px"
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.06)', color: 'rgba(249,244,237,0.68)' }}
          >
            <Instagram size={15} />
          </a>
          <a
            href="https://pedido.anota.ai/loja/chokoburguer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            <ShoppingBag size={13} />
            Pedir agora
          </a>
        </div>
      </div>

      {/* Bottom */}
      <p className="text-center text-xs mt-4" style={{ color: 'rgba(249,244,237,0.28)' }}>
        © {year} Chokoburguer · Feito com{' '}
        <Heart size={10} className="inline" style={{ color: '#ff5a36', fill: '#ff5a36' }} />{' '}
        e muito chocolate
      </p>
    </footer>
  )
}

