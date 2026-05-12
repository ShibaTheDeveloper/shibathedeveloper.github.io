const Router = (() => {
  async function loadPage() {
    const params = new URLSearchParams(location.search);

    let page = params.get("page") || "home";
    const app = document.getElementById("app");

    try {
      const res = await fetch(`/src/pages/${page}.html`);

      if (!res.ok) throw new Error();

      app.innerHTML = await res.text();
    } catch {
      const fallback = await fetch(`/src/pages/404.html`);
      app.innerHTML = await fallback.text();

      page = "404";
    }

    document.title =
      page.charAt(0).toUpperCase() + page.slice(1) + " Page";

    history.replaceState({}, "", `?page=${page}`);
  }

  function navigate(page) {
    history.pushState({}, "", `?page=${page}`);
    loadPage();
  }

  window.addEventListener("popstate", loadPage);
  window.addEventListener("load", loadPage);

  return { navigate };
})();