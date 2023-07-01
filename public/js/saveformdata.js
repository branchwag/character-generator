const chargender = document.getElementById('chargender');

function saveInput() {
  console.log('Input has been saved');
  console.log(chargender.value);
}

//sends user to output page
// function loadOutput() {
//   window.location.href = '/output';
// }

submitButton = document.querySelector('.gencharbutton');

submitButton.addEventListener('click', saveInput);
