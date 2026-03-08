document.addEventListener("DOMContentLoaded", () => {
    const clickables = document.querySelectorAll("button, a, .project-card");

    clickables.forEach(element => {
        element.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";

        element.addEventListener("mouseenter", () => {
            element.style.transform = "scale(1.02)";
        });

        element.addEventListener("mouseleave", () => {
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