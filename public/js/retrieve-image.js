const generatedImage = require('../../controllers/api/openapi-image-routes.js');

const retrieveImage = async () => {
  const options = {
    method: 'POST',
    headers: {
      'X-RapidAPI-Key': 'ea7d8918bcmsh2f4999342dafc11p1b9681jsn5835d1387bcd',
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(generatedImage.encodeUrl, options);
    const imgData = await response.json();
    response.send(imgData);
  } catch (error) {
    console.log(error);
  }
};

retrieveImage();
