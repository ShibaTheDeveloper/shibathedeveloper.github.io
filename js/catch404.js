window.addEventListener('hashchange', async () => {
  const page = location.hash.slice(1) || 'home';

  try {
    const response = await fetch(`pages/${page}.html`, { method: 'HEAD' });

    if (!response.ok) {
      location.hash = '#404';
    }
  } catch (err) {
    console.error('Error checking page existence:', err);
    location.hash = '#404';
  }
});

window.addEventListener('load', async () => {
  const page = location.hash.slice(1) || 'home';

  try {
    const response = await fetch(`pages/${page}.html`, { method: 'HEAD' });

    if (!response.ok) {
      location.hash = '#404';
    }
  } catch (err) {
    console.error('Error checking page existence on load:', err);
    location.hash = '#404';
  }
});