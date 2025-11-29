import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "universanich - Elevated Home & Kitchen Essentials",
  description:
    "Discover thoughtfully curated home and kitchen essentials that blend timeless design with exceptional quality. Transform your everyday living with universanich.",
  generator: "v0.app",
  keywords: ["home", "kitchen", "cookware", "dinnerware", "home decor", "kitchen essentials", "modern home"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <header className="fixed top-0 w-full z-50">
          <div className="h-1 bg-gradient-to-r from-accent-warm via-primary to-accent-sage" />

          <div className="bg-background/95 backdrop-blur-2xl border-b border-border/40">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-between py-6 lg:py-8">
                <nav className="hidden lg:flex items-center gap-8 flex-1">
                  <Link
                    href="/shop"
                    className="text-sm font-medium tracking-wide hover:text-primary transition-all duration-300 relative group"
                  >
                    Shop
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                  <Link
                    href="/kitchen"
                    className="text-sm font-medium tracking-wide hover:text-primary transition-all duration-300 relative group"
                  >
                    Kitchen
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                  <Link
                    href="/home"
                    className="text-sm font-medium tracking-wide hover:text-primary transition-all duration-300 relative group"
                  >
                    Home
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </nav>

                <Link
                  href="/"
                  className="text-3xl lg:text-4xl font-serif font-light tracking-widest hover:tracking-[0.3em] transition-all duration-500 relative group mx-4"
                >
                  <span className="relative z-10">universanich</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-warm/0 via-accent-warm/10 to-accent-warm/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
                  <Link
                    href="/collections"
                    className="text-sm font-medium tracking-wide hover:text-primary transition-all duration-300 relative group"
                  >
                    Collections
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium tracking-wide hover:text-primary transition-all duration-300 relative group"
                  >
                    About
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </nav>

                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover:bg-accent-soft hover:text-primary transition-all"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-border py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"></div>
            <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 universanich.com. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
