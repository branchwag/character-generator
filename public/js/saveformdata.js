//will need to input variable for character setting here
const charGender = document.getElementById('chargender');
//will need to sort this out once button is selectable  const charRace = that selection

function saveInput() {
  console.log('Input has been saved');
  console.log(charGender.value);
  //we are going to be making a string from the inputs
  //take the setting, gender, race
  //return "Generate a cool fantasy character name for a {gender} {race} in a {} setting"
  //return "Generate an interesting backstory for a {gender} {race} character in a {} setting"
}

//sends user to output page
// function loadOutput() {
//   window.location.href = '/output';
// }

submitButton = document.querySelector('.gencharbutton');

submitButton.addEventListener('click', saveInput);
