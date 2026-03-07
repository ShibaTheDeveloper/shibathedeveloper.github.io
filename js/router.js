async function loadPage() {
  const page = location.hash.slice(1) || 'home';
  const app = document.getElementById('app');

  try {
    const response = await fetch(`pages/${page}.html`);
    let html;

    if (!response.ok) {
      const errorResponse = await fetch('pages/404.html');
      html = await errorResponse.text();
      document.title = '404 Error';
    } else {
      html = await response.text();
      document.title = page.charAt(0).toUpperCase() + page.slice(1) + " Page";
    }

    app.innerHTML = html;

    const appChildren = app.querySelectorAll('#app > *');
    appChildren.forEach((element, index) => {
      element.style.opacity = 0;
      element.style.transform = 'translateY(20px)';
      element.style.animation = `fadeSlideIn 0.5s ease-out forwards`;
      element.style.animationDelay = `${index * 0.1}s`;
    });

  } catch (err) {
    console.error('Failed to load page:', err);

    app.innerHTML = '<h1>Something went wrong.</h1>';
    document.title = 'Error';
  }
}

window.addEventListener('hashchange', loadPage);
window.addEventListener('load', loadPage);