import api from './api';
import { expensesData } from '../data/expensesData';
import { Expense } from '../types/expenses';

export const expenseService = {
  async getExpenses() {
    try {
      const response = await api.get('/expenses');
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for expenses');
      return expensesData;
    }
  },

  async createExpense(expense: Omit<Expense, 'id'>) {
    try {
      const response = await api.post('/expenses', expense);
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for create expense');
      return {
        ...expense,
        id: Math.random().toString(36).substr(2, 9)
      };
    }
  },

  async updateExpense(expense: Expense) {
    try {
      const response = await api.put(`/expenses/${expense.id}`, expense);
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for update expense');
      return expense;
    }
  },

  async deleteExpense(id: string) {
    try {
      await api.delete(`/expenses/${id}`);
      return true;
    } catch (error) {
      console.log('Falling back to mock data for delete expense');
      return true;
    }
  }
};