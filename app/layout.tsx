import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Search, Menu, Rocket } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Startup Platform",
  description: "Connect startups with investors and customers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                      <Rocket className="h-6 w-6" />
                      <span className="text-xl font-bold">StartupHub</span>
                    </Link>
                    <nav className="hidden md:flex gap-6 ml-6">
                      <Link href="/discover" className="text-sm font-medium hover:underline underline-offset-4">
                        Discover
                      </Link>
                      <Link href="/investors" className="text-sm font-medium hover:underline underline-offset-4">
                        Investors
                      </Link>
                      <Link href="/resources" className="text-sm font-medium hover:underline underline-offset-4">
                        Resources
                      </Link>
                      <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
                        Events
                      </Link>
                      <Link href="/community" className="text-sm font-medium hover:underline underline-offset-4">
                        Community
                      </Link>
                    </nav>
                  </div>
                  <div className="flex items-center gap-4">
                    <form className="hidden md:flex relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search startups..." className="w-[200px] lg:w-[300px] pl-8" />
                    </form>
                    <Link href="/login">
                      <Button variant="ghost" size="sm">
                        Log in
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button size="sm">Sign up</Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      <span className="font-semibold">StartupHub</span>
                    </Link>
                    <p className="text-sm text-muted-foreground">© 2024 StartupHub. All rights reserved.</p>
                  </div>
                  <nav className="flex gap-4 text-sm">
                    <Link href="/about" className="text-muted-foreground hover:underline underline-offset-4">
                      About
                    </Link>
                    <Link href="/privacy" className="text-muted-foreground hover:underline underline-offset-4">
                      Privacy
                    </Link>
                    <Link href="/terms" className="text-muted-foreground hover:underline underline-offset-4">
                      Terms
                    </Link>
                    <Link href="/contact" className="text-muted-foreground hover:underline underline-offset-4">
                      Contact
                    </Link>
                  </nav>
                </div>
              </footer>
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

