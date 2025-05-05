import { getStartups } from "./actions"

import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Star, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default async function DiscoverPage({
  searchParams,
}: { searchParams?: { industry?: string; stage?: string; sortBy?: string; searchTerm?: string } }) {
  const { industry, stage, sortBy, searchTerm } = searchParams || {}
  const startups = await getStartups(industry, stage, sortBy, searchTerm)

  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discover Startups</h1>
          <p className="text-muted-foreground">Find innovative startups to follow, support, or invest in</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    name="searchTerm"
                    placeholder="Search startups..."
                    className="w-full pl-8"
                    defaultValue={searchTerm}
                  />
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Industry</h3>
                  <Select defaultValue={industry || "all"}>
                    <SelectTrigger name="industry">
                      <SelectValue placeholder="All Industries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Stage</h3>
                  <Select defaultValue={stage || "all"}>
                    <SelectTrigger name="stage">
                      <SelectValue placeholder="All Stages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stages</SelectItem>
                      <SelectItem value="idea">Idea Stage</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="early">Early Traction</SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
                      <SelectItem value="scale">Scaling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Sort By</h3>
                  <Select defaultValue={sortBy || "newest"}>
                    <SelectTrigger name="sortBy">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="trending">Trending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full mt-4" type="submit">
                  Apply Filters
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Collections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Top AI Startups
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Climate Tech Innovators
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Healthcare Disruptors
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Fintech Leaders
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Remote Work Solutions
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Startups</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="funded">Recently Funded</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {startups.length > 0 ? (
                  startups.map((startup) => (
                    <Card key={startup.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {startup.logo_url ? (
                              <Image
                                src={startup.logo_url || "/placeholder.svg"}
                                alt={startup.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            ) : (
                              <span className="font-bold text-primary">
                                {startup.name.substring(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{startup.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{startup.tagline || "No tagline provided"}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <Image
                          src={startup.logo_url || "/placeholder.svg?height=150&width=350"}
                          width={350}
                          height={150}
                          alt={startup.name}
                          className="rounded-md object-cover w-full h-[150px] mb-3"
                        />
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                          {startup.description || "No description provided"}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {startup.industry && <Badge>{startup.industry}</Badge>}
                          {startup.stage && <Badge variant="outline">{startup.stage}</Badge>}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Star className="mr-2 h-4 w-4" />
                          Follow
                        </Button>
                        <Link href={`/startups/${startup.id}`}>
                          <Button size="sm">View Profile</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  // Fallback to sample data if no startups are found
                  <>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">AI</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">AI Assistant Inc.</CardTitle>
                            <p className="text-sm text-muted-foreground">AI-powered productivity tools</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <Image
                          src="/placeholder.svg?height=150&width=350"
                          width={350}
                          height={150}
                          alt="AI Assistant Inc."
                          className="rounded-md object-cover w-full h-[150px] mb-3"
                        />
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                          AI Assistant Inc. is developing cutting-edge AI tools to help businesses automate routine
                          tasks and boost productivity.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge>Technology</Badge>
                          <Badge variant="outline">Early Stage</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Star className="mr-2 h-4 w-4" />
                          Follow
                        </Button>
                        <Button size="sm">View Profile</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">HC</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">HealthConnect</CardTitle>
                            <p className="text-sm text-muted-foreground">Telehealth platform</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <Image
                          src="/placeholder.svg?height=150&width=350"
                          width={350}
                          height={150}
                          alt="HealthConnect"
                          className="rounded-md object-cover w-full h-[150px] mb-3"
                        />
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                          HealthConnect is revolutionizing healthcare access with a platform that connects patients with
                          healthcare providers remotely.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge>Healthcare</Badge>
                          <Badge variant="outline">Growth</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Star className="mr-2 h-4 w-4" />
                          Follow
                        </Button>
                        <Button size="sm">View Profile</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">EL</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">EduLearn</CardTitle>
                            <p className="text-sm text-muted-foreground">Online learning platform</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <Image
                          src="/placeholder.svg?height=150&width=350"
                          width={350}
                          height={150}
                          alt="EduLearn"
                          className="rounded-md object-cover w-full h-[150px] mb-3"
                        />
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                          EduLearn is making education accessible to everyone with an interactive online learning
                          platform featuring courses from top educators.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge>Education</Badge>
                          <Badge variant="outline">Early Stage</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Star className="mr-2 h-4 w-4" />
                          Follow
                        </Button>
                        <Button size="sm">View Profile</Button>
                      </CardFooter>
                    </Card>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Trending startups will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">New startups will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="funded" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Recently funded startups will be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

