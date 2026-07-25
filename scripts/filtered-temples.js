const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-2736.jpg"
    },

    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-2736.jpg"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-2736.jpg"
    },

    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-2736.jpg"
    },

    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919-11-27",
        area: 42100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-2736.jpg"
    }
];


const gallery = document.querySelector(".gallery");
const title = document.querySelector("#menu-title");


function displayTemples(data) {

    gallery.innerHTML = "";

    data.forEach(temple => {

        const card = document.createElement("section");

        card.innerHTML = `
        <h3>${temple.templeName}</h3>

        <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName}"
        loading="lazy">

        <p>Location: ${temple.location}</p>

        <p>Dedicated: ${temple.dedicated}</p>

        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
        `;

        gallery.appendChild(card);

    });
}



document.querySelector("#home").addEventListener("click", () => {
    title.textContent = "Home";
    displayTemples(temples);
});


document.querySelector("#old").addEventListener("click", () => {

    title.textContent = "Old Temples";

    displayTemples(
        temples.filter(
            temple => new Date(temple.dedicated).getFullYear() < 1900
        )
    );

});


document.querySelector("#new").addEventListener("click", () => {

    title.textContent = "New Temples";

    displayTemples(
        temples.filter(
            temple => new Date(temple.dedicated).getFullYear() > 2000
        )
    );

});


document.querySelector("#large").addEventListener("click", () => {

    title.textContent = "Large Temples";

    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );

});


document.querySelector("#small").addEventListener("click", () => {

    title.textContent = "Small Temples";

    displayTemples(
        temples.filter(
            temple => temple.area < 50000
        )
    );

});



document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Last Modified: " + document.lastModified;


displayTemples(temples);