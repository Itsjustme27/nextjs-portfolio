import { ArrowUpRight, FileText } from "lucide-react"
import { profile, socialsByKey, stats } from "@/lib/content"
import { SocialIcon } from "@/components/social-icon"

/**
 * Rendered without <Reveal> on purpose — it is above the fold, and delaying it
 * behind an IntersectionObserver would show an empty viewport on first paint.
 */
export function Hero() {
  const github = socialsByKey.github
  const linkedin = socialsByKey.linkedin
  const mailto = `mailto:${profile.email}`

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div aria-hidden="true" className="bg-grid grid-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> whoami
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {profile.name}
          <span className="caret ml-2" aria-hidden="true" />
        </h1>

        <p className="mt-5 font-mono text-sm text-primary sm:text-base">{profile.role}</p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-10">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> ls ./focus
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <li
                key={item}
                className="font-mono-label rounded border border-border bg-muted/40 px-2.5 py-1.5 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileText className="size-4" aria-hidden="true" />
            view CV
          </a>
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            <SocialIcon name="github" className="size-4" />
            github
          </a>
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            <SocialIcon name="linkedin" className="size-4" />
            linkedin
          </a>
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            <SocialIcon name="email" className="size-4" />
            email
            <ArrowUpRight className="size-3.5 opacity-60" aria-hidden="true" />
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            // Reversed so the value reads first visually while the term stays
            // the label, which is the correct pairing for a description list.
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
