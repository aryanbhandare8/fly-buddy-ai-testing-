export interface User {
  id: string;
  name: string;
  email: string;
  joined: string;
  flights: number;
  status: 'Active' | 'Inactive';
}

const DEFAULT_USERS: User[] = [
  { id: '1', name: 'Rahul Sharma', email: 'rahul.s@example.com', joined: 'Oct 1, 2026', flights: 4, status: 'Active' },
  { id: '2', name: 'Priya Patel', email: 'priya.p@example.com', joined: 'Sep 28, 2026', flights: 12, status: 'Active' },
  { id: '3', name: 'Amit Kumar', email: 'amit.k@example.com', joined: 'Sep 25, 2026', flights: 1, status: 'Inactive' },
  { id: '4', name: 'Sneha Gupta', email: 'sneha.g@example.com', joined: 'Sep 22, 2026', flights: 7, status: 'Active' },
];

export const getDbUsers = (): User[] => {
  const users = localStorage.getItem('flybuddy_users');
  if (!users) {
    localStorage.setItem('flybuddy_users', JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  }
  return JSON.parse(users);
};

export const addDbUser = (name: string, email: string) => {
  const users = getDbUsers();
  
  // Check if email already exists
  if (users.find(u => u.email === email)) {
    throw new Error("Email already registered");
  }

  const newUser: User = {
    id: Math.random().toString(36).substr(2, 9),
    name: name || email.split('@')[0],
    email,
    joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    flights: 0,
    status: 'Active'
  };
  
  const updatedUsers = [newUser, ...users];
  localStorage.setItem('flybuddy_users', JSON.stringify(updatedUsers));
  return newUser;
};

export const loginUser = (email: string) => {
  const users = getDbUsers();
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error("User not found. Please sign up.");
  }
  return user;
};

// Simple auth state management via localStorage
export const setSession = (user: User) => {
  localStorage.setItem('flybuddy_session', JSON.stringify(user));
};

export const getSession = (): User | null => {
  const session = localStorage.getItem('flybuddy_session');
  return session ? JSON.parse(session) : null;
};

export const clearSession = () => {
  localStorage.removeItem('flybuddy_session');
};
