document.querySelectorAll('.searchInput').forEach(input => {
    input.addEventListener('input', function () {
        const filter = this.value.toLowerCase();
        const items = document.querySelectorAll('.searchOutput .searchable');

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});