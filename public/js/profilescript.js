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
    // console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.length > 1) {
        //console.log(data[i].eye_color);
        let cardTitle1 = document.querySelector('#card-1');
        cardTitle1.innerHTML = data[i].name;
      }
    }
  } catch (error) {
    console.error();
  }
};
getCharByID();

console.log('profile script is connected');
