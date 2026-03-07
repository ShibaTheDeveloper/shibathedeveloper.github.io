(async () => {
  let page = location.hash.slice(1);
  if (!page) {
    page = location.pathname.slice(1) || 'home';
  }

  try {
    const response = await fetch(`pages/${page}.html`, { method: 'HEAD' });
    if (!response.ok) {
      location.href = '/#404';
    }
  } catch (err) {
    location.href = '/#404';
  }
})();