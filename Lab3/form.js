const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) { event.preventDefault();
const nameInput = document.getElementById('name'); const emailInput = document.getElementById('email');
const name = nameInput.value.trim(); const email = emailInput.value.trim();
if (name === '' || email === '') { alert('Please fill in all the fields.');
} else if (!isValidEmail(email)) {
alert('Please enter a valid email address.');
} else {
const confirmed = confirm('Are you sure you want to submit the form?');
if (confirmed) {
const message = prompt('Please enter your name:'); if (message === null) {
alert('Form submitted.'); } else {
alert(`Thank you for your submission ${message}`);
contactForm.reset(); }
}
} });
function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return emailRegex.test(email);
}
