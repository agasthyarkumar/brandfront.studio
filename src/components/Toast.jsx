import { CheckCircle, AlertCircle, X } from 'lucide-react'

export default function Toast({ show, message, type }) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed bottom-6 left-1/2 z-[9999] flex items-center gap-3
                  px-5 py-3.5 rounded-sm border shadow-card-hover
                  transition-all duration-400 will-change-transform
                  max-w-sm w-[calc(100vw-3rem)]
                  ${type === 'success'
                    ? 'bg-ink-300 border-green-700/50 text-green-300'
                    : 'bg-ink-300 border-crimson/50 text-crimson'
                  }
                  ${show
                    ? '-translate-x-1/2 translate-y-0 opacity-100'
                    : '-translate-x-1/2 translate-y-4 opacity-0 pointer-events-none'
                  }`}
    >
      {type === 'success'
        ? <CheckCircle size={18} className="flex-shrink-0" />
        : <AlertCircle size={18} className="flex-shrink-0" />
      }
      <p className="text-sm font-medium flex-1 text-cream leading-snug">{message}</p>
    </div>
  )
}
