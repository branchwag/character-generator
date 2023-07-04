// remove console logs for url, response, result
let imgUrl;

// getUserPrompt

const getUserPrompt = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/jsom',
    },
  };
  try {
    const response = await fetch(
      'http://localhost:3001/api/characters',
      options,
    );
    const data = await response.json();
    console.log(data[0]);
    let charGender = data[0].character_gender;
    let charHair = data[0].hair_color;
    let charEyes = data[0].eye_color;
    return `${charGender} fantasy character with ${charHair} hair and ${charEyes} eyes`;
  } catch (error) {
    console.log(error);
  }
};

// /api/images/imagegen
const imageGen = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt: await getUserPrompt(),
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
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
    // console.log(response, result);
    console.log('starting hash processing...');
  } catch (error) {
    console.error(error);
  }
};

const hashProcessing = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      'http://localhost:3001/api/images/hashes',
      options,
    );
    const result = await response.json();
    console.log(result.image[0].hash);
    grabbedHash = result.image[0].hash;
    imgUrl = `https://arimagesynthesizer.p.rapidapi.com/get?hash=${grabbedHash}&returnType=image`;
    console.log(imgUrl);
  } catch (err) {
    console.log(err);
  }
};

getUserPrompt();
imageGen();
getImg();
hashProcessing();

console.log('retrieval script connected...');
