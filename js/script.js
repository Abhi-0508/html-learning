// Get the form
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    alert('Thank you for your submission!');
    form.reset(); // Clear the form fields
  });
}
