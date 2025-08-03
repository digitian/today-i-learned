import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hqrgmrjmzvimmbrczgkl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxcmdtcmptenZpbW1icmN6Z2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5ODc5MTgsImV4cCI6MjA2OTU2MzkxOH0.n6ex4szr5hMwDS54_SNXrwH5c5p9j5PeuGPq6IGwdjM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
