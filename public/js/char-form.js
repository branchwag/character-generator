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
      document.location.replace('/output');
      console.log('all good');
    } else {
      console.log('unsuccessful post request');
    }
  } else {
    alert('Gender, race, and class are required fields');
  }
};

function charFormHandler(event) {
  event.preventDefault();
  console.log('clicked');
  collectCharData();
  // loadOutputPage();
  // window.location.href = 'http://localhost:3001/output';
}

submitButton.addEventListener('click', charFormHandler);

console.log('green eggs and ham');
