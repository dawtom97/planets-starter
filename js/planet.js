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

    const rotation = document.getElementById("RotationTime");
    const revolution = document.getElementById("RevolutionTime");
    const radius = document.getElementById("Radius");
    const temperature = document.getElementById("AvrgTemp");
    
    rotation.textContent = planet.rotation;
    revolution.textContent = planet.revolution;
    radius.textContent = planet.radius;
    temperature.textContent = planet.temperature;

}
createPage();



