import { Instagram, ShoppingBag, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-paper-soft border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold mb-1">
              <span className="shimmer-gold">Choko</span>
              <span className="text-brand-dark">burguer</span>
            </p>
            <p className="text-brand-dark/40 text-xs italic">
              A primeira hambúrgueria doce do Brasil
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-brand-dark/50">
            {[
              { label: 'Início',   href: '#hero' },
              { label: 'Cardápio', href: '#cardapio' },
              { label: 'Sobre',    href: '#sobre' },
              { label: 'Contato',  href: '#contato' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-gold transition-colors">
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
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-brand-dark/60 hover:text-brand-gold hover:border-brand-gold/30 transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://pedido.anota.ai/loja/chokoburguer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              <ShoppingBag size={13} />
              Pedir agora
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-brand-dark/10 text-center text-xs text-brand-dark/40">
          © {year} Chokoburguer · Feito com{' '}
          <Heart size={11} className="inline text-brand-red fill-brand-red" />{' '}
          e muito chocolate
        </div>
      </div>
    </footer>
  )
}
