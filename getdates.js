const today = new Date();

// Current year (for footer)
document.getElementById("currentyear").textContent = today.getFullYear();

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;
