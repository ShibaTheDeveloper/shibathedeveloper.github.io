function formatDateMDY(dateStr) {
    const [year, month, day] = dateStr.split("-");

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const monthName = months[Number(month) - 1];

    return `${monthName} ${Number(day)}, ${year}`;
}

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

    const sortedProjects = Object.values(projects).sort(
    (a, b) => new Date(b.created) - new Date(a.created)
    );

    for (const project of sortedProjects) {

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
                el("div", {
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
                        text: `Created: ${formatDateMDY(project.created)}`
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