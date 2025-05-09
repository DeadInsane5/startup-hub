import { Hero1 } from '@/components/hero1'
import { Button } from '@/components/ui/button'
import { BarChart3, BookOpen, Calendar, MessageSquare, Rocket, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section>
        <Hero1
          badge=''
          heading='Connect Startups with Investors & Customers'
          description='The platform where innovative startups meet their audience, investors find opportunities, and ideas become reality.'
          buttons={{
            primary: { text: "Register as Startup", url: "/auth/register" },
            secondary: { text: "Join as Customer", url: "/auth/register" }
          }}
          image={{
            src: 'https://images.unsplash.com/photo-1555209183-8facf96a4349?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: ''
          }} />
      </section>

      <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
        <div className="container min-w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platform Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to connect, grow, and succeed in the startup ecosystem
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
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
            <div className="flex flex-col space-y-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Analytics & Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Track profile views, engagement metrics, and visitor demographics to optimize your startups presence.
                </p>
              </div>
            </div>
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

      <section className="w-full pb-12 md:pb-24 lg:pb-32 pt-6 md:pt-12 lg:pt-16">
        <div className="container min-w-full px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our growing community of startups, investors, and customers today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/register/startup">
                <Button size="lg">Register as Startup</Button>
              </Link>
              <Link href="/auth/register/customer">
                <Button size="lg" variant="outline">
                  Join as Customer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
