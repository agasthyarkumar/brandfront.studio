import { useState, useEffect } from 'react'
import { Loader2, AlertCircle, UtensilsCrossed } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { assetUrl } from '../utils/assetUrl'

const CATEGORY_ICONS = {
  'Noodles':            '🍜',
  'Rice':               '🍚',
  'Soups':              '🥣',
  'Veg Appetizers':     '🥦',
  'Non-Veg Appetizers': '🍗',
  'Desserts':           '🍮',
}

/* ── Variant price table (Noodles / Rice / Soups) ───────────────── */
function VariantTable({ variants, items }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-gold/15 bg-ink-300/60">
            <th className="text-left py-3 px-5 text-warm-muted font-semibold tracking-wider text-[0.68rem] uppercase w-[45%]">
              Dish
            </th>
            {variants.map(v => (
              <th
                key={v}
                className="py-3 px-3 text-[0.68rem] font-bold tracking-[0.12em] uppercase
                           text-gold text-center capitalize min-w-[56px]"
              >
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.name}
              className="border-b border-gold/8 hover:bg-gold/[0.04] transition-colors duration-150
                         animate-menu-reveal"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              {/* Name + description */}
              <td className="py-3.5 px-5 align-top">
                <p className="text-cream font-medium leading-snug">{item.name}</p>
                {item.description && (
                  <p className="text-warm-muted text-[0.72rem] mt-0.5 leading-snug">{item.description}</p>
                )}
              </td>

              {/* Variant prices — or single price spanning all columns */}
              {item.prices ? (
                variants.map(v => (
                  <td key={v} className="py-3.5 px-3 text-center">
                    <span className="font-display text-[0.82rem] text-warm">
                      {item.prices[v] != null ? `₹${item.prices[v]}` : '—'}
                    </span>
                  </td>
                ))
              ) : (
                <td
                  colSpan={variants.length}
                  className="py-3.5 px-3 text-center"
                >
                  <span className="font-display text-sm font-semibold text-gold">₹{item.price}</span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Fixed price list (Appetizers / Desserts) ────────────────────── */
function FixedList({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.name}
          className="group border-b border-gold/8 last:border-b-0
                     hover:bg-gold/[0.04] transition-colors duration-150
                     animate-menu-reveal"
          style={{ animationDelay: `${i * 30}ms` }}
        >
          {/* Standard single-price row */}
          {!item.prices ? (
            <div className="flex items-center gap-3 py-4 px-5">
              <p className="flex-1 text-cream text-sm font-medium leading-snug
                            group-hover:text-gold transition-colors duration-200">
                {item.name}
              </p>
              {item.description && (
                <p className="text-warm-muted text-xs hidden sm:block max-w-[200px] text-right leading-snug">
                  {item.description}
                </p>
              )}
              <span className="flex-shrink-0 w-px self-stretch border-l border-dotted border-gold/20 mx-2" />
              <span className="font-display text-gold text-sm font-semibold whitespace-nowrap">
                ₹{item.price}
              </span>
            </div>
          ) : (
            /* Variant-priced item inside a fixed category (e.g. Fuyong) */
            <div className="py-4 px-5">
              <p className="text-cream text-sm font-medium mb-2
                            group-hover:text-gold transition-colors duration-200">
                {item.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(item.prices).map(([variant, price]) => (
                  <span
                    key={variant}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1
                               bg-gold/8 border border-gold/20 rounded-sm
                               text-[0.68rem] capitalize"
                  >
                    <span className="text-warm-muted font-medium">{variant}</span>
                    <span className="text-gold font-display font-semibold">₹{price}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Main Menu component ─────────────────────────────────────────── */
export default function Menu() {
  const [data,      setData]      = useState(null)
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const [animKey,   setAnimKey]   = useState(0)
  const [headerRef, headerInView] = useInView()

  useEffect(() => {
    fetch(assetUrl('/menu.json'))
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(d  => { setData(d); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  const categories = data?.categories ?? []
  const active     = categories[activeIdx]

  const switchTab = (i) => {
    if (i === activeIdx) return
    setActiveIdx(i)
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
            <span className="text-gold/70 text-xs">All prices inclusive of taxes</span>
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
            <p className="text-sm">Could not load menu — please refresh.</p>
          </div>
        )}

        {/* Menu UI */}
        {data && (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Sidebar tabs ── */}
            <div className="lg:w-56 flex-shrink-0">
              <div className="lg:sticky lg:top-28 flex flex-row lg:flex-col gap-2
                              overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {categories.map((cat, i) => (
                  <button
                    key={cat.name}
                    onClick={() => switchTab(i)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-sm text-left
                                text-sm font-medium tracking-wide whitespace-nowrap
                                transition-all duration-250 border
                                ${i === activeIdx
                                  ? 'bg-crimson text-cream border-crimson shadow-crimson'
                                  : 'bg-ink-200 text-warm border-gold/10 hover:border-gold/30 hover:text-gold'
                                }`}
                  >
                    <span className="text-base leading-none">{CATEGORY_ICONS[cat.name] ?? '🍽️'}</span>
                    <span className="font-semibold">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Content panel ── */}
            <div className="flex-1 card-surface overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/10 bg-ink-300/50">
                <span className="text-2xl leading-none">{CATEGORY_ICONS[active?.name] ?? '🍽️'}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-gold tracking-wide">
                    {active?.name}
                  </h3>
                  <p className="text-warm-muted text-xs">
                    {active?.items.length} items
                    {active?.type === 'variant' && (
                      <span className="ml-2 text-gold/60">
                        · prices by: {active.variants.join(', ')}
                      </span>
                    )}
                  </p>
                </div>
                <UtensilsCrossed size={15} className="ml-auto text-gold/25" />
              </div>

              {/* Re-mount on tab switch to replay entrance animations */}
              <div key={animKey}>
                {active?.type === 'variant' ? (
                  <VariantTable variants={active.variants} items={active.items} />
                ) : (
                  <FixedList items={active.items} />
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  )
}
