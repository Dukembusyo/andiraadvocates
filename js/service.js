const panels = document.querySelectorAll('.service-panel');
  const navLinks = document.querySelectorAll('.services-nav a');

  function showService(id) {
    panels.forEach(panel =>
      panel.classList.toggle('active', panel.id === id)
    );

    navLinks.forEach(link =>
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${id}`
      )
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRoute() {
    const id = location.hash.replace('#', '') || 'real-estate';
    showService(id);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
    




