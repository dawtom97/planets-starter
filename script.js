const hamburgerBtn = document.getElementById("HamburgerBtn");
const mobileMenu = document.getElementById("MobileNav");

hamburgerBtn.onclick = function () {
    mobileMenu.classList.toggle("is-visible");
}
