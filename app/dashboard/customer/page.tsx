import Link from "next/link"
import Image from "next/image"
import { BarChart3, Search, Star, Clock, MessageSquare, Bell, Filter, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CustomerDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-6">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px]">
          <nav className="grid items-start gap-2">
            <Link href="/dashboard/customer">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/customer/discover">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Search className="h-4 w-4" />
                Discover
              </Button>
            </Link>
            <Link href="/dashboard/customer/favorites">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Star className="h-4 w-4" />
                Favorites
              </Button>
            </Link>
            <Link href="/dashboard/customer/history">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Clock className="h-4 w-4" />
                History
              </Button>
            </Link>
            <Link href="/dashboard/customer/messages">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                Messages
              </Button>
            </Link>
            <Link href="/dashboard/customer/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
        </aside>
        <main className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Discover Startups</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
            <Input type="text" placeholder="Search startups..." />
            <Button type="submit">Search</Button>
          </div>
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Technology
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Healthcare
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Finance
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Education
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              E-commerce
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Early Stage
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-muted">
              Growth
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Startup Card 1 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">AI</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Assistant Inc.</CardTitle>
                    <CardDescription>AI-powered productivity tools</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="AI Assistant Inc."
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  AI Assistant Inc. is developing cutting-edge AI tools to help businesses automate routine tasks and
                  boost productivity.
                </p>
                <div className="flex gap-2 mt-3">
                  <Badge>Technology</Badge>
                  <Badge>Early Stage</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Star className="mr-2 h-4 w-4" />
                  Follow
                </Button>
                <Button size="sm">View Profile</Button>
              </CardFooter>
            </Card>

            {/* Startup Card 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">HC</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">HealthConnect</CardTitle>
                    <CardDescription>Telehealth platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="HealthConnect"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  HealthConnect is revolutionizing healthcare access with a platform that connects patients with
                  healthcare providers remotely.
                </p>
                <div className="flex gap-2 mt-3">
                  <Badge>Healthcare</Badge>
                  <Badge>Growth</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Star className="mr-2 h-4 w-4" />
                  Follow
                </Button>
                <Button size="sm">View Profile</Button>
              </CardFooter>
            </Card>

            {/* Startup Card 3 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">EL</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">EduLearn</CardTitle>
                    <CardDescription>Online learning platform</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="EduLearn"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  EduLearn is making education accessible to everyone with an interactive online learning platform
                  featuring courses from top educators.
                </p>
                <div className="flex gap-2 mt-3">
                  <Badge>Education</Badge>
                  <Badge>Early Stage</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Star className="mr-2 h-4 w-4" />
                  Follow
                </Button>
                <Button size="sm">View Profile</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline">Load More</Button>
          </div>
        </main>
      </div>
    </div>
  )
}

