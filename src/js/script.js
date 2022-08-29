const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        closeCross = document.querySelector('.menu__cross'),
        closeOverlay = document.querySelector('.menu__overlay');

burger.addEventListener('click', () => {
    menu.classList.add('menu--enabled');
});

closeCross.addEventListener('click', () => {
    menu.classList.remove('menu--enabled');
});

closeOverlay.addEventListener('click', () => {
    menu.classList.remove('menu--enabled');
});


const percentValue = document.querySelectorAll('.skills__percent'),
        percentScale = document.querySelectorAll('.skills__scale');

percentValue.forEach( (item, i) => {
    percentScale[i].style.width = item.innerHTML;
});


