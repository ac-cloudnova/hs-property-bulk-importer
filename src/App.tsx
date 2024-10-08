import React, { useState } from 'react';
import { Upload, FileSpreadsheet, Send } from 'lucide-react';
import FileUpload from './components/FileUpload';
import SpreadsheetPreview from './components/SpreadsheetPreview';
import HubSpotForm from './components/HubSpotForm';
import { processSpreadsheet } from './utils/spreadsheetProcessor';

function App() {
  const [spreadsheetData, setSpreadsheetData] = useState<any[]>([]);
  const [hubspotApiKey, setHubspotApiKey] = useState('');
  const [portalId, setPortalId] = useState('');

  const handleFileUpload = async (file: File) => {
    const data = await processSpreadsheet(file);
    setSpreadsheetData(data);
  };

  const handleSubmit = async () => {
    // TODO: Implement HubSpot API call logic
    console.log('Submitting to HubSpot:', { hubspotApiKey, portalId, spreadsheetData });
    // Here you would make the actual API call to HubSpot
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <FileSpreadsheet className="mr-2" /> HubSpot Custom Properties Uploader
        </h1>
        
        <FileUpload onFileUpload={handleFileUpload} />
        
        {spreadsheetData.length > 0 && (
          <>
            <SpreadsheetPreview data={spreadsheetData} />
            <HubSpotForm
              apiKey={hubspotApiKey}
              setApiKey={setHubspotApiKey}
              portalId={portalId}
              setPortalId={setPortalId}
            />
            <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <Send className="mr-2" /> Submit to HubSpot
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;