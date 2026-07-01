import { useState } from 'react';

function AIRecommend({ searchText }) {
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  async function getRecommendation() {
    setLoading(true);
    try {
      const response = await fetch('https://game-verse-server.onrender.com/recommend',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchText })
      });
      const data = await response.json();
      console.log(data);
      if (data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation('Could not get recommendations. Try again!');
      }
    } catch (error) {
      console.log(error);
      setRecommendation('Error getting recommendations. Try again!');
    }
    setLoading(false);
  }

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      border: '2px solid #00ff88',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '40px',
      maxWidth: '700px',
      width: '100%',
      textAlign: 'left'
    }}>
      <h3 style={{color: '#00ff88', marginBottom: '16px'}}>
         AI Game Recommendations
      </h3>
      <button
        onClick={getRecommendation}
        style={{
          padding: '10px 20px',
          backgroundColor: '#00ff88',
          color: '#0f0f0f',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '16px'
        }}>
        {loading ? 'Getting recommendations...' : 'Get AI Recommendations'}
      </button>
      {recommendation && (
        <p style={{color: 'white', lineHeight: '1.8'}}>
          {recommendation}
        </p>
      )}
    </div>
  );
}

export default AIRecommend;