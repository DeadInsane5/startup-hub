import Image from "next/image"
import { FileText, Video, Download, Search, Filter, ArrowRight, Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Resources() {
  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Startup Resources</h1>
          <p className="text-muted-foreground">Guides, templates, and tools to help your startup succeed</p>
        </div>
        <div className="flex gap-2">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search resources..." />
            <Button type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="webinars">Webinars</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Guide Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="mb-2">Guide</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="mr-1 h-3 w-3" /> 15 min read
                  </div>
                </div>
                <CardTitle className="text-lg">The Ultimate Fundraising Guide for Early-Stage Startups</CardTitle>
                <CardDescription>Everything you need to know about raising your seed round</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="Fundraising Guide"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  This comprehensive guide covers everything from preparing your pitch deck to negotiating term sheets
                  and closing your seed round.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3" />
                  <span className="ml-1">(42)</span>
                </div>
                <Button size="sm">
                  Read Guide <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>

            {/* Template Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="mb-2">Template</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <FileText className="mr-1 h-3 w-3" /> PPTX, PDF
                  </div>
                </div>
                <CardTitle className="text-lg">Investor-Ready Pitch Deck Template</CardTitle>
                <CardDescription>A proven structure for successful fundraising pitches</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="Pitch Deck Template"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  This template includes 15 essential slides with guidance on what to include, how to structure your
                  narrative, and design tips.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <span className="ml-1">(78)</span>
                </div>
                <Button size="sm">
                  <Download className="mr-1 h-3 w-3" /> Download
                </Button>
              </CardFooter>
            </Card>

            {/* Video Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="mb-2">Video</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="mr-1 h-3 w-3" /> 45 min
                  </div>
                </div>
                <CardTitle className="text-lg">Product-Market Fit: How to Know When Youve Found It</CardTitle>
                <CardDescription>Expert insights on validating your startup idea</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=150&width=350"
                    width={350}
                    height={150}
                    alt="Product-Market Fit Video"
                    className="rounded-md object-cover w-full h-[150px] mb-3"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-background/80 p-3">
                      <Video className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  In this video, serial entrepreneur Sarah Johnson shares her framework for identifying and measuring
                  product-market fit.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3" />
                  <span className="ml-1">(36)</span>
                </div>
                <Button size="sm">
                  Watch Video <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>

            {/* Webinar Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="mb-2">Webinar</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="mr-1 h-3 w-3" /> Mar 15, 2:00 PM
                  </div>
                </div>
                <CardTitle className="text-lg">Legal Essentials for Startups: Protecting Your Business</CardTitle>
                <CardDescription>Live webinar with legal experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="Legal Webinar"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Join our panel of startup attorneys as they discuss intellectual property, contracts, and legal
                  structures for early-stage companies.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>125 registered</span>
                </div>
                <Button size="sm">Register Now</Button>
              </CardFooter>
            </Card>

            {/* Guide Card 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="mb-2">Guide</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="mr-1 h-3 w-3" /> 20 min read
                  </div>
                </div>
                <CardTitle className="text-lg">Customer Acquisition Strategies for B2B Startups</CardTitle>
                <CardDescription>Proven tactics to grow your customer base</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="Customer Acquisition Guide"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  This guide covers everything from content marketing and SEO to sales outreach and partnership
                  strategies for B2B startups.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3" />
                  <span className="ml-1">(29)</span>
                </div>
                <Button size="sm">
                  Read Guide <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>

            {/* Template Card 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <Badge className="mb-2">Template</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <FileText className="mr-1 h-3 w-3" /> XLSX, Google Sheets
                  </div>
                </div>
                <CardTitle className="text-lg">Financial Model for SaaS Startups</CardTitle>
                <CardDescription>Comprehensive spreadsheet with projections and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=150&width=350"
                  width={350}
                  height={150}
                  alt="Financial Model Template"
                  className="rounded-md object-cover w-full h-[150px] mb-3"
                />
                <p className="text-sm text-muted-foreground line-clamp-3">
                  This template includes revenue projections, expense forecasting, cash flow analysis, and key SaaS
                  metrics like CAC, LTV, and churn.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                  <span className="ml-1">(64)</span>
                </div>
                <Button size="sm">
                  <Download className="mr-1 h-3 w-3" /> Download
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Resources</Button>
          </div>
        </TabsContent>

        <TabsContent value="guides" className="pt-6">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Guides tab content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="pt-6">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Templates tab content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="pt-6">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Videos tab content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="webinars" className="pt-6">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Webinars tab content will be displayed here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

