import React, { useState } from 'react';

function HomePage() {
  const [riotId, setRiotId] = useState('');

  const handleInputChange = (event) => {
    setRiotId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for Riot ID:', riotId);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Valobear</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter riot ID"
          value={riotId}
          onChange={handleInputChange}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Search</button>
      </form>
    </div>
  );
}

export default HomePage;