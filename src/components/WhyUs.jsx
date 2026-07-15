import { Target, Zap, ShieldCheck } from 'lucide-react'
import FadeIn from './FadeIn'

const reasons = [
  {
    icon: Target,
    title: 'Domain-Specific Tuning',
    description:
      'Models and retrieval stacks adapted to your industry language, documents, and decision rules — not off-the-shelf prompts.',
  },
  {
    icon: Zap,
    title: 'Fast Iteration',
    description:
      'Short feedback cycles with evals you can trust, so quality improves week over week instead of disappearing into long builds.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-Grade Engineering',
    description:
      'Observability, cost controls, access boundaries, and failure handling treated as first-class requirements from day one.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Inspira
          </p>
          <h2 id="why-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
            Built for systems that have to work
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <FadeIn key={reason.title} delay={i * 0.08}>
                <div className="h-full">
                  <div className="mb-4 inline-flex rounded-xl bg-accent-gradient-soft p-3 text-primary">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-deep/75">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
