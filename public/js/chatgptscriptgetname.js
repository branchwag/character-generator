const getName = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt: 'Generate a cool fantasy character name from the 1800s',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await fetch('http://localhost:3001/api/chatgpt/namegen', options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error();
  }
};
