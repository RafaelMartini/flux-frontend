export interface Expense {
  id: string;
  title: string;
  value: string;
  type: string;
  active: boolean;
  recurrence: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface ExpenseTableProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

export interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (expense: Expense) => void;
  expense?: Expense;
  mode: 'create' | 'edit';
}