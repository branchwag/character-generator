const getBackstory = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      prompt:
        'Generate an interesting backstory for a fantasty character from the 1800s.',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await fetch('http://localhost:3001/api/chatgpt/getbackstory', options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error();
  }
};
