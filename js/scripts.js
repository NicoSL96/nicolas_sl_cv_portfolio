// ==================== Lang Button ==================== 
document.addEventListener('DOMContentLoaded', ()=>{
    const aboutTitleElement=document.getElementById('about_title');
    const aboutText1Element=document.getElementById('about_text_1');
    const aboutText2Element=document.getElementById('about_text_2');
    const aboutLocationElement=document.getElementById('about_location');
    const aboutEmailElement=document.getElementById('about_email');
	const aboutLiElement=document.getElementById('about_li');


    const experienceTitleElement=document.getElementById('experience_title');

    const experienceItemTitle1Element=document.getElementById('experience_item_title_1');
    const experienceItemCompany1Element=document.getElementById('experience_item_company_1');
    const experienceItemDate1Element=document.getElementById('experience_item_date_1');
    const experienceItemLocation1Element=document.getElementById('experience_item_location_1');
    const experienceItemDesc11Element=document.getElementById('experience_item_desc_1_1');
    const experienceItemDesc12Element=document.getElementById('experience_item_desc_1_2');
    const experienceItemDesc13Element=document.getElementById('experience_item_desc_1_3');
    const experienceItemDesc14Element=document.getElementById('experience_item_desc_1_4');
    const experienceItemDesc15Element=document.getElementById('experience_item_desc_1_5');

    const experienceItemTitle2Element=document.getElementById('experience_item_title_2');
    const experienceItemCompany2Element=document.getElementById('experience_item_company_2');
    const experienceItemDate2Element=document.getElementById('experience_item_date_2');
    const experienceItemLocation2Element=document.getElementById('experience_item_location_2');
    const experienceItemDesc21Element=document.getElementById('experience_item_desc_2_1');
    const experienceItemDesc22Element=document.getElementById('experience_item_desc_2_2');
    const experienceItemDesc23Element=document.getElementById('experience_item_desc_2_3');
    const experienceItemDesc24Element=document.getElementById('experience_item_desc_2_4');
    const experienceItemDesc25Element=document.getElementById('experience_item_desc_2_5');
    const experienceItemDesc26Element=document.getElementById('experience_item_desc_2_6');

    const experienceItemTitle3Element=document.getElementById('experience_item_title_3');
    const experienceItemCompany3Element=document.getElementById('experience_item_company_3');
    const experienceItemDate3Element=document.getElementById('experience_item_date_3');
    const experienceItemLocation3Element=document.getElementById('experience_item_location_3');
    const experienceItemDesc31Element=document.getElementById('experience_item_desc_3_1');
    const experienceItemDesc32Element=document.getElementById('experience_item_desc_3_2');
    const experienceItemDesc33Element=document.getElementById('experience_item_desc_3_3');
    const experienceItemDesc34Element=document.getElementById('experience_item_desc_3_4');
    const experienceItemDesc35Element=document.getElementById('experience_item_desc_3_5');

    const experienceItemTitle4Element=document.getElementById('experience_item_title_4');
    const experienceItemCompany4Element=document.getElementById('experience_item_company_4');
    const experienceItemDate4Element=document.getElementById('experience_item_date_4');
    const experienceItemLocation4Element=document.getElementById('experience_item_location_4');
    const experienceItemDesc41Element=document.getElementById('experience_item_desc_4_1');
    const experienceItemDesc42Element=document.getElementById('experience_item_desc_4_2');
    const experienceItemDesc43Element=document.getElementById('experience_item_desc_4_3');
    const experienceItemDesc44Element=document.getElementById('experience_item_desc_4_4');
    const experienceItemDesc45Element=document.getElementById('experience_item_desc_4_5');
    const experienceItemDesc46Element=document.getElementById('experience_item_desc_4_6');
    const experienceItemDesc47Element=document.getElementById('experience_item_desc_4_7');


    const skillsTitleElement=document.getElementById('skills_title');

    const skillsSubtitle1Element=document.getElementById('skills_subtitle_1');
    const skillsSubtitle2Element=document.getElementById('skills_subtitle_2');
    const skillsSubtitle3Element=document.getElementById('skills_subtitle_3');
    const skillsSubtitle4Element=document.getElementById('skills_subtitle_4');
    const skillsSubtitle5Element=document.getElementById('skills_subtitle_5');


    const educationTitleElement=document.getElementById('education_title');

    const educationH31Element=document.getElementById('education_h3_1');
    const educationInstitution1Element=document.getElementById('education_institution_1');
    const educationDate1Element=document.getElementById('education_date_1');
    const educationLocation1element=document.getElementById('education_location_1');

    const educationH32Element=document.getElementById('education_h3_2');
    const educationItem21Element=document.getElementById('education_item_2_1');
    const educationItem22Element=document.getElementById('education_item_2_2');


    const footerTextElement=document.getElementById('footer_text');
    const footerButtonElement=document.getElementById('footer_button');

    const langBtn=document.getElementById('lang_btn');
    let currentLang='es';
    const loadContent=(language)=>{
        fetch('content.json')
        .then(response=>response.json())
        .then(data=>{
            aboutTitleElement.textContent=data[language].about_title;
            aboutText1Element.textContent=data[language].about_text_1;
            aboutText2Element.textContent=data[language].about_text_2;
            aboutLocationElement.textContent=data[language].about_location;
            aboutEmailElement.textContent=data[language].about_email;
            aboutLiElement.textContent=data[language].about_li;


            experienceTitleElement.textContent=data[language].experience_title;

            experienceItemTitle1Element.textContent=data[language].experience_item_title_1;
            experienceItemCompany1Element.textContent=data[language].experience_item_company_1;
            experienceItemDate1Element.textContent=data[language].experience_item_date_1;
            experienceItemLocation1Element.textContent=data[language].experience_item_location_1;
            experienceItemDesc11Element.textContent=data[language].experience_item_desc_1_1;
            experienceItemDesc12Element.textContent=data[language].experience_item_desc_1_2;
            experienceItemDesc13Element.textContent=data[language].experience_item_desc_1_3;
            experienceItemDesc14Element.textContent=data[language].experience_item_desc_1_4;
            experienceItemDesc15Element.textContent=data[language].experience_item_desc_1_5;

            experienceItemTitle2Element.textContent=data[language].experience_item_title_2;
            experienceItemCompany2Element.textContent=data[language].experience_item_company_2;
            experienceItemDate2Element.textContent=data[language].experience_item_date_2;
            experienceItemLocation2Element.textContent=data[language].experience_item_location_2;
            experienceItemDesc21Element.textContent=data[language].experience_item_desc_2_1;
            experienceItemDesc22Element.textContent=data[language].experience_item_desc_2_2;
            experienceItemDesc23Element.textContent=data[language].experience_item_desc_2_3;
            experienceItemDesc24Element.textContent=data[language].experience_item_desc_2_4;
            experienceItemDesc25Element.textContent=data[language].experience_item_desc_2_5;
            experienceItemDesc26Element.textContent=data[language].experience_item_desc_2_6;

            experienceItemTitle3Element.textContent=data[language].experience_item_title_3;
            experienceItemCompany3Element.textContent=data[language].experience_item_company_3;
            experienceItemDate3Element.textContent=data[language].experience_item_date_3;
            experienceItemLocation3Element.textContent=data[language].experience_item_location_3;
            experienceItemDesc31Element.textContent=data[language].experience_item_desc_3_1;
            experienceItemDesc32Element.textContent=data[language].experience_item_desc_3_2;
            experienceItemDesc33Element.textContent=data[language].experience_item_desc_3_3;
            experienceItemDesc34Element.textContent=data[language].experience_item_desc_3_4;
            experienceItemDesc35Element.textContent=data[language].experience_item_desc_3_5;

            experienceItemTitle4Element.textContent=data[language].experience_item_title_4;
            experienceItemCompany4Element.textContent=data[language].experience_item_company_4;
            experienceItemDate4Element.textContent=data[language].experience_item_date_4;
            experienceItemLocation4Element.textContent=data[language].experience_item_location_4;
            experienceItemDesc41Element.textContent=data[language].experience_item_desc_4_1;
            experienceItemDesc42Element.textContent=data[language].experience_item_desc_4_2;
            experienceItemDesc43Element.textContent=data[language].experience_item_desc_4_3;
            experienceItemDesc44Element.textContent=data[language].experience_item_desc_4_4;
            experienceItemDesc45Element.textContent=data[language].experience_item_desc_4_5;
            experienceItemDesc46Element.textContent=data[language].experience_item_desc_4_6;
            experienceItemDesc47Element.textContent=data[language].experience_item_desc_4_7;

            skillsTitleElement.textContent=data[language].skills_title;
            skillsSubtitle1Element.textContent=data[language].skills_subtitle_1;
            skillsSubtitle2Element.textContent=data[language].skills_subtitle_2;
            skillsSubtitle3Element.textContent=data[language].skills_subtitle_3;
            skillsSubtitle4Element.textContent=data[language].skills_subtitle_4;
            skillsSubtitle5Element.textContent=data[language].skills_subtitle_5;


            educationTitleElement.textContent=data[language].education_title;

            educationH31Element.textContent=data[language].education_h3_1;
            educationInstitution1Element.textContent=data[language].education_institution_1;
            educationDate1Element.textContent=data[language].education_date_1;
            educationLocation1element.textContent=data[language].education_location_1;

            educationH32Element.textContent=data[language].education_h3_2;
            educationItem21Element.textContent=data[language].education_item_2_1;
            educationItem22Element.textContent=data[language].education_item_2_2;


            footerTextElement.textContent=data[language].footer_text;
            footerButtonElement.textContent=data[language].footer_button;
        })
        .catch(error=>console.log(error));
    };
    langBtn.addEventListener('change', ()=>{
        if (langBtn.checked){
            currentLang='en';
        }else{
            currentLang='es';
        }
        loadContent(currentLang);
    })

    //Carga Inicial
    loadContent(currentLang);
})

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