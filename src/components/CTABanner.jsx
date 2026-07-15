import { ArrowRight, Mail } from 'lucide-react'
import FadeIn from './FadeIn'

export default function CTABanner() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-accent-gradient py-20 sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-white/40" />
        <div className="absolute bottom-8 right-16 h-56 w-56 rounded-full border border-white/30" />
        <div className="absolute right-1/3 top-1/2 h-24 w-24 rounded-full bg-white/10 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Have a problem worth solving with AI?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Tell us about your data, workflows, and constraints. We&apos;ll help
            you decide what&apos;s feasible — and build what matters.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@inspira.ai?subject=Project%20inquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition hover:bg-primary-50"
            >
              <Mail size={16} aria-hidden="true" />
              Email hello@inspira.ai
            </a>
            <a
              href="mailto:hello@inspira.ai?subject=Book%20a%20call"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Call
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Contact form UI reserved for future integration — use email for now.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
