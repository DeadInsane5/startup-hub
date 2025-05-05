import { createClient } from "@/lib/supabase/server"

export const revalidate = 3600 // Revalidate at most every hour

export async function getEvents(
  eventType?: string,
  dateRange?: string,
  location?: string,
  price?: string,
  searchTerm?: string,
) {
  const supabase = await createClient();

  let query = supabase
    .from("events")
    .select("*")
    .gte("end_date", new Date().toISOString())
    .order("start_date", { ascending: true })

  if (eventType && eventType !== "all") {
    query = query.eq("event_type", eventType)
  }

  if (location && location !== "all") {
    if (location === "virtual") {
      query = query.eq("is_virtual", true)
    } else if (location === "in-person") {
      query = query.eq("is_virtual", false)
    } else {
      query = query.ilike("location", `%${location}%`)
    }
  }

  if (searchTerm) {
    query = query.ilike("title", `%${searchTerm}%`)
  }

  // Date range filtering
  if (dateRange === "today") {
    const today = new Date().toISOString().slice(0, 10)
    query = query.gte("start_date", today).lt("start_date", today + "T23:59:59")
  } else if (dateRange === "tomorrow") {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().slice(0, 10)
    query = query.gte("start_date", tomorrowStr).lt("start_date", tomorrowStr + "T23:59:59")
  } else if (dateRange === "this-week") {
    const today = new Date()
    const nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)
    query = query.gte("start_date", today.toISOString()).lt("start_date", nextWeek.toISOString())
  }

  const { data: events, error } = await query.limit(12)

  if (error) {
    console.error("Error fetching events:", error)
    return []
  }

  return events
}
