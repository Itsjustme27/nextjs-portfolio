"use client"

import { Moon, Sun } from "lucide-react"

/**
 * Both icons are always rendered and swapped with the `dark:` variant rather
 * than React state, which keeps the server and client markup identical.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const next = root.classList.contains("dark") ? "light" : "dark"

    root.classList.toggle("dark", next === "dark")

    try {
      localStorage.setItem("theme", next)
    } catch {
      // Private mode or blocked storage — the theme still applies for this page.
    }

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const background = getComputedStyle(root).getPropertyValue("--background").trim()
      if (background) meta.setAttribute("content", background)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  )
}
