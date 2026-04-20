import { ChefHat, Flame, Wine, Users } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const CARDS = [
  {
    icon: ChefHat,
    title: 'Authentic Recipes',
    desc: 'Dishes rooted in Sichuan, Cantonese and Shanghai traditions',
    delay: '0ms',
  },
  {
    icon: Flame,
    title: 'Live Wok Station',
    desc: 'Watch your food tossed over open flame by master wok chefs',
    delay: '100ms',
  },
  {
    icon: Wine,
    title: 'Dragon Bar',
    desc: 'Asian-inspired cocktails, curated spirits & sake selection',
    delay: '200ms',
  },
  {
    icon: Users,
    title: 'Private Dining',
    desc: 'Exclusive rooms for birthdays, anniversaries & corporate events',
    delay: '300ms',
  },
]

export default function Highlights() {
  const [ref, inView] = useInView()

  return (
    <section className="py-20 bg-ink-100 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 rounded-sm overflow-hidden">
          {CARDS.map(({ icon: Icon, title, desc, delay }) => (
            <div
              key={title}
              className={`group flex flex-col items-center text-center gap-4 p-10
                          bg-ink-100 hover:bg-ink-200 transition-all duration-300
                          ${inView ? 'inview-visible' : 'inview-hidden'}`}
              style={{ transitionDelay: inView ? delay : '0ms' }}
            >
              <div className="w-14 h-14 rounded-sm bg-crimson/10 border border-crimson/20
                              flex items-center justify-center
                              group-hover:bg-crimson/20 group-hover:border-crimson/40
                              group-hover:shadow-crimson transition-all duration-300">
                <Icon size={24} className="text-crimson group-hover:text-gold transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold tracking-[0.08em] text-gold mb-2 uppercase">
                  {title}
                </h3>
                <p className="text-warm-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
