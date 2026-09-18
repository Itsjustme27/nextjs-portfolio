import { BookOpen, Facebook, Github, Linkedin, Mail } from "lucide-react"
import type { SocialKey } from "@/lib/content"

const icons: Record<SocialKey, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  blog: BookOpen,
  facebook: Facebook,
  email: Mail,
}

/** Maps a social key from lib/content to its icon. Server-safe. */
export function SocialIcon({ name, className }: { name: SocialKey; className?: string }) {
  const Icon = icons[name]
  return <Icon className={className} aria-hidden="true" />
}
