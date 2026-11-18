import { supabase } from '../lib/supabase';

export interface StaffUser {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

const CURRENT_SESSION_KEY = 'gis_current_staff_user';

export async function getStoredStaffUsers(): Promise<StaffUser[]> {
  try {
    const { data, error } = await supabase
      .from('staff_users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching staff users from Supabase:', error.message);
      throw new Error(error.message);
    }

    return (data || []).map((u: any) => ({
      id: u.id,
      username: u.username,
      email: u.email,
      password: u.password,
      createdAt: u.created_at || new Date().toLocaleString(),
    }));
  } catch (err: any) {
    console.error('Failed to retrieve staff users from Supabase:', err);
    throw err;
  }
}

export async function registerStaffUser(user: Omit<StaffUser, 'id' | 'createdAt'>): Promise<{ success: boolean; message: string; user?: StaffUser }> {
  try {
    const newId = 'staff-' + Date.now();
    const createdAt = new Date().toISOString();

    const { data, error } = await supabase
      .from('staff_users')
      .insert([
        {
          id: newId,
          username: user.username.trim(),
          email: user.email.trim(),
          password: user.password,
          created_at: createdAt
        }
      ])
      .select();

    if (error) {
      if (error.code === '23505' || error.message.includes('duplicate key') || error.message.includes('already exists')) {
        return { success: false, message: 'Username or Email is already registered in Supabase.' };
      }
      return { success: false, message: error.message || 'Database registration error.' };
    }

    const newUser: StaffUser = {
      id: newId,
      username: user.username.trim(),
      email: user.email.trim(),
      password: user.password,
      createdAt: new Date().toLocaleString(),
    };

    return { success: true, message: 'Staff account successfully registered in Supabase!', user: newUser };
  } catch (err: any) {
    console.error('Supabase registration exception:', err);
    return { success: false, message: err?.message || 'Registration failed due to database connection error.' };
  }
}

export async function authenticateStaff(usernameOrEmail: string, pass: string): Promise<{ success: boolean; message: string; user?: StaffUser }> {
  try {
    const query = usernameOrEmail.trim().toLowerCase();

    const { data, error } = await supabase
      .from('staff_users')
      .select('*')
      .or(`username.ilike.${query},email.ilike.${query}`)
      .eq('password', pass)
      .limit(1);

    if (error) {
      console.error('Supabase authentication query error:', error.message);
      return { success: false, message: `Authentication error: ${error.message}` };
    }

    if (!data || data.length === 0) {
      return { success: false, message: 'Invalid username/email or password.' };
    }

    const u = data[0];
    const staffUser: StaffUser = {
      id: u.id,
      username: u.username,
      email: u.email,
      password: u.password,
      createdAt: u.created_at || new Date().toLocaleString(),
    };

    return { success: true, message: 'Login successful', user: staffUser };
  } catch (err: any) {
    console.error('Supabase authentication exception:', err);
    return { success: false, message: err?.message || 'Authentication failed. Please verify Supabase connection.' };
  }
}

export function getCurrentStaffSession(): StaffUser | null {
  try {
    const data = sessionStorage.getItem(CURRENT_SESSION_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

export function setCurrentStaffSession(user: StaffUser | null): void {
  if (!user) {
    sessionStorage.removeItem(CURRENT_SESSION_KEY);
  } else {
    sessionStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(user));
  }
}
