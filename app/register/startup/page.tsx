"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Rocket, ArrowLeft, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth/auth-provider"
import { supabase } from "@/lib/supabase/client"

export default function StartupRegistration() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const { signUp } = useAuth()

  // Form state
  const [formData, setFormData] = useState({
    // Account info
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

    // Startup info
    startupName: "",
    tagline: "",
    description: "",
    industry: "",
    stage: "",
    teamSize: "",
    website: "",
    location: "",

    // Funding info
    fundingGoal: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    try {
      // Sign up with Supabase Auth
      const { data, error } = await signUp(formData.email, formData.password)

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase.from("profiles").insert({
          id: data.user.id,
          full_name: `${formData.firstName} ${formData.lastName}`,
          user_type: "startup",
        })

        if (profileError) {
          toast({
            title: "Error",
            description: "Failed to create profile.",
            variant: "destructive",
          })
          setIsLoading(false)
          return
        }

        // Create startup
        const { error: startupError } = await supabase.from("startups").insert({
          id: crypto.randomUUID(),
          owner_id: data.user.id,
          name: formData.startupName,
          tagline: formData.tagline,
          description: formData.description,
          industry: formData.industry,
          stage: formData.stage,
          team_size: Number.parseInt(formData.teamSize) || null,
          website: formData.website,
          location: formData.location,
        })

        if (startupError) {
          toast({
            title: "Error",
            description: "Failed to create startup profile.",
            variant: "destructive",
          })
          setIsLoading(false)
          return
        }

        toast({
          title: "Success",
          description: "Your startup account has been created. Please check your email to confirm your registration.",
        })

        router.push("/login")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center py-10 md:py-16">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            <CardTitle>Register Your Startup</CardTitle>
          </div>
          <CardDescription>
            Create your startup profile to connect with investors, customers, and resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account" disabled={step !== 1} className={step === 1 ? "text-primary" : ""}>
                Account
              </TabsTrigger>
              <TabsTrigger value="profile" disabled={step !== 2} className={step === 2 ? "text-primary" : ""}>
                Profile
              </TabsTrigger>
              <TabsTrigger value="materials" disabled={step !== 3} className={step === 3 ? "text-primary" : ""}>
                Materials
              </TabsTrigger>
            </TabsList>
            <form onSubmit={handleSubmit}>
              <TabsContent value="account" className={step === 1 ? "block" : "hidden"}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@yourstartup.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <Button className="w-full" onClick={() => setStep(2)} type="button">
                  Continue to Profile
                </Button>
              </TabsContent>
              <TabsContent value="profile" className={step === 2 ? "block" : "hidden"}>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="startupName">Startup Name</Label>
                    <Input
                      id="startupName"
                      placeholder="Your Startup Inc."
                      value={formData.startupName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      placeholder="A short description of your startup"
                      value={formData.tagline}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your startup, mission, and vision"
                      className="min-h-[100px]"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select onValueChange={(value) => handleSelectChange("industry", value)}>
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
                      <Select onValueChange={(value) => handleSelectChange("stage", value)}>
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
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Input
                      id="teamSize"
                      type="number"
                      placeholder="e.g., 5"
                      value={formData.teamSize}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      placeholder="https://yourstartup.com"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., San Francisco, CA"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)} type="button">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={() => setStep(3)} type="button">
                    Continue to Materials
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="materials" className={step === 3 ? "block" : "hidden"}>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="logo-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">SVG, PNG, JPG (MAX. 800x800px)</p>
                        </div>
                        <Input id="logo-upload" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pitch-deck">Pitch Deck</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="pitch-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, PPTX (MAX. 10MB)</p>
                        </div>
                        <Input id="pitch-upload" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fundingGoal">Funding Goal (Optional)</Label>
                    <Input
                      id="fundingGoal"
                      placeholder="$100,000"
                      value={formData.fundingGoal}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)} type="button">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Complete Registration"}
                  </Button>
                </div>
              </TabsContent>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-muted-foreground text-center">
            By registering, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </div>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline underline-offset-4">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

