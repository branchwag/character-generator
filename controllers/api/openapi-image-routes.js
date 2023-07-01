const router = require('express').Router();
const imagapiKey = process.env.IMAGE_API_KEY;
let reqHash = '';

// /api/images/imagegen
router.post('/imagegen', async (req, res) => {
  const url = 'https://arimagesynthesizer.p.rapidapi.com/generate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': `${imagapiKey}`,
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
    body: new URLSearchParams({
      prompt: '',
      id: '12345',
      width: '768',
      height: '768',
      inferenceSteps: '50',
      guidanceScale: '7.5',
      img2img_strength: '0.75',
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const imgHash = JSON.parse(result);
    res.send(result);
    console.log(result);
    console.log(imgHash.hash);
    reqHash = imgHash.hash;
    console.log(reqHash);
  } catch (error) {
    console.error(error);
  }
});

// /api/images/genimg

router.get('/genimg', async (req, res) => {
  const url = `https://arimagesynthesizer.p.rapidapi.com/get?hash=${reqHash}&returnType=image`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ea7d8918bcmsh2f4999342dafc11p1b9681jsn5835d1387bcd',
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response;
    const encodeUrl = btoa(url);
    res.send(result);
    console.log(result);
    console.log(encodeUrl);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
