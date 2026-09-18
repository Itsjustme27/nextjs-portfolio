"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Menu, X } from "lucide-react"
import { profile, sections, socialsByKey } from "@/lib/content"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  // Highlight whichever section is crossing the upper-middle band of the viewport.
  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0 || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Don't let the page scroll behind the open mobile panel.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-primary">~</span> prayush
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "true" : undefined}
              className={cn(
                "font-mono-label rounded px-2.5 py-2 transition-colors hover:text-primary",
                active === section.id ? "text-primary" : "text-muted-foreground",
              )}
            >
              <span aria-hidden="true" className="mr-1 opacity-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.label}
            </a>
          ))}

          <a
            href={socialsByKey.blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label ml-1 inline-flex items-center gap-1 rounded px-2.5 py-2 text-muted-foreground transition-colors hover:text-primary"
          >
            blog
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="animate-in fade-in-0 slide-in-from-top-1 border-t border-border bg-background duration-200 lg:hidden"
        >
          <div className="mx-auto max-w-5xl px-6 py-4">
            <ul className="flex flex-col">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-mono-label flex items-center gap-3 py-3 transition-colors hover:text-primary",
                      active === section.id ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    <span aria-hidden="true" className="opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={socialsByKey.blog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-mono-label flex items-center gap-2 py-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  blog
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <a
              href={profile.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-sm text-primary"
            >
              view CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
