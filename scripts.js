// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation and handling form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation for non-empty fields
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Placeholder for form submission (e.g., sending the form data via AJAX)
    // Example: You could use fetch() or any API to send the form data to a server.
    console.log('Form submitted:', { name, email, message });

    // Reset the form after submission
    form.reset();
    alert('Your message has been sent!');
});

// Optional: Adding animations for the sections when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5  // Element must be 50% visible to trigger animation
};

// Function to add animation class when element comes into view
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
};

// Initialize the observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Target sections for animation (you can target multiple sections this way)
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

