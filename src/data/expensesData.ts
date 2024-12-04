import { Expense } from '../types/expenses';

export const expensesData: Expense[] = [
  {
    id: '1',
    title: 'Salário Flux',
    value: 'R$ 300,00',
    type: 'Usuário',
    active: true,
    recurrence: 'Mensal',
    description: 'Fiz isso....',
    startDate: '2023-04-28',
    endDate: '2023-04-28'
  },
  {
    id: '2',
    title: 'Salário Flux',
    value: 'R$ 300,00',
    type: 'Anúncios',
    active: false,
    recurrence: 'Diário',
    description: 'Precisei d...',
    startDate: '2023-04-28',
    endDate: '2023-04-28'
  },
  {
    id: '3',
    title: 'Salário Flux',
    value: 'R$ 300,00',
    type: 'Equipe',
    active: true,
    recurrence: 'Tri-Mestral',
    description: 'Flyer para...',
    startDate: '2023-04-28',
    endDate: '2023-04-28'
  }
];