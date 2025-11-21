// === MENU SIDEBAR : Active Link Highlighting ===
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar nav a');
    links.forEach(link => {
        if (link.href === window.location.href || window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// === FADE-IN Animation des sections/cards ===
document.addEventListener('DOMContentLoaded', function() {
    const fadeEls = document.querySelectorAll('.card, .hero, .card-section, .mission-details, .competence-card, .contact-card');
    fadeEls.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.7s, transform 0.7s';
            el.style.opacity = 1;
            el.style.transform = 'none';
        }, 120);
    });
});

// === Progress Bar (animate width on load) ===
document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.progress-fill');
    bars.forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = w; }, 350);
    });
});

// === IMAGE MODALE pour les traces ===
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.trace-gallery img');
    if (images.length) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        Object.assign(modal.style, {
            position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh',
            background: 'rgba(12,15,30,0.97)', display: 'none', zIndex: 9000,
            alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out'
        });
        const img = document.createElement('img');
        Object.assign(img.style, {
            maxWidth: '92vw', maxHeight: '88vh', borderRadius: '1.6rem',
            boxShadow: '0 6px 40px #0f043c'
        });
        modal.appendChild(img);
        document.body.appendChild(modal);

        modal.addEventListener('click',()=>modal.style.display='none');
        images.forEach(thumb => {
            thumb.addEventListener('click', function () {
                img.src = this.src;
                modal.style.display = 'flex';
            });
        });
    }
});

// === SMOOTH SCROLL pour les ancres sur même page si besoin ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id && id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            const el = document.querySelector(id);
            window.scrollTo({top: el.offsetTop - 18, behavior:'smooth'});
        }
    });
});

// === BOUTON RETOUR EN HAUT ===
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    Object.assign(btn.style, {
        display:'none', position:'fixed', right:'28px', bottom:'36px', zIndex:'50',
        width:'54px',height:'54px',borderRadius:'50%',fontSize:'2rem',background:'var(--secondary)',
        color:'#fff',border:'none',boxShadow:'0 4px 30px var(--primary)',cursor:'pointer',
        transition:'transform 0.35s'
    });
    document.body.appendChild(btn);

    window.addEventListener('scroll', function(){
        btn.style.display = window.scrollY > 250 ? 'block' : 'none';
    });
    btn.addEventListener('mouseenter',function(){ this.style.transform = 'translateY(-7px) scale(1.12)'; });
    btn.addEventListener('mouseleave',function(){ this.style.transform = 'none'; });
    btn.onclick = function(){ window.scrollTo({top:0,behavior:'smooth'});}
});

// === CONSOLE HELLO ===
console.log('%c Portfolio RT - JS loaded ✓ ','color:#2fdadd;font-weight:bold;font-size:1.08rem;');
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '1rem 0';
    }
});

// ========================================
// ACTIVE LINK HIGHLIGHTING
// ========================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// ANIMATION ON SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.mission-card, .competence-card, .entreprise-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
});

// ========================================
// PROGRESS BARS ANIMATION
// ========================================
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
}

// Observer pour animer les barres au scroll
const progressObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', function() {
    const progressSections = document.querySelectorAll('.progress-section');
    progressSections.forEach(section => {
        progressObserver.observe(section);
    });
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
}

document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ========================================
// GESTION DES IMAGES (LAZY LOADING)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ========================================
// GESTION DES MODALES (images traces)
// ========================================
function createImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;

    const modalImg = document.createElement('img');
    modalImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    document.querySelectorAll('.trace-item img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    modal.addEventListener('click', function() {
        this.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', createImageModal);

console.log('Portfolio RT - JavaScript chargé avec succès ✓');
