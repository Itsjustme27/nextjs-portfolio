import { Section, Tag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { research } from "@/lib/content"

export function Research() {
  return (
    <Section
      id="research"
      index="03"
      label="research"
      title="Security Research"
      intro="Vulnerabilities found outside of paid engagements, reported responsibly, and confirmed fixed by the site owners."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((finding) => (
          <Reveal key={finding.title} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-border border-l-2 border-l-primary/60 bg-card p-6 transition-colors hover:border-primary/40 hover:border-l-primary">
              <div className="flex flex-wrap items-center gap-2">
                <Tag tone="primary">[ {finding.status} ]</Tag>
                <Tag tone="muted">{finding.category}</Tag>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-balance">
                {finding.title}
              </h3>

              <p className="mt-1 font-mono text-sm text-accent">{finding.target}</p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {finding.description}
              </p>

              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {finding.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
