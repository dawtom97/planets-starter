function getParamURL () {
    const params = new URLSearchParams(window.location.search);
    let planet = null;
    for (const [key, value] of params.entries()) {
       planet = value;
    }
    return planet;
}

async function getPlanet () {
    const planetName = getParamURL();
    const response = await fetch("../data.json");
    if (!response.ok) {
        console.error("Nie udało się pobrać danych");
        return;
    }
    const data = await response.json();
    const planet = data.filter(x => x.name === planetName);
    return planet[0];      
}

async function createPage () {

    const planet = await getPlanet();
    let currentMode = "overview";

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



