export interface StaffUser {
  id: string;
  username: string;
  email: string;
  password: string; // Stored securely in localStorage demo
  createdAt: string;
}

const STORAGE_KEY = 'gis_staff_users_db';
const CURRENT_SESSION_KEY = 'gis_current_staff_user';

export const ADMIN_SEED_USER: StaffUser = {
  id: 'admin-master-1',
  username: 'admin',
  email: 'admin@gisnilai.edu.my',
  password: 'GIS_Nilai_Admin2026!',
  createdAt: new Date().toLocaleString(),
};

export function getStoredStaffUsers(): StaffUser[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      const initial = [ADMIN_SEED_USER];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to load staff users', err);
    return [ADMIN_SEED_USER];
  }
}

export function registerStaffUser(user: Omit<StaffUser, 'id' | 'createdAt'>): { success: boolean; message: string; user?: StaffUser } {
  const users = getStoredStaffUsers();

  // Check if username or email already exists
  const existing = users.find(u => u.username.toLowerCase() === user.username.toLowerCase() || u.email.toLowerCase() === user.email.toLowerCase());
  if (existing) {
    return { success: false, message: 'Username or Email is already registered by another staff member.' };
  }

  const newUser: StaffUser = {
    id: 'staff-' + Date.now(),
    username: user.username.trim(),
    email: user.email.trim(),
    password: user.password,
    createdAt: new Date().toLocaleString(),
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return { success: true, message: 'Staff account registered successfully!', user: newUser };
}

export function authenticateStaff(usernameOrEmail: string, pass: string): { success: boolean; message: string; user?: StaffUser } {
  const users = getStoredStaffUsers();
  const query = usernameOrEmail.trim().toLowerCase();

  const found = users.find(u => 
    (u.username.toLowerCase() === query || u.email.toLowerCase() === query) && u.password === pass
  );

  if (!found) {
    return { success: false, message: 'Invalid username/email or password.' };
  }

  return { success: true, message: 'Login successful', user: found };
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
