const api_key = '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';
const router = require('express').Router();

router.post('/imagegen', async (req, res) => {
  const url = 'https://ai-image-generator3.p.rapidapi.com/generate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ea7d8918bcmsh2f4999342dafc11p1b9681jsn5835d1387bcd',
      'X-RapidAPI-Host': 'ai-image-generator3.p.rapidapi.com',
    },
    body: JSON.stringify({
      prompt: 'tiny dog walking on glass of water',
      page: 1,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    res.send(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
