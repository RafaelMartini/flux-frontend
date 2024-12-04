import { Notification } from '../types/notifications';

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Nova venda realizada',
    message: 'Você recebeu uma nova venda no valor de R$ 297,00',
    type: 'success',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    read: false
  },
  {
    id: '2',
    title: 'Alerta de Chargeback',
    message: 'Uma transação foi contestada. Verifique os detalhes.',
    type: 'warning',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false
  },
  {
    id: '3',
    title: 'Meta atingida',
    message: 'Parabéns! Você atingiu sua meta de vendas mensal.',
    type: 'info',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    read: true
  },
  {
    id: '4',
    title: 'Erro no processamento',
    message: 'Ocorreu um erro ao processar o pagamento #123456',
    type: 'error',
    timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
    read: true
  }
];