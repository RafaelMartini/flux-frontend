import React, { useState } from 'react';
import ExpensesTable from '../components/ExpensesTable';
import ExpenseModal from '../components/ExpenseModal';
import { expensesData as initialExpenses } from '../data/expensesData';
import { Expense } from '../types/expenses';

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>(
    initialExpenses.map(expense => ({ ...expense, id: Math.random().toString(36).substr(2, 9) }))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | undefined>(undefined);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

  const handleAdd = () => {
    setModalMode('create');
    setSelectedExpense(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (expense: Expense) => {
    setModalMode('edit');
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSave = (expense: Expense) => {
    if (modalMode === 'create') {
      setExpenses([...expenses, expense]);
    } else {
      setExpenses(expenses.map(e => e.id === expense.id ? expense : e));
    }
    setIsModalOpen(false);
  };

  return (
    <main className="p-6">
      <ExpensesTable
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
      <ExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        expense={selectedExpense}
        mode={modalMode}
      />
    </main>
  );
};

export default Expenses;