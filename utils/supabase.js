 import { createClient } from "@supabase/supabase-js";
 console.log('value: ', process.env.SUPABASE_URL)

 export default createClient(
     process.env.supabaseUrl,
     process.env.supabaseKey
); 