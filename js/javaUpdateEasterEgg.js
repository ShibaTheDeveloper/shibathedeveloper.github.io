document.addEventListener("DOMContentLoaded", () => {
    const javaLink = document.getElementById("java-easter-egg");
    if (!javaLink) return;

    const audio = new Audio("/assets/easter-egg/win10notif.ogg");

    javaLink.addEventListener("click", (event) => {
        event.preventDefault();
        audio.currentTime = 0;
        audio.play().catch(err => {
            console.warn("Audio playback failed:", err);
        });
    });
});