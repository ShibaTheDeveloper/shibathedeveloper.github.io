document.addEventListener("DOMContentLoaded", () => {
    const buttonsAndLinks = document.querySelectorAll("button, a");

    const resetStyles = (element) => {
        element.style.transform = "";
        element.style.boxShadow = "";
    };

    buttonsAndLinks.forEach(element => {
        element.addEventListener("mouseleave", () => resetStyles(element));
        element.addEventListener("mouseup", () => resetStyles(element));
    });

    document.addEventListener("mouseup", () => {
        buttonsAndLinks.forEach(resetStyles);
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            buttonsAndLinks.forEach(resetStyles);
        }
    });
});