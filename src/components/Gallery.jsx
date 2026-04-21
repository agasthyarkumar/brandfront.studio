import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { assetUrl } from '../utils/assetUrl'

const SLOTS = [
  { label: 'Main Dining Area',   src: assetUrl('/maindining.png'),   span: 'lg:col-span-2 lg:row-span-2', aspect: '16/9' },
  { label: 'Dim Sum & Dishes',   src: assetUrl('/dish1.png'),         span: '',                             aspect: '1/1'  },
  { label: 'Dragon Bar',         src: assetUrl('/bar.png'),           span: '',                             aspect: '1/1'  },
  { label: 'Live Wok Station',   src: assetUrl('/workstation.png'),   span: 'lg:col-span-2',               aspect: '16/7' },
  { label: 'Signature Dish',     src: assetUrl('/dish2.png'),         span: '',                             aspect: '1/1'  },
  { label: 'Private Dining',     src: assetUrl('/Private.png'),       span: '',                             aspect: '1/1'  },
]

function GalleryItem({ label, src, aspect, index, onClick, inView, delay }) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-gold/10
                  bg-ink-400 cursor-zoom-in group
                  ${inView ? 'inview-visible' : 'inview-hidden'}`}
      style={{ aspectRatio: aspect, transitionDelay: inView ? `${delay}ms` : '0ms' }}
      onClick={() => onClick(index)}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute top-3 right-3">
          <ZoomIn size={18} className="text-gold/90" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-display text-xs tracking-[0.18em] text-cream uppercase">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [ref, inView] = useInView()

  const active = lightbox !== null ? SLOTS[lightbox] : null

  return (
    <section id="gallery" className="py-28 bg-ink-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Ambience & Food</span>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <h2 className="section-title">The Photos</h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SLOTS.map((slot, i) => (
            <div key={i} className={slot.span}>
              <GalleryItem
                {...slot}
                index={i}
                onClick={setLightbox}
                inView={inView}
                delay={i * 80}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 p-2 text-warm hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-4xl w-full overflow-hidden rounded-sm border border-gold/20 shadow-card-hover animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.label}
              className="w-full object-cover max-h-[85vh]"
            />
            <div className="px-5 py-3 bg-ink-300 border-t border-gold/10">
              <p className="font-display text-xs tracking-[0.2em] text-gold uppercase">{active.label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
