async function loadRepoUpdate() {
  const res = await fetch(
    "https://api.github.com/repos/ShibaTheDeveloper/shibathedeveloper.github.io"
  );

  const repo = await res.json();
  const date = new Date(repo.pushed_at);

  const formatted = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("last-updated").textContent =
    "Last updated: " + formatted;
}

loadRepoUpdate();