/* ==============================
   PORTFOLIO JAVASCRIPT
============================== */


/* ==============================
   CURRENT YEAR
============================== */

function setCurrentYear() {
    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

setCurrentYear();


/* ==============================
   MOBILE NAVIGATION
============================== */

function setupNavigation() {
    const menuButton = document.querySelector("#menuButton");
    const mainNav = document.querySelector("#mainNav");

    if (!menuButton || !mainNav) {
        return;
    }

    menuButton.addEventListener("click", () => {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

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
    });
}

setupNavigation();


/* ==============================
   SKILLS OBJECT ARRAY
============================== */

const skills = [
    {
        name: "HTML",
        description: "Creating semantic and accessible web pages."
    },
    {
        name: "CSS",
        description: "Designing responsive layouts and visual styles."
    },
    {
        name: "JavaScript",
        description: "Adding interaction and dynamic functionality."
    },
    {
        name: "C#",
        description: "Learning programming concepts and problem solving."
    }
];


/* ==============================
   DISPLAY SKILLS
============================== */

function displaySkills() {

    const skillsContainer =
        document.querySelector("#skillsContainer");

    if (!skillsContainer) {
        return;
    }

    skillsContainer.innerHTML = skills.map(
        (skill) => `
            <article class="skill-card">
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </article>
        `
    ).join("");
}

displaySkills();


/* ==============================
   PROJECT OBJECT ARRAY
============================== */

const projects = [
    {
        title: "Personal Portfolio",
        category: "web",
        categoryName: "Web Development",
        description:
            "A responsive portfolio website created using HTML, CSS, and JavaScript.",
        image: "images/portfolio.webp"
    },

    {
        title: "Dynamic Web Fundamentals",
        category: "web",
        categoryName: "Web Development",
        description:
            "A course project demonstrating responsive design, HTML, CSS, and JavaScript.",
        image: "images/hero.webp"
    },

    {
        title: "Programming Practice",
        category: "programming",
        categoryName: "Programming",
        description:
            "Programming exercises focused on problem solving, logic, and reusable code.",
        image: "images/portfolio.webp"
    },

    {
        title: "JavaScript Interactions",
        category: "programming",
        categoryName: "Programming",
        description:
            "Interactive features using JavaScript events, DOM manipulation, and functions.",
        image: "images/hero.webp"
    },

    {
        title: "Responsive Web Design",
        category: "web",
        categoryName: "Web Development",
        description:
            "Responsive layouts designed to work across mobile, tablet, and desktop screens.",
        image: "images/portfolio.webp"
    },

    {
        title: "Problem Solving Exercises",
        category: "programming",
        categoryName: "Programming",
        description:
            "Programming exercises that strengthen logical thinking and computational skills.",
        image: "images/hero.webp"
    }
];


/* ==============================
   DISPLAY PROJECTS
============================== */

function displayProjects(projectList) {

    const projectsContainer =
        document.querySelector("#projectsContainer");

    if (!projectsContainer) {
        return;
    }

    projectsContainer.innerHTML = projectList.map(
        (project) => `
            <article class="project-card">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    width="600"
                    height="400"
                    loading="lazy"
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

            </article>
        `
    ).join("");
}

displayProjects(projects);


/* ==============================
   PROJECT FILTERING
============================== */

function setupProjectFilters() {

    const filterButtons =
        document.querySelectorAll(".filter-button");

    if (!filterButtons.length) {
        return;
    }

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            filterButtons.forEach((item) => {
                item.classList.remove("active-filter");
            });

            button.classList.add("active-filter");

            const category =
                button.dataset.category;

            if (category === "all") {

                displayProjects(projects);

            } else {

                const filteredProjects =
                    projects.filter(
                        (project) =>
                            project.category === category
                    );

                displayProjects(filteredProjects);
            }
        });
    });
}

setupProjectFilters();


/* ==============================
   VISITOR LOCAL STORAGE
============================== */

function setupVisitorForm() {

    const visitorForm =
        document.querySelector("#visitorForm");

    const visitorName =
        document.querySelector("#visitorName");

    const welcomeMessage =
        document.querySelector("#welcomeMessage");

    if (
        !visitorForm ||
        !visitorName ||
        !welcomeMessage
    ) {
        return;
    }

    const savedName =
        localStorage.getItem("portfolioVisitor");

    if (savedName) {

        welcomeMessage.textContent =
            `Welcome back, ${savedName}!`;

        visitorName.value = savedName;
    }

    visitorForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            visitorName.value.trim();

        if (name.length > 0) {

            localStorage.setItem(
                "portfolioVisitor",
                name
            );

            welcomeMessage.textContent =
                `Welcome to my portfolio, ${name}!`;

            visitorForm.reset();

            visitorName.focus();
        }
    });
}

setupVisitorForm();


/* ==============================
   CONTACT FORM
============================== */

function setupContactForm() {

    const contactForm =
        document.querySelector("#contactForm");

    const formMessage =
        document.querySelector("#formMessage");

    if (!contactForm || !formMessage) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.querySelector("#name").value.trim();

        if (name) {

            formMessage.textContent =
                `Thank you, ${name}! Your message has been received.`;

            contactForm.reset();

        } else {

            formMessage.textContent =
                "Please complete the required fields.";

        }
    });
}

setupContactForm();