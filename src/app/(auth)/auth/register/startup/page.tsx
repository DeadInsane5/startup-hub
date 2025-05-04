"use client"
import { useRouter } from "next/navigation"
import { Rocket, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signUp } from "./actions"

export default function Register() {
    const router = useRouter()

    return (
        <>
            <div className="min-h-screen w-full grid place-items-center p-4 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/40 relative">
                <Card className="w-full max-w-md relative z-10">
                    <CardHeader>
                        <CardTitle className="p-2">
                        <Rocket className="h-5 w-5" />
                            Register as a Startup
                        </CardTitle>
                        <CardDescription>Create your startup profile to connect with investors, customers, and resources.</CardDescription>
                        <CardContent className="p-2">
                            <form action={signUp}>
                                <div className="personal">
                                    <div className="row py-2 flex gap-4">
                                        <div className="input flex flex-col gap-2">
                                            <label htmlFor="first_name">First Name</label>
                                            <Input type="first_name" id="first_name" name="first_name" className="first_name" required></Input>
                                        </div>
                                        <div className="input flex flex-col gap-2">
                                            <label htmlFor="last_name">Last Name</label>
                                            <Input type="last_name" id="last_name" name="last_name" className="last_name" required></Input>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <Input type="email" id="email" name="email" className="email my-2" required></Input>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <Input type="password" id="password" name="password" className="password my-2" required></Input>
                                    </div>
                                    <div>
                                        <label htmlFor="confirm_password">Confirm Password</label>
                                        <Input type="password" id="confirm_password" name="confirm_password" className="confirm_password my-2" required></Input>
                                    </div>
                                </div>
                                <Button type="submit" className="my-2 w-full">Continue to Profile</Button>
                            </form>
                            <CardFooter>
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
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}

