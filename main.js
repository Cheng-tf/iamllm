"use strict";
const menu = document.querySelector('.menu-icon');
const nav = document.querySelector('.site-nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('menu-open');
  menu.setAttribute('aria-expanded', 'false');
}));
const filters = document.querySelector('.pub-filters');
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('.pub').forEach(paper => {
    paper.hidden = button.dataset.filter === 'published' && paper.dataset.published !== 'true';
  });
});
const topLink = document.querySelector('.back-to-top');
const updateTopLink = () => { topLink.style.display = window.scrollY > 220 ? 'block' : 'none'; };
window.addEventListener('scroll', updateTopLink, {passive: true});
updateTopLink();
