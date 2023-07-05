// const charImageEl = document.querySelector('#genimage'); Need to get image generated on page
// const charName = charNameEl.textContent;
// const charBackstory = charBackstoryEl.textContent;
const submitButton = document.querySelector('#save');

const collectCharData = async () => {
  const charNameEl = document.querySelector('#genname');
  const charBackstoryEl = document.querySelector('#backstoryoutput');
  const charName = charNameEl.textContent;
  const charBackstory = charBackstoryEl.textContent;
  //   console.log(charName);
  //   console.log(charBackstory);
  //   console.log(charNameEl);
  //   console.log(charBackstory.trim().slice(0, 100));
  //const charImg = get the source here;

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      name: charName.trim(),
      backstory: charBackstory.trim(), //.slice(0, 255),
      // image_link: charImg will go here,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:3001/api/characters/1',
      options,
    );
    const data = await response.json();
    console.log(data);
    // console.log(data.choices[0].text);
    //add in a bit of text to say that result was saved
  } catch (error) {
    console.error();
  }
};

function SaveHandler(event) {
  event.preventDefault();
  console.log('clicked');
  //remove the submit button and replace with text that the character has been saved
  submitButton.remove();
  const regenEl = document.querySelector('#regen');
  regenEl.remove();
  // const backstoryEl = document.querySelector('#backstoryoutput');
  const outputEl = document.querySelector('.output');
  const newElement = document.createElement('p');
  newElement.id = 'savetext';
  newElement.textContent = 'Legend Saved!';
  outputEl.append(newElement);
  collectCharData();
}

submitButton.addEventListener('click', SaveHandler);

console.log('save script connected');
