const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuButton.textContent = isOpen ? "✖" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navMenu.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", false);
    }
  });
}

// Footer dates
document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;
