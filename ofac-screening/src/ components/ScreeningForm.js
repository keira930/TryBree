// src/components/ScreeningForm.js
import React, { useState } from 'react';

export default function ScreeningForm ({onSubmit}){
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !birthYear || !country) {
      setError('All fields are required');
      return;
    }
    setError('');
    onSubmit({ name, birthYear, country });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Birth Year:</label>
        <input type="text" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} required />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}


