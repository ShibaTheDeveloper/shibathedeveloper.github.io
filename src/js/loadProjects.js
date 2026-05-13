function el(tag, props = {}, children = []) {
    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(props)) {
        if (key === "class") element.className = value;
        else if (key === "text") element.textContent = value;
        else if (key === "html") element.innerHTML = value;
        else element.setAttribute(key, value);
    }

    for (const child of children) {
        element.appendChild(child);
    }

    return element;
}

async function loadProjects() {
    const response = await fetch('/src/data/projects.json');
    const projects = await response.json();

    const container = document.querySelector('.projects-container');
    if (!container) return;

    const fragment = document.createDocumentFragment();

    for (const project of Object.values(projects)) {

        const tags = (project.tags || []).map(tag =>
            el("span", { class: "project-tag", text: tag })
        );

        const card = el("a", {
            class: "project-card searchable",
            href: project.link
        }, [
            el("img", {
                class: "project-image",
                src: project.image,
                alt: project.title
            }),

            el("div", { class: "project-text" }, [
                el("h3", {
                    class: "project-title",
                    text: project.title
                }),

                el("div", {
                    class: "project-description",
                    html: project.description
                }),

                el("div", { class: "project-meta" }, [
                    el("time", {
                        class: "project-date",
                        text: `Created: ${project.created}`
                    }),

                    el("div", { class: "project-tags" }, tags)
                ])
            ])
        ]);

        fragment.appendChild(card);
    }

    container.appendChild(fragment);
}

loadProjects();