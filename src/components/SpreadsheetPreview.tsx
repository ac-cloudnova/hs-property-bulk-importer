import React from 'react';

interface SpreadsheetPreviewProps {
  data: any[];
}

const SpreadsheetPreview: React.FC<SpreadsheetPreviewProps> = ({ data }) => {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Spreadsheet Preview</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left border-b">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 border-b">{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length > 5 && (
        <p className="mt-2 text-sm text-gray-500">Showing first 5 rows of {data.length} total rows</p>
      )}
    </div>
  );
};

export default SpreadsheetPreview;