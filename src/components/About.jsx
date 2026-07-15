import FadeIn from './FadeIn'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-40"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About
            </p>
            <h2 id="about-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
              Practical AI for production environments
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-lg leading-relaxed text-slate-deep/80">
              <p>
                Inspira AI builds custom AI and machine learning systems for
                businesses that need more than a chatbot bolted onto a knowledge
                base. We focus on retrieval quality, document understanding,
                predictive models, and LLM integrations that fit real operational
                constraints.
              </p>
              <p>
                Our mission is straightforward: ship production-ready AI that
                reduces manual work, improves decision speed, and holds up under
                audit — not demos that collapse outside a lab notebook.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
