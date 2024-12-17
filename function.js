
let menuIcon = document.querySelector('#taskBar');
let navBar = document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}
var loader = document.getElementById('preLoader');

window.addEventListener('load', function() {
    loader.style.display = 'none';
});

const cursorDot = document.querySelector('.cursorDot');
const cursorOutline = document.querySelector('.cursorOutline');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;


    cursorDot.style.left = `${clientX}px`;
    cursorDot.style.top = `${clientY}px`;

   
    cursorOutline.style.left = `${clientX}px`;
    cursorOutline.style.top = `${clientY}px`;
});

document.body.style.cursor = "none";


const showObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const elementGroups = ['.aboutCont', '.experienceCont', '.projectBox', '.heading'];

elementGroups.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => showObserver.observe(el));
});


const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.remove('typing');
            void entry.target.offsetWidth; 
            entry.target.classList.add('typing');
        }
    });
}, { threshold: 0.5 }); 


const textElement = document.querySelector('.homeContent p');
typingObserver.observe(textElement);


const themeSwitch = document.getElementById('themeSwitch');


if (localStorage.getItem('theme') === 'gamerMode') {
    document.body.classList.add('gamerMode');
}


themeSwitch.addEventListener('click', () => {
    
    document.body.classList.toggle('gamerMode');
    
    if (document.body.classList.contains('gamerMode')) {
        localStorage.setItem('theme', 'gamerMode');
    } else {
        localStorage.removeItem('theme');
    }
});









