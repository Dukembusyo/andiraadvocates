document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".firm-panel");
  const links = document.querySelectorAll(".section-nav a");

  function showPanel(id) {
    panels.forEach(panel => {
      panel.classList.toggle("active", panel.id === id);
    });

    links.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${id}`
      );
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function route() {
    const id = location.hash.replace("#", "") || "about";
    showPanel(id);
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      history.pushState(null, "", link.getAttribute("href"));
      route();
    });
  });

  window.addEventListener("popstate", route);
  route();
});
