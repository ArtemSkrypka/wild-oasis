import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pewxgfthaiifbijphlsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBld3hnZnRoYWlpZmJpanBobHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyOTI0MzEsImV4cCI6MjAyNTg2ODQzMX0.oWctj8pLkRIzHrKXdSWHXj_QAqK-lDpLLk0k3lYec74";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
