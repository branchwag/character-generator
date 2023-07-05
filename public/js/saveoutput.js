// const charImageEl = document.querySelector('#genimage'); Need to get image generated on page
// const charName = charNameEl.textContent;
// const charBackstory = charBackstoryEl.textContent;
const submitButton = document.querySelector('#save');

const getNumber = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch('/api/characters', options);
    const data = await response.json();

    const arrayLength = data.length;
    const lastCharacter = data[arrayLength - 1];
    // console.log(lastCharacter.id);
    // console.log(typeof lastCharacter);
    return lastCharacter.id;
  } catch (error) {
    console.error();
  }
};

function getImageSrc() {
  //if element exists
  //needs to return the value to store in src
  if (document.querySelector('#genimg')) {
    // console.log('image found!');
    return document.querySelector('#genimg').src;
  } else {
    console.log('no valid element');
  }
}

const collectCharData = async () => {
  const charNameEl = document.querySelector('#genname');
  const charBackstoryEl = document.querySelector('#backstoryoutput');
  const charName = charNameEl.textContent;
  const charBackstory = charBackstoryEl.textContent;
  //   console.log(charName);
  //   console.log(charBackstory);
  //   console.log(charNameEl);
  //   console.log(charBackstory.trim().slice(0, 100));
  const charImg = getImageSrc();
  // const charImg = 'testsrc';

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      name: charName.trim(),
      backstory: charBackstory.trim(), //.slice(0, 255),
      image_link: charImg,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const number = await getNumber();
    const response = await fetch(`/api/characters/${number}`, options);
    const data = await response.json();
    const arrayLength = data.length;
    const lastCharacter = data[arrayLength - 1];
    console.log(data);
    console.log(lastCharacter);
    console.log(data.choices[0].text);
    //add in a bit of text to say that result was saved
  } catch (error) {
    console.error();
  }
};

function SaveHandler(event) {
  event.preventDefault();
  console.log('clicked');
  getImageSrc();
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
  // document.location.replace('/profile');
}

submitButton.addEventListener('click', SaveHandler);

console.log('save script connected');
console.log(getNumber());
