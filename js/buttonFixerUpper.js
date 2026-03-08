document.addEventListener("DOMContentLoaded", () => {
    const buttonsAndLinks = document.querySelectorAll("button, a");

    buttonsAndLinks.forEach(element => {
        element.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";

        element.addEventListener("mousedown", () => {
            element.style.transform = "scale(0.95)";
            element.style.boxShadow = "0 0 5px rgba(0,0,0,0.2) inset";
        });

        document.addEventListener("mouseup", () => {
            element.style.transform = "";
            element.style.boxShadow = "";
        });

        element.addEventListener("mouseleave", () => {
            element.style.transform = "";
            element.style.boxShadow = "";
        });
    });
});