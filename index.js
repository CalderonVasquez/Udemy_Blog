const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.className === "hidden" ? menu.classList.remove("hidden")
        : menu.classList.add("hidden");
})










