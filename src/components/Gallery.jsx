import { useState } from 'react'
import { Camera, X, ZoomIn } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const SLOTS = [
  { label: 'Main Dining Area',   span: 'lg:col-span-2 lg:row-span-2', aspect: '16/9' },
  { label: 'Dim Sum Close-up',   span: '',                             aspect: '1/1' },
  { label: 'Dragon Bar',         span: '',                             aspect: '1/1' },
  { label: 'Live Wok Station',   span: 'lg:col-span-2',               aspect: '16/7' },
  { label: 'Signature Dish',     span: '',                             aspect: '1/1' },
  { label: 'Private Dining Room',span: '',                             aspect: '1/1' },
]

function ImageSlot({ label, aspect, index, onClick, inView, delay }) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-gold/10
                  bg-gradient-to-br from-ink-500 via-ink-400 to-ink-300
                  cursor-zoom-in group
                  ${inView ? 'inview-visible' : 'inview-hidden'}`}
      style={{ aspectRatio: aspect, transitionDelay: inView ? `${delay}ms` : '0ms' }}
      onClick={() => onClick(index)}
    >
      {/* Background number hint */}
      <span className="absolute font-chinese text-[8rem] text-gold/[0.04] select-none pointer-events-none leading-none
                       top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        龍
      </span>
      {/* Label overlay (default) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2
                      opacity-40 group-hover:opacity-0 transition-all duration-300">
        <Camera size={24} className="text-gold" />
        <p className="text-gold text-[0.6rem] tracking-[0.2em] uppercase font-semibold text-center px-4">
          {label}
        </p>
        <p className="text-gold/50 text-[0.55rem] tracking-wider">Tap to add image</p>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-all duration-400">
        <div className="absolute inset-0 flex flex-col items-end justify-start p-4">
          <ZoomIn size={18} className="text-gold/80" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-display text-sm tracking-widest text-cream uppercase">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [ref, inView] = useInView()

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
          <p className="text-warm-muted text-sm mt-4 max-w-md mx-auto">
            Six image slots — drop in your photography and the grid comes to life.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-3"
        >
          {SLOTS.map((slot, i) => (
            <div key={i} className={slot.span}>
              <ImageSlot
                label={slot.label}
                aspect={slot.aspect}
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
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6
                     animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-warm hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-2xl w-full bg-ink-300 border border-gold/20 rounded-sm
                       overflow-hidden shadow-card-hover animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative" style={{ aspectRatio: '4/3' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink-300">
                <Camera size={40} className="text-gold/30" />
                <p className="text-gold/50 text-sm tracking-widest uppercase font-semibold">
                  {SLOTS[lightbox]?.label}
                </p>
                <p className="text-warm-muted text-xs">Replace with your image</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
