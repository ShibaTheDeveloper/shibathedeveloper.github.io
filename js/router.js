async function loadPage() {
  const page = location.hash.slice(1) || 'home';

  const html = await fetch(`pages/${page}.html`).then(r => r.text());
  document.getElementById('app').innerHTML = html;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const baseTitle = "ShibaTheDeveloper's website!";

  const formattedPage = page.charAt(0).toUpperCase() + page.slice(1);
  ogTitle.setAttribute('content', `${baseTitle} | ${formattedPage}`);
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);