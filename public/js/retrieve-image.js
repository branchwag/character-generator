// remove console logs for url, response, result
let imgUrl;
// let genhash;

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
    const arrayLength = data.length;
    const lastCharacter = data[arrayLength - 1];
    console.log(data[0]);
    let charGender = lastCharacter.character_gender;
    let charHair = lastCharacter.hair_color;
    let charEyes = lastCharacter.eye_color;
    let charRace = lastCharacter.race.race_name;
    let charClass = lastCharacter.class.class_name;
    //added char race and class here as it was missing before
    return (
      charGender +
      ' ' +
      charRace +
      ' ' +
      charClass +
      ' fantasy character with ' +
      charHair +
      ' hair and ' +
      charEyes +
      ' eyes'
    );
  } catch (error) {
    console.log(error);
  }
};

// /api/images/imagegen
const imageGen = async () => {
  const options = {
    method: 'POST',
    body: new URLSearchParams({
      prompt: await getUserPrompt(),
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    console.log(options.body);
    const response = await fetch(
      'http://localhost:3001/api/images/imagegen',
      options,
    );
    const result = await response.text();
    const imgHash = JSON.parse(result);
    console.log(result);
    console.log(imgHash.hash);
    // return (genhash = `https://arimagesynthesizer.p.rapidapi.com/get?hash=${(genhash =
    //   imgHash.hash)}&returnType=image`);
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
    console.log(result);
    const lineForHash = result.image;
    console.log(typeof lineForHash);
    console.log(lineForHash.length);
    grabbedHash = result.image[lineForHash.length - 1].hash;
    console.log(grabbedHash);
    imgUrl = `https://arimagesynthesizer.p.rapidapi.com/get?hash=${grabbedHash}&returnType=image`;
    console.log(imgUrl);
    return imgUrl;
  } catch (err) {
    console.log(err);
  }
};

// /api/images/genimg

const getImg = async () => {
  const url = await hashProcessing();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fba584639bmshb8b1b5ed5eef2b8p1188a0jsnf2b23376c879',
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
  };

  try {
    await fetch(url, options)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log(base64data); //GETS US A USEABLE BASE64 OUTPUT

          //img element creation
          const parentElement = document.getElementById('testtext');
          const imgElement = document.createElement('img');
          imgElement.id = 'genimg';
          imgElement.src = base64data;
          parentElement.append(imgElement);
        };
      });
  } catch (error) {
    console.error(error);
  }
};

// console.log(getUserPrompt());
imageGen();
getImg(); //GET IMG should be last function to run
// hashProcessing();

console.log('retrieval script connected...');
