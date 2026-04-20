const ITEMS = [
  'The Dragon', '龍', 'Authentic Chinese', '·',
  'Dim Sum', '·', 'Live Wok', '·', 'Dragon Bar', '·',
  'Jayanagar', '·', 'Private Dining', '·',
]

export default function Ticker() {
  return (
    <div
      id="highlights"
      className="relative overflow-hidden bg-crimson py-3 border-y border-crimson-dark/60"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="mx-6 font-display text-[0.72rem] font-semibold tracking-[0.25em] uppercase
                       text-cream/90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
