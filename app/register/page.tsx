"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Rocket, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function Register() {
  const router = useRouter()
  const { toast } = useToast()

  return (
    <div className="container flex items-center justify-center py-10 md:py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            <CardTitle>Join StartupHub</CardTitle>
          </div>
          <CardDescription>Choose how you want to join our platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">I am a...</h3>
            <div className="grid gap-2">
              <Link href="/register/startup">
                <Button className="w-full justify-between" size="lg">
                  Startup Founder
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register/customer">
                <Button className="w-full justify-between" variant="outline" size="lg">
                  Customer / Supporter
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register/investor">
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
            <Link href="/login" className="text-primary underline underline-offset-4">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

