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

// Track current section and update active nav link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const isDesktop = window.innerWidth >= 1024;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (section.id === 'contact') {
            const contactBuffer = isDesktop ? 350 : 300;
            if (scrollPosition >= sectionTop - contactBuffer) {
                current = section.getAttribute('id');
            }
        } else if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').slice(1);
        link.classList.remove('active');
        if (linkHref === current) {
            link.classList.add('active');
        }
    });
}

// Update on scroll without debounce
window.addEventListener('scroll', updateActiveLink);

// Update on page load and window resize
updateActiveLink();
window.addEventListener('resize', updateActiveLink);

// Slideshow code removed — grid gallery doesn't require JS

// Show/hide navbar on scroll
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) { // Show navbar after scrolling 100px
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

