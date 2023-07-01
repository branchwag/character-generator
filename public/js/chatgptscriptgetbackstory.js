//need to create string from form inputs to then send to chatgpt.

//get data from database to make prompt actually
const backstoryPrompt = 'Generate a cool fantasty character backstory';

const parentElement = document.querySelector('#backstoryappend');
// const { backstoryPrompt } = require('./saveformdata.js');

const getBackstory = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt: backstoryPrompt, //'Please describe a sunny day.', //get output from saveformdata file
      // 'Generate an interesting backstory for a fantasty character from the 1800s.',
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
    // console.log('test log in the try part');
    // console.log(data);
    console.log(data.choices[0].text);
    const pElement = document.createElement('p');
    pElement.textContent = data.choices[0].text;
    parentElement.append(pElement);
  } catch (error) {
    console.error();
  }
};

getBackstory();
console.log('the chatgpt backstory script is connected');
