function runScripts(container) {
  const scripts = container.querySelectorAll("script");

  scripts.forEach(oldScript => {
    const newScript = document.createElement("script");

    for (const attr of oldScript.attributes) {
      newScript.setAttribute(attr.name, attr.value);
    }

    newScript.textContent = oldScript.textContent;

    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

async function loadPage() {
  const page = location.hash.slice(1) || 'home';
  const app = document.getElementById('app');

  try {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();

    app.innerHTML = html;

    document.title = page.charAt(0).toUpperCase() + page.slice(1) + " Page";

    requestAnimationFrame(animateAppContent);
    runScripts(app);

  } catch (err) {
    console.error('Failed to load page:', err);
  }
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);


document.addEventListener('dragstart', element => {
  if (element.target.closest('a, button, .project-card')) {
    element.preventDefault();
  }
});