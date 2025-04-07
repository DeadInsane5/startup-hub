import Image from "next/image"
import { Star, Share2, MessageSquare, DollarSign, Users, ArrowUpRight, Globe, Mail, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function StartupProfile() {
  return (
    <div className="container py-6 md:py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="AI Assistant Inc."
                className="rounded-lg object-cover w-full aspect-square"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">AI Assistant Inc.</h1>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Star className="h-4 w-4" />
                      <span className="sr-only">Follow</span>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground">AI-powered productivity tools</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Technology</Badge>
                <Badge>AI</Badge>
                <Badge>Productivity</Badge>
                <Badge>Early Stage</Badge>
              </div>
              <p className="text-sm">
                AI Assistant Inc. is developing cutting-edge AI tools to help businesses automate routine tasks and
                boost productivity. Our flagship product uses natural language processing to understand and execute
                complex workflows, saving teams hours of manual work each week.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Invest
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Founded in 2022, AI Assistant Inc. is on a mission to revolutionize how businesses handle routine
                    tasks. Our AI-powered platform learns from user behavior and automates complex workflows across
                    various business applications.
                  </p>
                  <p>
                    We're backed by leading venture capital firms and have a team of AI experts from top tech companies
                    and research institutions. Our technology has been recognized with innovation awards and featured in
                    major tech publications.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <h3 className="font-semibold">Founded</h3>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Headquarters</h3>
                      <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Team Size</h3>
                      <p className="text-sm text-muted-foreground">12 employees</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Development Stage</h3>
                      <p className="text-sm text-muted-foreground">Early Traction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product & Technology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our flagship product, AI Workflow Assistant, uses natural language processing and machine learning
                    to understand and execute complex workflows across various business applications. The platform
                    integrates with popular tools like Slack, Gmail, and Asana to automate routine tasks.
                  </p>
                  <p>Key features include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Natural language command processing</li>
                    <li>Cross-platform workflow automation</li>
                    <li>Adaptive learning from user behavior</li>
                    <li>Custom workflow creation and sharing</li>
                    <li>Detailed analytics on time saved and productivity gains</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Leadership Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex gap-4">
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground">CEO & Co-founder</p>
                        <p className="text-sm mt-1">Former AI Research Lead at Tech Giant, PhD in Machine Learning</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Michael Chen</h3>
                        <p className="text-sm text-muted-foreground">CTO & Co-founder</p>
                        <p className="text-sm mt-1">Former Senior Engineer at AI Lab, MS in Computer Science</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">David Rodriguez</h3>
                        <p className="text-sm text-muted-foreground">Head of Product</p>
                        <p className="text-sm mt-1">Former Product Manager at SaaS Company, MBA</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Emily Wong</h3>
                        <p className="text-sm text-muted-foreground">Head of Marketing</p>
                        <p className="text-sm mt-1">Former Marketing Director at Tech Startup, BA in Marketing</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="updates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Product Launch: AI Workflow Assistant 2.0</h3>
                        <span className="text-xs text-muted-foreground">March 10, 2024</span>
                      </div>
                      <p className="text-sm mb-2">
                        We're excited to announce the launch of AI Workflow Assistant 2.0, featuring enhanced natural
                        language processing and support for 10 new integrations.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Read more
                      </Button>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Seed Funding Round Completed</h3>
                        <span className="text-xs text-muted-foreground">February 15, 2024</span>
                      </div>
                      <p className="text-sm mb-2">
                        AI Assistant Inc. has successfully raised $3.5M in seed funding led by Tech Ventures with
                        participation from Angel Investors Group.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Read more
                      </Button>
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">New Partnership with Enterprise Solutions</h3>
                        <span className="text-xs text-muted-foreground">January 22, 2024</span>
                      </div>
                      <p className="text-sm mb-2">
                        We've partnered with Enterprise Solutions to bring our AI workflow automation to their 500+
                        corporate clients.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Read more
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Open Positions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Senior Machine Learning Engineer</h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">San Francisco, CA (Remote Option)</p>
                      <p className="text-sm mb-3">
                        We're looking for an experienced ML engineer to help improve our natural language processing
                        models and develop new AI capabilities.
                      </p>
                      <Button size="sm">Apply Now</Button>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Product Manager</h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">San Francisco, CA</p>
                      <p className="text-sm mb-3">
                        Join our product team to help shape the future of AI workflow automation and drive our product
                        roadmap.
                      </p>
                      <Button size="sm">Apply Now</Button>
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Frontend Developer</h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Remote</p>
                      <p className="text-sm mb-3">
                        Help build intuitive interfaces for our AI platform using React and modern frontend
                        technologies.
                      </p>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Funding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Round</span>
                  <span className="text-sm font-medium">Seed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Target</span>
                  <span className="text-sm font-medium">$5,000,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Raised</span>
                  <span className="text-sm font-medium">$3,500,000</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span>70% Complete</span>
                  <span>$3.5M of $5M</span>
                </div>
                <Progress value={70} />
              </div>
              <Button className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                Invest Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a href="https://aiassistant.example.com" className="text-sm hover:underline">
                    aiassistant.example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:info@aiassistant.example.com" className="text-sm hover:underline">
                    info@aiassistant.example.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <a href="#" className="text-sm hover:underline">
                    Download Pitch Deck
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center justify-center bg-muted rounded-md p-2 w-12 h-12">
                    <span className="text-xs font-medium">MAR</span>
                    <span className="text-lg font-bold">15</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Demo Day: AI Workflow Assistant</h3>
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
                    <h3 className="font-medium text-sm">AI in Business: Panel Discussion</h3>
                    <p className="text-xs text-muted-foreground">San Francisco • 6:00 PM PST</p>
                    <Button variant="link" className="p-0 h-auto text-xs">
                      Register <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

