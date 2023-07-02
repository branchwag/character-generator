const charFormHandler = async (event) => {
    console.log('called charFormHandler');

    event.preventDefault();
    console.log('submit button clicked')

    // Collect values from the character form
    const character_gender = document.querySelector('#gender').value
    console.log(character_gender)
}

document
    .querySelector('#submitBtn')
    .addEventListener('submit', charFormHandler)