function animateAppContent() {
  const app = document.getElementById('app');
  const appChildren = app.querySelectorAll('#app > *');

  appChildren.forEach((element, index) => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.animation = `fadeSlideIn 0.5s ease-out forwards`;
    element.style.animationDelay = `${index * 0.1}s`;
  });
}

window.addEventListener('hashchange', () => {
  requestAnimationFrame(animateAppContent);
});

window.addEventListener('load', () => {
  requestAnimationFrame(animateAppContent);
});