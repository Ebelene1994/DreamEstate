import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  memberSince?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<Pick<User, 'name' | 'phone' | 'location'>>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('dreamestate_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email && password.length >= 6) {
      // Preserve any previously stored profile extras for this email
      const stored = localStorage.getItem('dreamestate_user');
      const existing: User | null = stored ? JSON.parse(stored) : null;

      const userData: User = {
        id: existing?.id || '1',
        name: existing?.name || email.split('@')[0],
        email,
        phone: existing?.phone || '',
        location: existing?.location || '',
        memberSince: existing?.memberSince || new Date().toISOString(),
      };

      setUser(userData);
      localStorage.setItem('dreamestate_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (name && email && password.length >= 6) {
      const userData: User = {
        id: Date.now().toString(),
        name,
        email,
        phone: '',
        location: '',
        memberSince: new Date().toISOString(),
      };

      setUser(userData);
      localStorage.setItem('dreamestate_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const updateProfile = (data: Partial<Pick<User, 'name' | 'phone' | 'location'>>) => {
    if (!user) return;
    const updated: User = { ...user, ...data };
    setUser(updated);
    localStorage.setItem('dreamestate_user', JSON.stringify(updated));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dreamestate_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};