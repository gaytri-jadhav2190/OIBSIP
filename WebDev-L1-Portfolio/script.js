function showSection(sectionId) {

    const sections = document.querySelectorAll(".page-section");

    sections.forEach(function(section) {
        section.classList.remove("active-section");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showProject(project) {

    const details = document.getElementById("project-details");
    const content = document.getElementById("project-content");

    if (project === "river") {

        content.innerHTML = `
            <h2>River Cleaning Project</h2>

            <h3>Project Overview</h3>

            <p>
                Designed an innovative working model for river
                cleaning and waste collection, focusing on a
                practical environmental solution.
            </p>

            <h3>Achievement</h3>

            <p>
                First Prize Winner
            </p>
        `;

    } else if (project === "krishi") {

        content.innerHTML = `
            <h2>KrishiMitra AI</h2>

            <h3>Project Overview</h3>

            <p>
                An AI-based project focused on supporting
                agricultural decision-making through technology.
            </p>

            <h3>Focus Area</h3>

            <p>
                Artificial Intelligence and Agriculture
            </p>
        `;
    }

    details.style.display = "block";

    details.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function closeProject() {

    document.getElementById("project-details").style.display = "none";

}
