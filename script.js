/* script.js */

function showMessage() {
    alert('Welcome to our website!');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
