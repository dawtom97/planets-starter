const hamburgerBtn = document.getElementById("HamburgerBtn");
const mobileMenu = document.getElementById("MobileNav");

hamburgerBtn.onclick = function () {
    mobileMenu.classList.toggle("is-visible");
}

document.onclick = function (event) {
    if (!mobileMenu.contains(event.target) && event.target.id !== "HamburgerBtn") {
        mobileMenu.classList.remove("is-visible");
    }
}
