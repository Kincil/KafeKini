// Memunculkan icon humburger
const menuBtn = document.getElementById('nav-btn');
const navLink = document.getElementById('nav-link');
const btnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', function (e) {
  navLink.classList.toggle('open');

  const isOpen = navLink.classList.contains('open');
  btnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLink.addEventListener('click', function (e) {
  navLink.classList.remove('open');
  btnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

// header container
ScrollReveal().reveal('.container-header h1', {
  ...scrollRevealOption,
});

ScrollReveal().reveal('.container-header p', {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal('.container-header a', {
  ...scrollRevealOption,
  delay: 1500,
});

// Menu container
ScrollReveal().reveal('.content-menu h2', {
  ...scrollRevealOption,
  origin: 'left',
});

ScrollReveal().reveal('.content-menu p', {
  ...scrollRevealOption,
  delay: 500,
  origin: 'left',
});

ScrollReveal().reveal('.content-menu button', {
  ...scrollRevealOption,
  delay: 1000,
  origin: 'left',
});

ScrollReveal().reveal('.img-menu', {
  ...scrollRevealOption,
  delay: 1500,
});

// choose container
ScrollReveal().reveal('.container-choose .section-header', {
  ...scrollRevealOption,
  origin: 'left',
});

ScrollReveal().reveal('.container-choose .section-sub', {
  ...scrollRevealOption,
  origin: 'left',
  delay: 500,
});

ScrollReveal().reveal('.container-choose .grid-choose', {
  ...scrollRevealOption,
  origin: 'left',
  delay: 1000,
});

ScrollReveal().reveal('.container-choose .img-choose', {
  ...scrollRevealOption,
  origin: 'right',
  delay: 1500,
});

// team container
ScrollReveal().reveal('.container-team .img-team', {
  ...scrollRevealOption,
  origin: 'left',
  delay: 500,
});

ScrollReveal().reveal('.container-team .content-team', {
  ...scrollRevealOption,
  origin: 'right',
});

// about container
ScrollReveal().reveal('.container-about .img-about', {
  ...scrollRevealOption,
  origin: 'left',
});

ScrollReveal().reveal('.container-about .content-about', {
  ...scrollRevealOption,
  origin: 'right',
  delay: 500,
});
