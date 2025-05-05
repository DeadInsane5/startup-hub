import { createClient } from "@/lib/supabase/server"

export const revalidate = 3600 // Revalidate at most every hour

export async function getStartups(industry?: string, stage?: string, sortBy?: string, searchTerm?: string) {
  const supabase = await createClient();

  let query = supabase.from("startups").select("*").order("created_at", { ascending: false })

  if (industry && industry !== "all") {
    query = query.eq("industry", industry)
  }

  if (stage && stage !== "all") {
    query = query.eq("stage", stage)
  }

  if (searchTerm) {
    query = query.ilike("name", `%${searchTerm}%`)
  }

  // For now, we'll just sort by created_at
  // In a real app, you'd implement more sophisticated sorting
  if (sortBy === "popular") {
    // We'd need a different metric for popularity
    query = query.order("created_at", { ascending: false })
  } else if (sortBy === "trending") {
    query = query.order("created_at", { ascending: false })
  }

  const { data: startups, error } = await query.limit(12)

  if (error) {
    console.error("Error fetching startups:", error)
    return []
  }

  return startups
}