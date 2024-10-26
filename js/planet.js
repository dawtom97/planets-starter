function getParamURL () {
    const params = new URLSearchParams(window.location.search);
    let planet = null;
    for (const [key, value] of params.entries()) {
       planet = value;
    }
    return planet;
}

async function getPlanet () {
    const planetName = getParamURL() ?? "Mercury";
    const response = await fetch("./data.json");
    if (!response.ok) {
        console.error("Nie udało się pobrać danych");
        return;
    }
    const data = await response.json();
    const planet = data.filter(x => x.name === planetName);
    return planet[0];      
}

function generateMeta (planet) {
    document.title = planet.name;
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = planet.images.overview;
    document.head.append(favicon);

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = planet.overview.content;
    document.head.append(metaDescription);
}

async function createPage () {

    const planet = await getPlanet();
    let currentMode = "overview";
    generateMeta(planet);

    const rotation = document.getElementById("RotationTime");
    const revolution = document.getElementById("RevolutionTime");
    const radius = document.getElementById("Radius");
    const temperature = document.getElementById("AvrgTemp");
    const planetImg = document.getElementById("PlanetImg");
    const planetGeology = document.getElementById("PlanetGeology");
    const planetName = document.getElementById("PlanetName");
    const planetDesc = document.getElementById("PlanetDesc");
    const planetWiki = document.getElementById("PlanetWiki");

    function updatePageView () {
        planetName.textContent = planet.name;
        rotation.textContent = planet.rotation;
        revolution.textContent = planet.revolution;
        radius.textContent = planet.radius;
        temperature.textContent = planet.temperature;
        planetImg.src = planet.images[currentMode];
        planetDesc.textContent = planet[currentMode].content;
        planetWiki.href = planet[currentMode].source;
        planetGeology.src = `./assets/geology-${planet.name.toLowerCase()}.png`;
        if(currentMode !== "geology") {
            planetGeology.style.display = "none";
        } else {
            planetGeology.style.display = "block";
            planetImg.src = planet.images.overview;
        }
    }

    const modeButtons = document.querySelectorAll("[data-mode]");
    modeButtons.forEach(function (btn) {
        btn.onclick = function () {
            currentMode = btn.getAttribute("data-mode");
            updatePageView();
        }
    })
    updatePageView();
}
createPage();



