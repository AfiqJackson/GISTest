import { supabase } from '../lib/supabase';

export interface StaffUser {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

const CURRENT_SESSION_KEY = 'gis_current_staff_user';

export const ADMIN_SEED_USER: StaffUser = {
  id: '00000000-0000-0000-0000-000000000001',
  username: 'admin',
  email: 'admin@gisnilai.edu.my',
  password: 'GIS_Nilai_Admin2026!',
  createdAt: new Date().toLocaleString(),
};

export async function getStoredStaffUsers(): Promise<StaffUser[]> {
  try {
    const { data, error } = await supabase
      .from('staff_users')
      .select('*');

    if (error || !data || data.length === 0) {
      // Fallback or seed master user
      return [ADMIN_SEED_USER];
    }

    return data.map((u: any) => ({
      id: u.id,
      username: u.username,
      email: u.email,
      password: u.password,
      createdAt: u.created_at || new Date().toLocaleString(),
    }));
  } catch (err) {
    console.error('Supabase fetch staff users error, using fallback', err);
    return [ADMIN_SEED_USER];
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
      if (error.code === '23505') {
        return { success: false, message: 'Username or Email is already registered by another staff member.' };
      }
      throw error;
    }

    const newUser: StaffUser = {
      id: newId,
      username: user.username.trim(),
      email: user.email.trim(),
      password: user.password,
      createdAt: new Date().toLocaleString(),
    };

    return { success: true, message: 'Staff account registered successfully!', user: newUser };
  } catch (err: any) {
    console.error('Supabase registration error:', err);
    return { success: false, message: err?.message || 'Registration failed. Please check Supabase configuration.' };
  }
}

export async function authenticateStaff(usernameOrEmail: string, pass: string): Promise<{ success: boolean; message: string; user?: StaffUser }> {
  try {
    const query = usernameOrEmail.trim().toLowerCase();

    // Check if master seed user login
    if ((query === 'admin' || query === 'admin@gisnilai.edu.my') && pass === ADMIN_SEED_USER.password) {
      return { success: true, message: 'Login successful', user: ADMIN_SEED_USER };
    }

    const { data, error } = await supabase
      .from('staff_users')
      .select('*')
      .or(`username.ilike.${query},email.ilike.${query}`)
      .eq('password', pass)
      .limit(1);

    if (error || !data || data.length === 0) {
      // Also check local fallback
      if ((query === 'admin' || query === 'admin@gisnilai.edu.my') && pass === ADMIN_SEED_USER.password) {
        return { success: true, message: 'Login successful', user: ADMIN_SEED_USER };
      }
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
    console.error('Supabase authentication error:', err);
    // Fallback master admin check
    if ((usernameOrEmail.trim().toLowerCase() === 'admin' || usernameOrEmail.trim().toLowerCase() === 'admin@gisnilai.edu.my') && pass === ADMIN_SEED_USER.password) {
      return { success: true, message: 'Login successful', user: ADMIN_SEED_USER };
    }
    return { success: false, message: 'Authentication error. Please verify Supabase connection.' };
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
