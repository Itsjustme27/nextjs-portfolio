import { Section, Tag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { skills } from "@/lib/content"

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      label="skills"
      title="Skills & Tooling"
      intro="What I reach for, grouped by where it sits in the stack."
    >
      <div className="divide-y divide-border border-y border-border">
        {skills.map((group, index) => (
          <Reveal key={group.category}>
            <div className="grid gap-4 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <h3 className="font-mono-label text-primary sm:pt-1.5">
                <span aria-hidden="true" className="text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}{" "}
                </span>
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag tone="muted">{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
