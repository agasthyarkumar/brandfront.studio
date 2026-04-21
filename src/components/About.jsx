import { useInView } from '../hooks/useInView'
import { assetUrl } from '../utils/assetUrl'

const STATS = [
  { value: '50+',   label: 'Dishes on menu' },
  { value: '2',     label: 'Floors of dining' },
  { value: '100%',  label: 'MSG-free kitchen' },
]

export default function About() {
  const [textRef, textInView] = useInView()
  const [imgRef,  imgInView]  = useInView()

  return (
    <section id="about" className="py-28 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Images ── */}
          <div
            ref={imgRef}
            className={`relative ${imgInView ? 'inview-visible' : 'inview-hidden'}`}
          >
            {/* Interior photo */}
            <div className="w-full overflow-hidden rounded-sm border border-gold/15 shadow-card"
                 style={{ aspectRatio: '4/5' }}>
              <img
                src={assetUrl('/Shop.png')}
                alt="The Dragon restaurant interior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating food photo */}
            <div className="absolute -bottom-8 -right-6 w-2/5 overflow-hidden rounded-sm
                            border-[3px] border-ink shadow-card">
              <img
                src={assetUrl('/dragon.png')}
                alt="Signature dish at The Dragon"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            {/* Gold accent frame corner */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-gold/50 rounded-tl-sm" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-gold/50 rounded-br-sm hidden lg:block" />
          </div>

          {/* ── Text ── */}
          <div
            ref={textRef}
            className={`${textInView ? 'inview-visible' : 'inview-hidden'}`}
          >
            <span className="section-tag">Our Story</span>
            <div className="gold-line mb-6" />
            <h2 className="section-title mb-8">
              The Dragon<br />
              <span className="text-gradient-gold">Awakens</span>
            </h2>
            <div className="space-y-5 text-warm text-[0.95rem] leading-[1.85]">
              <p>
                Nestled in the vibrant heart of <span className="text-cream font-medium">Jayanagar</span>,
                The Dragon was born from a singular obsession: to bring the untamed, layered
                flavours of Chinese cuisine to Bengaluru — without compromise.
              </p>
              <p>
                Our chefs trained across <span className="text-cream font-medium">Sichuan, Canton and Shanghai</span>,
                mastering the art of the wok, the patience of slow-simmered broths, and the
                precision of hand-folded dim sum. Every dish is a tribute to a culinary
                heritage thousands of years in the making.
              </p>
              <p>
                Set across two floors in <span className="text-cream font-medium">Rajat Tower, 5th Block</span>,
                the space is designed to feel like stepping into old Shanghai — warm lantern light,
                lacquered wood, and the intoxicating aroma of spices hitting hot oil.
              </p>
            </div>

            {/* Stats */}
            <div
              className="mt-10 pt-8 border-t border-gold/15 grid grid-cols-3 gap-6"
              style={{ transitionDelay: textInView ? '200ms' : '0ms' }}
            >
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl font-bold text-gradient-gold leading-none mb-1">
                    {value}
                  </p>
                  <p className="text-warm-muted text-xs tracking-[0.12em] uppercase font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
