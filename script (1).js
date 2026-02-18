// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe projects
document.querySelectorAll('.project').forEach((project, index) => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(40px)';
    project.style.transition = `all 0.8s ease ${index * 0.15}s`;
    observer.observe(project);
});

// Observe expertise items
document.querySelectorAll('.expertise-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-40px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Active navigation on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = 'var(--text-secondary)';
            });
            navLink.style.color = 'var(--navy-dark)';
            navLink.style.fontWeight = '700';
        }
    });
});

console.log('Portfolio loaded successfully!');
