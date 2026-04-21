import { ChevronDown } from 'lucide-react'

const RINGS = [280, 440, 600, 760]
const PARTICLES = [
  { left: '8%',  dur: '9s',  delay: '0s' },
  { left: '18%', dur: '12s', delay: '2s' },
  { left: '30%', dur: '8s',  delay: '1s' },
  { left: '42%', dur: '11s', delay: '3.5s' },
  { left: '55%', dur: '7s',  delay: '0.5s' },
  { left: '68%', dur: '10s', delay: '2.8s' },
  { left: '78%', dur: '9s',  delay: '1.2s' },
  { left: '88%', dur: '13s', delay: '4s' },
  { left: '12%', dur: '11s', delay: '5s' },
  { left: '24%', dur: '8s',  delay: '6s' },
  { left: '62%', dur: '10s', delay: '0.8s' },
  { left: '92%', dur: '9s',  delay: '3s' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-glow noise-overlay"
    >
      {/* Animated concentric rings */}
      {RINGS.map((size, i) => (
        <div
          key={size}
          className="absolute top-1/2 left-1/2 rounded-full border border-gold/[0.08]"
          style={{
            width: size,
            height: size,
            animation: `ringPulse ${4 + i * 0.8}s ease-in-out ${i * 0.5}s infinite`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Radial crimson spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-crimson-deep/20 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute bottom-0 w-1 h-1 rounded-full bg-gold/60"
          style={{
            left: p.left,
            animation: `floatUp ${p.dur} ${p.delay} linear infinite`,
          }}
        />
      ))}

      {/* Thin horizontal divider lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-gold text-[0.68rem] tracking-[0.35em] uppercase font-semibold mb-6 animate-fade-up">
          Authentic Chinese Cuisine &nbsp;·&nbsp; Jayanagar, Bengaluru
        </p>

        {/* Logo */}
        <div className="flex justify-center mb-4 animate-fade-up-d1">
          <img
            src="/logo.jpeg"
            alt="The Dragon"
            className="rounded-full object-cover object-center animate-glow-pulse
                       ring-4 ring-gold/50
                       shadow-[0_0_60px_rgba(212,175,55,0.4),0_0_120px_rgba(196,30,58,0.2)]"
            style={{ width: 'clamp(140px, 22vw, 220px)', height: 'clamp(140px, 22vw, 220px)' }}
          />
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-black text-cream leading-[1.04] tracking-tight mb-6 animate-fade-up-d2"
          style={{ fontSize: 'clamp(2.6rem, 9vw, 6.5rem)' }}
        >
          Where Fire&nbsp;
          <span className="text-gradient-fire">Meets Flavour</span>
        </h1>

        {/* Subtitle */}
        <p className="text-warm text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up-d3">
          A culinary journey through the heart of China — bold woks, delicate dim sum,
          and cocktails that breathe fire.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-d4">
          <a href="#reserve" className="btn-primary text-sm">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-ghost text-sm">
            Explore the Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#highlights"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-gold/50 hover:text-gold transition-colors duration-300 animate-fade-in"
        aria-label="Scroll down"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <ChevronDown size={18} className="animate-bounce-y" />
      </a>
    </section>
  )
}
