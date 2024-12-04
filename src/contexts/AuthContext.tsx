import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { AuthContextType, AuthState, LoginCredentials, User } from '../types/auth';
import { authService } from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const INITIAL_STATE: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<User>(token);
        return {
          user: decoded,
          token,
          isAuthenticated: true,
        };
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    return INITIAL_STATE;
  });

  useEffect(() => {
    const token = state.token;
    if (token) {
      try {
        const decoded = jwtDecode<User>(token);
        const currentTime = Date.now() / 1000;
        if ((decoded as any).exp < currentTime) {
          logout();
        }
      } catch (error) {
        logout();
      }
    }
  }, [state.token]);

  const login = async (credentials: LoginCredentials) => {
    try {
      const { token, user } = await authService.login(credentials);
      setState({
        user,
        token,
        isAuthenticated: true,
      });
      localStorage.setItem('token', token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setState(INITIAL_STATE);
    localStorage.removeItem('token');
  };

  const updateUser = async (userData: Partial<User>) => {
    if (!state.user) return;
    try {
      const updatedUser = await authService.updateUser(userData);
      setState(prev => ({
        ...prev,
        user: { ...prev.user!, ...updatedUser },
      }));
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};