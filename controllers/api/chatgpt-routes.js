const chatgptkey = process.env.API_KEY;

router.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${chatgptkey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Generate a cool character name' }],
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
