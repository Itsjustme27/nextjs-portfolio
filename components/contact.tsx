import { MapPin, Phone } from "lucide-react"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { SocialIcon } from "@/components/social-icon"
import { profile, socials } from "@/lib/content"

export function Contact() {
  const mailto = `mailto:${profile.email}`

  return (
    <Section id="contact" index="07" label="contact" title="Get in Touch">
      <Reveal>
        <div className="relative overflow-hidden rounded-lg border border-border bg-card">
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />

          <div className="relative p-6 sm:p-10">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> contact --email
            </p>

            <a
              href={mailto}
              className="mt-4 inline-block break-all font-mono text-xl text-foreground underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:text-primary hover:decoration-primary sm:text-3xl"
            >
              {profile.email}
            </a>

            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Open to conversations about detection engineering, low-level systems work, CTF, or
              security research — and to the right full-time role.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> ls ./links
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-4 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <SocialIcon name={social.key} className="size-4" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <li className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <a href={profile.phoneHref} className="transition-colors hover:text-primary">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {profile.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
