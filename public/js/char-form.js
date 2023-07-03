// const charFormHandler = async (event) => {
//   console.log('called charFormHandler');

//   event.preventDefault();
//   console.log('submit button clicked');

//   // Collect values from the character form
//   const character_gender = document.querySelector('#gender').value;
//   console.log(character_gender);
// };

// document
//   .querySelector('#submitBtn')
//   .addEventListener('submit', charFormHandler);

const submitButton = document.querySelector('#submitBtn')
const gender = document.querySelector('#gender')
const eye = document.querySelector('#eye-color')
const hair = document.querySelector('#hair-color')
const race = document.querySelector('#race')
const charClass = document.querySelector('#class')


// const class_id = document.querySelector('#class').value
// const race_id = document.querySelector('#race').value
// const eye_color = document.querySelector('#eye-color').value
// const hair_color = document.querySelector('#hair-color').value



// function loadOutputPage() { 
  
//   console.log("Switch to output")
//   window.location.href = "partials/output"
// }

const collectCharData = async () => {
  const character_gender = gender.value
  const eye_color = eye.options[eye.selectedIndex].text
  const hair_color = hair.options[hair.selectedIndex].text
  const race_id = race.selectedIndex
  const class_id = charClass.selectedIndex
  console.log(character_gender)
  console.log(eye_color)
  console.log(hair_color)
  console.log(race_id)
  console.log(class_id)
  const addChar = await fetch('/api/characters', {
    method: 'POST',
    body: JSON.stringify({ character_gender, eye_color, hair_color, race_id, class_id }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (addChar.ok) {
    document.location.replace('/output')
    console.log("all good")
  } else {
    console.log("unsuccessful post request")
  }
}

function charFormHandler(event) {
  event.preventDefault();
  console.log('clicked')
  collectCharData()
  // loadOutputPage()
}

submitButton.addEventListener('click', charFormHandler)

console.log("green eggs and ham")