document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (contactForm && thankYouMessage) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all fields.');
                return;
            }

            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };

            // Update the content to display a thank you message
            thankYouMessage.innerHTML = '<p>Thank you for your message! I will get back to you soon.</p>';
            contactForm.reset(); // Optional: Reset the form after submission
        });
    }
});
