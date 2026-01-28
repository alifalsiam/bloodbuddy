const menuButton = document.querySelector('[data-menu-button]');
const menuPanel = document.querySelector('[data-menu-panel]');
const header = document.querySelector('header');

const closeMenu = () => {
  if (!menuButton || !menuPanel) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuPanel.classList.add('hidden');
};

const openMenu = () => {
  if (!menuButton || !menuPanel) return;
  menuButton.setAttribute('aria-expanded', 'true');
  menuPanel.classList.remove('hidden');
};

if (menuButton && menuPanel && header) {
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!header.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
