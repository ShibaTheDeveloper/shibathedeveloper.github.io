document.querySelectorAll('.searchInput').forEach(input => {
    input.addEventListener('input', function () {

        const filter = this.value.trim().toLowerCase();
        const items = document.querySelectorAll('.searchOutput .searchable');

        items.forEach(item => {
            if (!item.dataset.original) {
                item.dataset.original = item.innerHTML;
            }

            const original = item.dataset.original;
            const text = original.toLowerCase();

            if (filter === "") {
                item.style.display = "";
                item.innerHTML = original;
                return;
            }

            if (text.includes(filter)) {
                item.style.display = "";

                const regex = new RegExp(`(${filter})`, "gi");
                item.innerHTML = original.replace(regex, "<strong>$1</strong>");

            } else {
                item.style.display = "none";
                item.innerHTML = original;
            }

        });

    });
});