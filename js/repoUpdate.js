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
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const cachedDate = getCookie("repoLastUpdateDate");
  const cachedFormatted = getCookie("repoLastUpdateFormatted");

  if (cachedDate === todayStr && cachedFormatted) {
    const pushedDate = new Date(cachedFormatted);
    let diffDays = Math.floor((today - pushedDate) / (1000 * 60 * 60 * 24));
    const dayText = diffDays === 0 ? "Today" : `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;

    document.getElementById("last-updated").textContent =
      `Last updated: ${pushedDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} (${dayText})`;
    return;
  }

  const res = await fetch(
    "https://api.github.com/repos/ShibaTheDeveloper/shibathedeveloper.github.io"
  );
  const repo = await res.json();
  const pushedDate = new Date(repo.pushed_at);

  const formatted = pushedDate.toISOString();
  let diffDays = Math.floor((today - pushedDate) / (1000 * 60 * 60 * 24));
  const dayText = diffDays === 0 ? "Today" : `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;

  document.getElementById("last-updated").textContent =
    `Last updated: ${pushedDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })} (${dayText})`;

  setCookie("repoLastUpdateDate", todayStr, 1);
  setCookie("repoLastUpdateFormatted", formatted, 1);
}

loadRepoUpdate();