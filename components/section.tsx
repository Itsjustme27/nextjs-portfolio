import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

/**
 * Shared section shell: the numbered mono label, rule, heading, and the
 * container that keeps every section on the same rhythm.
 */
export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className,
}: {
  id: string
  index: string
  label: string
  title: string
  intro?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <div className="font-mono-label flex items-center gap-3 text-muted-foreground">
              <span className="text-primary">{index}</span>
              <span aria-hidden="true" className="text-border">
                /
              </span>
              <span>{label}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

/** Small mono pill used for tech tags, dates, and statuses. */
export function Tag({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "primary" | "accent" }) {
  return (
    <span
      className={cn(
        "font-mono-label inline-flex items-center rounded border px-2 py-1",
        tone === "muted" && "border-border bg-muted/50 text-muted-foreground",
        tone === "primary" && "border-primary/30 bg-primary/10 text-primary",
        tone === "accent" && "border-accent/30 bg-accent/10 text-accent",
      )}
    >
      {children}
    </span>
  )
}
