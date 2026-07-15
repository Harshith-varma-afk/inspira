import { useEffect, useId, useRef, useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'inspira-acquisition-notice-dismissed'

export default function AcquisitionNotice() {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const descId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== '1') {
        setOpen(true)
      }
    } catch {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* storage unavailable — still close for this session */
    }
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            className="absolute inset-0 bg-slate-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
            onClick={dismiss}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-card"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-1.5 w-full bg-accent-gradient" aria-hidden="true" />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-xl bg-amber-50 p-2.5 text-amber-700">
                  <AlertTriangle size={22} aria-hidden="true" />
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={dismiss}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-ink"
                  aria-label="Dismiss notice"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-amber-700">
                Company update
              </p>
              <h2
                id={titleId}
                className="mt-2 font-heading text-2xl font-bold text-slate-ink sm:text-[1.65rem]"
              >
                Inspira AI has been acquired
              </h2>

              <div id={descId} className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-deep/80">
                <p>
                  Inspira AI has been acquired and will no longer operate as an
                  independent company. As part of this transition, this website
                  and related services will be taken offline.
                </p>
                <p className="rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-slate-deep">
                  <strong className="font-semibold text-slate-ink">
                    Please save your data now.
                  </strong>{' '}
                  Export and securely store any project files, documentation,
                  credentials, or deliverables associated with your engagement
                  before access ends.
                </p>
                <p>
                  For questions about the transition or final communications,
                  contact{' '}
                  <a
                    href="mailto:hello@inspira.ai?subject=Acquisition%20transition"
                    className="font-medium text-primary underline-offset-2 hover:underline"
                  >
                    hello@inspira.ai
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <a
                  href="mailto:hello@inspira.ai?subject=Acquisition%20transition"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-ink transition hover:border-primary/40 hover:text-primary"
                >
                  Contact us
                </a>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex items-center justify-center rounded-xl bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
                >
                  I understand — continue
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
