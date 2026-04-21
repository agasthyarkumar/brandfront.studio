const NAV = [
  { href: '#about',   label: 'Our Story' },
  { href: '#menu',    label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reserve', label: 'Reservations' },
  { href: '#contact', label: 'Find Us' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/10">
      {/* Top band */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#" className="flex items-center gap-3 mb-4 group w-fit">
            <img
              src="/logo.jpeg"
              alt="The Dragon logo"
              className="w-12 h-12 rounded-full object-cover object-center
                         ring-2 ring-gold/30 group-hover:ring-gold/60
                         shadow-[0_0_14px_rgba(212,175,55,0.3)]
                         transition-all duration-300"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold tracking-[0.18em] text-cream uppercase">The Dragon</span>
              <span className="text-[0.58rem] tracking-[0.18em] text-gold/60 uppercase">Chinese Restaurant</span>
            </div>
          </a>
          <p className="text-warm-muted text-xs leading-loose">
            Authentic Chinese cuisine in the<br />heart of Jayanagar, Bengaluru.
          </p>
          <div className="mt-5 flex gap-2">
            {['IG', 'FB', 'ZM'].map(s => (
              <a key={s} href="#"
                 className="w-8 h-8 rounded-sm border border-gold/15 bg-ink-200
                            flex items-center justify-center
                            text-[0.6rem] font-bold text-warm-muted
                            hover:border-gold/50 hover:text-gold transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-display text-[0.65rem] font-semibold tracking-[0.25em]
                         uppercase text-gold mb-5">
            Explore
          </h4>
          <nav className="flex flex-col gap-3">
            {NAV.map(({ href, label }) => (
              <a key={href} href={href}
                 className="text-warm-muted text-xs hover:text-gold transition-colors duration-200 w-fit">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Visit */}
        <div>
          <h4 className="font-display text-[0.65rem] font-semibold tracking-[0.25em]
                         uppercase text-gold mb-5">
            Visit
          </h4>
          <address className="not-italic text-warm-muted text-xs leading-loose">
            No. 646, Rajat Tower 2,<br />
            11th Main, 47th Cross Rd,<br />
            TMC Layout, 5th Block,<br />
            Jayanagar, Bengaluru — 560041
          </address>
          <a href="tel:+919876543210"
             className="mt-4 block text-warm-muted text-xs hover:text-gold transition-colors">
            +91 98765 43210
          </a>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-[0.65rem] font-semibold tracking-[0.25em]
                         uppercase text-gold mb-5">
            Hours
          </h4>
          <div className="text-warm-muted text-xs leading-loose space-y-2">
            <div>
              <p className="text-cream text-[0.7rem] font-medium">Lunch</p>
              <p>12:00 PM – 3:00 PM</p>
            </div>
            <div>
              <p className="text-cream text-[0.7rem] font-medium">Dinner</p>
              <p>7:00 PM – 11:00 PM</p>
            </div>
            <p className="text-gold/70">Open 7 days a week</p>
          </div>
          <a href="#reserve"
             className="mt-6 btn-primary text-xs py-2.5 px-5 inline-flex">
            Book a Table
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-warm-dim text-[0.68rem] tracking-wide text-warm-muted">
            © 2026 The Dragon Chinese Restaurant. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#"
                 className="text-warm-muted text-[0.68rem] hover:text-gold transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
