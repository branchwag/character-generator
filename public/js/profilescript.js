const getCharByID = async () => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch('/api/characters/', options);
    const data = await response.json();
    // console.log(data);
    // console.log(data[0]);
    // console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i].name === 'string') {
        // console.log(data[i].name);
        // console.log(data[2].name);
        // console.log(typeof data[2].name);
        // console.log(typeof data[8].name);
        // console.log(data[i].name.length);
        //if the item has been saved, it has a name so we will make a card for it
        //create a card
        let cardbox = document.querySelector('#cardbox');
        //make a div
        let newCard = document.createElement('div');
        newCard.classList.add('character-cards');
        newCard.id = `'card-${i + 1}'`;
        // console.log(newCard.id);
        newCard.innerHTML = `
        <div class="card w-25 character-card">
            <div class="card-body">
                <h5 class="card-title" id=${newCard.id}>${data[i].name}</h5>
                <a href="/output/${data[i].id}" class="btn btn-primary" role="button">Click Here!</a>
            </div>
        </div>`;
        cardbox.append(newCard);

        //populate the card with data

        //console.log(data[i].eye_color);
        // let cardTitle1 = document.querySelector(`#${newCard.id}`);
        // cardTitle1.innerHTML = data[i].name;
      }
    }
  } catch (error) {
    console.error();
  }
};
getCharByID();

// console.log('profile script is connected');
