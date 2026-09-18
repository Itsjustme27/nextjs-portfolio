import type { ReactNode } from "react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { certifications, competitions, education, languages } from "@/lib/content"

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-mono text-sm text-primary">
      <span aria-hidden="true" className="text-muted-foreground">
        [{" "}
      </span>
      {children}
      <span aria-hidden="true" className="text-muted-foreground">
        {" "}
        ]
      </span>
    </h3>
  )
}

export function Credentials() {
  return (
    <Section
      id="credentials"
      index="06"
      label="credentials"
      title="Certifications & Education"
    >
      <Reveal>
        <SubHeading>certifications</SubHeading>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((certification) => (
          <Reveal key={certification.name} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-border bg-card p-5">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-semibold leading-snug text-balance">{certification.name}</h4>
                <span className="font-mono-label shrink-0 text-muted-foreground">
                  {certification.date}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-primary">{certification.issuer}</p>
              {certification.note ? (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {certification.note}
                </p>
              ) : null}
              {certification.credentialId ? (
                <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground">
                  <span className="opacity-60">id:</span> {certification.credentialId}
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SubHeading>competitions</SubHeading>
          </Reveal>
          <Reveal>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {competitions.map((competition) => (
                <li
                  key={competition.name}
                  className="flex items-baseline justify-between gap-6 py-3.5"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{competition.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{competition.organiser}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono-label text-muted-foreground">{competition.date}</p>
                    {competition.result ? (
                      <p className="mt-1 font-mono text-xs text-accent">{competition.result}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <SubHeading>education</SubHeading>
          </Reveal>
          <Reveal>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {education.map((entry) => (
                <li key={entry.name} className="py-3.5">
                  <p className="text-sm font-medium leading-snug">{entry.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{entry.issuer}</p>
                  <p className="font-mono-label mt-1.5 text-muted-foreground">
                    {entry.date}
                    {entry.note ? <span className="opacity-70"> · {entry.note}</span> : null}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-10">
              <SubHeading>languages</SubHeading>
              <ul className="mt-5 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="font-mono-label rounded border border-border bg-muted/40 px-2.5 py-1.5 text-muted-foreground"
                  >
                    {language.name}
                    <span className="ml-2 text-primary">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
