const javaLink = document.getElementById("java-easter-egg");

var notificationImage = null;
let clickable = true;

if (javaLink) {
    const audio = new Audio("/assets/easter-egg/win10notif.ogg");

    function showNotification() {
        notificationImage = document.createElement("img");
        notificationImage.src = "/assets/easter-egg/javaupdate.webp";
        notificationImage.style.position = "fixed";
        notificationImage.style.bottom = "-100px";
        notificationImage.style.right = "20px";
        notificationImage.style.width = "300px";
        notificationImage.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        notificationImage.style.borderRadius = "6px";
        notificationImage.style.transition = "bottom 0.5s ease-out, opacity 0.5s ease-out";
        notificationImage.style.opacity = "0";

        document.body.appendChild(notificationImage);

        requestAnimationFrame(() => {
            notificationImage.style.bottom = "20px";
            notificationImage.style.opacity = "1";
        }, 10);
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