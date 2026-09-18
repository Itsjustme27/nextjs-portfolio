import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Research } from "@/components/research"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Credentials } from "@/components/credentials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
