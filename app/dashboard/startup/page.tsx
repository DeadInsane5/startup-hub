import Link from "next/link"
import {
  BarChart3,
  Users,
  DollarSign,
  Eye,
  MessageSquare,
  Bell,
  Plus,
  Upload,
  FileText,
  Calendar,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function StartupDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-6">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[250px]">
          <nav className="grid items-start gap-2">
            <Link href="/dashboard/startup">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/startup/profile">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Profile
              </Button>
            </Link>
            <Link href="/dashboard/startup/funding">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <DollarSign className="h-4 w-4" />
                Funding
              </Button>
            </Link>
            <Link href="/dashboard/startup/analytics">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Eye className="h-4 w-4" />
                Analytics
              </Button>
            </Link>
            <Link href="/dashboard/startup/messages">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                Messages
              </Button>
            </Link>
            <Link href="/dashboard/startup/jobs">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Job Board
              </Button>
            </Link>
            <Link href="/dashboard/startup/events">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </Button>
            </Link>
            <Link href="/dashboard/startup/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
          </nav>
        </aside>
        <main className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Startup Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Update Materials
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Campaign
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Followers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">342</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Funding Progress</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,000</div>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>45% of $100,000 goal</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Messages</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">3 unread messages</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your startup's recent engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">New follower</p>
                          <p className="text-xs text-muted-foreground">Jane Smith started following your startup</p>
                        </div>
                        <div className="text-xs text-muted-foreground">2h ago</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">New message</p>
                          <p className="text-xs text-muted-foreground">You received a message from Investor Capital</p>
                        </div>
                        <div className="text-xs text-muted-foreground">5h ago</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Eye className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Profile view spike</p>
                          <p className="text-xs text-muted-foreground">Your profile received 50+ views yesterday</p>
                        </div>
                        <div className="text-xs text-muted-foreground">1d ago</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Funding update</p>
                          <p className="text-xs text-muted-foreground">You received a new investment of $5,000</p>
                        </div>
                        <div className="text-xs text-muted-foreground">2d ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Events you might be interested in</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Pitch Competition</h3>
                          <span className="text-xs text-muted-foreground">Mar 15</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Present your startup to a panel of investors</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          Register
                        </Button>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Networking Mixer</h3>
                          <span className="text-xs text-muted-foreground">Mar 22</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Connect with other founders and investors</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          RSVP
                        </Button>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Funding Workshop</h3>
                          <span className="text-xs text-muted-foreground">Mar 28</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Learn strategies for securing investment</p>
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Visitor Analytics</CardTitle>
                  <CardDescription>Detailed metrics about your startup's profile visitors</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Analytics chart will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="engagement" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                  <CardDescription>How users are interacting with your startup profile</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Engagement metrics will be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

