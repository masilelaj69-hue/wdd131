let count = Number(localStorage.getItem("reviewCount")) || 0;

count++;

localStorage.setItem("reviewCount", count);

document.querySelector("#counter").textContent = count;

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;