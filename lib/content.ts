export type SocialKey = "github" | "linkedin" | "blog" | "facebook" | "email"

export type Social = {
  key: SocialKey
  label: string
  href: string
  handle: string
}

export type Experience = {
  role: string
  org: string
  period: string
  location?: string
  current?: boolean
  summary?: string
  highlights: string[]
  stack?: string[]
  link?: { href: string; label: string }
}

export type ResearchFinding = {
  title: string
  target: string
  category: string
  status: "fixed" | "reported"
  description: string
  detail: string
}

export type Project = {
  name: string
  year?: string
  description: string
  tags: string[]
  link?: string
}

export type Credential = {
  name: string
  issuer: string
  date: string
  note?: string
  credentialId?: string
}

export type Competition = {
  name: string
  organiser: string
  date: string
  result?: string
}

/* ------------------------------------------------------------------ *
 * Identity
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Prayush Hada",
  role: "SOC Analyst & Security Researcher",
  // Positioning line, lifted from the objective in the CV.
  tagline:
    "Building toward vulnerability research and systems/kernel security through structured study and independent low-level systems programming.",
  objective:
    "Cybersecurity professional with hands-on experience in SOC operations, detection engineering, and penetration testing. Currently SOC L1 Analyst at CryptoGen Nepal and a founding member of Y3ti@Sec, a Nepal-based CTF team competing internationally in pwn, web, reverse engineering, and forensics.",
  location: "Bhaktapur, Nepal",
  phone: "+977 9841281920",
  phoneHref: "tel:+9779841281920",
  email: "reachprayush@gmail.com",
  cvPath: "/Prayush_Hada_CV.pdf",
  focus: ["detection-eng/", "low-level-systems/", "vulnerability-research/", "ctf/"],
}

export const socials: Social[] = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Itsjustme27",
    handle: "@Itsjustme27",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/prayush-hada",
    handle: "in/prayush-hada",
  },
  {
    key: "blog",
    label: "Blog",
    href: "https://prayush.hashnode.dev/",
    handle: "prayush.hashnode.dev",
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/itsjustme2005/",
    handle: "itsjustme2005",
  },
]

export const socialsByKey = Object.fromEntries(socials.map((s) => [s.key, s])) as Record<
  SocialKey,
  Social
>

/* ------------------------------------------------------------------ *
 * Navigation — section ids double as the scroll-spy targets.
 * ------------------------------------------------------------------ */

export const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "research", label: "research" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "credentials", label: "credentials" },
  { id: "contact", label: "contact" },
] as const

/* ------------------------------------------------------------------ *
 * Headline numbers
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * Experience
 * ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    role: "SOC L1 Analyst",
    org: "CryptoGen Nepal",
    period: "Dec 2025 — Present",
    location: "Kathmandu, Nepal",
    current: true,
    highlights: [
      "Monitor, triage, and investigate security events from SIEM, firewalls, and IDS/IPS — determine scope and impact, and document findings in detailed incident reports.",
      "Automate incident-handling workflows, including scripts that programmatically detect and assign alerts via SIEM APIs, resulting in an ~85% average reduction in Mean Time to Detect (MTTD).",
      "Develop and tune detection and monitoring rules across LogPoint and FortiSIEM to reduce false positives and improve alert accuracy.",
      "Work within NIST/ISO 27001-aligned SOC processes for incident handling and reporting.",
      "Participate in vulnerability assessments; track findings and coordinate remediation with system owners.",
      "Troubleshoot SIEM agent deployment and connectivity issues across mixed Linux environments (Rocky Linux, RHEL, Debian-based systems), ensuring consistent log collection.",
    ],
    stack: ["LogPoint", "FortiSIEM", "Wazuh", "Linux", "Detection Engineering"],
  },
  {
    role: "Founding Member",
    org: "Y3ti@Sec",
    period: "May 2025 — Present",
    location: "Nepal",
    current: true,
    highlights: [
      "Core CTF player focusing on pwn, web, reverse engineering, forensics, and SIEM.",
      "Deployed and maintain a GZCTF-based competition platform on a Dokploy/Traefik VPS stack.",
      "Hosted Kavach CTF, an inter-college competition run jointly with NCIT College, on the platform.",
      "Developed and maintained the team's website and internal resources.",
      "Competed in international events such as BlitzCTF, DUCTF, and Hack A Flag, ranking among the top in Nepal.",
      "Positioned 4th on Nepal's CTF team leaderboard according to CTFtime.",
    ],
    stack: ["GZCTF", "Dokploy", "Traefik", "pwn", "Forensics"],
    link: { href: "https://ctf.yeticyberops.com.np", label: "ctf.yeticyberops.com.np" },
  },
  {
    role: "Cybersecurity Intern",
    org: "Sapience Edu Connect",
    period: "Jan 2025 — Feb 2025",
    highlights: [
      "Set up and configured a security lab with Metasploitable and Kali Linux for vulnerability analysis.",
      "Exploited a vsftpd vulnerability using Metasploit and performed privilege escalation.",
      "Documented exploitation steps and mitigation measures for training purposes.",
    ],
    stack: ["Metasploit", "Kali Linux", "Privilege Escalation"],
  },
]

/* ------------------------------------------------------------------ *
 * Security research — independent findings, both reported and fixed.
 * ------------------------------------------------------------------ */

export const research: ResearchFinding[] = [
  {
    title: "Stored XSS in the user registration flow",
    target: "mbmmgt.com",
    category: "Cross-Site Scripting",
    status: "fixed",
    description:
      "Injected payloads persisted through registration and executed on every subsequent dashboard load, giving any authenticated visitor a path to session theft and arbitrary in-origin actions.",
    detail:
      "Discovered in the user registration flow. Reported to the site owner and confirmed fixed.",
  },
  {
    title: "Debug-mode information disclosure",
    target: "mbmgetaway.com",
    category: "Information Disclosure",
    status: "fixed",
    description:
      "A production Laravel deployment was running with debug mode enabled, exposing a full stack trace with sensitive configuration data — including credentials and application internals — to any unauthenticated visitor.",
    detail:
      "Identified on a live Laravel deployment. Reported to the site owner and confirmed fixed.",
  },
]

/* ------------------------------------------------------------------ *
 * Projects — grouped by discipline. `archive` holds the older work the
 * CV no longer features.
 * ------------------------------------------------------------------ */

export const projectGroups: { id: string; label: string; blurb: string; projects: Project[] }[] = [
  {
    id: "systems",
    label: "Systems & Low-Level Programming",
    blurb: "Implemented from the protocol up, in C and Rust.",
    projects: [
      {
        name: "ARP Spoofing / Detection Toolkit",
        description:
          "Toolkit in C for detecting and simulating ARP spoofing, built directly on raw sockets and libpcap rather than on an existing library.",
        tags: ["C", "Raw AF_PACKET sockets", "libpcap", "Networking"],
      },
      {
        name: "DNS_TOOL",
        year: "2024",
        description: "A DNS resolver implemented from scratch in C, following RFC 1035.",
        tags: ["C", "Raw Sockets", "DNS", "RFC 1035"],
      },
      {
        name: "LAN2LANd",
        year: "2025",
        description:
          "Cross-platform LAN file transfer utility in Rust with a multithreaded receiver for concurrent transfers, a Zenity GUI on Linux and an interactive CLI.",
        tags: ["Rust", "TCP Sockets", "Zenity", "Linux"],
        link: "https://github.com/Itsjustme27/LAN2LANd",
      },
    ],
  },
  {
    id: "security",
    label: "Security Engineering",
    blurb: "Production systems that detect and teach.",
    projects: [
      {
        name: "YetiNELv2",
        description:
          "A production mini SIEM with real-time log ingestion, a WebSocket-based live security dashboard, and RBAC/JWT-based access control. Designed, built, and maintained independently, end to end.",
        tags: ["Real-time log ingestion", "WebSockets", "JWT/RBAC", "Node.js"],
        link: "https://github.com/Itsjustme27/yetinelv2",
      },
      {
        name: "Phishy",
        year: "2025",
        description:
          "Multi-perspective cybersecurity education platform simulating Attacker, Victim, and Defender roles, with RBAC, password strength tracking, secure authentication, and real-time bot simulations driven by probability-based scoring.",
        tags: ["Laravel 11", "PHP 8.4+", "MySQL/PostgreSQL", "Bootstrap 5.3", "Node.js"],
      },
    ],
  },
]

export const archivedProjects: Project[] = [
  {
    name: "Orrery Web App",
    description:
      "Dynamic 3D solar system simulation built with Three.js for the NASA Space Apps Challenge 2024.",
    tags: ["React", "Three.js"],
    link: "https://github.com/Itsjustme27",
  },
  {
    name: "GitHub Repository Automation",
    description:
      "Python script automating GitHub repository creation and cloning through the GitHub API with customised parameters.",
    tags: ["Python", "GitHub API", "Automation"],
    link: "https://github.com/Itsjustme27/automate_git",
  },
  {
    name: "Packet Sniffer",
    description:
      "Python packet sniffer using socket programming to capture and analyse network traffic for diagnostics.",
    tags: ["Python", "Sockets"],
    link: "https://github.com/Itsjustme27/simple-packet-sniffer",
  },
  {
    name: "TCP Client-Server",
    description:
      "Simple TCP client-server architecture in Python using socket programming for secure, reliable communication.",
    tags: ["Python", "Sockets"],
  },
]

/* ------------------------------------------------------------------ *
 * Skills — the five categories from the CV.
 * ------------------------------------------------------------------ */

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Offensive Security & Exploitation",
    items: [
      "Metasploit",
      "Burp Suite",
      "gdb",
      "radare2",
      "Wireshark",
      "Nmap",
      "Tcpdump",
      "ExifTool",
      "steghide",
    ],
  },
  {
    category: "Defensive / SOC & SIEM",
    items: ["Wazuh", "LogPoint SIEM", "FortiSIEM", "Detection Tuning", "Incident Response"],
  },
  {
    category: "Networking & Systems",
    items: [
      "LAN/WAN",
      "DNS",
      "Routing",
      "IP addressing",
      "Netcat",
      "libpcap",
      "Raw sockets",
    ],
  },
  {
    category: "Programming Languages",
    items: [
      "Python",
      "JavaScript (ES6+)",
      "Bash",
      "PHP",
      "C",
      "C++",
      "Java",
      "PowerShell",
      "Rust",
    ],
  },
  {
    category: "Other Technical",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "REST APIs",
      "Linux (Arch, Kali, Ubuntu Server, Rocky Linux, RHEL)",
    ],
  },
]

/* ------------------------------------------------------------------ *
 * Credentials
 * ------------------------------------------------------------------ */

export const certifications: Credential[] = [
  {
    name: "SOC Level 1 Certificate",
    issuer: "TryHackMe",
    date: "Feb 2026",
    note: "Expires Feb 2029 · SIEM, Splunk, and 4 additional skills",
    credentialId: "THM-PN4VKGTRIZ",
  },
  {
    name: "Certified AppSec Practitioner (CAP)",
    issuer: "TheSecOps Group",
    date: "Apr 2025",
    note: "OWASP Top 10 and web application security fundamentals",
  },
  {
    name: "Student SOC Program Foundations Training",
    issuer: "Microsoft",
    date: "Sep 2025",
    note: "Cybersecurity fundamentals, Microsoft XDR, and Microsoft Sentinel",
  },
  {
    name: "Pre Security Certificate",
    issuer: "TryHackMe",
    date: "Oct 2025",
  },
  {
    name: "Linux 100",
    issuer: "TCM Security",
    date: "Apr 2025",
  },
  {
    name: "NASA Space Apps Challenge — Participation",
    issuer: "NASA",
    date: "Oct 2024",
  },
]

export const competitions: Competition[] = [
  {
    name: "NahamCon 2025 CTF",
    organiser: "NahamSec",
    date: "May 2025",
    result: "153rd of 2,944 teams globally",
  },
  { name: "Holmes CTF 2025", organiser: "Hack The Box", date: "Sep 2025" },
  { name: "BlitzCTF 2025", organiser: "OffSec", date: "Jul 2025" },
  { name: "DownUnderCTF 6", organiser: "Tanto Security", date: "Jul 2025" },
  { name: "Hack A Flag 2025", organiser: "IEEE Computer Society", date: "Jul 2025" },
  { name: "Advent of Cyber 2024", organiser: "TryHackMe", date: "Dec 2024" },
  { name: "MetaCTF Flash CTF", organiser: "MetaCTF", date: "Dec 2024" },
]

export const education: Credential[] = [
  {
    name: "Bachelor in Computer System and Information Technology",
    issuer: "Medhavi College, Pokhara University",
    date: "08/2023 — 08/2027",
    note: "Kathmandu, Nepal",
  },
  {
    name: "+2 Level",
    issuer: "Chanakya College of Management",
    date: "04/2021",
    note: "Bhaktapur, Nepal",
  },
]

export const languages: { name: string; level: string }[] = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "B2" },
  { name: "Japanese", level: "Basic" },
]
