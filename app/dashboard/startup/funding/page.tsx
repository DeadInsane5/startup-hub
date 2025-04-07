"use client"

import { useState } from "react"
import Image from "next/image"
import { DollarSign, Users, BarChart3, Calendar, Plus, Edit, ArrowRight, Check, FileText, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

export default function StartupFunding() {
  const [activeCampaign, setActiveCampaign] = useState(true)

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Funding</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="investors">Investors</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,000</div>
                <p className="text-xs text-muted-foreground">+$5,000 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Investors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Funding Goal</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$100,000</div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>45% Complete</span>
                    <span>$45,000 of $100,000</span>
                  </div>
                  <Progress value={45} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Campaign Ends</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 days</div>
                <p className="text-xs text-muted-foreground">Ends on May 15, 2024</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Active Campaign</CardTitle>
                <CardDescription>Your current fundraising campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      width={250}
                      height={150}
                      alt="Campaign Image"
                      className="rounded-lg border object-cover w-full aspect-video"
                    />
                  </div>
                  <div className="w-full md:w-2/3 space-y-3">
                    <h3 className="font-semibold text-lg">Seed Round for AI Assistant</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Seed</Badge>
                      <Badge variant="outline">Technology</Badge>
                      <Badge variant="outline">AI</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Raising funds to accelerate product development and expand our team.
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>45% Complete</span>
                        <span>$45,000 of $100,000</span>
                      </div>
                      <Progress value={45} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Switch checked={activeCampaign} onCheckedChange={setActiveCampaign} id="active-campaign" />
                    <Label htmlFor="active-campaign">Active</Label>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button size="sm">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Investments</CardTitle>
                <CardDescription>Latest investments in your startup</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Angel Investor Group</p>
                        <p className="text-sm font-semibold">$10,000</p>
                      </div>
                      <p className="text-xs text-muted-foreground">March 10, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Tech Ventures</p>
                        <p className="text-sm font-semibold">$25,000</p>
                      </div>
                      <p className="text-xs text-muted-foreground">February 28, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Jane Smith</p>
                        <p className="text-sm font-semibold">$5,000</p>
                      </div>
                      <p className="text-xs text-muted-foreground">February 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-sm font-semibold">$5,000</p>
                      </div>
                      <p className="text-xs text-muted-foreground">February 10, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Investments
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Investor Matches</CardTitle>
              <CardDescription>Potential investors that match your startup profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">TV</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Tech Ventures</h3>
                      <p className="text-xs text-muted-foreground">Seed & Series A</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        AI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SaaS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        B2B
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Invests $50K-$500K in early-stage tech startups with AI focus.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="mr-1 h-3 w-3" /> 92% Match
                    </Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">AI</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Capital</h3>
                      <p className="text-xs text-muted-foreground">Seed</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        AI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ML
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Data
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Specialized in AI startups with innovative technology and strong teams.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="mr-1 h-3 w-3" /> 88% Match
                    </Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">FV</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Future Ventures</h3>
                      <p className="text-xs text-muted-foreground">Seed & Series A</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Tech
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Enterprise
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SaaS
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Invests in technology startups with enterprise solutions and recurring revenue.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="mr-1 h-3 w-3" /> 75% Match
                    </Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Matches
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Your Campaigns</CardTitle>
                <CardDescription>Manage your fundraising campaigns</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Campaign
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <Image
                        src="/placeholder.svg?height=150&width=250"
                        width={250}
                        height={150}
                        alt="Campaign Image"
                        className="rounded-lg border object-cover w-full aspect-video"
                      />
                    </div>
                    <div className="w-full md:w-3/4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">Seed Round for AI Assistant</h3>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Seed</Badge>
                        <Badge variant="outline">Technology</Badge>
                        <Badge variant="outline">AI</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Raising funds to accelerate product development and expand our team.
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>45% Complete</span>
                          <span>$45,000 of $100,000</span>
                        </div>
                        <Progress value={45} />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Started: Feb 1, 2024</span>
                        <span>Ends: May 15, 2024</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button size="sm">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/4">
                      <Image
                        src="/placeholder.svg?height=150&width=250"
                        width={250}
                        height={150}
                        alt="Campaign Image"
                        className="rounded-lg border object-cover w-full aspect-video"
                      />
                    </div>
                    <div className="w-full md:w-3/4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">Pre-seed Friends & Family Round</h3>
                        <Badge className="bg-muted text-muted-foreground hover:bg-muted">Completed</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Pre-seed</Badge>
                        <Badge variant="outline">Technology</Badge>
                        <Badge variant="outline">AI</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Initial funding to build our MVP and validate the market.
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>100% Complete</span>
                          <span>$50,000 of $50,000</span>
                        </div>
                        <Progress value={100} />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Started: Aug 15, 2023</span>
                        <span>Ended: Nov 30, 2023</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                  <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Create New Campaign</p>
                  <p className="text-xs text-muted-foreground mt-1 mb-3">
                    Set up a new fundraising campaign for your startup
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Campaign
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Campaign</CardTitle>
              <CardDescription>Set up a new fundraising campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="e.g., Seed Round for AI Assistant" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="funding-type">Funding Type</Label>
                    <Select>
                      <SelectTrigger id="funding-type">
                        <SelectValue placeholder="Select funding type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-seed">Pre-seed</SelectItem>
                        <SelectItem value="seed">Seed</SelectItem>
                        <SelectItem value="series-a">Series A</SelectItem>
                        <SelectItem value="crowdfunding">Crowdfunding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="funding-goal">Funding Goal ($)</Label>
                    <Input id="funding-goal" type="number" placeholder="e.g., 100000" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-description">Campaign Description</Label>
                  <Textarea
                    id="campaign-description"
                    placeholder="Describe your fundraising campaign and how the funds will be used"
                    className="min-h-[120px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-image">Campaign Image</Label>
                  <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload Campaign Image</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB (1200x630px recommended)</p>
                    <Button size="sm" className="mt-3">
                      Upload
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="public-campaign">Public Campaign</Label>
                    <p className="text-sm text-muted-foreground">Make this campaign visible to all platform users</p>
                  </div>
                  <Switch id="public-campaign" defaultChecked />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Create Campaign</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="investors" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Investors</CardTitle>
              <CardDescription>People and organizations that have invested in your startup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">TV</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Tech Ventures</h3>
                      <p className="text-xs text-muted-foreground">Venture Capital</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$25,000</p>
                    <p className="text-xs text-muted-foreground">Feb 28, 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">AG</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Angel Investor Group</h3>
                      <p className="text-xs text-muted-foreground">Angel Investors</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$10,000</p>
                    <p className="text-xs text-muted-foreground">Mar 10, 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">JS</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Jane Smith</h3>
                      <p className="text-xs text-muted-foreground">Individual Investor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$5,000</p>
                    <p className="text-xs text-muted-foreground">Feb 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">JD</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-xs text-muted-foreground">Individual Investor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$5,000</p>
                    <p className="text-xs text-muted-foreground">Feb 10, 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Investors
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investor Matches</CardTitle>
              <CardDescription>Potential investors that match your startup profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">TV</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Tech Ventures</h3>
                      <p className="text-xs text-muted-foreground">Seed & Series A</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        AI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SaaS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        B2B
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Invests $50K-$500K in early-stage tech startups with AI focus.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="mr-1 h-3 w-3" /> 92% Match
                    </Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">AI</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Capital</h3>
                      <p className="text-xs text-muted-foreground">Seed</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        AI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ML
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Data
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Specialized in AI startups with innovative technology and strong teams.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="mr-1 h-3 w-3" /> 88% Match
                    </Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">FV</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Future Ventures</h3>
                      <p className="text-xs text-muted-foreground">Seed & Series A</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">
                        Tech
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Enterprise
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SaaS
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Invests in technology startups with enterprise solutions and recurring revenue.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="mr-1 h-3 w-3" /> 75% Match
                    </Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Matches
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investor Messages</CardTitle>
              <CardDescription>Recent messages from investors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-xs">TV</span>
                      </div>
                      <h3 className="font-semibold">Tech Ventures</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <p className="text-sm mb-3">
                    We're interested in learning more about your AI technology. Would you be available for a call next
                    week to discuss potential investment?
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">Reply</Button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-xs">AI</span>
                      </div>
                      <h3 className="font-semibold">AI Capital</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                  <p className="text-sm mb-3">
                    We've reviewed your pitch deck and would like to schedule a meeting to discuss your startup in more
                    detail.
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">Reply</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Messages
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Funding Documents</CardTitle>
                <CardDescription>Manage your funding-related documents</CardDescription>
              </div>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Pitch Deck.pdf</p>
                      <p className="text-sm text-muted-foreground">2.4 MB • Uploaded 2 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                    <Button size="sm" variant="destructive">
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Financial Projections.xlsx</p>
                      <p className="text-sm text-muted-foreground">1.8 MB • Uploaded 3 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                    <Button size="sm" variant="destructive">
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Term Sheet.pdf</p>
                      <p className="text-sm text-muted-foreground">1.2 MB • Uploaded 1 week ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                    <Button size="sm" variant="destructive">
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Cap Table.xlsx</p>
                      <p className="text-sm text-muted-foreground">0.9 MB • Uploaded 1 month ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                    <Button size="sm" variant="destructive">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
              <CardDescription>Add a new funding-related document</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="document-title">Document Title</Label>
                  <Input id="document-title" placeholder="e.g., Pitch Deck, Financial Projections" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="document-type">Document Type</Label>
                  <Select>
                    <SelectTrigger id="document-type">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pitch-deck">Pitch Deck</SelectItem>
                      <SelectItem value="financials">Financial Projections</SelectItem>
                      <SelectItem value="term-sheet">Term Sheet</SelectItem>
                      <SelectItem value="cap-table">Cap Table</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="document-visibility">Visibility</Label>
                  <Select defaultValue="private">
                    <SelectTrigger id="document-visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public (All Users)</SelectItem>
                      <SelectItem value="investors">Investors Only</SelectItem>
                      <SelectItem value="private">Private (Only You)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="document-upload">Upload Document</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload Document</p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, XLSX, PPTX up to 10MB</p>
                    <Button size="sm" className="mt-4">
                      Select File
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Upload Document</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

