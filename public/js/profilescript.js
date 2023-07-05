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
    console.log(data);
    // console.log(data[0]);
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.length > 1) {
        //if the item has been saved, it has a name so we will make a card for it
        //create a card
        let cardbox = document.querySelector('#cardbox');
        //make a div
        let newCard = document.createElement('div');
        newCard.id = `'card-${i + 1}'`;
        console.log(newCard.id);
        newCard.innerHTML = `
        <div class="col">
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" id=${newCard.id}></h5>
                <a href="/output?characterId={{character.id}}" class="btn btn-primary" role="button">Click Here!</a>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
            </div>
        </div>`;
        cardbox.append(newCard);

        //populate the card with data

        //console.log(data[i].eye_color);
        let cardTitle1 = document.querySelector(`#${newCard.id}`);
        cardTitle1.innerHTML = data[i].name;
      }
    }
  } catch (error) {
    console.error();
  }
};
getCharByID();

console.log('profile script is connected');
