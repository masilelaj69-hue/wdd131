
"use strict";

/*
  WDD 131 - Dynamic Web Fundamentals
  Updates the current year and last modified date in the footer.
*/

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;