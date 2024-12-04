import React from 'react';
import { ExpenseTableProps } from '../types/expenses';
import { Pencil, Trash2 } from 'lucide-react';

const ExpensesTable: React.FC<ExpenseTableProps> = ({ expenses, onEdit, onDelete, onAdd }) => {
  return (
    <div className="bg-[#1a1625] rounded-xl p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-lg">Modelos de Despesas</h2>
        <button
          onClick={onAdd}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
        >
          Cadastrar Despesa
        </button>
      </div>

      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="text-left py-3">Título</th>
            <th className="text-left py-3">Valor</th>
            <th className="text-left py-3">Tipo</th>
            <th className="text-left py-3">Ativo</th>
            <th className="text-left py-3">Recorrência</th>
            <th className="text-left py-3">Descrição</th>
            <th className="text-left py-3">Data Início</th>
            <th className="text-left py-3">Data Final</th>
            <th className="text-left py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-t border-gray-800">
              <td className="py-4 text-white">{expense.title}</td>
              <td className="py-4 text-white">{expense.value}</td>
              <td className="py-4 text-white">{expense.type}</td>
              <td className="py-4">
                <span className={`inline-block w-2 h-2 rounded-full ${expense.active ? 'bg-green-500' : 'bg-red-500'}`}></span>
              </td>
              <td className="py-4 text-white">{expense.recurrence}</td>
              <td className="py-4 text-white">{expense.description}</td>
              <td className="py-4 text-white">{expense.startDate}</td>
              <td className="py-4 text-white">{expense.endDate}</td>
              <td className="py-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(expense)}
                    className="p-1 rounded-lg bg-purple-500 bg-opacity-20 text-purple-500 hover:bg-opacity-30 transition-colors"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="p-1 rounded-lg bg-red-500 bg-opacity-20 text-red-500 hover:bg-opacity-30 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;