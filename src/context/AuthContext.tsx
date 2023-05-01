import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  setUser: (user: any) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  // Add any logic you need for fetching and setting the user on app load.
  // For example, fetching the user from the server based on a session cookie.

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
