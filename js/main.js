// Mobile Menu Toggle
document.getElementById('mobileMenuButton').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

// Scroll to Top Button
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.remove('hidden');
    } else {
        scrollTopButton.classList.add('hidden');
    }
});

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-to');
    const decimals = +counter.getAttribute('data-decimals') || 0;
    const duration = speed * target;
    let current = 0;
    
    const increment = target / duration * 10;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = current.toFixed(decimals);
            setTimeout(updateCounter, 10);
        } else {
            counter.textContent = target.toFixed(decimals);
        }
    };
    
    updateCounter();
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});