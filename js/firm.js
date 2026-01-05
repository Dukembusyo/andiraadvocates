
const panels = document.querySelectorAll('.firm-panel');
const links = document.querySelectorAll('.firm-subnav a');

function showPanel(id) {
  panels.forEach(p => p.classList.toggle('active', p.id === id));
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function route() {
  const id = location.hash.replace('#','') || 'about';
  showPanel(id);
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null,'',link.getAttribute('href'));
    route();
  });
});

window.addEventListener('DOMContentLoaded', route);
window.addEventListener('popstate', route);

