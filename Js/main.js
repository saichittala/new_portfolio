
// Scroll to Top
document.getElementById('backToTop').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

// Nav Bar When Scrolled


window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled'); // Add class when scrolling
    } else {
        navBar.classList.remove('scrolled'); // Remove class when at the top
    }
});


function toggleMenu() {
    const navBtns = document.getElementById('navBtns');
    navBtns.classList.toggle('hidden');
}


document.addEventListener('DOMContentLoaded', function () {
    const fadeIns = document.querySelectorAll('.fade-in');

    const options = {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn); // Observe each fade-in section
    });
});

