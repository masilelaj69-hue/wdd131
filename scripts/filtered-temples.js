const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "images/temple7.jpg"
    },

    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "images/temple8.jpg"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253000,
        imageUrl: "images/temple9.jpg"
    }
];


const gallery = document.querySelector(".gallery");
const title = document.querySelector("#menu-title");


function displayTemples(templesList) {

    gallery.innerHTML = "";

    templesList.forEach(temple => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>

            <img src="${temple.imageUrl}" 
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