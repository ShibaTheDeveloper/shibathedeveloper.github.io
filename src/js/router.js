const Router = (() => {
  let currentPage = "home";

  function updateButtons() {
    document.querySelectorAll("button[data-page]").forEach((btn) => {
      btn.disabled = btn.dataset.page === currentPage;
    });
  }

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

    currentPage = page;
    history.replaceState({}, "", `?page=${page}`);

    updateButtons();
  }

  function navigate(page) {
    if (page === currentPage) return;

    history.pushState({}, "", `?page=${page}`);
    loadPage();
  }

  window.addEventListener("popstate", loadPage);
  window.addEventListener("load", loadPage);

  return { navigate };
})();