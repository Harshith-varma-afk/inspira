import FadeIn from './FadeIn'

const cases = [
  {
    name: 'Claims Document Pipeline',
    label: 'Placeholder — Insurance Ops',
    problem:
      'Manual review of multi-page claim packets delayed settlement and introduced transcription errors.',
    metric: '97%',
    metricLabel: 'extraction accuracy on key fields',
  },
  {
    name: 'Internal Knowledge RAG',
    label: 'Placeholder — Enterprise Support',
    problem:
      'Support agents spent too long searching across wikis, tickets, and SOPs for accurate answers.',
    metric: '40%',
    metricLabel: 'faster average resolution time',
  },
  {
    name: 'Contract Risk Assistant',
    label: 'Placeholder — Legal Ops',
    problem:
      'Legal teams needed consistent flagging of high-risk clauses across vendor contracts at volume.',
    metric: '3×',
    metricLabel: 'throughput on first-pass review',
  },
]

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-24"
      aria-labelledby="work-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-40"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Work
          </p>
          <h2 id="work-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-slate-deep/75">
            Representative outcomes from production systems. Project names and
            metrics are placeholders — swap in client-approved details when ready.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-soft transition hover:shadow-card">
                <span className="inline-flex w-fit rounded-md bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
                  {item.label}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-ink">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-deep/75">
                  {item.problem}
                </p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-heading text-3xl font-bold gradient-text">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-sm text-slate-deep/70">
                    {item.metricLabel}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
