const inputElement = document.querySelector('#input');

const getName = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt: `Generate a cool fantasy character name from the 1800s ${inputElement.value}`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await fetch('http://localhost:3001/api/chatgpt/namegen', options);
    const data = await response.json();
    console.log(data);
    console.log(data.choices[0].text);
    element.textContent = data.choices[0].text;
    if (data.choices[0].message.text && inputElement.value) {
      const pElement = document.createElement('p');
      pElement.textContent = inputElement.value;
      pElement.addEventListener('click', () =>
        changeInput(pElement.textContent),
      );
      historyElement.append(pElement);
    }
  } catch (error) {
    console.error();
  }
};

getName();

//something that shows things are loading
