const panels = document.querySelectorAll('.firm-panel');
const links = document.querySelectorAll('.firm-subnav a');

// Show the panel matching the ID
function showPanel(id) {
  panels.forEach(panel => {
    panel.classList.toggle('active', panel.id === id);
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle hash change or initial load
function handleRoute() {
  const id = location.hash.replace('#', '') || 'about';
  showPanel(id);
}

// Add click events to links
links.forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').replace('#', '');
    showPanel(id);
  });
});

// Run on page load
window.addEventListener('DOMContentLoaded', handleRoute);
window.addEventListener('hashchange', handleRoute);
