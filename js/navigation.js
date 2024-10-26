function createNavigation () {
    const desktopNav = document.getElementById("DesktopNav");
    const mobileNav = document.getElementById("MobileNav");

    const planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];

    planets.forEach( function (planet) {
        const listItem = document.createElement("li");
        listItem.classList.add("menu-item");

        const anchor = document.createElement("a");
        anchor.textContent = planet;
        anchor.href = `./index.html?planet=${planet}`;
        listItem.append(anchor);

        const desktopItem = listItem.cloneNode(true);
        const mobileItem = listItem.cloneNode(true);

        desktopNav.append(desktopItem);
        mobileNav.append(mobileItem);
    })
}
createNavigation();