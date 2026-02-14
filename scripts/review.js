// Get previous review count from localStorage
let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

// Increment the count when review page loads
reviewCount++;

// Save back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display on page
const displayCount = document.getElementById("count");
if (displayCount) displayCount.textContent = reviewCount;

// Update footer year and last modified
const currentYear = document.getElementById("currentyear");
if (currentYear) currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
if (lastModified) lastModified.textContent = document.lastModified;
