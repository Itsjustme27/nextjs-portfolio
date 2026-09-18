import { ExternalLink } from "lucide-react"
import { Section, Tag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { experience } from "@/lib/content"

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="experience"
      title="Experience"
      intro="Detection and response on the defensive side, competition and low-level systems work on the other."
    >
      <ol className="relative border-l border-border">
        {experience.map((entry) => (
          <li key={`${entry.org}-${entry.role}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className={
                entry.current
                  ? "absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-primary/15"
                  : "absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-border"
              }
            />

            <Reveal>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-primary">{entry.org}</p>
                </div>
                <p className="font-mono-label shrink-0 text-muted-foreground sm:text-right">
                  {entry.period}
                  {entry.location ? (
                    <span className="mt-1 block opacity-70">{entry.location}</span>
                  ) : null}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-[2px] font-mono text-primary select-none">
                      –
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {entry.stack?.length ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <li key={item}>
                      <Tag tone="muted">{item}</Tag>
                    </li>
                  ))}
                </ul>
              ) : null}

              {entry.link ? (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {entry.link.label}
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
