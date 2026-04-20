import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about',   label: 'Our Story' },
  { href: '#menu',    label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Find Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'py-3 bg-ink/90 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="The Dragon Home">
            <span className="font-chinese text-3xl text-gold leading-none
                             group-hover:animate-glow-pulse transition-all duration-300
                             drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]">
              龍
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-[0.18em] text-cream uppercase">
                The Dragon
              </span>
              <span className="text-[0.6rem] tracking-[0.2em] text-gold/70 uppercase font-body">
                Chinese Restaurant
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative text-[0.78rem] font-semibold tracking-[0.12em] uppercase
                           text-warm hover:text-gold transition-colors duration-300
                           after:content-[''] after:absolute after:-bottom-1 after:left-0
                           after:h-px after:w-full after:bg-gold after:scale-x-0 after:origin-left
                           after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {label}
              </a>
            ))}
            <a href="#reserve" className="btn-primary text-xs py-2.5 px-5">
              Reserve
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-cream hover:text-gold transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10
                    bg-ink/97 backdrop-blur-2xl transition-all duration-500
                    ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Decorative */}
        <span className="absolute font-chinese text-[22rem] text-gold/4 select-none pointer-events-none leading-none">龍</span>

        <nav className="flex flex-col items-center gap-8" aria-label="Mobile primary">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="font-display text-3xl font-semibold tracking-widest uppercase
                         text-warm hover:text-gold transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <a href="#reserve" onClick={close} className="btn-primary mt-4 text-sm px-10 py-4">
            Reserve a Table
          </a>
        </nav>
      </div>
    </>
  )
}
