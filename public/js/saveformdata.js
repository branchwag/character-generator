function saveInput() {
  console.log('Input has been saved');
}

//sends user to output page
// function loadOutput() {
//   window.location.href = '/output';
// }

submitButton = document.querySelector('.gencharbutton');

submitButton.addEventListener('click', saveInput);
