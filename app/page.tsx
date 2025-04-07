import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Rocket, Users, BarChart3, BookOpen, Calendar, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Connect Startups with Investors & Customers
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The platform where innovative startups meet their audience, investors find opportunities, and ideas
                  become reality.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register/startup">
                  <Button size="lg" className="w-full">
                    Register as Startup <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register/customer">
                  <Button size="lg" variant="outline" className="w-full">
                    Join as Customer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Platform Preview"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platform Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to connect, grow, and succeed in the startup ecosystem
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* For Startups */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">For Startups</h3>
                <p className="text-sm text-muted-foreground">
                  Create detailed profiles, upload pitch materials, connect with investors, post jobs, and access
                  mentorship.
                </p>
              </div>
            </div>
            {/* For Customers */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">For Customers</h3>
                <p className="text-sm text-muted-foreground">
                  Discover innovative startups, follow favorites, leave reviews, invest directly, and join community
                  discussions.
                </p>
              </div>
            </div>
            {/* Analytics */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Analytics & Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Track profile views, engagement metrics, and visitor demographics to optimize your startup's presence.
                </p>
              </div>
            </div>
            {/* Resources */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Resources & Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Access guides, templates, webinars, and mentorship opportunities to accelerate your growth.
                </p>
              </div>
            </div>
            {/* Events */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Virtual Events</h3>
                <p className="text-sm text-muted-foreground">
                  Attend online pitch sessions, webinars, and Q&As with founders to stay connected with the ecosystem.
                </p>
              </div>
            </div>
            {/* Community */}
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Community Forums</h3>
                <p className="text-sm text-muted-foreground">
                  Join discussions, share insights, and network with others in the startup community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our growing community of startups, investors, and customers today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register/startup">
                <Button size="lg">Register as Startup</Button>
              </Link>
              <Link href="/register/customer">
                <Button size="lg" variant="outline">
                  Join as Customer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

