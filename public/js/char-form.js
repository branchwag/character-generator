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
  // const eye_color = eye.find("option:selected").text()
  console.log(character_gender)
  console.log(eye.options[eye.selectedIndex].text)
  // const addChar = await fetch('/api/characters', {
  //   method: 'POST',
  //   body: JSON.stringify({ character_gender }),
  //   headers: { 'Content-Type': 'application/json' }
  // });
  // if (addChar.ok) {
  //   document.location.replace('/partials/output')
  //   console.log("all good")
  // } else {
  //   console.log("unsuccessful post request")
  // }
}

function charFormHandler(event) {
  event.preventDefault();
  console.log('clicked')
  collectCharData()
  // loadOutputPage()
}

submitButton.addEventListener('click', charFormHandler)

console.log("green eggs and ham")