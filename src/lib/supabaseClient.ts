import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djtvrxbyyhykempbgynx.supabase.co';
const supabaseAnonKey = 'sb_publishable_hGOpAv5B3YH7SD9wHsyzWw_yYg5QAp_';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);