import React from 'react';
import { Integration } from '../types/integrations';

interface Props {
  integration: Integration;
}

const IntegrationCard: React.FC<Props> = ({ integration }) => {
  return (
    <div className="bg-[#2a2435] rounded-xl p-6 flex flex-col items-center space-y-4">
      <div className="w-32 h-16 flex items-center justify-center">
        <img src={integration.logo} alt={integration.name} className="max-w-full max-h-full" />
      </div>
      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
        Adicionar Webhook
      </button>
      <button className="w-full text-purple-400 text-sm hover:text-purple-300 transition-colors">
        Abrir Tutorial de Integração?
      </button>
    </div>
  );
};

export default IntegrationCard;