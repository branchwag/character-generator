const submitButton = document.querySelector('#submitBtn');
const gender = document.querySelector('#gender');
const eye = document.querySelector('#eye-color');
const hair = document.querySelector('#hair-color');
const race = document.querySelector('#race');
const charClass = document.querySelector('#class');

const collectCharData = async () => {
  const character_gender = gender.value;
  const eye_color = eye.options[eye.selectedIndex].text;
  const hair_color = hair.options[hair.selectedIndex].text;
  const race_id = race.selectedIndex;
  const class_id = charClass.selectedIndex;

  if (character_gender && class_id && race_id) {
    const addChar = await fetch('/api/characters', {
      method: 'POST',
      body: JSON.stringify({
        character_gender,
        eye_color,
        hair_color,
        race_id,
        class_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (addChar.ok) {
      // console.log('all good');
      const getUserPrompt = async () => {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/jsom',
          },
        };
        try {
          const response = await fetch('/api/characters', options);
          const data = await response.json();
          const arrayLength = data.length;
          const lastCharacter = data[arrayLength - 1];
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
          // console.log(error);
        }
      };
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
          // console.log(options.body);
          const response = await fetch('/api/images/imagegen', options);
          const result = await response.text();
          const imgHash = JSON.parse(result);
          // console.log(result);
          // console.log(imgHash.hash);
        } catch (error) {
          // console.error(error);
        }
      };
      imageGen();
      console.log(getUserPrompt());
      setTimeout(() => {
        document.location.replace('/output');
      }, 5000);
    } else {
      console.log('unsuccessful post request');
      console.error(addChar);
    }
  } else {
    alert('Gender, race, and class are required fields');
  }
};

function charFormHandler(event) {
  event.preventDefault();
  const submitEl = document.querySelector('#submitBtn');
  submitEl.remove();

  const outputEl = document.querySelector('#form');
  const newElement = document.createElement('p');
  newElement.id = 'savetext';
  newElement.textContent = 'Loading, please wait.';
  outputEl.append(newElement);
  // console.log('clicked');
  collectCharData();
  // loadOutputPage()
}

submitButton.addEventListener('click', charFormHandler);

// console.log('green eggs and ham');
