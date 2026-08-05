// ==========================================
// PORTFOLIO JAVASCRIPT
// Julia Masilela
// ==========================================


// ==========================================
// CURRENT YEAR
// ==========================================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

}


// ==========================================
// SKILLS
// ==========================================

const skills = [
    {
        name: "HTML",
        description: "Creating well-structured and accessible web pages."
    },

    {
        name: "CSS",
        description: "Designing responsive layouts and user-friendly interfaces."
    },

    {
        name: "JavaScript",
        description: "Adding interactivity and dynamic functionality to websites."
    },

    {
        name: "C#",
        description: "Learning programming concepts, problem solving, and object-oriented programming."
    }
];


const skillsContainer =
    document.querySelector("#skillsContainer");


if (skillsContainer) {

    skills.forEach((skill) => {

        const article = document.createElement("article");

        article.classList.add("skill-card");

        article.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;

        skillsContainer.appendChild(article);

    });

}


// ==========================================
// PROJECTS
// ==========================================

const projects = [

    {
        title: "Personal Portfolio Website",
        category: "web",
        categoryName: "Web Development",
        description:
            "A responsive personal portfolio website created using HTML, CSS, and JavaScript.",
        image: "images/portfolio.webp"
    },

    {
        title: "Product Review Form",
        category: "web",
        categoryName: "Web Development",
        description:
            "A responsive product review form that collects user information and displays a confirmation page.",
        image: "images/portfolio.webp"
    },

    {
        title: "Temple Explorer",
        category: "web",
        categoryName: "Web Development",
        description:
            "A dynamic web page that displays temple information and allows users to filter the displayed temples.",
        image: "images/portfolio.webp"
    },

    {
        title: "C# Recursion Programs",
        category: "programming",
        categoryName: "Programming",
        description:
            "A collection of programming exercises demonstrating recursion and problem-solving techniques.",
        image: "images/portfolio.webp"
    },

    {
        title: "Eternal Quest",
        category: "programming",
        categoryName: "Programming",
        description:
            "A C# goal-tracking program designed to practice object-oriented programming concepts.",
        image: "images/portfolio.webp"
    },

    {
        title: "Exercise Tracking Program",
        category: "programming",
        categoryName: "Programming",
        description:
            "A C# program that demonstrates programming concepts through exercise tracking.",
        image: "images/portfolio.webp"
    }

];


// ==========================================
// DISPLAY PROJECTS
// ==========================================

const projectsContainer =
    document.querySelector("#projectsContainer");


function displayProjects(projectList) {

    if (!projectsContainer) {
        return;
    }


    projectsContainer.innerHTML = "";


    if (projectList.length === 0) {

        projectsContainer.innerHTML = `
            <p>
                No projects found in this category.
            </p>
        `;

        return;
    }


    projectList.forEach((project) => {

        const article = document.createElement("article");

        article.classList.add("project-card");


        article.innerHTML = `
            <img
                src="${project.image}"
                alt="${project.title} project"
                loading="lazy"
                width="800"
                height="500"
            >

            <div class="project-content">

                <span class="project-category">
                    ${project.categoryName}
                </span>

                <h2>
                    ${project.title}
                </h2>

                <p>
                    ${project.description}
                </p>

            </div>
        `;


        projectsContainer.appendChild(article);

    });

}


// Display all projects when the Projects page loads

if (projectsContainer) {
    displayProjects(projects);
}


// ==========================================
// PROJECT FILTERS
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter-button");


if (filterButtons.length > 0) {

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const category =
                button.dataset.category;


            // Remove active class from every button

            filterButtons.forEach((filterButton) => {

                filterButton.classList.remove(
                    "active-filter"
                );

            });


            // Add active class to clicked button

            button.classList.add(
                "active-filter"
            );


            // Show all projects

            if (category === "all") {

                displayProjects(projects);

                return;

            }


            // Filter projects

            const filteredProjects =
                projects.filter(
                    (project) =>
                        project.category === category
                );


            displayProjects(filteredProjects);

        });

    });

}


// ==========================================
// VISITOR NAME / LOCAL STORAGE
// ==========================================

const visitorForm =
    document.querySelector("#visitorForm");

const visitorNameInput =
    document.querySelector("#visitorName");

const welcomeMessage =
    document.querySelector("#welcomeMessage");


const savedName =
    localStorage.getItem("portfolioVisitorName");


if (savedName && welcomeMessage) {

    welcomeMessage.textContent =
        `Welcome back, ${savedName}!`;

}


if (visitorForm) {

    visitorForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const visitorName =
            visitorNameInput.value.trim();


        if (visitorName === "") {
            return;
        }


        localStorage.setItem(
            "portfolioVisitorName",
            visitorName
        );


        if (welcomeMessage) {

            welcomeMessage.textContent =
                `Welcome, ${visitorName}!`;

        }


        visitorForm.reset();

    });

}


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
    document.querySelector("#contactForm");

const formMessage =
    document.querySelector("#formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        if (formMessage) {

            formMessage.textContent =
                "Thank you! Your message has been received.";

        }


        contactForm.reset();

    });

}