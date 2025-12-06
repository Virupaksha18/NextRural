// supabaseClient.ts (or .js)
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kvjaqpsgegteuketcbxl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2amFxcHNnZWd0ZXVrZXRjYnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTk2NjgsImV4cCI6MjA2MzA3NTY2OH0.Q6Ok7wdLjzpiRUY5xID3F35c6C5VyuqARQKR9KPXpOI'

export const supabase = createClient(supabaseUrl, supabaseKey)
