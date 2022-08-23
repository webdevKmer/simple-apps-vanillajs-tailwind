nav_toggle = document.querySelector("#nav-toggle");
nav_links = document.querySelector("#nav-links");

nav_toggle.addEventListener("click", () => {
    nav_links.classList.toggle("hidden")
})