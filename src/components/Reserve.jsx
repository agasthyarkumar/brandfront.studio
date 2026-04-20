import { useState } from 'react'
import { Phone, Calendar, Clock, Users, MessageSquare, User, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const TIMES = [
  '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
  '7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM',
]

const EMPTY = { name:'', phone:'', date:'', time:'', guests:'', occasion:'', notes:'' }

export default function Reserve({ showToast }) {
  const [form, setForm]       = useState(EMPTY)
  const [errors, setErrors]   = useState({})
  const [submitting, setSubmit] = useState(false)
  const [ref, inView]         = useInView()

  const today = new Date().toISOString().split('T')[0]

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())   e.name   = 'Name is required'
    if (!form.phone.trim())  e.phone  = 'Phone is required'
    if (!form.date)          e.date   = 'Date is required'
    if (!form.time)          e.time   = 'Please select a time'
    if (!form.guests)        e.guests = 'Select number of guests'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmit(true)
    await new Promise(r => setTimeout(r, 1000))
    showToast(`Table reserved for ${form.name}! We'll confirm shortly. 🎉`, 'success')
    setForm(EMPTY)
    setSubmit(false)
  }

  const inputCls = (key) =>
    `input-field ${errors[key] ? 'border-crimson/60 focus:border-crimson' : ''}`

  return (
    <section id="reserve" className="relative py-28 bg-ink-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(212,175,55,0.025) 60px, rgba(212,175,55,0.025) 61px)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-crimson-glow opacity-30 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${inView ? 'inview-visible' : 'inview-hidden'}`}>

          {/* ── Left: info ── */}
          <div>
            <span className="section-tag">Reservations</span>
            <div className="gold-line mb-6" />
            <h2 className="section-title mb-6">
              Book Your<br />
              <span className="text-gradient-gold">Table</span>
            </h2>
            <p className="text-warm text-[0.95rem] leading-relaxed mb-10 max-w-sm">
              Whether it's an intimate dinner or a grand celebration, we'll make every
              moment unforgettable. Call us or fill the form and we'll confirm within the hour.
            </p>

            <a
              href="tel:+919876543210"
              className="btn-primary inline-flex mb-12 text-sm"
            >
              <Phone size={16} />
              Call +91 98765 43210
            </a>

            {/* Quick info */}
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream font-medium">Lunch</p>
                  <p className="text-warm-muted">12:00 PM – 3:00 PM, all days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream font-medium">Dinner</p>
                  <p className="text-warm-muted">7:00 PM – 11:00 PM, all days</p>
                </div>
              </div>
            </div>

            {/* Decorative glyph */}
            <div className="mt-14 hidden lg:block">
              <span className="font-chinese text-[10rem] text-gold/8 leading-none select-none">龍</span>
            </div>
          </div>

          {/* ── Right: form ── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-surface p-8 space-y-5"
          >
            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="r-name">
                  <User size={11} className="inline mr-1" />Name
                </label>
                <input
                  id="r-name" type="text" className={inputCls('name')}
                  placeholder="Eg. Priya Sharma" value={form.name}
                  onChange={e => set('name', e.target.value)} autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-[0.7rem] text-crimson">{errors.name}</p>}
              </div>
              <div>
                <label className="label" htmlFor="r-phone">
                  <Phone size={11} className="inline mr-1" />Phone
                </label>
                <input
                  id="r-phone" type="tel" className={inputCls('phone')}
                  placeholder="+91 XXXXX XXXXX" value={form.phone}
                  onChange={e => set('phone', e.target.value)} autoComplete="tel"
                />
                {errors.phone && <p className="mt-1 text-[0.7rem] text-crimson">{errors.phone}</p>}
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="r-date">
                  <Calendar size={11} className="inline mr-1" />Date
                </label>
                <input
                  id="r-date" type="date" className={inputCls('date')}
                  min={today} value={form.date}
                  onChange={e => set('date', e.target.value)}
                />
                {errors.date && <p className="mt-1 text-[0.7rem] text-crimson">{errors.date}</p>}
              </div>
              <div>
                <label className="label" htmlFor="r-time">
                  <Clock size={11} className="inline mr-1" />Time
                </label>
                <select id="r-time" className={inputCls('time')} value={form.time}
                        onChange={e => set('time', e.target.value)}>
                  <option value="">Select time</option>
                  {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.time && <p className="mt-1 text-[0.7rem] text-crimson">{errors.time}</p>}
              </div>
            </div>

            {/* Guests + Occasion */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="r-guests">
                  <Users size={11} className="inline mr-1" />Guests
                </label>
                <select id="r-guests" className={inputCls('guests')} value={form.guests}
                        onChange={e => set('guests', e.target.value)}>
                  <option value="">No. of guests</option>
                  {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                {errors.guests && <p className="mt-1 text-[0.7rem] text-crimson">{errors.guests}</p>}
              </div>
              <div>
                <label className="label" htmlFor="r-occasion">
                  <Sparkles size={11} className="inline mr-1" />Occasion
                </label>
                <select id="r-occasion" className="input-field" value={form.occasion}
                        onChange={e => set('occasion', e.target.value)}>
                  <option value="">Select (optional)</option>
                  {['Birthday','Anniversary','Date Night','Business Dinner','Family Gathering','Other']
                    .map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="label" htmlFor="r-notes">
                <MessageSquare size={11} className="inline mr-1" />Special Requests
              </label>
              <textarea
                id="r-notes" rows={3} className="input-field resize-none"
                placeholder="Dietary requirements, seating preferences, allergies…"
                value={form.notes} onChange={e => set('notes', e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting
                ? <><Loader2 size={16} className="animate-spin" /> Confirming…</>
                : 'Confirm Reservation'
              }
            </button>
            <p className="text-center text-warm-muted text-[0.72rem] tracking-wide">
              We'll send a WhatsApp confirmation within 60 minutes.
            </p>
          </form>

        </div>
      </div>
    </section>
  )
}

function Loader2({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
