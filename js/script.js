// Mobile burger menu
const burger = document.querySelector('.burger');
const navUl = document.querySelector('nav ul');

if (burger && navUl) {
  burger.addEventListener('click', () => {
    navUl.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

// Mobile dropdown toggles
document.querySelectorAll('nav > ul > li').forEach(li => {
  const link = li.querySelector('a');
  const dropdown = li.querySelector('.dropdown');
  if (dropdown && window.innerWidth <= 640) {
    link.addEventListener('click', e => {
      e.preventDefault();
      li.classList.toggle('open');
    });
  }
});

// Sticky header shadow
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 16px rgba(0,0,0,0.14)'
      : '0 2px 8px rgba(0,0,0,0.08)';
  }
});
