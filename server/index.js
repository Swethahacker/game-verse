const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
console.log('KEY LOADED:', process.env.OPENROUTER_API_KEY ? 'YES, length=' + process.env.OPENROUTER_API_KEY.length : 'MISSING');

app.use(cors());
app.use(express.json());

app.post('/recommend', async (req, res) => {
  const { searchText } = req.body;
  
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "openrouter/free",
        messages: [{
          role: 'user',
          content: `I searched for "${searchText}" games. Give me 3 short game recommendations with one sentence each. Be fun and exciting!`
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
        }
      }
    );
    const text = response.data.choices[0].message.content;
    res.json({ recommendation: text });
  } catch (error) {
    console.log('ERROR:', error.response?.data);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});