const temples = [
{
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-2736.jpg"
},
{
    templeName: "Manti Utah Temple",
    location: "Manti, Utah",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-3963.jpg"
},
{
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37762.jpg"
},
{
    templeName: "Payson Utah Temple",
    location: "Payson, Utah",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451.jpg"
},
{
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7614.jpg"
},
{
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88562,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-11242.jpg"
},
{
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-42135.jpg"
},
{
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-7615.jpg"
},
{
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-7664.jpg"
},
{
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-38721.jpg"
},
{
    templeName: "Kinshasa DR Congo Temple",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-41658.jpg"
},
{
    templeName: "Durban South Africa Temple",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-49753.jpg"
}
];

const gallery = document.querySelector(".gallery");
const menuTitle = document.querySelector("#menu-title");

function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}"
                 alt="${temple.templeName}"
                 loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);