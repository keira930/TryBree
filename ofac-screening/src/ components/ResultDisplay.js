// src/components/ResultDisplay.jsx
import React from 'react';

function ResultDisplay({ result }) {
  if (!result) return null;

  return (
    <div>
      <h3>Screening Result: {result.status}</h3>
      {result.status === 'Hit' && (
        <div>
          <p>Name: {result.nameMatch ? '✅' : '❌'}</p>
          <p>Birth Year: {result.birthYearMatch ? '✅' : '❌'}</p>
          <p>Country: {result.countryMatch ? '✅' : '❌'}</p>
        </div>
      )}
    </div>
  );
}

export default ResultDisplay;
