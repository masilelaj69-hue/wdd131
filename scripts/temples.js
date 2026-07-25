const temples = [
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88562,
    imageUrl: "images/cardston-alberta-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy-temple.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "images/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "images/paris-france-temple.jpg"
  }
];

const gallery = document.querySelector(".gallery");

function displayTemples(templesArray) {
  gallery.innerHTML = "";

  templesArray.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    gallery.appendChild(card);
  });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  displayTemples(
    temples.filter((temple) => parseInt(temple.dedicated) < 1900)
  );
});

document.querySelector("#new").addEventListener("click", () => {
  displayTemples(
    temples.filter((temple) => parseInt(temple.dedicated) > 2000)
  );
});

document.querySelector("#large").addEventListener("click", () => {
  displayTemples(
    temples.filter((temple) => temple.area > 90000)
  );
});

document.querySelector("#small").addEventListener("click", () => {
  displayTemples(
    temples.filter((temple) => temple.area < 10000)
  );
});