const hamburger= document.querySelector('.hamburger');
const hamburgerLine = document.querySelector('.hamburger__line');
const menu = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

links.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('hamburger__checked');
        hamburgerLine.classList.add('hamburger__line');
        menu.classList.remove('navigation__mobile');
    })
})

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('hamburger__checked')) {
        hamburger.classList.add('hamburger__checked');
        hamburgerLine.classList.remove('hamburger__line');
        menu.classList.add('navigation__mobile');
    } else {
        hamburger.classList.remove('hamburger__checked');
        hamburgerLine.classList.add('hamburger__line');
        menu.classList.remove('navigation__mobile');
    }
})