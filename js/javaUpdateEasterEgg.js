(() => {
    let javaLink = document.getElementById("java-easter-egg");
    if (!javaLink || document.getElementById("java-easter-egg-notification")) return;

    let audio = new Audio("/assets/easter-egg/win10notif.ogg");

    const BASE_WIDTH = 1658;
    const BASE_HEIGHT = 548;

    const VIEW_WIDTH = window.innerWidth;
    const VIEW_HEIGHT = window.innerHeight;

    const scaleX = VIEW_WIDTH / BASE_WIDTH;
    const scaleY = VIEW_HEIGHT / BASE_HEIGHT;

    function showNotification() {
        if (document.getElementById("java-easter-egg-notification")) return;

        const notificationImage = document.createElement("img");
        notificationImage.id = "java-easter-egg-notification";
        notificationImage.src = "/assets/easter-egg/javaupdate.webp";
        notificationImage.style.position = "fixed";

        const notifWidth = 450 * scaleX;
        const notifBottom = 20 * scaleY;
        const notifRightStart = -400 * scaleX;
        const notifRightEnd = 20 * scaleX;

        notificationImage.style.width = `${notifWidth}px`;
        notificationImage.style.bottom = `${notifBottom}px`;
        notificationImage.style.right = `${notifRightStart}px`;
        notificationImage.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        notificationImage.style.borderRadius = "6px";
        notificationImage.style.transition = "right 0.2s ease-out";
        notificationImage.style.zIndex = 999999999999999;

        document.body.appendChild(notificationImage);

        setTimeout(() => {
            notificationImage.style.right = `${notifRightEnd}px`;
        }, 20);
    }

    function playSound() {
        audio.currentTime = 0;
        audio.play().catch(err => console.warn(err));
    }

    javaLink.addEventListener("click", () => {
        showNotification();
        playSound();
    }, { once: true });
})();