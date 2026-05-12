document.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-page]");
  if (!btn) return;

  Router.navigate(btn.dataset.page);
});