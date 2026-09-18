import { ChevronDown, ExternalLink } from "lucide-react"
import { Section, Tag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { archivedProjects, projectGroups, type Project } from "@/lib/content"
import { cn } from "@/lib/utils"

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-balance">
          {project.name}
          {project.year ? (
            <span className="font-mono-label ml-2 font-normal text-muted-foreground">
              {project.year}
            </span>
          ) : null}
        </h3>
        {project.link ? (
          <ExternalLink
            className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag tone="muted">{tag}</Tag>
          </li>
        ))}
      </ul>
    </>
  )

  const base = "flex h-full flex-col rounded-lg border border-border bg-card p-6"

  // Projects without a verified repository link render as plain cards rather
  // than links that go nowhere useful.
  if (!project.link) {
    return <div className={base}>{body}</div>
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, "group transition-colors hover:border-primary/50")}
    >
      {body}
    </a>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      label="projects"
      title="Projects"
      intro="Grouped by discipline: the low-level systems work I do to understand the stack, and the security tooling I build on top of it."
    >
      <div className="space-y-14">
        {projectGroups.map((group) => (
          <div key={group.id}>
            <Reveal>
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-mono text-sm text-primary">
                  <span aria-hidden="true" className="opacity-60">
                    ./{" "}
                  </span>
                  {group.label}
                </h3>
                <p className="text-sm text-muted-foreground">{group.blurb}</p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.projects.map((project) => (
                <Reveal key={project.name} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal>
          <details className="group rounded-lg border border-border bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-mono text-sm text-muted-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
              <span>
                older projects{" "}
                <span className="opacity-60">({archivedProjects.length})</span>
              </span>
              <ChevronDown
                className="size-4 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <ul className="border-t border-border">
              {archivedProjects.map((project) => (
                <li
                  key={project.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-border px-5 py-4 last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium transition-colors hover:text-primary"
                        >
                          {project.name}
                        </a>
                      ) : (
                        <span className="text-sm font-medium">{project.name}</span>
                      )}
                      {project.link ? (
                        <ExternalLink className="size-3 text-muted-foreground" aria-hidden="true" />
                      ) : null}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <p className="font-mono-label shrink-0 text-muted-foreground">
                    {project.tags.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </details>
        </Reveal>
      </div>
    </Section>
  )
}
