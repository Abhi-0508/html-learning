/* --------------------------------
   FORM SUBMISSION HANDLING
-------------------------------- */
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    alert('Thank you for your submission!');
    form.reset(); // Clear the form fields
  });
}

/* --------------------------------
   THEME TOGGLE (Light/Dark Mode)
-------------------------------- */
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optional: Update button label
    themeToggle.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
}

/* --------------------------------
   MOBILE NAVIGATION TOGGLE
-------------------------------- */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

/* --------------------------------
   FORM FIELD HOVER TIPS
-------------------------------- */
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameTip = document.getElementById('name-tip');
const emailTip = document.getElementById('email-tip');

if (nameInput && nameTip) {
  nameInput.addEventListener('mouseenter', () => {
    nameTip.style.display = 'inline';
  });
  nameInput.addEventListener('mouseleave', () => {
    nameTip.style.display = 'none';
  });
}

if (emailInput && emailTip) {
  emailInput.addEventListener('mouseenter', () => {
    emailTip.style.display = 'inline';
  });
  emailInput.addEventListener('mouseleave', () => {
    emailTip.style.display = 'none';
  });
}
