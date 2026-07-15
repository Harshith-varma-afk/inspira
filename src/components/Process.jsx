import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import FadeIn from './FadeIn'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Map the problem, data sources, success metrics, and constraints before writing a line of model code.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'Choose architecture — RAG, OCR, fine-tuning, or hybrid — and define evaluation criteria up front.',
  },
  {
    icon: Code2,
    title: 'Build',
    description:
      'Implement iteratively with measurable checkpoints: quality, latency, cost, and failure modes.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description:
      'Ship to production with monitoring, feedback loops, and a clear path for continuous improvement.',
  },
]

export default function Process() {
  return (
    <section
      className="bg-white py-20 sm:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Process
          </p>
          <h2 id="process-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-slate-deep/75">
            A deliberate path from problem framing to production systems —
            without skipping the hard engineering parts.
          </p>
        </FadeIn>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <FadeIn key={step.title} delay={i * 0.08} as="li">
                <div className="relative h-full text-center lg:text-left">
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-[calc(50%+2rem)] top-6 hidden h-px w-[calc(100%-2rem)] bg-accent-gradient opacity-30 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-soft lg:mx-0">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-deep/75">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
