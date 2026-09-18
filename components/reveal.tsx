import type { ReactNode } from "react"

/**
 * Marks its children for the CSS scroll-driven reveal in globals.css.
 *
 * Deliberately a server component: the animation is pure CSS, so there is no
 * hydration, no observer to wire up, and nothing that can leave content stuck
 * at opacity 0 if JavaScript is slow or fails. Browsers without scroll-timeline
 * support render the content with no animation.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  )
}
