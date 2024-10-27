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

