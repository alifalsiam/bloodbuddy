function toggleMenu() {
  const overlay = document.getElementById('menuOverlay');
  const button = document.querySelector('.menu-toggle');
  if (!overlay) return;

  const isOpen = overlay.classList.toggle('open');
  overlay.setAttribute('aria-hidden', String(!isOpen));
  if (button) button.setAttribute('aria-expanded', String(isOpen));

  // Lock/unlock background scroll while menu is open
  document.documentElement.style.overflow = isOpen ? 'hidden' : '';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close menu on ESC + click outside links
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('menuOverlay');
    if (overlay && overlay.classList.contains('open')) toggleMenu();
  }
});

document.addEventListener('click', (e) => {
  const overlay = document.getElementById('menuOverlay');
  if (!overlay || !overlay.classList.contains('open')) return;

  const clickedInsideLinks = e.target && e.target.closest && e.target.closest('.menu-links');
  const clickedMenuToggle = e.target && e.target.closest && e.target.closest('.menu-toggle');
  if (!clickedInsideLinks && !clickedMenuToggle) {
    toggleMenu();
  }
});

