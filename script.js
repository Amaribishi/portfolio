let slideIndex = 0;

// Funksioni për të lëvizur slide-in
function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    
    // Përditësojmë indexin aktual të slide-it
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    
    // Lëviz slider-in horizontalisht
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Automatizimi i slide-ve për të kaluar çdo 5 sekonda
let autoSlide = setInterval(() => moveSlide(1), 5000);

// Ndërprerja e lëvizjes automatike kur përdoruesi lëviz slider-in manualisht
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide); // Ndal lëvizjen automatike
    moveSlide(-1);            // Lëviz në slide-in e mëparshëm
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide); // Ndal lëvizjen automatike
    moveSlide(1);             // Lëviz në slide-in e ardhshëm
});

// Opsioni për të shkuar te portfolio kur klikohet butoni
document.querySelector('.portfolio-button').addEventListener('click', function() {
    window.location.href = 'portfolio.html'; // Zëvendëso me linkun e saktë për të shkuar te portfolio
});
    