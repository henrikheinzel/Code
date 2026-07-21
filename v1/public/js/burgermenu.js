
const nav = document.querySelector('nav');
const burgerBtn = document.createElement('button');
burgerBtn.textContent = '☰';
burgerBtn.className = 'burger-btn';

nav.prepend(burgerBtn);

burgerBtn.addEventListener('click', function() {
  nav.classList.toggle('menu-open');
});