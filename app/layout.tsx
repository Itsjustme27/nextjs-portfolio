import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { profile } from "@/lib/content"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.objective,
  authors: [{ name: profile.name }],
  keywords: [
    "Prayush Hada",
    "SOC Analyst",
    "detection engineering",
    "penetration testing",
    "vulnerability research",
    "kernel security",
    "CTF",
    "Y3ti@Sec",
    "Nepal",
  ],
  openGraph: {
    type: "profile",
    title: `${profile.name} — ${profile.role}`,
    description: profile.objective,
    siteName: profile.name,
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
}

/**
 * Runs before first paint so the stored theme is applied without a flash of
 * the wrong one. Kept inline and synchronous on purpose — anything deferred
 * would reintroduce the flash.
 */
const themeInitScript = `
(function () {
  var root = document.documentElement;
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" ? "light" : "dark";
    root.classList.toggle("dark", theme === "dark");
  } catch (e) {
    root.classList.add("dark");
  }
  try {
    // The stylesheet may not be applied yet at this point, so fall back to a
    // literal that matches the theme we just resolved.
    var bg = getComputedStyle(root).getPropertyValue("--background").trim();
    var meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = bg || (root.classList.contains("dark") ? "#0e1013" : "#fafafb");
    document.head.appendChild(meta);
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
