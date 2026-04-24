import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zthsqwicrosfqcysktvc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0aHNxd2ljcm9zZnFjeXNrdHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NzQzMjUsImV4cCI6MjA5MjU1MDMyNX0.5Vdw0DpyctFfsvClRKGmMFe0qEM4xE9n5ffvqvZ95ZE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
