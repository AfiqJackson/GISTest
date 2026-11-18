-- ========================================================
-- GIS Nilai Admissions Supabase Database Schema & Setup
-- ========================================================

-- 1. Create staff_users table
CREATE TABLE IF NOT EXISTS staff_users (
    id UUID PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
    id UUID PRIMARY KEY,
    timestamp TEXT NOT NULL,
    student_name TEXT NOT NULL,
    parent_name TEXT,
    phone TEXT NOT NULL,
    email TEXT,
    programme TEXT,
    financial_aid TEXT,
    status TEXT DEFAULT 'New Enquiry',
    notes TEXT,
    internal_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS) - Optional for public demo / secure app
ALTER TABLE staff_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- 4. Create permissive policies for GIS Admissions frontend demo (or configure authenticated policies as needed)
CREATE POLICY "Allow public access to staff_users" ON staff_users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow public access to enquiries" ON enquiries FOR ALL USING (true) WITH CHECK (true);

-- 5. Seed default master admin user (admin / GIS_Nilai_Admin2026!)
INSERT INTO staff_users (id, username, email, password, created_at)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'admin',
    'admin@gisnilai.edu.my',
    'GIS_Nilai_Admin2026!',
    NOW()
)
ON CONFLICT (username) DO NOTHING;
