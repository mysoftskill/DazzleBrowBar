(() => {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if ((path === '' && href === 'index.html') || href.endsWith(path)) {
      link.classList.add('active');
    }
  });

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
