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

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      name: charName,
      //   backstory: charBackstory,
      // charImg,
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

//   if (charName && charBackstory) {
//     const addCharGen = await fetch('/api/characters/1', {
//       //id needs to be dynamically generated
//       method: 'PUT',
//       body: JSON.stringify({
//         name: charName,
//         backstory: charBackstory,
//         // charImg,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (addCharGen.ok) {
//       //   document.location.replace('/output');
//       console.log('character saved');
//     } else {
//       console.log('unsuccessful post request');
//     }
//   }
// };

function SaveHandler(event) {
  event.preventDefault();
  console.log('clicked');
  collectCharData();
}

submitButton.addEventListener('click', SaveHandler);

console.log('script connected');
