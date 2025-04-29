import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Debayudh Basu - Blockchain Developer & Full Stack Engineer",
  description:
    "Portfolio of Debayudh Basu, a Blockchain Developer and Full Stack Developer specializing in Web3 technologies.",
  generator: "Next.js",
  icons: {
    icon: '/debayudh.jpeg',
    apple: '/debayudh.jpeg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
