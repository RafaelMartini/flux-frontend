import api from './api';
import { adCampaigns } from '../data/adsData';
import { AdCampaign } from '../types/ads';

export const adService = {
  async getCampaigns() {
    try {
      const response = await api.get('/campaigns');
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for campaigns');
      return adCampaigns;
    }
  },

  async toggleCampaignStatus(id: string) {
    try {
      const response = await api.patch(`/campaigns/${id}/toggle-status`);
      return response.data;
    } catch (error) {
      console.log('Falling back to mock data for toggle status');
      const campaign = adCampaigns.find(c => c.id === id);
      if (campaign) {
        return {
          ...campaign,
          status: campaign.status === 'active' ? 'inactive' : 'active'
        };
      }
      throw new Error('Campaign not found');
    }
  }
};