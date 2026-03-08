(() => {
    let javaLink = document.getElementById("java-easter-egg");
    if (!javaLink || document.getElementById("java-easter-egg-notification")) return;

    let audio = new Audio("/assets/easter-egg/win10notif.ogg");

    const BASE_WIDTH = 1658;
    const BASE_HEIGHT = 548;

    function getScale() {
        const VIEW_WIDTH = window.innerWidth;
        const VIEW_HEIGHT = window.innerHeight;
        const scaleX = VIEW_WIDTH / BASE_WIDTH;
        const scaleY = VIEW_HEIGHT / BASE_HEIGHT;
        return { scaleX, scaleY };
    }

    function showNotification() {
        if (document.getElementById("java-easter-egg-notification")) return;

        const { scaleX, scaleY } = getScale();

        const notification = document.createElement("div");
        notification.id = "java-easter-egg-notification";
        notification.style.position = "fixed";
        notification.style.bottom = `${20 * scaleY}px`;
        notification.style.right = `${-600 * scaleX}px`;
        notification.style.width = `${450 * scaleX}px`;
        notification.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        notification.style.borderRadius = `${6 * Math.min(scaleX, scaleY)}px`;
        notification.style.transition = "right 0.2s ease-out";
        notification.style.zIndex = 99999999999999;
        notification.style.background = "#fff";
        notification.style.overflow = "hidden";

        const img = document.createElement("img");
        img.src = "/assets/easter-egg/javaupdate.webp";
        img.style.width = "100%";
        img.style.display = "block";
        notification.appendChild(img);

        const closeBtn = document.createElement("div");
        closeBtn.style.position = "absolute";
        closeBtn.style.top = `${5 * scaleY}px`;
        closeBtn.style.right = `${22 * scaleX}px`;
        closeBtn.style.width = `${20 * Math.min(scaleX, scaleY)}px`;
        closeBtn.style.height = `${20 * Math.min(scaleX, scaleY)}px`;
        closeBtn.style.cursor = "pointer";
        closeBtn.style.opacity = 0;

        closeBtn.addEventListener("click", () => {
            notification.remove();
            closeBtn.remove();
        });

        notification.appendChild(closeBtn);
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.right = `${20 * scaleX}px`;
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

    window.addEventListener("resize", () => {
        const notif = document.getElementById("java-easter-egg-notification");
        if (notif) {
            const { scaleX, scaleY } = getScale();
            notif.style.bottom = `${20 * scaleY}px`;
            notif.style.width = `${450 * scaleX}px`;
            notif.style.borderRadius = `${6 * Math.min(scaleX, scaleY)}px`;

            const closeBtn = notif.querySelector("div");
            if (closeBtn) {
                closeBtn.style.top = `${20 * scaleY}px`;
                closeBtn.style.right = `${22 * scaleX}px`;
                closeBtn.style.width = `${20 * Math.min(scaleX, scaleY)}px`;
                closeBtn.style.height = `${20 * Math.min(scaleX, scaleY)}px`;
            }
        }
    });
})();