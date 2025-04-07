"use client"

import { useState } from "react"
import { BookOpen, Star, Filter, Search, Plus, ArrowRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function StartupMentorship() {
  const [openRequestDialog, setOpenRequestDialog] = useState(false)
  
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Mentorship</h1>
        <div className="flex items-center gap-2">
          <Dialog open={openRequestDialog} onOpenChange={setOpenRequestDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Request Mentorship
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Request Mentorship</DialogTitle>
                <DialogDescription>
                  Connect with an experienced mentor to help guide your startup.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mentorship area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product Development</SelectItem>
                      <SelectItem value="marketing">Marketing & Growth</SelectItem>
                      <SelectItem value="fundraising">Fundraising</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred meeting frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="oneoff">One-time consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Describe what you're looking for in a mentor and your specific goals"
                    className="min-h-[150px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenRequestDialog(false)}>Cancel</Button>
                <Button onClick={() => setOpenRequestDialog(false)}>Submit Request</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Tabs defaultValue="mentors">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
          <TabsTrigger value="sessions">My Sessions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mentors" className="space-y-6 mt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search mentors..."
                  className="w-full pl-8"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Expertise</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="fundraising">Fundraising</SelectItem>
                <SelectItem value="tech">Technology</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Sarah Johnson</CardTitle>
                    <CardDescription className="text-xs">Former VP of Product at TechCorp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Product Strategy</Badge>
                  <Badge variant="outline">UX Design</Badge>
                  <Badge variant="outline">Go-to-Market</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  15+ years of experience building and scaling products from zero to millions of users. Specialized in AI and SaaS products.
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                  </span>
                  <span>25 mentees</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Mentorship</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Michael Chen</CardTitle>
                    <CardDescription className="text-xs">Angel Investor & Former CTO</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Fundraising</Badge>
                  <Badge variant="outline">Pitch Decks</Badge>
                  <Badge variant="outline">Investor Relations</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Angel investor with 50+ investments in early-stage startups. Expertise in helping founders craft compelling pitches and connect with investors.
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3" />
                  </span>
                  <span>18 mentees</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Mentorship</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emily Wong" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Emily Wong</CardTitle>
                    <CardDescription className="text-xs">Growth Marketing Director</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Growth Marketing</Badge>
                  <Badge variant="outline">Customer Acquisition</Badge>
                  <Badge variant="outline">Content Strategy</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Specializes in helping early-stage startups build effective marketing strategies with limited budgets. Expert in digital marketing and analytics.
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                  </span>
                  <span>32 mentees</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Mentorship</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David Rodriguez" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">David Rodriguez</CardTitle>
                    <CardDescription className="text-xs">Tech Lead at AI Innovations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">Technical Architecture</Badge>
                  <Badge variant="outline">Scaling</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Expert in building and scaling AI-powered applications. Can help with technical architecture, ML model selection, and engineering team growth.
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3" />
                  </span>
                  <span>15 mentees</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Mentorship</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jessica Lee" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Jessica Lee</CardTitle>
                    <CardDescription className="text-xs">Operations Director & Startup Advisor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Operations</Badge>
                  <Badge variant="outline">Team Building</Badge>
                  <Badge variant="outline">Process Optimization</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Helps startups build efficient operations and processes. Expert in team structure, hiring, and creating scalable operational frameworks.
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                  </span>
                  <span>22 mentees</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Mentorship</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Robert Johnson" />
                    <AvatarFallback>RJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Robert Johnson</CardTitle>
                    <CardDescription className="text-xs">Serial Entrepreneur & Founder Coach</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Founder Mindset</Badge>
                  <Badge variant="outline">Strategy</Badge>
                  <Badge variant="outline">Leadership</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Founded and exited three successful startups. Coaches founders on leadership, strategic decision-making, and maintaining work-life balance.
                </p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <Star className="h-3 w-3 fill-primary text-primary" />
                  </span>
                  <span>40 mentees</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Mentorship</Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="flex justify-center mt-4">
            <Button variant="outline">Load More Mentors</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="sessions" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Sarah Johnson</h3>
                      <p className="text-xs text-muted-foreground">Product Strategy Session</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">March 15, 2024</p>
                    <p className="text-xs text-muted-foreground">2:00 PM - 3:00 PM PST</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm">Join Meeting</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Michael Chen</h3>
                      <p className="text-xs text-muted-foreground">Fundraising Strategy</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">March 22, 2024</p>
                    <p className="text-xs text-muted-foreground">10:00 AM - 11:00 AM PST</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm" variant="outline">Join Meeting</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
              <CardDescription>Your completed mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emily Wong" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Emily Wong</h3>
                      <p className="text-xs text-muted-foreground">Marketing Strategy Session</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">February 28, 2024</p>
                    <p className="text-xs text-muted-foreground">1:00 PM - 2:00 PM PST</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Notes</Button>
                    <Button size="sm">Leave Feedback</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Robert Johnson" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Robert Johnson</h3>
                      <p className="text-xs text-muted-foreground">Founder Coaching Session</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">February 15, 2024</p>
                    <p className="text-xs text-muted-foreground">11:00 AM - 12:00 PM PST</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Notes</Button>
                    <Button size="sm" variant="outline">Leave Feedback</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Past Sessions</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pending Requests</CardTitle>
              <CardDescription>Mentorship requests awaiting response</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David Rodriguez" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">David Rodriguez</h3>
                      <p className="text-xs text-muted-foreground">Technical Architecture Review</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Pending
                    </Badge>
                    <p className="text-xs text-muted-foreground">Requested 2 days ago</p>
                  </div>
                  <Button size="sm" variant="outline">Cancel Request</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jessica Lee" />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Jessica Lee</h3>
                      <p className="text-xs text-muted-foreground">Operations Strategy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Pending
                    </Badge>
                    <p className="text-xs text-muted-foreground">Requested 1 week ago</p>
                  </div>
                  <Button size="sm" variant="outline">Cancel Request</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Resources</CardTitle>
              <CardDescription>Guides and materials to help you get the most from mentorship</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">How to Prepare for Your First Mentorship Session</h3>
                      <p className="text-xs text-muted-foreground">Guide • 10 min read</p>
                    </div>
                  </div>
                  <Button size="sm">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Setting Effective Goals with Your Mentor</h3>
                      <p className="text-xs text-muted-foreground">Guide • 15 min read</p>
                    </div>
                  </div>
                  <Button size="sm">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mentorship Session Template</h3>
                      <p className="text-xs text-muted-foreground">Template • DOCX</p>
                    </div>
                  </div>
                  <Button size="sm">
                    Download <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Workshops</CardTitle>
              <CardDescription>Group mentorship and learning opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-muted rounded-md p-2 w-12 h-12">
                    <span className="text-xs font-medium">MAR</span>
                    <span className="text-lg font-bold">15</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Fundraising Masterclass</h3>
                    <p className="text-xs text-muted-foreground">Virtual Workshop • 2:00 PM PST</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn proven strategies for raising your seed round from experienced investors.
                    </p>
                  </div>
                  <Button size="sm">Register</Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-muted rounded-md p-2 w-12 h-12">
                    <span className="text-xs font-medium">MAR</span>
                    <span className="text-lg font-bold">22</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Product-Market Fit Workshop</h3>
                    <p className="text-xs text-muted-foreground">Virtual Workshop • 11:00 AM PST</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn how to validate your product and find the right market fit.
                    </p>
                  </div>
                  <Button size="sm">Register</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

