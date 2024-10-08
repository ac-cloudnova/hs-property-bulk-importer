import React from 'react';
import { Key } from 'lucide-react';

interface HubSpotFormProps {
  apiKey: string;
  setApiKey: (value: string) => void;
  portalId: string;
  setPortalId: (value: string) => void;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ apiKey, setApiKey, portalId, setPortalId }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Key className="mr-2" /> HubSpot Credentials
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
            API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter your HubSpot API Key"
          />
        </div>
        <div>
          <label htmlFor="portalId" className="block text-sm font-medium text-gray-700">
            Portal ID
          </label>
          <input
            type="text"
            id="portalId"
            value={portalId}
            onChange={(e) => setPortalId(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter your HubSpot Portal ID"
          />
        </div>
      </div>
    </div>
  );
};

export default HubSpotForm;