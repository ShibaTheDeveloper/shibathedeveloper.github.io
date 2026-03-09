async function loadProjects() {
    const response = await fetch('/json/projects.json');
    const projects = await response.json();

    const projectsContainer = document.querySelector('.projects-container');

    for (const project of Object.values(projects)) {
        const projectCard = document.createElement("a");
        projectCard.href = project["project-link"];
        projectCard.className = "project-card";

        projectsContainer.appendChild(projectCard);

        const projectImage = document.createElement("img");
        projectImage.src = project["project-image"];
        projectImage.className = "project-image";
        projectCard.appendChild(projectImage);

        const projectText = document.createElement("div");
        projectText.className = "project-text searchable";
        projectCard.appendChild(projectText);

        const projectTitle = document.createElement("div");
        projectTitle.className = "project-title";
        projectTitle.textContent = project["project-title"];
        projectText.appendChild(projectTitle);

        const projectDescription = document.createElement("div");
        projectDescription.className = "project-description";
        projectDescription.textContent = project["project-description"];
        projectText.appendChild(projectDescription);

        const projectMeta = document.createElement("div");
        projectMeta.className = "project-meta searchable";
        projectText.appendChild(projectMeta);

        const projectDate = document.createElement("div");
        projectDate.className = "project-date";
        projectDate.textContent = `Created: ${project["project-created"]}`;
        projectMeta.appendChild(projectDate);

        const tagsContainer = document.createElement("div");
        tagsContainer.className = "project-tags";
        projectMeta.appendChild(tagsContainer);

        for (const tag of Object.values(project["project-tags"])) {
            const tagElement = document.createElement("span");
            tagElement.className = "project-tag";
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        }
    }
}

loadProjects();