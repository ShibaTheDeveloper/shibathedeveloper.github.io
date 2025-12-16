async function loadPage() {
  const page = location.hash.slice(1) || 'resume';
  const html = await fetch(`pages/${page}.html`).then(r => r.text());
  document.getElementById('app').innerHTML = html;
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);