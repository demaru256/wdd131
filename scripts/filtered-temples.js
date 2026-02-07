const temples = [
    {
        templeName: "Salt Lake City Utah Temple",
        location: "Utah, USA",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/e04d5651a770e152ef8f79c9d39f2fa75c900886/full/1600%2C/0/default"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcSncU8UDMaNU-oPycj9S0ku9n2_l2y4L0w6hAQzdxFiNaHz6D1B"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/250%2C/0/default"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/500%2C/0/default"
    },
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/825014ad7522e9baeadfafbee6ac86a4aecad6e0/full/250%2C/0/default"
    },
    {
        templeName: "Kampala Uganda Temple",
        location: "Kampala, Uganda",
        dedicated: "2023, May, 21",
        area: 23000,
        imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcQtyoC2TRHvLWX-0zKHVMlXIe9zXd0gFEy8A9qdgNqK2SHNOFdW"
    },
    {
        templeName: "Nairobi Kenya Temple (render)",
        location: "Nairobi, Kenya",
        dedicated: "2025, TBA",
        area: 20000,
        imageUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcT5phAeiFZqrzh0pX6TiN48h05k8muRiyYbsbJBrne9nt53d7y1"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Utah, USA",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcSnagCTRB4oVLfSEbhdmIzWvnSxhNrn1oEH7Dw9qUtJfUnOHu9e"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Utah, USA",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcQZZWDNwtO7fytnjduRx9QE52HPdzmsIvH1adHTZxZQSB13z6us"
    }
];

const gallery = document.querySelector("#gallery");
const title = document.querySelector("#page-title");

// Function to display temples
function show(list) {
    gallery.innerHTML = "";
    list.forEach(t => {
        const card = document.createElement("figure");
        card.innerHTML = `
            <figcaption>
                <h3>${t.templeName}</h3>
                <p><strong>Location:</strong> ${t.location}</p>
                <p><strong>Dedicated:</strong> ${t.dedicated}</p>
                <p><strong>Size:</strong> ${t.area.toLocaleString()} sq ft</p>
            </figcaption>
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        `;
        gallery.appendChild(card);
    });
}

// Show all temples initially
show(temples);

// Filter functionality
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = link.dataset.filter;
        title.textContent = link.textContent;

        let filtered = temples;

        if (filter === "old") filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        if (filter === "new") filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        if (filter === "large") filtered = temples.filter(t => t.area > 90000);
        if (filter === "small") filtered = temples.filter(t => t.area < 10000);

        show(filtered);
    });
});

// Hamburger menu toggle
const btn = document.querySelector("#menu-button");
const nav = document.querySelector("#nav-menu");
btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Footer year and last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
