function displayTemples(templesList) {
    gallery.innerHTML = "";

    templesList.forEach((temple) => {
        const card = document.createElement("section");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        img.onerror = function () {
            this.src = "images/placeholder.jpg";
        };

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(img);
        gallery.appendChild(card);
    });
}