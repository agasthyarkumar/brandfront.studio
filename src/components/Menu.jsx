import { useState, useEffect } from 'react'
import { Loader2, UtensilsCrossed, AlertCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const CATEGORY_ICONS = {
  'Dim Sum & Starters': '🥟',
  'Soups':              '🍜',
  'Wok Tossed Mains':   '🥢',
  'Noodles & Rice':     '🍚',
  'Dim Sum Desserts':   '🧁',
  'Cocktails & Drinks': '🍸',
}

function MenuItem({ name, price, index }) {
  return (
    <div
      className="group flex items-center gap-3 py-4 px-5
                 border-b border-gold/8 last:border-b-0
                 hover:bg-gold/[0.04] transition-colors duration-200
                 animate-menu-reveal"
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <span className="flex-1 text-cream text-sm font-medium leading-snug
                       group-hover:text-gold transition-colors duration-200">
        {name}
      </span>
      <span className="flex-1 border-b border-dotted border-gold/20 mx-3 h-0 self-end mb-1.5" />
      <span className="font-display text-gold text-sm font-semibold tracking-wide whitespace-nowrap">
        ₹{price}
      </span>
    </div>
  )
}

export default function Menu() {
  const [data,       setData]       = useState(null)
  const [loading,    setLoading]    = useState(true)
  const [error,      setError]      = useState(false)
  const [activeTab,  setActiveTab]  = useState(0)
  const [animKey,    setAnimKey]    = useState(0)
  const [headerRef,  headerInView]  = useInView()

  useEffect(() => {
    fetch('/menu.json')
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(d => { setData(d); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  const categories = data ? Object.keys(data) : []
  const items      = data ? Object.entries(data[categories[activeTab]] ?? {}) : []

  const switchTab = (i) => {
    if (i === activeTab) return
    setActiveTab(i)
    setAnimKey(k => k + 1)
  }

  return (
    <section id="menu" className="py-28 bg-ink">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerInView ? 'inview-visible' : 'inview-hidden'}`}
        >
          <span className="section-tag">Food & Drink</span>
          <h2 className="section-title mb-3">The Menu</h2>
          <p className="text-warm-muted text-sm">Bold. Balanced. Unapologetically Chinese.</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-gold text-xs">All prices inclusive of taxes</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-warm-muted">
            <Loader2 size={32} className="animate-spin text-gold" />
            <p className="text-sm tracking-widest uppercase">Loading menu…</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center gap-3 py-20 text-crimson/80">
            <AlertCircle size={32} />
            <p className="text-sm">Could not load menu — please refresh the page.</p>
          </div>
        )}

        {/* Menu UI */}
        {data && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar tabs */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {categories.map((cat, i) => (
                  <button
                    key={cat}
                    onClick={() => switchTab(i)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-sm text-left
                                text-sm font-medium tracking-wide whitespace-nowrap
                                transition-all duration-250 border
                                ${i === activeTab
                                  ? 'bg-crimson text-cream border-crimson shadow-crimson'
                                  : 'bg-ink-200 text-warm border-gold/10 hover:border-gold/30 hover:text-gold'
                                }`}
                  >
                    <span className="text-base leading-none">{CATEGORY_ICONS[cat] ?? '🍽️'}</span>
                    <span className="font-semibold">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Items panel */}
            <div className="flex-1 card-surface overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/10 bg-ink-300/50">
                <span className="text-2xl">{CATEGORY_ICONS[categories[activeTab]] ?? '🍽️'}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-gold tracking-wide">
                    {categories[activeTab]}
                  </h3>
                  <p className="text-warm-muted text-xs">{items.length} items</p>
                </div>
                <UtensilsCrossed size={16} className="ml-auto text-gold/30" />
              </div>

              {/* Items list — key change triggers re-mount → fresh animation */}
              <div key={animKey} className="divide-y-0">
                {items.map(([name, price], i) => (
                  <MenuItem key={name} name={name} price={price} index={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
