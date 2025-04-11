const flyInParagraph = document.querySelector('.section2-paragraph');
const flyInParagraph2 = document.querySelector('.section3-paragraph');
const flyInParagraph3 = document.querySelector('.section4-paragraph');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fly-in-active');
        }
    }), {
        threshold: 0.3};
});

observer.observe(flyInParagraph);
observer.observe(flyInParagraph2);
observer.observe(flyInParagraph3);

const listItems = document.querySelectorAll('.section4-paragraph ul li');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
            entry.target.classList.add('show');
        }, index * 300);
    }
    }), {
        threshold: 0.3};
});

listItems.forEach((item) => {
    observer2.observe(item);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    // Check if menu is active and click is outside menu and hamburger
    if (navMenu.classList.contains("active") && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// Prevent clicks inside menu from closing it
navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Scroll to top functionality
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

