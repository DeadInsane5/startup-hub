import { getInvestors } from "./actions"

import Image from "next/image"
import { Search, Filter, ArrowRight, Building, Briefcase, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default async function InvestorsPage({
  searchParams,
}: { searchParams?: { focus?: string; stage?: string; searchTerm?: string } }) {
  const { focus, stage, searchTerm } = searchParams || {}
  const investors = await getInvestors(focus, stage, searchTerm)

  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investors</h1>
          <p className="text-muted-foreground">Connect with investors looking to fund innovative startups</p>
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
                    placeholder="Search investors..."
                    className="w-full pl-8"
                    defaultValue={searchTerm}
                  />
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Investment Focus</h3>
                  <Select defaultValue={focus || "all"}>
                    <SelectTrigger name="focus">
                      <SelectValue placeholder="All Focus Areas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Focus Areas</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="consumer">Consumer</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="climate">Climate Tech</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Investment Stage</h3>
                  <Select defaultValue={stage || "all"}>
                    <SelectTrigger name="stage">
                      <SelectValue placeholder="All Stages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stages</SelectItem>
                      <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="series-b">Series B</SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
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
              <CardTitle>Featured Investors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Top VC Firms
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Angel Investors
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Corporate Investors
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Impact Investors
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                International Investors
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Investors</TabsTrigger>
              <TabsTrigger value="vc">VC Firms</TabsTrigger>
              <TabsTrigger value="angel">Angel Investors</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {investors.length > 0 ? (
                  investors.map((investor) => (
                    <Card key={investor.id} className="flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {investor.logo_url ? (
                              <Image
                                src={investor.logo_url || "/placeholder.svg"}
                                alt={investor.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            ) : (
                              <span className="font-bold text-primary">
                                {investor.name.substring(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{investor.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {investor.location || "Location not specified"}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {investor.description || "No description provided"}
                        </p>

                        <div className="space-y-3">
                          {investor.investment_focus && investor.investment_focus.length > 0 && (
                            <div className="flex items-start gap-2">
                              <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div>
                                <p className="text-xs font-medium">Investment Focus</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {investor.investment_focus.map((focus: string, i: number) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {focus}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {investor.investment_stages && investor.investment_stages.length > 0 && (
                            <div className="flex items-start gap-2">
                              <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div>
                                <p className="text-xs font-medium">Investment Stages</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {investor.investment_stages.map((stage: string, i: number) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {stage}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {investor.investment_range && (
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs font-medium">Investment Range</p>
                                <p className="text-sm">{investor.investment_range}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  // Fallback to sample data if no investors are found
                  <>
                    <Card className="flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">AV</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">Acme Ventures</CardTitle>
                            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          Acme Ventures is a leading venture capital firm focused on early-stage technology startups
                          with disruptive potential.
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">Investment Focus</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  SaaS
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  AI
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Fintech
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">Investment Stages</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  Seed
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Series A
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-xs font-medium">Investment Range</p>
                              <p className="text-sm">$500K - $5M</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">BI</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">Blue Investments</CardTitle>
                            <p className="text-sm text-muted-foreground">New York, NY</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          Blue Investments specializes in healthcare and biotech startups with a focus on innovative
                          medical technologies and digital health solutions.
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">Investment Focus</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  Healthcare
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Biotech
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  MedTech
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">Investment Stages</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  Series A
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Series B
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-xs font-medium">Investment Range</p>
                              <p className="text-sm">$2M - $10M</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">GC</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">Green Capital</CardTitle>
                            <p className="text-sm text-muted-foreground">Austin, TX</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pb-2">
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          Green Capital invests in sustainable technologies and climate solutions that address
                          environmental challenges while delivering strong financial returns.
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">Investment Focus</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  CleanTech
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Renewable Energy
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Sustainability
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              <p className="text-xs font-medium">Investment Stages</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  Seed
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Series A
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Series B
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-xs font-medium">Investment Range</p>
                              <p className="text-sm">$1M - $8M</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="vc" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">VC firms will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="angel" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Angel investors will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Corporate investors will be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

