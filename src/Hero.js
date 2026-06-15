import { useState } from 'react';

function Hero() {
  const [searchText, setSearchText] = useState('');
  const [games, setGames] = useState([]);

  async function handleSearch() {
    const response = await fetch('https://www.freetogame.com/api/games');
    const data = await response.json();
    const filtered = data.filter(game =>
      game.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setGames(filtered);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      minHeight: '90vh',
      textAlign: 'center'
    }}>
      <h1 style={{color: '#00ff88', fontSize: '64px', fontFamily: 'Arial', marginBottom: '16px'}}>
        Discover Your Next Game
      </h1>
      <p style={{color: '#aaaaaa', fontSize: '20px', marginBottom: '32px'}}>
        Search, explore and find games you'll love
      </p>
      <div style={{display: 'flex', gap: '12px', marginBottom: '40px'}}>
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: '14px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '2px solid #00ff88',
            backgroundColor: '#1a1a1a',
            color: 'white',
            width: '400px'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '14px 28px',
            backgroundColor: '#00ff88',
            color: '#0f0f0f',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
          Search
        </button>
      </div>
      <div style={{display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {games.map((game) => (
          <div key={game.id} style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            width: '250px',
            overflow: 'hidden',
            border: '1px solid #333'
          }}>
            <img src={game.thumbnail} alt={game.title} style={{width: '100%', height: '150px', objectFit: 'cover'}}/>
            <div style={{padding: '16px'}}>
              <h3 style={{color: 'white', marginBottom: '8px'}}>{game.title}</h3>
              <p style={{color: '#00ff88'}}>🎮 {game.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;