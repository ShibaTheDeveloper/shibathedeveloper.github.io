document.addEventListener('DOMContentLoaded', () => {
    const javaLink = document.getElementById('java-easter-egg');
    if (!javaLink) return;

    let notificationExists = false;

    javaLink.addEventListener('click', (event) => {
        event.preventDefault();

        if (notificationExists) return;
        notificationExists = true;

        const audio = new Audio('/assets/easter-egg/win10notif.ogg');
        audio.play().catch(err => console.error("Sound failed to play:", err));

        const notif = document.createElement('img');
        notif.src = '/assets/easter-egg/javaupdate.webp';
        notif.style.position = 'fixed';
        notif.style.bottom = '-100px';
        notif.style.right = '20px';
        notif.style.width = '300px';
        notif.style.height = 'auto';
        notif.style.cursor = 'pointer';
        notif.style.transition = 'bottom 0.5s ease-out';
        notif.style.zIndex = 9999;

        document.body.appendChild(notif);

        requestAnimationFrame(() => {
            notif.style.bottom = '20px';
        });

        notif.addEventListener('click', () => {
            notif.style.bottom = '-100px';
            notif.addEventListener('transitionend', () => {
                notif.remove();
                notificationExists = false;
            }, { once: true });
        });
    });
});