const getPicture = async () => {
  const url =
    'https://arimagesynthesizer.p.rapidapi.com/get?hash=40ee4f2a4f7d6b6e37ffa4a728812de3&returnType=image';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f0f29904e6mshef2e6c564d6894dp1e667djsnc65327931468',
      'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com',
    },
  };

  try {
    await fetch(url, options)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log(base64data); //GETS US A USEABLE BASE64 OUTPUT

          //img element creation
          const parentElement = document.getElementById('testtext');
          const imgElement = document.createElement('img');
          imgElement.id = 'genimg';
          imgElement.src = base64data;
          parentElement.append(imgElement);
        };
      });
    // const result = await response.text();
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getPicture();

console.log('script connected');
// console.log(pictureStuff);

// const myBlob = new Blob([pictureStuff], { type: 'image/jfif' });
// console.log(URL.createObjectURL(myBlob));
