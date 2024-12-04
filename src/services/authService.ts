import api from './api';
import { LoginCredentials, User } from '../types/auth';

// Mock user data
const MOCK_USER: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  role: 'admin',
};

// Mock JWT token (DO NOT use this in production!)
const MOCK_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzQ4NzY1NDMsImV4cCI6MTk0NjI3NjU0M30.7Wq_uVIwPz9lpYX-fJeaXy_gNYYP1p0OdaWF4wYGXkQ';

export const authService = {
  async login(credentials: LoginCredentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.log('Falling back to mock auth data');
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Validate mock credentials
      if (credentials.email === 'admin@flux.com' && credentials.password === 'admin123') {
        return {
          user: MOCK_USER,
          token: MOCK_TOKEN,
        };
      }
      throw new Error('Invalid credentials');
    }
  },

  async updateUser(userData: Partial<User>) {
    try {
      const response = await api.put('/auth/user', userData);
      return response.data;
    } catch (error) {
      console.log('Falling back to mock update user');
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        ...MOCK_USER,
        ...userData,
      };
    }
  },

  async refreshToken() {
    try {
      const response = await api.post('/auth/refresh');
      return response.data;
    } catch (error) {
      console.log('Falling back to mock refresh token');
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        token: MOCK_TOKEN,
      };
    }
  },

  async requestPasswordReset(email: string) {
    try {
      const response = await api.post('/auth/request-reset', { email });
      return response.data;
    } catch (error) {
      console.log('Falling back to mock password reset request');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success for demo email
      if (email === 'admin@flux.com') {
        return { success: true };
      }
      throw new Error('Email not found');
    }
  },
};