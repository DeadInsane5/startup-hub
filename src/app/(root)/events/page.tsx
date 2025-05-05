import { getEvents } from "./actions"

import Image from "next/image"
import { Search, Filter, Calendar, Clock, MapPin, Users, Video, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default async function EventsPage({
  searchParams,
}: {
  searchParams?: { eventType?: string; dateRange?: string; location?: string; price?: string; searchTerm?: string }
}) {
  const { eventType, dateRange, location, price, searchTerm } = searchParams || {}
  const events = await getEvents(eventType, dateRange, location, price, searchTerm)

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date)
  }

  return (
    <div className="container py-6 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">
            Connect with the startup community through virtual and in-person events
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            My Calendar
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
                    placeholder="Search events..."
                    className="w-full pl-8"
                    defaultValue={searchTerm}
                  />
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Event Type</h3>
                  <Select defaultValue={eventType || "all"}>
                    <SelectTrigger name="eventType">
                      <SelectValue placeholder="All Event Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Event Types</SelectItem>
                      <SelectItem value="webinar">Webinar</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                      <SelectItem value="pitch">Pitch Competition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Date Range</h3>
                  <Select defaultValue={dateRange || "all"}>
                    <SelectTrigger name="dateRange">
                      <SelectValue placeholder="Any Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Date</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                      <SelectItem value="next-month">Next Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium">Location</h3>
                  <Select defaultValue={location || "all"}>
                    <SelectTrigger name="location">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                      <SelectItem value="in-person">In-Person</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
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
              <CardTitle>Featured Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Startup Pitch Competition
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Fundraising Masterclass
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                AI in Business Summit
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Founder Networking Mixer
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowRight className="mr-2 h-4 w-4" />
                Product Development Workshop
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4">
          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="virtual">Virtual</TabsTrigger>
              <TabsTrigger value="in-person">In-Person</TabsTrigger>
              <TabsTrigger value="my-events">My Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6">
                {events.length > 0 ? (
                  events.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4">
                          <Image
                            src={event.image_url || "/placeholder.svg?height=200&width=200"}
                            width={200}
                            height={200}
                            alt={event.title}
                            className="w-full h-full object-cover aspect-square"
                          />
                        </div>
                        <div className="w-full md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge>{event.event_type || "Event"}</Badge>
                                {event.is_virtual && (
                                  <Badge variant="outline" className="flex items-center gap-1">
                                    <Video className="h-3 w-3" /> Virtual
                                  </Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-bold">{event.title}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {event.description || "No description provided"}
                              </p>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="flex flex-col items-end">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>{formatDate(event.start_date)}</span>
                                </div>
                                {event.location && (
                                  <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <span>{event.location}</span>
                                  </div>
                                )}
                              </div>
                              <Button className="mt-4">Register</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  // Fallback to sample data if no events are found
                  <>
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            width={200}
                            height={200}
                            alt="Pitch Competition"
                            className="w-full h-full object-cover aspect-square"
                          />
                        </div>
                        <div className="w-full md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge>Pitch</Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Video className="h-3 w-3" /> Virtual
                                </Badge>
                              </div>
                              <h3 className="text-xl font-bold">Startup Pitch Competition</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                Present your startup to a panel of investors and compete for funding and mentorship
                                opportunities.
                              </p>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="flex flex-col items-end">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>Mar 15, 2024, 2:00 PM</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span>2 hours</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Users className="h-4 w-4 text-muted-foreground" />
                                  <span>125 attendees</span>
                                </div>
                              </div>
                              <Button className="mt-4">Register</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            width={200}
                            height={200}
                            alt="Fundraising Masterclass"
                            className="w-full h-full object-cover aspect-square"
                          />
                        </div>
                        <div className="w-full md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge>Workshop</Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Video className="h-3 w-3" /> Virtual
                                </Badge>
                              </div>
                              <h3 className="text-xl font-bold">Fundraising Masterclass</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                Learn proven strategies for raising your seed round from experienced investors and
                                founders.
                              </p>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="flex flex-col items-end">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>Mar 22, 2024, 10:00 AM</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span>3 hours</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Users className="h-4 w-4 text-muted-foreground" />
                                  <span>87 attendees</span>
                                </div>
                              </div>
                              <Button className="mt-4">Register</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>

            <TabsContent value="virtual" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Virtual events will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="in-person" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">In-person events will be displayed here</p>
              </div>
            </TabsContent>

            <TabsContent value="my-events" className="mt-6">
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">Your registered events will be displayed here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

