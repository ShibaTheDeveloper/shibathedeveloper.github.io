async function loadProjects() {
    const response = await fetch('/json/projects.json');
    const projects = await response.json();

    const projectsContainer = document.getElementById('projects-container');

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
        projectText.className = "project-text";

        projectCard.appendChild(projectText);

        const projectTitle = document.createElement("div");
        projectTitle.className = "project-title";
        projectTitle.textContent = project["project-title"];

        projectText.appendChild(projectTitle);

        const projectDescription = document.createElement("div");
        projectDescription.className = "project-description";
        projectDescription.textContent = project["project-description"];

        projectText.appendChild(projectDescription);
    }
}

loadProjects();