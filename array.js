// 1

const city = {
    cityname: "Opole",
    country: "Polska",
    region: "opolskie",
    population: "118 303",
}

// 2

const result = `To jest ${city.cityname}. Mieszka tutaj ${city.population} osób.`;

console.log(result);

// 3

const cityPL = [
    {
        name: "Opole",
    },
    {
        name: "Wrocław",
    },
    {
        name: "Katowice",
    },
    {
        name: "Kluczbork",
    },
    {
        name: "Poznań",
    },
]

// 4

const strFromArray = cityPL.toString();
const addCity = cityPL.concat([{name:"Warszawa"}]);

console.log(addCity);

// 5

const filtered = addCity.filter(x => x.name.includes("a"));

console.log(filtered);

// Tablica

// const products = [
//     {
//         name: "Jabłka",
//         producent: "PL",
//         quantity: 320,
//     },
//     {
//         name: "Maliny",
//         producent: "PL",
//         quantity: 400,
//     },
//     {
//         name: "Pomarańcze",
//         producent: "ES",
//         quantity: 120,
//     },
// ]

// const fromPoland = products.filter(x => x.producent === "PL");

// console.log(newProducts);

// const users = ["Anna", "Jan", "Karol",];

// // Te metody zmieniają oryginalną tablicę
// users.push("Dawid");
// users.pop();
// users.shift();
// users.unshift("Janek");
// users.reverse();
// // Te metody tworzą nową tablicę na bazie starej
// const strFromArray = users.toString();
// const moreUsers = users.concat(["Alice","Kate","John","Ola","Ula"]);
// const mapped = users.map(x => x + "___");
// const filtered = moreUsers.filter(x => x.length > 3);

// console.log(filtered);