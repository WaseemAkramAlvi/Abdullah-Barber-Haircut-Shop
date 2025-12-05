// Main JavaScript for Sharp Blades

document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));
});

// Style Selector Logic
const styles = {
    fade: {
        title: "The Modern Fade",
        desc: "A seamless transition from short to long.",
        img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    pompadour: {
        title: "Classic Pompadour",
        desc: "Volume on top, slicked back sides for a timeless look.",
        img: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    buzz: {
        title: "Buzz Cut",
        desc: "Low maintenance, rugged, and masculine.",
        img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    undercut: {
        title: "The Undercut",
        desc: "Short sides with a long top, perfect for styling.",
        img: "https://images.unsplash.com/photo-1593702295094-aea22597af65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
};

function changeStyle(element) {
    // Remove active class from all buttons
    document.querySelectorAll('#style-list button').forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    element.classList.add('active');

    const styleKey = element.getAttribute('data-style');
    const styleData = styles[styleKey];
    const previewImg = document.getElementById('style-preview');
    const title = document.getElementById('style-title');
    const desc = document.getElementById('style-desc');

    // Fade out
    previewImg.style.opacity = 0;

    setTimeout(() => {
        previewImg.src = styleData.img;
        title.textContent = styleData.title;
        desc.textContent = styleData.desc;
        // Fade in
        previewImg.style.opacity = 1;
    }, 300);
}
