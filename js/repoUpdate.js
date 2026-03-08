function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

async function loadRepoUpdate() {
  const today = new Date().toISOString().split("T")[0];
  const cachedDate = getCookie("repoLastUpdateDate");
  const cachedFormatted = getCookie("repoLastUpdateFormatted");

  if (cachedDate === today && cachedFormatted) {
    document.getElementById("last-updated").textContent =
      "Last updated: " + cachedFormatted;
    return;
  }

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

  setCookie("repoLastUpdateDate", today, 1);
  setCookie("repoLastUpdateFormatted", formatted, 1);
}

loadRepoUpdate();