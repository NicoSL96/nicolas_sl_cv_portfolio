// ========================== Lang v2 ==========================

const flagsElement = document.getElementById("flags_menu");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./lang/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es');
})

// =================== dropdown test =======================

const menu = document.getElementById("flags_menu");
let open = false;

function toggleDropdown() {
    if (!open) {
        menu.classList.add("open");
        menu.style.height = menu.scrollHeight + "px";
    } else {
        closeDropdown();
    }
    open = !open;
}

function closeDropdown() {
    menu.style.height = "0px";
    menu.classList.remove("open");
    open = false;
}

function selectOption(option) {

  // cambiar imagen botón
    const imgSrc = option.querySelector("img").src;
    document.getElementById("selectedImg").src = imgSrc;

  // quitar selección anterior
//    document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));

  // marcar nueva
//    option.classList.add("selected");

    closeDropdown();
}

/* cerrar afuera */
window.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
        closeDropdown();
    }
});
// ==================== Smooth Scrolling ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Skill Progress Animation ==================== 
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('skill-progress')) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(element => {
    observer.observe(element);
});

// ==================== Active Navigation Link ==================== 
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
});

// ==================== Fade In Animation on Scroll ==================== 
const fadeElements = document.querySelectorAll('.project-card, .education-card, .timeline-content');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Agregar estilos CSS para el link activo
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
    }
`;
document.head.appendChild(style);