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
const character_gender = document.querySelector('#gender')


// function loadOutputPage() { 
  
//   console.log("Switch to output")
//   window.location.href = "partials/output"
// }

function collectCharData() {
  console.log(character_gender.value)
}

function charFormHandler(event) {
  event.preventDefault();
  console.log('clicked')
  collectCharData()
  // loadOutputPage()
}

submitButton.addEventListener('click', charFormHandler)

console.log("green eggs and ham")