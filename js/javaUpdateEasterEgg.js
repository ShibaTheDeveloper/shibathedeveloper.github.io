const javaLink = document.getElementById("java-easter-egg");

let clickable = true;

if (javaLink) {
    const audio = new Audio("/assets/easter-egg/win10notif.ogg");

    function cleanUpNotification() {
        notificationImage.remove();
        clickable = true
    }

    function showNotification() {
        const notificationImage = document.createElement("img");
        notificationImage.src = "/assets/easter-egg/javaupdate.webp";
        notificationImage.style.position = "fixed";
        notificationImage.style.bottom = "20px";
        notificationImage.style.right = "-400px";
        notificationImage.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        notificationImage.style.borderRadius = "6px";
        notificationImage.style.transition = "right 0.2s ease-out";

        document.body.appendChild(notificationImage);

        setTimeout(() => {
            notificationImage.style.right = "20px";
        }, 20);

        setTimeout(() => {
            notificationImage.style.right = "-400px";
            notificationImage.addEventListener(
                "transitionend", cleanUpNotification, {once: true}
            )
        }, 3000);
    }

    function playSound() {
        audio.currentTime = 0;
        audio.play().catch(err => console.warn(err));
    }

    function onClick() {
        if (!clickable) return;
        clickable = false;

        showNotification();
        playSound();
    }

    javaLink.addEventListener("click", onClick);
}