// script.js

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

const clickableElements = document.querySelectorAll(
    'button, a, .card, .card1, .nav2 h4, .nav3 h4'
); 

clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)'; 
        cursor.style.opacity = '0.7';
        cursor.style.border = '1px solid #ffcc70'; 
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'; 
        cursor.style.opacity = '1';
        cursor.style.border = '1px solid #009560'; 
    });
});