"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Award } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "Phishy - Advanced Phishing Simulation Platform",
      description:
        "Multi-perspective cybersecurity education platform with Attacker, Victim, and Defender roles. Built with Laravel 11, PHP 8.4+, MySQL/PostgreSQL, featuring RBAC, real-time bot simulations, and admin dashboard.",
      tags: ["Laravel", "PHP", "Security", "Education"],
      link: "https://github.com/Itsjustme27",
    },
    {
      title: "LAN2LANd",
      description:
        "Cross-platform LAN file transfer utility in Rust with multithreaded receiver for concurrent transfers. Integrated Zenity GUI for Linux and interactive CLI.",
      tags: ["Rust", "Networking", "TCP Sockets"],
      link: "https://github.com/Itsjustme27/LAN2LANd",
    },
    {
      title: "Orrery Web App",
      description: "Dynamic 3D solar system simulation using Three.js developed for NASA Space Apps Challenge 2024.",
      tags: ["React", "Three.js", "JavaScript"],
      link: "https://github.com/Itsjustme27",
    },
    {
      title: "GitHub Repository Automation",
      description:
        "Python script automating GitHub repository creation and cloning using GitHub API with customized parameters.",
      tags: ["Python", "GitHub API", "Automation"],
      link: "https://github.com/Itsjustme27/automate_git",
    },
    {
      title: "Packet Sniffer",
      description:
        "Python-based packet sniffer using socket programming to capture and analyze network traffic for diagnostics.",
      tags: ["Python", "Networking", "Sockets"],
      link: "https://github.com/Itsjustme27/simple-packet-sniffer",
    },
    {
      title: "TCP Client-Server",
      description:
        "Simple TCP client-server architecture in Python using socket programming with secure and reliable communication.",
      tags: ["Python", "Networking", "Sockets"],
      link: "https://github.com/Itsjustme27",
    },
  ]

  const skills = [
    {
      category: "Security & Tools",
      items: [
        "Metasploit",
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "Tcpdump",
        "gdb",
        "radare2",
        "ExifTool",
        "steghide",
        "Wazuh",
        "Logpoint SIEM",
      ],
    },
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript (ES6+)", "PHP", "Rust", "Bash", "C", "C++", "Java", "PowerShell"],
    },
    {
      category: "Web & Backend",
      items: ["React.js", "Node.js", "Express.js", "Flask", "Laravel", "HTML5", "CSS3", "Three.js", "REST APIs"],
    },
    {
      category: "Databases & Tools",
      items: ["SQL", "MongoDB", "Docker", "Git", "GitHub", "Linux (Arch, Kali, Ubuntu)", "Responsive Design"],
    },
  ]

  const certifications = [
    { name: "Certified AppSec Practitioner (CAP)", issuer: "TheSecOps Group", date: "Apr 2025" },
    { name: "Hack A Flag 2025", issuer: "IEEE Computer Society", date: "Jul 2025" },
    {
      name: "Nahamcon 2025 CTF",
      issuer: "Nahamsec",
      date: "May 2025",
      detail: "153rd rank out of 2,944 teams globally",
    },
    { name: "Pre Security Certificate", issuer: "TryHackMe", date: "Oct 2025" },
    { name: "Holmes CTF 2025", issuer: "Hack The Box", date: "Sep 2025" },
    { name: "Student SOC Program Foundations", issuer: "Microsoft", date: "Sep 2025" },
    { name: "BlitzCTF 2025", issuer: "OffSec", date: "Jul 2025" },
    { name: "Down Under CTF 6", issuer: "Tanto Security", date: "Jul 2025" },
    { name: "Linux 100", issuer: "TCM Security", date: "Apr 2025" },
    { name: "Learn With Incybrix 30 Days", issuer: "Incybrix Security", date: "Jan 2025" },
    { name: "Advent of Cyber 2024", issuer: "TryHackMe", date: "Dec 2024" },
    { name: "MetaCTF Flash CTF", issuer: "MetaCTF", date: "Dec 2024" },
    { name: "Python Basic", issuer: "HackerRank", date: "Nov 2024" },
    { name: "NASA Space Apps Challenge", issuer: "NASA", date: "Oct 2024" },
    { name: "JavaScript Basic", issuer: "HackerRank", date: "Jun 2024" },
    { name: "JavaScript Intermediate", issuer: "HackerRank", date: "Jun 2024" },
    { name: "PowerShell Basics", issuer: "Cybrary", date: "2024" },
  ]

  const experience = [
    {
      role: "Founding Member",
      company: "Y3ti@Sec",
      period: "May 2025 - Present",
      highlights: [
        "Core CTF player focusing on pwn, web, reverse engineering, forensics, and SIEM",
        "Developed and maintained the team's website and internal resources",
        "Competed in international events: BlitzCTF, DUCTF, Hack A Flag",
        "Positioned at 4th in Nepal's CTF Team leaderboard (CTFTime)",
      ],
    },
    {
      role: "Cybersecurity Intern",
      company: "Sapience Edu Connect",
      period: "Jan 2025 - Feb 2025",
      highlights: [
        "Set up and configured security lab with Metasploitable and Kali Linux",
        "Solved 4 weekly tasks: Linux Basics, Phishing, vsftpd vulnerability analysis",
        "Exploited vsftpd vulnerability using Metasploit and performed privilege escalation",
        "Documented exploitation steps and mitigation measures",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                <Image
                  src="/favicon.ico"
                  alt="Prayush Hada"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">
                Prayush Hada
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#certifications" className="hover:text-primary transition-colors">
                Certifications
              </a>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#about" className="block py-2 hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="block py-2 hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="block py-2 hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="block py-2 hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#certifications" className="block py-2 hover:text-primary transition-colors">
                Certifications
              </a>
              <Link href="/blog" className="block py-2 hover:text-primary transition-colors">
                Blog
              </Link>
              <a href="#contact" className="block py-2 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Prayush</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Cybersecurity student and purple-team enthusiast with hands-on experience in penetration testing, CTF
                competitions, and defensive monitoring.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founding member of Y3ti@Sec (4th ranked CTF team in Nepal), skilled in exploiting and securing systems,
                building custom tools, and collaborating in competitive security environments.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/Itsjustme27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/prayush-hada-6b0357277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="mailto:reachprayush@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 flex-shrink-0">
                <Image
                  src="/favicon.ico"
                  alt="Prayush Hada"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate cybersecurity student at Medhavi College (Pokhara University) with a strong focus on
                ethical hacking, penetration testing, and defensive security. My journey started with curiosity about
                how systems work and how to protect them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a founding member of Y3ti@Sec, I actively participate in CTF competitions and have achieved top
                rankings in national and international events. I'm also skilled in full-stack development, automation,
                and building custom security tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not competing in CTFs or coding, you can find me exploring new security technologies,
                contributing to open-source projects, or learning about the latest cybersecurity trends.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
                <p className="text-muted-foreground mb-2">Bachelor in Computer System and Information Technology</p>
                <p className="text-sm text-muted-foreground mb-3">Medhavi College, Pokhara University • 2023 - 2027</p>
                <p className="text-xs text-muted-foreground">GPA: 3.42/4.00 (Current)</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Current Role</h3>
                <p className="text-muted-foreground mb-2">Founding Member - Y3ti@Sec</p>
                <p className="text-sm text-muted-foreground">CTF Team • 4th Ranked in Nepal</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Location & Contact</h3>
                <p className="text-muted-foreground mb-2">Bhaktapur, Nepal 🇳🇵</p>
                <p className="text-sm text-muted-foreground">+977 9841281920</p>
                <p className="text-sm text-muted-foreground">reachprayush@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors flex items-start gap-3"
              >
                <Award size={20} className="text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                  {cert.detail && <p className="text-xs text-accent mt-2">{cert.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing cybersecurity, CTF challenges, development projects, and new
            opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <a
              href="https://github.com/Itsjustme27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/prayush-hada-6b0357277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:reachprayush@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <a
            href="mailto:reachprayush@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 Prayush Hada. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

