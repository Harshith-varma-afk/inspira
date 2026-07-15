import { Database, FileSearch, Bot, Puzzle } from 'lucide-react'
import FadeIn from './FadeIn'

const services = [
  {
    icon: Database,
    title: 'RAG Systems',
    description:
      'Retrieval-augmented generation pipelines that ground LLM answers in your domain knowledge — with evaluation, citation, and access controls built in.',
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence (OCR)',
    description:
      'High-accuracy extraction and structuring of data from scanned PDFs, forms, and unstructured documents — ready for downstream systems.',
  },
  {
    icon: Bot,
    title: 'Custom LLM Applications',
    description:
      'Fine-tuned and prompt-engineered AI products designed around specific workflows, not generic chat wrappers.',
  },
  {
    icon: Puzzle,
    title: 'AI Integration & Consulting',
    description:
      'Embedding AI capabilities into existing products, tools, and internal systems — from architecture through production hardening.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-white py-20 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 id="services-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-slate-deep/75">
            End-to-end AI engineering — from data grounding and model choice to
            deployment, monitoring, and iteration.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={i * 0.08}>
                <article className="card-gradient-hover h-full rounded-xl bg-slate-soft/50 p-6 shadow-soft hover:shadow-card">
                  <div className="mb-4 inline-flex rounded-xl bg-accent-gradient p-2.5 text-white shadow-soft">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-deep/75">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
