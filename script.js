const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const observerOptions = {
    threshold: 0.2
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.section-title, .skill-card, .project-card, contact-box, contact-box p');

elementsToAnimate.forEach( el => {
    el.classList.add('hidden');
    observer.observe(el);
})