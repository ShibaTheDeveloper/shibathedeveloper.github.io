document.addEventListener("DOMContentLoaded", () => {
    const buttonsAndLinks = document.querySelectorAll("button, a");

    buttonsAndLinks.forEach(element => {
        element.addEventListener("mouseleave", () => {
            element.style.transform = "";
            element.style.boxShadow = "";
        });

        element.addEventListener("mouseup", () => {
            element.style.transform = "";
            element.style.boxShadow = "";
        });

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                element.style.transform = "";
                element.style.boxShadow = "";
            }
        });
    });
});