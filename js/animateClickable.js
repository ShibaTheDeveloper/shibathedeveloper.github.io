document.addEventListener("DOMContentLoaded", () => {
    const clickables = document.querySelectorAll(
        "button, a, .project-card, .easter-egg-hyperlink"
    );

    clickables.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.transform = "scale(1.05)";
        });

        element.addEventListener("mouseout", () => {
            element.style.transform = "";
            element.style.boxShadow = "";
        });

        element.addEventListener("mousedown", () => {
            element.style.transform = "scale(0.95)";
            element.style.boxShadow = "inset 0 0 5px rgba(0,0,0,0.2)";
        });
    });

    document.addEventListener("mouseup", () => {
        clickables.forEach(element => {
            element.style.transform = "";
            element.style.boxShadow = "";
        });
    });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clickables.forEach(element => {
                element.style.transform = "";
                element.style.boxShadow = "";
            });
        }
    });
});