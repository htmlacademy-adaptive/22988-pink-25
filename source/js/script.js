let mainheader = document.querySelector('.main-header--nojs');
let menu = document.querySelector('.main-nav--closed');
let burger = document.querySelector('.main-nav__burger');

mainheader.classList.remove('main-header--nojs');

burger.addEventListener('click', function () {
  if (menu.classList.contains('main-nav--closed')) {
    menu.classList.remove('main-nav--closed');
    menu.classList.add('main-nav--opened');
  } else {
    menu.classList.add('main-nav--closed');
    menu.classList.remove('main-nav--opened');
  }
})
