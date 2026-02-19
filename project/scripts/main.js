// Footer dynamic content
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
  "Last Modified: " + document.lastModified;

// Destination data
const destinations = [
  { name: "Bwindi Impenetrable National Park", type: "National Park", region: "Southwest", image: "images/bwindi.jpg", description: "Famous for mountain gorilla trekking." },
  { name: "Kampala", type: "City", region: "Central", image: "images/kampala.jpg", description: "Capital city with markets and nightlife." },
  { name: "Lake Victoria", type: "Lake", region: "Central", image: "images/lakevictoria.jpg", description: "Largest lake in Africa with beautiful scenery." },
  { name: "Gulu", type: "City", region: "North", image: "images/gulu.jpg", description: "Northern city rich in history and culture." }
];

function renderDestinations() {
  const container = document.getElementById('destinationsList');
  if (!container) return;
  destinations.forEach(dest => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${dest.name}</h3>
      <img src="${dest.image}" alt="${dest.name}">
      <p>${dest.description}</p>
      <button onclick="saveFavorite('${dest.name}')">Save to Favorites</button>
    `;
    container.appendChild(div);
  });
}

function saveFavorite(name) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if(!favorites.includes(name)) favorites.push(name);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert(`${name} saved to favorites!`);
}

document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
});
