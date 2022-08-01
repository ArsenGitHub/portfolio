const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.nav__cross, .menu__overlay');

burger.addEventListener('click', () => {
    menu.classList.add('menu--enabled');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu--enabled');
});