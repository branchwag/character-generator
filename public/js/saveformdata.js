//we may need to do the below another way. Save the elements of the form into the database and then chatgpt grabs the elements from the database to create the prompt.
//the below is just constructing a prompt string directly from the form inputs.

//will need to input variable for character setting here
const charGender = document.getElementById('chargender');
//will need to sort this out once button is selectable  const charRace = that selection
let backstoryPrompt = '';
let namePrompt = '';

function saveInput() {
  console.log('Input has been saved');
  console.log(charGender.value);
  //we are going to be making a string from the inputs
  //take the setting, gender, race
  //return "Generate a cool fantasy character name for a {gender} {race} in a {} setting"
  //return "Generate an interesting backstory for a {gender} {race} character in a {} setting"
  backstoryPrompt =
    'Generate an interesting backstory for a ' +
    charGender.value +
    ' elf in a dnd setting';
  namePrompt =
    'Generate a cool fantasy character name for a ' +
    charGender.value +
    ' elf in a dnd setting';

  console.log(backstoryPrompt);
  console.log(namePrompt);
  //   module.exports = { backstoryPrompt };
  //   module.exports = { namePrompt };
}

//sends user to output page
// function loadOutput() {
//   window.location.href = '/output';
// }

submitButton = document.querySelector('.gencharbutton');

submitButton.addEventListener('click', saveInput);
