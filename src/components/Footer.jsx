import { Mail } from 'lucide-react'

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-ink text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#home"
              className="inline-flex rounded-lg bg-white px-3 py-2 shadow-soft"
            >
              <img
                src="/logo.png"
                alt="Inspira AI"
                className="h-9 w-auto"
                width={160}
                height={36}
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Custom AI systems for businesses — RAG, document intelligence, and
              applied LLM products that hold up in production.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:hello@inspira.ai"
                className="inline-flex rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-primary hover:text-white"
                aria-label="Email Inspira AI"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-primary hover:text-white"
                aria-label="Inspira AI on LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-primary hover:text-white"
                aria-label="Inspira AI on GitHub"
              >
                <GitHubIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {year} Inspira AI. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for static deploy on Vercel / Netlify.
          </p>
        </div>
      </div>
    </footer>
  )
}
