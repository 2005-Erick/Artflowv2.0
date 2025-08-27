
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lenmjbrhriistuumjomh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlbm1qYnJocmlpc3R1dW1qb21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNjI0MzMsImV4cCI6MjA3MTgzODQzM30.CMjv6ses5cBFeimABMaVcaMepUJylh6G3SmS1ZCC4a8'

export const supabase = createClient(supabaseUrl, supabaseKey)
