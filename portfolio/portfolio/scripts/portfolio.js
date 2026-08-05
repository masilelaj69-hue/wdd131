const skills = [
    {
        name: `HTML`,
        description: `Creating structured and accessible web pages.`
    },
    {
        name: `CSS`,
        description: `Creating responsive layouts and visual designs.`
    },
    {
        name: `JavaScript`,
        description: `Adding interaction and dynamic functionality.`
    },
    {
        name: `C#`,
        description: `Developing programming and problem-solving skills.`
    }
];

const projects = [
    {
        title: `Portfolio Website`,
        description: `A responsive portfolio website created using HTML, CSS, and JavaScript.`,
        category: `web`,
        image: `images/portfolio.webp`
    },

    {
        title: `Responsive Web Page`,
        description: `A responsive website designed to work across mobile and desktop screens.`,
        category: `web`,
        image: `images/coding.webp`
    },

    {
        title: `Programming Practice`,
        description: `Programming exercises designed to strengthen logical thinking and problem solving.`,
        category: `programming`,
        image: `images/coding.webp`
    }
];


function displayYear() {
    const yearElement = document.querySelector(`#year`);

    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}


function displaySkills() {
    const skillsContainer =
        document.querySelector(`#skillsContainer`);

    if (!skillsContainer) {
        return;
    }

    skillsContainer.innerHTML = skills.map(skill => {
        return `
            <article class="skill-card">
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </article>
        `;
    }).join(``);
}


function displayProjects(category = `all`) {
    const projectsContainer =
        document.querySelector(`#projectsContainer`);

    if (!projectsContainer) {
        return;
    }

    const filteredProjects = category === `all`
        ? projects
        : projects.filter(project => project.category === category);

    if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = `
            <p>No projects found in this category.</p>
        `;

        return;
    }

    projectsContainer.innerHTML = filteredProjects.map(project => {

        const categoryName =
            project.category === `web`
                ? `Web Development`
                : `Programming`;

        return `
            <article class="project-card">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >

                <div class="project-content">

                    <span class="project-category">
                        ${categoryName}
                    </span>

                    <h2>${project.title}</h2>

                    <p>${project.description}</p>

                </div>

            </article>
        `;

    }).join(``);
}


function setupProjectFilters() {
    const filterButtons =
        document.querySelectorAll(`.filter-button`);

    filterButtons.forEach(button => {

        button.addEventListener(`click`, () => {

            filterButtons.forEach(item => {
                item.classList.remove(`active-filter`);
            });

            button.classList.add(`active-filter`);

            const category =
                button.dataset.category;

            displayProjects(category);
        });

    });
}


function setupVisitorForm() {
    const visitorForm =
        document.querySelector(`#visitorForm`);

    if (!visitorForm) {
        return;
    }

    const visitorName =
        document.querySelector(`#visitorName`);

    const welcomeMessage =
        document.querySelector(`#welcomeMessage`);

    const savedName =
        localStorage.getItem(`visitorName`);

    if (savedName) {
        welcomeMessage.textContent =
            `Welcome back, ${savedName}!`;
    }

    visitorForm.addEventListener(`submit`, event => {

        event.preventDefault();

        const name =
            visitorName.value.trim();

        if (name === ``) {

            welcomeMessage.textContent =
                `Please enter your name.`;

            return;
        }

        localStorage.setItem(`visitorName`, name);

        welcomeMessage.textContent =
            `Welcome to my portfolio, ${name}!`;

        visitorForm.reset();

    });
}


function setupContactForm() {
    const contactForm =
        document.querySelector(`#contactForm`);

    if (!contactForm) {
        return;
    }

    const formMessage =
        document.querySelector(`#formMessage`);

    contactForm.addEventListener(`submit`, event => {

        event.preventDefault();

        const name =
            document.querySelector(`#name`).value.trim();

        const email =
            document.querySelector(`#email`).value.trim();

        const message =
            document.querySelector(`#message`).value.trim();

        if (
            name === `` ||
            email === `` ||
            message === ``
        ) {

            formMessage.textContent =
                `Please complete all required fields.`;

            return;
        }

        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();

    });
}


function setupNavigation() {
    const menuButton =
        document.querySelector(`#menuButton`);

    const mainNav =
        document.querySelector(`#mainNav`);

    if (!menuButton || !mainNav) {
        return;
    }

    menuButton.addEventListener(`click`, () => {

        const isOpen =
            mainNav.classList.toggle(`open`);

        menuButton.setAttribute(
            `aria-expanded`,
            isOpen
        );

    });
}


function initializeWebsite() {
    displayYear();
    displaySkills();
    displayProjects();
    setupProjectFilters();
    setupVisitorForm();
    setupContactForm();
    setupNavigation();
}


initializeWebsite();