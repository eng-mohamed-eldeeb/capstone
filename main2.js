const menuIconDiv = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const menu = document.querySelector('.menu_contaner');
const xIcon = document.getElementById('iconX');
const menuLinks = document.querySelectorAll('.options li a');

[menuIcon, xIcon].forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    menu.classList.toggle('d-flex');
    menuIconDiv.classList.toggle('d-none');
  });
});

menuLinks.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    menu.classList.toggle('d-flex');
    menuIconDiv.classList.toggle('d-none');
  });
});
