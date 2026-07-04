"use strict";

/*
  WDD 131 - Dynamic Web Fundamentals
  This script updates the footer year dynamically
*/

// Get the span element where the year will go
const yearSpan = document.getElementById("year");

// Get current year
const currentYear = new Date().getFullYear();

// Insert year into HTML
yearSpan.textContent = currentYear;

