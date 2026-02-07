// Temple data array with responsive images
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Updated temples with responsive images
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Bangkok Thailand Temple",
        location: "Bangkok, Thailand",
        dedicated: "2022, October, 30",
        area: 10500,
        imageUrl: "https://www.churchofjesuschrist.org/media/collection/accra-ghana-temple-images?lang=eng"
    },
    {
        templeName: "Kyiv Ukraine Temple",
        location: "Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-774078-wallpaper.jpg"
    }
];

// Rest of the JavaScript code remains the same...
// DOM Elements
const templeContainer = document.getElementById('temple-container');
const navLinks = document.querySelectorAll('nav a');
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');
const currentYearSpan = document.getElementById('currentyear');
const lastModifiedP = document.getElementById('lastModified');
const pageTitle = document.querySelector('h1');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Set last modified date
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    
    // Render all temples initially
    renderTemples(temples);
    
    // Set Home as active by default
    setActiveLink('all');
    
    // Setup navigation
    setupNavigation();
    
    // Setup mobile menu
    setupMobileMenu();
});

// Function to render temples
function renderTemples(templesArray) {
    templeContainer.innerHTML = '';
    
    if (templesArray.length === 0) {
        templeContainer.innerHTML = `
            <div class="no-results">
                <i>🏛️</i>
                <h3>No temples found matching your filter</h3>
                <p>Try selecting a different filter option</p>
            </div>
        `;
        return;
    }
    
    templesArray.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';
        
        // Format dedication date for display
        const dedicationDate = formatDate(temple.dedicated);
        
        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 class="temple-image" 
                 loading="lazy">
            <div class="temple-info">
                <h2>${temple.templeName}</h2>
                <div class="temple-details">
                    <div class="temple-location">
                        <span class="temple-location-text">Location:</span>
                        <span>${temple.location}</span>
                    </div>
                    <div>
                        <span>Dedicated:</span>
                        <span>${dedicationDate}</span>
                    </div>
                    <div>
                        <span>Area:</span>
                        <span>${temple.area.toLocaleString()} sq ft</span>
                    </div>
                </div>
            </div>
        `;
        
        templeContainer.appendChild(templeCard);
    });
}

// Function to format date
function formatDate(dateString) {
    const parts = dateString.split(',').map(part => part.trim());
    if (parts.length >= 3) {
        return `${parts[1]} ${parts[2]}, ${parts[0]}`;
    }
    return dateString;
}

// Function to filter temples
function filterTemples(filter) {
    let filteredTemples = [];
    
    if (filter === 'all') {
        filteredTemples = temples;
        pageTitle.textContent = 'Temple Album';
    } else if (filter === 'old') {
        filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year < 1900;
        });
        pageTitle.textContent = 'Old Temples (Before 1900)';
    } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year > 2000;
        });
        pageTitle.textContent = 'New Temples (After 2000)';
    } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
        pageTitle.textContent = 'Large Temples (> 90,000 sq ft)';
    } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
        pageTitle.textContent = 'Small Temples (< 10,000 sq ft)';
    }
    
    renderTemples(filteredTemples);
}

// Function to set active link
function setActiveLink(filter) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-filter') === filter) {
            link.classList.add('active');
        }
    });
}

// Setup navigation filtering
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get filter from data attribute
            const filter = this.getAttribute('data-filter');
            
            // Set active link
            setActiveLink(filter);
            
            // Filter temples
            filterTemples(filter);
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
            if (!e.target.closest('header')) {
                navMenu.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});