import React, { useState } from 'react';
import AdManager from '../components/AdManager';
import { adCampaigns as initialCampaigns } from '../data/adsData';
import { AdCampaign } from '../types/ads';

const Ads = () => {
  const [campaigns, setCampaigns] = useState<AdCampaign[]>(initialCampaigns);

  const handleToggleStatus = (id: string) => {
    setCampaigns(prevCampaigns =>
      prevCampaigns.map(campaign =>
        campaign.id === id
          ? { ...campaign, status: campaign.status === 'active' ? 'inactive' : 'active' }
          : campaign
      )
    );
  };

  return (
    <main className="p-6">
      <AdManager campaigns={campaigns} onToggleStatus={handleToggleStatus} />
    </main>
  );
};

export default Ads;