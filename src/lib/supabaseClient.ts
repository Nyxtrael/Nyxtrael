import { createClient } from '@supabase/supabase-js';

const supabaseUrl = https://okuodmjrwqplrxqvqhko.supabase.co;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rdW9kbWpyd3FwbHJ4cXZxaGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMzAzMjksImV4cCI6MjA1OTcwNjMyOX0.BxkQHDDrca9E9O6rROm6I2fMiDYYekgmki5pg95xAss;
export const supabase = createClient(supabaseUrl, supabaseKey);
