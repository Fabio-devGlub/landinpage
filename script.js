// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Menu Tabs Functionality
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItems = document.querySelectorAll('.menu-items');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all menu items
        menuItems.forEach(items => items.classList.remove('active'));
        
        // Show selected menu items
        const category = tab.getAttribute('data-category');
        const selectedItems = document.querySelector(`[data-content="${category}"]`);
        if (selectedItems) {
            selectedItems.classList.add('active');
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Obrigado por entrar em contato, ${name}!\n\nRecebemos sua mensagem e responderemos em breve no e-mail: ${email}`);
    
    // Reset form
    contactForm.reset();
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.testimonial-card, .menu-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('scroll-reveal', 'active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Reservation Button Click Handler
const reservationButtons = document.querySelectorAll('.btn-primary, .btn-hero');

reservationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Here you would typically open a reservation modal or redirect to a booking page
        const confirmed = confirm('Deseja fazer uma reserva?\n\nVocê será redirecionado para o formulário de reserva.');
        
        if (confirmed) {
            // Scroll to contact form as a placeholder
            const footer = document.getElementById('contato');
            const headerHeight = header.offsetHeight;
            const targetPosition = footer.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Image Lazy Loading (for better performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console Welcome Message
console.log('%c🍽️ Bem-vindo ao Restaurante Sabor Divino!', 'color: #E53935; font-size: 20px; font-weight: bold;');
console.log('%cSite desenvolvido com HTML, CSS e JavaScript', 'color: #666; font-size: 12px;');
