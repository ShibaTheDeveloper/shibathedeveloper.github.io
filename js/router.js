async function loadPage(page) {
  try {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    document.getElementById("app").innerHTML = html;
  } catch (err) {
    document.getElementById("app").innerHTML = "<p>Page not found.</p>";
  }
}

function router() {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);