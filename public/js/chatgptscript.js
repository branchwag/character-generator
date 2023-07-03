//need to create string from form inputs to then send to chatgpt. Make that database inputs.
//front end JS needs to first do a GET request to the backend where a route to query info has been set up to SELECT fields that were input into the form
//results of GET request get make into queries for backstory and char name

//So we are getting data from database to make prompt actually. These variables are placeholders for now.
const backstoryPrompt =
  'Generate an interesting fantasty character backstory for a female from the 1800s without using her name.';
const namePrompt =
  'Generate a cool female fantasy character name from the 1800s';

const parentElement = document.querySelector('#backstoryappend');
const parentElementName = document.querySelector('#charnameappend');

const getBackstory = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt: backstoryPrompt,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:3001/api/chatgpt/getbackstory',
      options,
    );
    const data = await response.json();
    // console.log(data);
    console.log(data.choices[0].text);
    //add in a bit of text for the user to continue the story since there is not a clean way for Chatgpt to conclude output (sentence ending)
    const pElement = document.createElement('p');
    pElement.textContent = data.choices[0].text;
    parentElement.append(pElement);
  } catch (error) {
    console.error();
  }
};

const getName = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt: namePrompt,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:3001/api/chatgpt/namegen',
      options,
    );
    const data = await response.json();
    // console.log(data);
    console.log(data.choices[0].text);
    //add in a bit of text for the user to continue the story since there is not a clean way for Chatgpt to conclude output (sentence ending)
    const pElement = document.createElement('p');
    pElement.textContent = data.choices[0].text;
    parentElementName.append(pElement);
  } catch (error) {
    console.error();
  }
};

getBackstory();
getName();

//maybe something here to show while the page is loading?

// console.log('the chatgpt backstory script is connected');
