
// Scroll to Top
document.getElementById('backToTop').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});

// Scroll to About

// Check for the presence of the "about-section" in the URL hash
document.addEventListener("DOMContentLoaded", function () {
    // Scroll to the about section if the hash exists
    if (window.location.hash === "#about-section") {
        document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    }
});

// Add event listener for buttons
document.querySelectorAll(".about-button").forEach(button => {
    button.addEventListener("click", function (event) {
        // Check if the current page is the index.html
        if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
            event.preventDefault(); // Prevent default anchor link behavior
            document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
        }
        // If on another page, allow normal navigation (let the browser handle it)
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


// Animation

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



// // Loading

// document.addEventListener("DOMContentLoaded", () => {
//     const loader = document.getElementById("loader");
//     const loadingText = document.getElementById("loading-text");

//     let progress = 0;

//     const loadingInterval = setInterval(() => {
//         if (progress >= 100) {
//             clearInterval(loadingInterval);
//             loader.style.opacity = '0'; // Fade out loader
//             setTimeout(() => {
//                 loader.style.display = 'none'; // Hide after fade
//             }, 500); // Match this duration with CSS transition
//         } else {
//             progress += Math.random() * 5; // Random increment for smoothness
//             loadingText.textContent = `Loading... ${Math.min(Math.round(progress), 100)}%`;
//             loadingText.style.transform = `translateY(${Math.sin(progress / 100 * Math.PI) * 10}px)`; // Smooth bounce effect
//         }
//     }, 50); // Adjust time for loading speed
// });



// Scroll to top on page load
window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});


// Nav Container Mobile

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuContainer = document.getElementById('menu-container');

    menuIcon.addEventListener('click', function() {
        // Toggle the clicked class for scaling effect
        menuIcon.classList.toggle('clicked');

        // Check if the menu container is currently visible
        if (menuContainer.classList.contains('active')) {
            // Hide the menu container
            menuContainer.classList.remove('active');
            // Wait for the fade-out to finish before setting display to none
            setTimeout(() => {
                menuContainer.style.display = 'none'; // Hide after fade out
            }, 500); // Match with the CSS transition duration
            menuIcon.src = 'img/menu.svg'; // Change back to menu icon
        } else {
            // Show the menu container
            menuContainer.style.display = 'block'; // Set display to block
            setTimeout(() => {
                menuContainer.classList.add('active'); // Start fade-in and slide down
            }, 10); // Small delay to ensure display is applied first
            menuIcon.src = 'img/close.svg'; // Change to close icon
        }
    });
});

