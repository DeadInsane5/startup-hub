import { createClient } from "@/lib/supabase/server"

export const revalidate = 3600 // Revalidate at most every hour

export async function getInvestors(focus?: string, stage?: string, searchTerm?: string) {
  const supabase = await createClient();

  let query = supabase.from("investors").select("*").order("created_at", { ascending: false })

  if (searchTerm) {
    query = query.ilike("name", `%${searchTerm}%`)
  }

  // Note: These filters would need to be adjusted based on your actual data structure
  if (focus && focus !== "all") {
    query = query.contains("investment_focus", [focus])
  }

  if (stage && stage !== "all") {
    query = query.contains("investment_stages", [stage])
  }

  const { data: investors, error } = await query.limit(12)

  if (error) {
    console.error("Error fetching investors:", error)
    return []
  }

  return investors
}