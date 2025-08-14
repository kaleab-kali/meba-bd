import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "Happy Birthday Meba! 🎉",
  description: "A special birthday celebration for the amazing Meba",
  icons: {
    icon: "/glowing-heart-golden-light.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}> 
      <head>
        <link rel="icon" href="/glowing-heart-golden-light.png" type="image/png" />
        <title>Happy Birthday Meba! 🎉</title>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
