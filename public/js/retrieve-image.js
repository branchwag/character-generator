let reqHash = '';

// remove console logs for url, response, result

// /api/images/imagegen
const imageGen = async () => {
  const url = 'https://arimagesynthesizer.p.rapidapi.com/generate';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:3001/api/images/imagegen',
      options,
    );
    const result = await response.text();
    const imgHash = JSON.parse(result);
    console.log(result);
    console.log(imgHash.hash);
    reqHash = imgHash.hash;
    console.log(reqHash);
    console.log(url);
  } catch (error) {
    console.error(error);
  }
};

// /api/images/genimg

const getImg = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ea7d8918bcmsh2f4999342dafc11p1b9681jsn5835d1387bcd',
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:3001/api/images/genimg',
      options,
    );
    const result = await imageGen();
    console.log(response, result);
    console.log(imageGen);
  } catch (error) {
    console.error(error);
  }
};

imageGen();
getImg();
