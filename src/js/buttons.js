document.addEventListener("click", (e) => {
  const target = e.target.closest("button[data-page], a[data-page]");
  if (!target) return;

  if (target.tagName === "A") {
    e.preventDefault();
  }

  Router.navigate(target.dataset.page);
});