async function loadPage() {
  const page = location.hash.slice(1) || 'home';
  const html = await fetch(`pages/${page}.html`).then(r => r.text());
  document.getElementById('app').innerHTML = html;

  document.title = page.charAt(0).toUpperCase() + page.slice(1) + "Page";
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);