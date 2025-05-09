import { MessageSquare, Users, Filter, Search, Plus, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Community() {
  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community</h1>
          <p className="text-muted-foreground">Connect with founders, investors, and startup enthusiasts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Search discussions..." />
            <Button type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>

          <Tabs defaultValue="discussions">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="discussions" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-xs">SJ</span>
                      </div>
                      <div>
                        <CardTitle className="text-base">Sarah Johnson</CardTitle>
                        <CardDescription className="text-xs">CEO at AI Assistant Inc.</CardDescription>
                      </div>
                    </div>
                    <Badge>Discussion</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Strategies for early-stage fundraising in the current market</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Id love to hear from other founders about their recent experiences with seed funding. Whats
                    working now? What channels are most effective?
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Fundraising</Badge>
                    <Badge variant="outline">Early Stage</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-xs text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> 24 replies
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> 156 views
                    </span>
                  </div>
                  <span>Posted 2 days ago</span>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-xs">DR</span>
                      </div>
                      <div>
                        <CardTitle className="text-base">David Rodriguez</CardTitle>
                        <CardDescription className="text-xs">Product Manager at TechCorp</CardDescription>
                      </div>
                    </div>
                    <Badge>Discussion</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Building a remote-first company culture</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    As more startups embrace remote work, Im curious how others are building strong company cultures
                    without a physical office.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Remote Work</Badge>
                    <Badge variant="outline">Company Culture</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-xs text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> 18 replies
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> 132 views
                    </span>
                  </div>
                  <span>Posted 3 days ago</span>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-xs">EW</span>
                      </div>
                      <div>
                        <CardTitle className="text-base">Emily Wong</CardTitle>
                        <CardDescription className="text-xs">Marketing Director at GrowthHacks</CardDescription>
                      </div>
                    </div>
                    <Badge>Discussion</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Content marketing strategies that actually work for startups</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Lets share content marketing approaches that have driven real results for early-stage startups with
                    limited budgets.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Marketing</Badge>
                    <Badge variant="outline">Content</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-xs text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> 31 replies
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> 215 views
                    </span>
                  </div>
                  <span>Posted 4 days ago</span>
                </CardFooter>
              </Card>

              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="questions" className="pt-4">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Questions tab content will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="announcements" className="pt-4">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Announcements tab content will be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Connect with the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center bg-muted rounded-md p-2 w-12 h-12">
                  <span className="text-xs font-medium">MAR</span>
                  <span className="text-lg font-bold">15</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Pitch Competition</h3>
                  <p className="text-xs text-muted-foreground">Virtual Event • 2:00 PM PST</p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Register <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center bg-muted rounded-md p-2 w-12 h-12">
                  <span className="text-xs font-medium">MAR</span>
                  <span className="text-lg font-bold">22</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Networking Mixer</h3>
                  <p className="text-xs text-muted-foreground">San Francisco • 6:00 PM PST</p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Register <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center bg-muted rounded-md p-2 w-12 h-12">
                  <span className="text-xs font-medium">MAR</span>
                  <span className="text-lg font-bold">28</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Funding Workshop</h3>
                  <p className="text-xs text-muted-foreground">Virtual Event • 11:00 AM PST</p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Register <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Fundraising
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Marketing
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Product Development
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Remote Work
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  AI
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Growth Strategies
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Hiring
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Pitch Decks
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Customer Acquisition
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Be respectful and constructive in all interactions</li>
                <li>No promotional content without context</li>
                <li>Respect confidentiality when requested</li>
                <li>Share knowledge freely to help others grow</li>
                <li>Report inappropriate content to moderators</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0 h-auto">
                Read Full Guidelines
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

