import { ArrowRight } from 'lucide-react'
import NetworkBackground from './NetworkBackground'
import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      {/* Soft mesh + network motif */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-indigo-500/10 blur-3xl" />
        <NetworkBackground className="absolute right-[-8%] top-16 hidden w-[55%] max-w-2xl opacity-40 lg:block" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Inspira AI
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.1] text-slate-ink sm:text-5xl lg:text-6xl"
          >
            AI Systems Built for{' '}
            <span className="gradient-text">Real Business Problems</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-deep/80 sm:text-xl">
            We design and ship custom RAG pipelines, document intelligence, and
            applied LLM products — tuned to your data, workflows, and production
            constraints.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-95 hover:shadow-card"
            >
              Book a Call
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-ink transition hover:border-primary/40 hover:text-primary"
            >
              See Our Work
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
