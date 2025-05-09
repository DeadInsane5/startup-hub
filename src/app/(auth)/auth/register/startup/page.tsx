"use client"
import { ArrowDownIcon, ChevronDown, RocketIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { registerStartup, signUpStartUp } from "./actions"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Arrow, SelectTrigger } from "@radix-ui/react-select"
import { Label } from "@/components/ui/label"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"

export default function Register() {
    const [registered, setRegistered] = useState(false)

    return (
        <>
            <div className="min-h-screen w-full grid place-items-center p-4 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/40 relative">
                <Card className="bg-card w-full max-w-md relative z-10">
                    <CardHeader>
                        <CardTitle className="p-2">
                            <RocketIcon className="h-5 w-5" />
                            Register as a Startup
                        </CardTitle>
                        <CardDescription>Create your startup profile to connect with investors, customers, and resources.</CardDescription>
                        <CardContent className={!registered ? "block p-2" : "hidden"}>
                            <form action={signUpStartUp}>
                                <div className="row py-2 flex gap-4">
                                    <div className="input flex flex-col gap-2">
                                        <Label htmlFor="first_name">First Name*</Label>
                                        <Input type="first_name" id="first_name" name="first_name" className="first_name" required></Input>
                                    </div>
                                    <div className="input flex flex-col gap-2">
                                        <Label htmlFor="last_name">Last Name*</Label>
                                        <Input type="last_name" id="last_name" name="last_name" className="last_name" required></Input>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="email">Email*</Label>
                                    <Input type="email" id="email" name="email" className="email my-2" required></Input>
                                </div>
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password" className="password my-2" required></Input>
                                </div>
                                <div>
                                    <Label htmlFor="confirm_password">Confirm Password</Label>
                                    <Input type="password" id="confirm_password" name="confirm_password" className="confirm_password my-2" required></Input>
                                </div>
                                <div>
                                    <Label htmlFor="avatar">Upload Avatar</Label>
                                    <Input type="file" id="avatar" name="avatar" className="avatar w-full h-20 my-2"></Input>
                                </div>
                                <div>
                                    <Label htmlFor="bio">Bio</Label>
                                    <Textarea id="bio" name="bio" className="bio my-2 h-30"></Textarea>
                                </div>
                                <div>
                                    <Label htmlFor="website">Website</Label>
                                    <Input type="text" id="website" name="website" className="website my-2"></Input>
                                </div>
                                <div>
                                    <Label htmlFor="location">Location</Label>
                                    <Input type="text" id="location" name="location" className="location my-2"></Input>
                                </div>
                                <div className="register">
                                    <Button type="submit" className="my-2 w-full" onClick={() => setRegistered(true)}>Complete Profile</Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardContent className={registered ? "block p-2" : "hidden"}>
                            <form action={registerStartup}>
                                <div>
                                    <Label htmlFor="startpup_name">Startup Name</Label>
                                    <Input type="text" id="startup_name" name="startup_name" className="startup_name my-2" required></Input>
                                </div>
                                <div>
                                    <Label htmlFor="logo">Logo</Label>
                                    <Input type="file" id="logo" name="logo" className="logo my-2 h-20"></Input>
                                </div>
                                <div>
                                    <Label htmlFor="tagline">Tagline</Label>
                                    <Input type="text" id="tagline" name="tagline" className="tagline my-2"></Input>
                                </div>
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" name="description" className="description my-2 h-30"></Textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="industry">Industry</Label>
                                        <Select>
                                            <SelectTrigger id="industry" className="px-4 h-10 bg-muted rounded-md">
                                            <SelectValue placeholder={<div className="flex gap-2"><Label>Select Industry</Label><ChevronDown className="size-4" /></div>} />
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
                                        <Select>
                                            <SelectTrigger id="stage" className="px-4 h-10 bg-muted rounded-md">
                                            <SelectValue placeholder={<div className="flex gap-2"><Label>Select Stage</Label><ChevronDown className="size-4" /></div>} />
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
                                <div>
                                    <Label htmlFor="founded_date">Founded_date</Label>
                                    <Input id="text" name="founded_date" className="founded_date my-2"></Input>
                                </div>
                                <div>
                                    <Label htmlFor="team_size">Team Size</Label>
                                    <Input type="text" id="team_size" name="team_size" className="team_size my-2"></Input>
                                </div>
                                <div>
                                    <Label htmlFor="funding_goal">Funding Goal</Label>
                                    <Input type="text" id="funding_goal" name="funding_goal" className="funding_goal my-2"></Input>
                                </div>
                                <div className="register">
                                    <Button type="submit" disabled={!registered} className="my-2 w-full">Complete Registration</Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className={!registered ? "block" : "hidden"}>
                            <div className="footer flex flex-col gap-2">
                                <p className="text-sm text-muted-foreground text-center">By registering, you agree to our Terms of Service and Privacy Policy.</p>
                                <div className="text-center text-sm">
                                    Already have an account?{" "}
                                    <a href="/auth/login" className="underline underline-offset-4">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </CardFooter>
                    </CardHeader>
                </Card>
            </div >
        </>
    )
}

