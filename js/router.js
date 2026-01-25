async function loadPage() {
  const page = location.hash.slice(1) || 'home';
  const app = document.getElementById('app');

  try {
    const res = await fetch(`pages/${page}.html`);
    if (!res.ok) throw new Error();

    app.innerHTML = await res.text();
    document.title = page.charAt(0).toUpperCase() + page.slice(1) + ' Page';
  } catch {
    const res = await fetch('pages/404.html');
    app.innerHTML = await res.text();
    document.title = '404 Page';
  }
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);