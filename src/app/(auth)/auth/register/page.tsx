"use client"
import Link from "next/link"
import { ArrowRight, RocketIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Register() {

  return (
    <div className="min-h-screen w-full grid place-items-center p-4 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/40 relative">
      <Card className="bg-card w-full max-w-md relative z-10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <RocketIcon className="h-5 w-5" />
            <CardTitle>Join StartupHub</CardTitle>
          </div>
          <CardDescription>Choose how you want to join our platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">I am a...</h3>
            <div className="grid gap-2">
              <Link href="/auth/register/startup">
                <Button className="w-full justify-between" size="lg">
                  Startup Founder
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/auth/register/customer">
                <Button className="w-full justify-between" variant="outline" size="lg">
                  Customer / Supporter
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/auth/register/investor">
                <Button className="w-full justify-between" variant="outline" size="lg">
                  Investor
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary underline underline-offset-4">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

