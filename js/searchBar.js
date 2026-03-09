const inputs = document.querySelectorAll('.searchInput');
const items = document.querySelectorAll('.searchOutput .searchable');

function clearHighlights(el) {
    el.querySelectorAll('strong.search-highlight').forEach(tag => {
        tag.replaceWith(document.createTextNode(tag.textContent));
    });
}

function highlightTextNode(node, filter) {
    const text = node.nodeValue;
    const lower = text.toLowerCase();
    const idx = lower.indexOf(filter);

    if (idx === -1) return;

    const frag = document.createDocumentFragment();

    let start = 0;
    let i = idx;

    while (i !== -1) {
        frag.appendChild(document.createTextNode(text.slice(start, i)));

        const strong = document.createElement("strong");
        strong.className = "search-highlight";
        strong.textContent = text.slice(i, i + filter.length);
        frag.appendChild(strong);

        start = i + filter.length;
        i = lower.indexOf(filter, start);
    }

    frag.appendChild(document.createTextNode(text.slice(start)));

    node.replaceWith(frag);
}

function highlight(el, filter) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);

    let node;
    const nodes = [];

    while ((node = walker.nextNode())) {
        nodes.push(node);
    }

    nodes.forEach(n => {
        if (n.nodeValue.trim()) {
            highlightTextNode(n, filter);
        }
    });
}

inputs.forEach(input => {
    input.addEventListener('input', function () {

        const filter = this.value.trim().toLowerCase();

        items.forEach(item => {

            clearHighlights(item);

            if (!filter) {
                item.style.display = "";
                return;
            }

            const text = item.textContent.toLowerCase();

            if (text.includes(filter)) {
                item.style.display = "";
                highlight(item, filter);
            } else {
                item.style.display = "none";
            }

        });

    });
});