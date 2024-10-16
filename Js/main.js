
// Scroll to Top
document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

// Nav Bar When Scrolled


window.addEventListener('scroll', function() {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled'); // Add class when scrolling
    } else {
        navBar.classList.remove('scrolled'); // Remove class when at the top
    }
});

