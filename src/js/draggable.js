function makeDraggable(element, container) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    element.setAttribute("draggable", "false");

    element.addEventListener("mousedown", (mouseEvent) => {
        isDragging = true;

        const elementRect = element.getBoundingClientRect();
        offsetX = mouseEvent.clientX - elementRect.left;
        offsetY = mouseEvent.clientY - elementRect.top;

        element.style.position = "absolute";

        if (!element.style.left) {
            element.style.left = elementRect.left + "px";
            element.style.top = elementRect.top + "px";
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(mouseEvent) {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        let newLeft = mouseEvent.clientX - offsetX;
        let newTop = mouseEvent.clientY - offsetY;

        newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - elementRect.width));
        newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - elementRect.height));

        element.style.left = newLeft + "px";
        element.style.top = newTop + "px";
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        if (typeof onDragEnd === "function") onDragEnd(element);
    }
}