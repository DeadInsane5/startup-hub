export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          user_type: "startup" | "customer" | "investor" | "admin" | null
          bio: string | null
          website: string | null
          location: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          user_type?: "startup" | "customer" | "investor" | "admin" | null
          bio?: string | null
          website?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          user_type?: "startup" | "customer" | "investor" | "admin" | null
          bio?: string | null
          website?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      startups: {
        Row: {
          id: string
          owner_id: string
          name: string
          tagline: string | null
          description: string | null
          logo_url: string | null
          industry: string | null
          stage: "idea" | "mvp" | "early" | "growth" | "scale" | null
          founded_date: string | null
          team_size: number | null
          website: string | null
          location: string | null
          is_verified: boolean
          verification_status: "unverified" | "pending" | "verified"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          owner_id: string
          name: string
          tagline?: string | null
          description?: string | null
          logo_url?: string | null
          industry?: string | null
          stage?: "idea" | "mvp" | "early" | "growth" | "scale" | null
          founded_date?: string | null
          team_size?: number | null
          website?: string | null
          location?: string | null
          is_verified?: boolean
          verification_status?: "unverified" | "pending" | "verified"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          tagline?: string | null
          description?: string | null
          logo_url?: string | null
          industry?: string | null
          stage?: "idea" | "mvp" | "early" | "growth" | "scale" | null
          founded_date?: string | null
          team_size?: number | null
          website?: string | null
          location?: string | null
          is_verified?: boolean
          verification_status?: "unverified" | "pending" | "verified"
          created_at?: string
          updated_at?: string
        }
      }
      investors: {
        Row: {
          id: string
          owner_id: string
          name: string
          logo_url: string | null
          description: string | null
          investment_focus: string[] | null
          investment_stages: string[] | null
          investment_range: string | null
          portfolio: string[] | null
          website: string | null
          location: string | null
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          owner_id: string
          name: string
          logo_url?: string | null
          description?: string | null
          investment_focus?: string[] | null
          investment_stages?: string[] | null
          investment_range?: string | null
          portfolio?: string[] | null
          website?: string | null
          location?: string | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          logo_url?: string | null
          description?: string | null
          investment_focus?: string[] | null
          investment_stages?: string[] | null
          investment_range?: string | null
          portfolio?: string[] | null
          website?: string | null
          location?: string | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          event_type: "webinar" | "conference" | "workshop" | "networking" | "pitch" | "other" | null
          start_date: string
          end_date: string
          location: string | null
          is_virtual: boolean
          virtual_link: string | null
          image_url: string | null
          organizer_id: string | null
          max_attendees: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          event_type?: "webinar" | "conference" | "workshop" | "networking" | "pitch" | "other" | null
          start_date: string
          end_date: string
          location?: string | null
          is_virtual?: boolean
          virtual_link?: string | null
          image_url?: string | null
          organizer_id?: string | null
          max_attendees?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          event_type?: "webinar" | "conference" | "workshop" | "networking" | "pitch" | "other" | null
          start_date?: string
          end_date?: string
          location?: string | null
          is_virtual?: boolean
          virtual_link?: string | null
          image_url?: string | null
          organizer_id?: string | null
          max_attendees?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      follows: {
        Row: {
          id: string
          follower_id: string
          startup_id: string
          created_at: string
        }
        Insert: {
          id?: string
          follower_id: string
          startup_id: string
          created_at?: string
        }
        Update: {
          id?: string
          follower_id?: string
          startup_id?: string
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          reviewer_id: string
          startup_id: string
          rating: number
          comment: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          reviewer_id: string
          startup_id: string
          rating: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          reviewer_id?: string
          startup_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

