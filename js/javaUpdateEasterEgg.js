(() => {
    const javaLink = document.getElementById("java-easter-egg");
    if (!javaLink) return;

    const audio = new Audio("/assets/easter-egg/win10notif.ogg");

    function showNotification() {
        if (document.getElementById("java-easter-egg-notification")) return;

        const notification = document.createElement("div");
        notification.id = "java-easter-egg-notification";

        const img = document.createElement("img");
        img.src = "/assets/easter-egg/javaupdate.webp";
        notification.appendChild(img);

        const closeBtn = document.createElement("div");
        closeBtn.className = "close-btn";
        closeBtn.addEventListener("click", () => {
            notification.remove();
        });

        notification.appendChild(closeBtn);
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("show");
        }, 20);
    }

    function playSound() {
        audio.currentTime = 0;
        audio.play().catch(err => console.warn(err));
    }

    javaLink.addEventListener("click", () => {
        if (!document.getElementById("java-easter-egg-notification")) {
            showNotification();
            playSound();
        }
    });
})();