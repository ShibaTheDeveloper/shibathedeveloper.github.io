async function loadPage() {
  const page = location.hash.slice(1) || 'home';
  const html = await fetch(`pages/${page}.html`).then(r => r.text());
  const app = document.getElementById('app');
  app.innerHTML = html;

  document.title = page.charAt(0).toUpperCase() + page.slice(1) + " Page";

  const appChildren = app.querySelectorAll('#app > *');
  appChildren.forEach((element, index) => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.animation = `fadeSlideIn 0.5s ease-out forwards`;
    element.style.animationDelay = `${index * 0.1}s`;
  });
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);