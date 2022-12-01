//
"use strict";
/*
function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return countryDescription;
}

const serbia = describeCountry("Serbia", 8, "Belgrade");
console.log(serbia);

const romania = describeCountry("Romania", 33, "Bucharest");
console.log(romania);

const germany = describeCountry("Germany", 40, "Berlin");
console.log(germany);

function percentageOfWorld(population) {
  const worldPercentage = (population / 7900) * 100;
  return worldPercentage;
}

const serbiaWorldPercentage = percentageOfWorld(8);
console.log(serbiaWorldPercentage);

const germanyWorldPercentage = percentageOfWorld(40);
console.log(germanyWorldPercentage);

const romaniaWorldPercentage = percentageOfWorld(33);
console.log(romaniaWorldPercentage);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const serbiaWorldPercentage2 = percentageOfWorld2(8);
console.log(serbiaWorldPercentage2);
const germanyWorldPercentage2 = percentageOfWorld2(40);
console.log(germanyWorldPercentage2);

const romaniaWorldPercentage2 = percentageOfWorld2(33);
console.log(romaniaWorldPercentage2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const serbiaWorldPercentage3 = percentageOfWorld3(8);
console.log(serbiaWorldPercentage3);
const germanyWorldPercentage3 = percentageOfWorld3(40);
console.log(germanyWorldPercentage3);

const romaniaWorldPercentage3 = percentageOfWorld3(33);
console.log(romaniaWorldPercentage2);

const describePopulation = function (country, population) {
  return console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld(
      population
    )}% of the world population.`
  );
};

const serbiaDescription = describePopulation("Serbia", 8);

const germanyDescription = describePopulation("Germany", 40);

const romaniaDescripiton = describePopulation("Romania", 33);

const populations = [8, 33, 40, 100];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);

const neighbours = ["Hungary", "Croatia", "Bosnia", "Montenegro"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes["Germany"]) {
} else {
  console.log("Probably not a central European country");
}

console.log(neighbours.indexOf("Croatia"));
neighbours[1] = "Hrvatska";
console.log(neighbours);

const myCountry = {
  country: "Serbia",
  capital: "Belgrade",
  language: "serbian",
  population: 8,
  neighbours: ["Hungary", "Croatia", "Bosnia", "Montenegro"],
  describe: function () {
    return `${this.country} has ${this["population"]} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries (${this.neighbours[0]}, ${this.neighbours[1]}, ${this.neighbours[2]} and ${this.neighbours[3]}), and a capital called ${this.capital}.`;
  },
  checkIsIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;
    // return this.isIsland;
    this.isIsland = !Boolean(this.neighbours.length);
    return this.isIsland;
  },
};

console.log(
  `${myCountry.country} has ${myCountry["population"]} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries (${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]} and ${myCountry.neighbours[3]}), and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());

*/
/*
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting!`);
}

// const populations = [8, 33, 40, 100];

// const percentages2 = [];
// const percentages3 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld(populations[i]));
// }

// console.log(percentages2);

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld(populations[i]);
//   percentages3.push(perc);
// }
// console.log(percentages2);

function percentageOfWorld(population) {
  const worldPercentage = (population / 7900) * 100;
  return worldPercentage;
}

// const percentages = [
//   percentageOfWorld(populations[0]),
//   percentageOfWorld(populations[1]),
//   percentageOfWorld(populations[2]),
//   percentageOfWorld(populations[3]),
// ];
// console.log(percentages);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(`List of neighbours ${i + 1}`);
  for (let c = 0; c < listOfNeighbours[i].length; c++) {
    console.log(`${listOfNeighbours[i][c]}`);
  }
}

const populations = [8, 33, 40, 100];

const percentages4 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld(populations[i]);
  percentages4.push(perc);
  i++;
}
console.log(percentages4);
*/
