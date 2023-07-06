const loginFormHandler = async (event) => {
  // console.log('called loginFormHandler');

  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  // console.log(email);
  const password = document.querySelector('#password-login').value.trim();
  // console.log(password);

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('Login failed! Incorrect username or password.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  // console.log(username);
  const email = document.querySelector('#email-signup').value.trim();
  // console.log(email);
  const password = document.querySelector('#password-signup').value.trim();
  // console.log(password);

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('please enter all three categories');
  }
};
// console.log('loginFormElement', document.querySelector('.login-form'));
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
