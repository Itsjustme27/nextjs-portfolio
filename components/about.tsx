import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { education, experience, profile } from "@/lib/content"

export function About() {
  const current = experience.find((entry) => entry.current)
  const degree = education[0]

  const facts = [
    current && { label: "currently", value: `${current.role} — ${current.org}` },
    { label: "based", value: profile.location },
    degree && { label: "education", value: `${degree.issuer} · ${degree.date}` },
    { label: "focus", value: "Vulnerability research & systems/kernel security" },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact))

  return (
    <Section id="about" index="01" label="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <Reveal className="space-y-5">
          <p className="leading-relaxed text-muted-foreground">{profile.objective}</p>
          <p className="leading-relaxed text-muted-foreground">
            Most of that independent work is low-level: a DNS resolver written from scratch against
            RFC 1035, an ARP spoofing toolkit built on raw AF_PACKET sockets and libpcap, and a
            multithreaded LAN transfer utility in Rust. Working close to the wire is what pulled me
            toward detection engineering on one side and vulnerability research on the other.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            As a founding member of Y3ti@Sec I compete in pwn, web, reverse engineering, and
            forensics, and I maintain the team&apos;s GZCTF competition platform — including hosting
            Kavach CTF with NCIT College. The team currently sits 4th on Nepal&apos;s CTFtime
            leaderboard.
          </p>
        </Reveal>

        <Reveal>
          <dl className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            {facts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="font-mono-label text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
