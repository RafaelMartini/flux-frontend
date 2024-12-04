import React from 'react';
import { integrations } from '../data/integrationsData';
import IntegrationCard from '../components/IntegrationCard';

const Integrations = () => {
  return (
    <main className="p-6">
      <div className="bg-[#1a1625] rounded-xl p-6">
        <h2 className="text-white text-lg mb-6">Integrações WebHook</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {integrations.map((integration, index) => (
            <IntegrationCard key={index} integration={integration} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Integrations;