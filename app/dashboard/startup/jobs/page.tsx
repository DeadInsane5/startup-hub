"use client"

import { useState } from "react"
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function StartupJobs() {
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: "Senior Machine Learning Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      salary: "$120K - $160K",
      posted: "2 weeks ago",
      applicants: 12,
      status: "active",
    },
    {
      id: 2,
      title: "Product Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: false,
      salary: "$110K - $140K",
      posted: "1 week ago",
      applicants: 8,
      status: "active",
    },
    {
      id: 3,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      remote: true,
      salary: "$90K - $120K",
      posted: "3 days ago",
      applicants: 15,
      status: "active",
    },
    {
      id: 4,
      title: "Marketing Intern",
      location: "San Francisco, CA",
      type: "Part-time",
      remote: true,
      salary: "$25/hr",
      posted: "1 month ago",
      applicants: 20,
      status: "closed",
    },
  ])

  const [openJobDialog, setOpenJobDialog] = useState(false)

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Job Board</h1>
        <div className="flex items-center gap-2">
          <Dialog open={openJobDialog} onOpenChange={setOpenJobDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Post a New Job</DialogTitle>
                <DialogDescription>Create a new job posting to attract talent to your startup.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="e.g., Senior Software Engineer" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select>
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g., San Francisco, CA" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="remote" />
                  <Label htmlFor="remote">Remote Available</Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salary-min">Salary Min</Label>
                    <Input id="salary-min" placeholder="e.g., $80,000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary-max">Salary Max</Label>
                    <Input id="salary-max" placeholder="e.g., $120,000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the role, responsibilities, and requirements"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Required Skills</Label>
                  <Input id="skills" placeholder="e.g., React, Node.js, Python (comma separated)" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenJobDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenJobDialog(false)}>Post Job</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="closed">Closed Jobs</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6 mt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs..." className="w-full pl-8" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="space-y-4">
            {jobPostings
              .filter((job) => job.status === "active")
              .map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {job.location}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> {job.type}
                            </Badge>
                            {job.remote && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                Remote
                              </Badge>
                            )}
                            <Badge variant="outline" className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" /> {job.salary}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> Posted {job.posted}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" /> {job.applicants} applicants
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="mr-2 h-4 w-4" />
                          View Applicants
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Close
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            <Card className="border-2 border-dashed">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Post a New Job</p>
                <p className="text-xs text-muted-foreground mt-1 mb-3">Attract talent to your startup</p>
                <Button onClick={() => setOpenJobDialog(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Post Job
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6 mt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search applications..." className="w-full pl-8" />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                <SelectItem value="ml-engineer">ML Engineer</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Senior Machine Learning Engineer</CardTitle>
              <CardDescription>12 applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">JD</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-xs text-muted-foreground">Applied 3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>New</Badge>
                    <Button size="sm" variant="outline">
                      View Resume
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">JS</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Jane Smith</h3>
                      <p className="text-xs text-muted-foreground">Applied 1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Reviewed</Badge>
                    <Button size="sm" variant="outline">
                      View Resume
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">RJ</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Robert Johnson</h3>
                      <p className="text-xs text-muted-foreground">Applied 2 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <CheckCircle className="mr-1 h-3 w-3" /> Interviewed
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Resume
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Applicants
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Manager</CardTitle>
              <CardDescription>8 applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">EW</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Emily Wong</h3>
                      <p className="text-xs text-muted-foreground">Applied 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>New</Badge>
                    <Button size="sm" variant="outline">
                      View Resume
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">MC</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Michael Chen</h3>
                      <p className="text-xs text-muted-foreground">Applied 5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Reviewed</Badge>
                    <Button size="sm" variant="outline">
                      View Resume
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Applicants
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="closed" className="space-y-6 mt-6">
          <div className="space-y-4">
            {jobPostings
              .filter((job) => job.status === "closed")
              .map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {job.location}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" /> {job.type}
                            </Badge>
                            {job.remote && (
                              <Badge variant="outline" className="flex items-center gap-1">
                                Remote
                              </Badge>
                            )}
                            <Badge variant="outline" className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" /> {job.salary}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> Posted {job.posted}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" /> {job.applicants} applicants
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Closed</Badge>
                        <Button variant="outline" size="sm">
                          <Users className="mr-2 h-4 w-4" />
                          View Applicants
                        </Button>
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          Repost
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

