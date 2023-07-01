document.getElementById("logout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  fetch('/logout', { method: 'GET' })
    .then(response => {
      if (response.ok) {
        window.location.href = "/login";
      } else {
        alert('Failed to logout');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred');
    });
});