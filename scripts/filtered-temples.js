const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "images/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923-08-26",
    area: 88562,
    imageUrl: "images/cardston-alberta-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "images/rome-italy-temple.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 53997,
    imageUrl: "images/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "images/paris-france-temple.jpg"
  }
];

const gallery = document.querySelector(".gallery");
const title = document.querySelector("#menu-title");

function displayTemples(templesList) {
  gallery.innerHTML = "";

  templesList.forEach((temple) => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    gallery.appendChild(card);
  });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
  title.textContent = "Home";
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  title.textContent = "Old";
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
  title.textContent = "New";
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
  title.textContent = "Large";
  displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
  title.textContent = "Small";
  displayTemples(temples.filter(t => t.area < 10000));
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;