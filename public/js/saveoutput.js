// const charImageEl = document.querySelector('#genimage'); Need to get image generated on page
// const charName = charNameEl.textContent;
// const charBackstory = charBackstoryEl.textContent;
const submitButton = document.querySelector('#save');

const collectCharData = async () => {
  const charNameEl = document.querySelector('#genname');
  const charBackstoryEl = document.querySelector('#backstoryoutput');
  const charName = charNameEl.textContent;
  const charBackstory = charBackstoryEl.textContent;
  console.log(charName);
  //   console.log(charNameEl);
  //const charImg = get the source here;

  if (charName && charBackstory) {
    const addCharGen = await fetch('/api/characters/1', {
      //id needs to be dynamically generated
      method: 'POST',
      body: JSON.stringify({
        charName,
        charBackstory,
        // charImg,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (addCharGen.ok) {
      //   document.location.replace('/output');
      console.log('character saved');
    } else {
      console.log('unsuccessful post request');
    }
  }
};

function SaveHandler(event) {
  event.preventDefault();
  console.log('clicked');
  collectCharData();
}

submitButton.addEventListener('click', SaveHandler);

console.log('script connected');
