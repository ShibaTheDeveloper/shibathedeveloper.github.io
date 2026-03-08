const navButtons = document.querySelectorAll('.button-container button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');

    if (!location.hash) {
      if (page == "home") { return }
    } else { location.hash = `#${page}`; }

    navButtons.forEach(btn => btn.removeAttribute('id'));
    button.id = 'selected';
  });
});

function updateSelectedButtonFromHash() {
  const page = location.hash.slice(1) || 'home';
  navButtons.forEach(btn => btn.removeAttribute('id'));
  const currentBtn = Array.from(navButtons).find(btn => btn.getAttribute('data-page') === page);
  if (currentBtn) currentBtn.id = 'selected';
}

window.addEventListener('hashchange', updateSelectedButtonFromHash);
window.addEventListener('load', updateSelectedButtonFromHash);