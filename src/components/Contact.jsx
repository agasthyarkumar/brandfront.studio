import { MapPin, Clock, Phone, Instagram, Facebook, Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { Camera } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-28 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start
                      ${inView ? 'inview-visible' : 'inview-hidden'}`}
        >
          {/* ── Info ── */}
          <div>
            <span className="section-tag">Find Us</span>
            <div className="gold-line mb-6" />
            <h2 className="section-title mb-10">
              Visit<br />
              <span className="text-gradient-gold">The Dragon</span>
            </h2>

            <div className="space-y-8">
              <ContactRow icon={MapPin}>
                <strong className="text-cream block text-xs tracking-[0.15em] uppercase mb-1.5">Address</strong>
                <p className="text-warm text-sm leading-relaxed">
                  No. 646, Rajat Tower 2, 11th Main,<br />
                  47th Cross Rd, TMC Layout, 5th Block,<br />
                  Jayanagar, Bengaluru — 560041
                </p>
              </ContactRow>

              <ContactRow icon={Clock}>
                <strong className="text-cream block text-xs tracking-[0.15em] uppercase mb-1.5">Hours</strong>
                <p className="text-warm text-sm leading-relaxed">
                  Lunch: 12:00 PM – 3:00 PM<br />
                  Dinner: 7:00 PM – 11:00 PM<br />
                  <span className="text-gold/80">Open all 7 days</span>
                </p>
              </ContactRow>

              <ContactRow icon={Phone}>
                <strong className="text-cream block text-xs tracking-[0.15em] uppercase mb-1.5">Reservations</strong>
                <a
                  href="tel:+919876543210"
                  className="text-warm text-sm hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </ContactRow>
            </div>

            {/* Social */}
            <div className="mt-10 flex items-center gap-3">
              <SocialLink href="#" label="Instagram"><Instagram size={18} /></SocialLink>
              <SocialLink href="#" label="Facebook"><Facebook size={18} /></SocialLink>
              <SocialLink href="#" label="Zomato">
                <Star size={18} />
              </SocialLink>
              <a
                href="#"
                className="ml-2 text-[0.7rem] text-warm-muted hover:text-gold
                           tracking-[0.15em] uppercase transition-colors"
              >
                Rate us on Zomato
              </a>
            </div>
          </div>

          {/* ── Map ── */}
          <div>
            <div
              className="relative rounded-sm overflow-hidden border border-gold/15
                         bg-gradient-to-br from-ink-400 to-ink-300
                         shadow-card"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Placeholder — replace with <iframe src="..." /> for real map */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="font-chinese text-[8rem] text-gold/5 select-none leading-none">龍</span>
                <Camera size={28} className="text-gold/30" />
                <div className="text-center">
                  <p className="text-gold/50 text-[0.68rem] tracking-[0.2em] uppercase font-semibold">
                    Embed Google Maps Here
                  </p>
                  <p className="text-warm-muted text-[0.6rem] mt-1">
                    Replace this div with a Google Maps iframe
                  </p>
                </div>
              </div>
              {/* Overlay CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink/90 to-transparent">
                <a
                  href="https://maps.google.com/?q=Rajat+Tower+2+11th+Main+47th+Cross+Rd+TMC+Layout+5th+Block+Jayanagar+Bengaluru+560041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-2.5 px-5 w-full justify-center"
                >
                  <MapPin size={14} />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Address badge */}
            <div className="mt-4 flex items-center gap-3 px-4 py-3 card-surface">
              <MapPin size={16} className="text-gold flex-shrink-0" />
              <p className="text-warm-muted text-xs leading-relaxed">
                Rajat Tower 2, 11th Main, 47th Cross Rd, TMC Layout,
                5th Block, Jayanagar, Bengaluru 560041
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, children }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/20
                      flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={16} className="text-gold" />
      </div>
      <div>{children}</div>
    </div>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-sm border border-gold/20 bg-gold/5
                 flex items-center justify-center text-warm
                 hover:border-gold/60 hover:text-gold hover:bg-gold/10
                 transition-all duration-200"
    >
      {children}
    </a>
  )
}
