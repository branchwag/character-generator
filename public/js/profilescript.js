const getCharByID = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      'http://localhost:3001/api/characters/',
      options,
    );
    const data = await response.json();
    console.log(data);
    console.log(data[0]);
    let cardTitle1 = document.querySelector('#card-1');
    cardTitle1.innerHTML = data[0].character_gender;
  } catch (error) {
    console.error();
  }
};
getCharByID();

console.log('profile script is connected');
