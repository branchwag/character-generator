const userPrompt = 'fantasy high elf sorcerer';
// const exElement = document.querySelector('#pagetitle');
let grabbedHash;

// POST : grab from localhost route and get hash

const retrieveImage = async () => {
  const options = {
    method: 'POST',
    body: userPrompt,
    headers: {
      'X-RapidAPI-Key': 'ea7d8918bcmsh2f4999342dafc11p1b9681jsn5835d1387bcd',
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(
      'http://localhost:3001/api/images/imagegen',
      options,
    );
    const imgData = await response.json();
    console.log(imgData);
    grabbedHash = imgData.hash;
    console.log(grabbedHash);
  } catch (error) {
    console.log(error);
  }
};

// GET: grab encoded url

const hashToEncodedURL = async () => {
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
    const imgData = await response.text();
    console.log(JSON.stringify(imgData));
  } catch (error) {
    console.log(error);
  }
};

retrieveImage();
hashToEncodedURL();

console.log('retrieval script connected...');
