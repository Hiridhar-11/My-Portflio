document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".nav-link");
    let pageTitle = document.querySelector(".page-title");

    // Mapping filenames to readable names
    const pageNames = {
        "index.html": "Home",
        "academics.html": "Academics",
        "projects.html": "Projects",
        "intern.html": "Intern"
    };

    // Set the page title dynamically
    if (pageNames[currentPage]) {
        pageTitle.textContent = pageNames[currentPage];
    }

    // Highlight the active page in the navigation
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
