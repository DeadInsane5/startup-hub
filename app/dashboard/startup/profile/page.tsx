"use client"

import { useState } from "react"
import Image from "next/image"
import {
  FileText,
  Upload,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Plus,
  Trash2,
  Edit,
  Check,
  Shield,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function StartupProfile() {
  const [verificationStatus, setVerificationStatus] = useState<"unverified" | "pending" | "verified">("unverified")
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Sarah Johnson", role: "CEO & Co-founder", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Michael Chen", role: "CTO & Co-founder", image: "/placeholder.svg?height=100&width=100" },
    { id: 3, name: "David Rodriguez", role: "Head of Product", image: "/placeholder.svg?height=100&width=100" },
  ])

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Startup Profile</h1>
        <div className="flex items-center gap-2">
          {verificationStatus === "unverified" && (
            <Button onClick={() => setVerificationStatus("pending")}>
              <Shield className="mr-2 h-4 w-4" />
              Request Verification
            </Button>
          )}
          {verificationStatus === "pending" && (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
              Verification Pending
            </Badge>
          )}
          {verificationStatus === "verified" && (
            <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
              <Check className="mr-1 h-3 w-3" /> Verified
            </Badge>
          )}
          <Button>
            <Check className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="social">Social & Links</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your startup's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width={200}
                      height={200}
                      alt="Company Logo"
                      className="rounded-lg border object-cover w-[200px] h-[200px]"
                    />
                    <Button size="sm" variant="outline" className="absolute bottom-2 right-2">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Company Logo (800x800px recommended)</p>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" defaultValue="AI Assistant Inc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="founded">Founded</Label>
                      <Input id="founded" type="date" defaultValue="2022-01-15" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input id="tagline" defaultValue="AI-powered productivity tools" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      className="min-h-[120px]"
                      defaultValue="AI Assistant Inc. is developing cutting-edge AI tools to help businesses automate routine tasks and boost productivity. Our flagship product uses natural language processing to understand and execute complex workflows, saving teams hours of manual work each week."
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Company Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select defaultValue="technology">
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stage">Development Stage</Label>
                    <Select defaultValue="early">
                      <SelectTrigger id="stage">
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">Idea Stage</SelectItem>
                        <SelectItem value="mvp">MVP</SelectItem>
                        <SelectItem value="early">Early Traction</SelectItem>
                        <SelectItem value="growth">Growth</SelectItem>
                        <SelectItem value="scale">Scaling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="team-size">Team Size</Label>
                    <Input id="team-size" type="number" defaultValue="12" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Location</h3>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="123 Startup Street" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" defaultValue="CA" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" defaultValue="94103" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How investors and customers can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="info@aiassistant.example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://aiassistant.example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Primary Contact Name</Label>
                  <Input id="contact-name" defaultValue="Sarah Johnson" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage your startup's team</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex flex-col items-center p-4 border rounded-lg">
                    <div className="relative">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold text-center">{member.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{member.role}</p>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg border-dashed h-[220px]">
                  <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Add Team Member</p>
                  <Button size="sm" variant="outline" className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Settings</CardTitle>
              <CardDescription>Configure team display options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-team">Show Team on Profile</Label>
                  <p className="text-sm text-muted-foreground">Display team members on your public profile</p>
                </div>
                <Switch id="show-team" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-roles">Show Team Roles</Label>
                  <p className="text-sm text-muted-foreground">Display team member roles on your public profile</p>
                </div>
                <Switch id="show-roles" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-social">Show Team Social Links</Label>
                  <p className="text-sm text-muted-foreground">Display team member social media links</p>
                </div>
                <Switch id="show-social" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Media Gallery</CardTitle>
                <CardDescription>Showcase your startup with images and videos</CardDescription>
              </div>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Media
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Product Screenshot"
                    className="rounded-lg border object-cover w-full aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm mt-1">Product Screenshot 1</p>
                </div>
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Product Screenshot"
                    className="rounded-lg border object-cover w-full aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm mt-1">Product Screenshot 2</p>
                </div>
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Team Photo"
                    className="rounded-lg border object-cover w-full aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm mt-1">Team Photo</p>
                </div>
                <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 aspect-video">
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Upload Media</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Documents</CardTitle>
                <CardDescription>Upload pitch decks, business plans, and other documents</CardDescription>
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
                      <p className="font-medium">Business Plan.pdf</p>
                      <p className="text-sm text-muted-foreground">3.1 MB • Uploaded 1 month ago</p>
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
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Pitch</CardTitle>
              <CardDescription>Upload a video pitch to showcase your startup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Upload Video Pitch</p>
                <p className="text-xs text-muted-foreground mt-1">MP4, MOV up to 100MB (2-3 minutes recommended)</p>
                <Button size="sm" className="mt-4">
                  Upload Video
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                  <div className="flex-1">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input id="twitter" placeholder="@yourstartup" defaultValue="@aiassistant" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-[#0077B5]" />
                  <div className="flex-1">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="linkedin.com/company/yourstartup"
                      defaultValue="linkedin.com/company/aiassistant"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                  <div className="flex-1">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      placeholder="facebook.com/yourstartup"
                      defaultValue="facebook.com/aiassistant"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-[#E4405F]" />
                  <div className="flex-1">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      placeholder="instagram.com/yourstartup"
                      defaultValue="instagram.com/aiassistant"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>External Links</CardTitle>
              <CardDescription>Add links to your website, blog, or other platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <Label htmlFor="website-url">Website</Label>
                    <Input
                      id="website-url"
                      placeholder="https://yourstartup.com"
                      defaultValue="https://aiassistant.example.com"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <Label htmlFor="blog">Blog</Label>
                    <Input
                      id="blog"
                      placeholder="https://blog.yourstartup.com"
                      defaultValue="https://blog.aiassistant.example.com"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <Label htmlFor="other-link">Other Link</Label>
                    <Input id="other-link" placeholder="https://example.com" />
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Visibility</CardTitle>
              <CardDescription>Control who can see your startup profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="public-profile">Public Profile</Label>
                  <p className="text-sm text-muted-foreground">Make your profile visible to everyone</p>
                </div>
                <Switch id="public-profile" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-funding">Show Funding Information</Label>
                  <p className="text-sm text-muted-foreground">Display your funding goals and progress</p>
                </div>
                <Switch id="show-funding" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-contact">Show Contact Information</Label>
                  <p className="text-sm text-muted-foreground">Display your contact details on your profile</p>
                </div>
                <Switch id="show-contact" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="show-metrics">Show Metrics</Label>
                  <p className="text-sm text-muted-foreground">Display profile views and engagement metrics</p>
                </div>
                <Switch id="show-metrics" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification</CardTitle>
              <CardDescription>Verify your startup to build trust with users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {verificationStatus === "unverified" && (
                <div className="space-y-4">
                  <p className="text-sm">
                    Verification helps build trust with potential investors and customers. Submit the required
                    documentation to get verified.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="business-registration">Business Registration Document</Label>
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
                      <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Business Registration</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG up to 5MB</p>
                      <Button size="sm" className="mt-3">
                        Upload
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="id-verification">ID Verification</Label>
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center">
                      <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload ID Verification</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG up to 5MB</p>
                      <Button size="sm" className="mt-3">
                        Upload
                      </Button>
                    </div>
                  </div>
                  <Button onClick={() => setVerificationStatus("pending")} className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Submit for Verification
                  </Button>
                </div>
              )}

              {verificationStatus === "pending" && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-medium text-yellow-800 flex items-center gap-2">
                      <Shield className="h-4 w-4" /> Verification in Progress
                    </h3>
                    <p className="text-sm text-yellow-700 mt-1">
                      We're reviewing your verification documents. This process typically takes 2-3 business days.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Submitted Documents</h3>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <p className="text-sm">Business Registration.pdf</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <p className="text-sm">ID Verification.pdf</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {verificationStatus === "verified" && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-medium text-green-800 flex items-center gap-2">
                      <Check className="h-4 w-4" /> Verification Complete
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Your startup has been verified. The verification badge is now displayed on your profile.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Verification Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Verified On</p>
                        <p className="text-sm text-muted-foreground">March 15, 2024</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Valid Until</p>
                        <p className="text-sm text-muted-foreground">March 15, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delete Profile</CardTitle>
              <CardDescription>Permanently delete your startup profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Deleting your profile will remove all your data from our platform. This action cannot be undone.
                </p>
                <Button variant="destructive">Delete Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

