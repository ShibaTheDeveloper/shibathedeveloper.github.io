const STORAGE_PREFIX = "folder-position-";
const DESKTOP = document.querySelector(".desktop");

class Folder {
    constructor(element) {
        this.element = element;
        this.name = element.dataset.name;

        this.storageKey = STORAGE_PREFIX + this.name;

        this.init();
    }

    init() {
        const label = this.element.querySelector(".label");
        if (label) label.textContent = this.name;

        this.element.addEventListener("dblclick", () => {
            console.log(this.name)
        });

        makeDraggable(this.element, DESKTOP, () => this.savePosition());

        this.loadPosition();
    }

    savePosition() {
        const position = {
            left: this.element.style.left,
            top: this.element.style.top
        };

        localStorage.setItem(this.storageKey, JSON.stringify(position));
    }

    loadPosition() {
        const savedPosition = localStorage.getItem(this.storageKey);
        if (!savedPosition) return;

        const position = JSON.parse(savedPosition);

        this.element.style.position = "absolute";
        this.element.style.left = position.left;
        this.element.style.top = position.top;
    }
}

async function loadFolders() {
    const response = await fetch("/src/data/folders.json");
    const folders = await response.json();

    folders.forEach(item => {
        const element = document.createElement("div");

        element.className = "folder";
        element.dataset.name = item.label;

        element.innerHTML = `<img src="${item.img}"><span class="label"></span>`;

        DESKTOP.appendChild(element);

        const folder = new Folder(element);
        folder.folderData = item;
    });
}

loadFolders();