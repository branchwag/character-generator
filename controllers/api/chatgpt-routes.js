const chatgptkey = process.env.API_KEY;
const router = require('express').Router();

//http://localhost:3001/api/chatgpt/completions
router.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${chatgptkey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: 'Generate a cool fantasy character name from the 1800s',
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      'https://api.openai.com/v1/completions',
      options,
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
