"use strict";

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive");

// const interface = "Audio ";
// const private = 554;



function logger() {
  console.log("My name is Aleksa");
}

//calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples nad ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


 
//function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1998);
console.log(age1);

//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1998);

console.log(age1, age2);



// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1998, "Aleksa"));
console.log(yearsUntilRetirement(2000, "Bob"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange .`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const YearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired. 😊`);
    return -1;
  }
};

console.log(YearsUntilRetirement(1998, "Aleksa"));
console.log(YearsUntilRetirement(1950, "Pjotar"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends[friends.length - 1]);
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Excercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);



const friends = ["Michael", "Steven", "Peter"];
//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Rremove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("Steven is not among your friends");
}


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];



const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? firstName, lastName, job, age, friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Portugal";
jonas["twitter"] = "@schmedtmann";
console.log(jonas);

//challenge
//'Jonas has 3 friends nad his best friend is called Michael

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
);



const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas["calcAge"](1991));

//challenge getSummary
//"Jonas is a 46 year old teacher.and he has a/no drivers license"
console.log(jonas.getSummary());



// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 2 🏋️‍♂️");
// console.log("Lifting weights repetition 3 🏋️‍♂️");
// console.log("Lifting weights repetition 4 🏋️‍♂️");
// console.log("Lifting weights repetition 5 🏋️‍♂️");
// console.log("Lifting weights repetition 6 🏋️‍♂️");
// console.log("Lifting weights repetition 7 🏋️‍♂️");
// console.log("Lifting weights repetition 8 🏋️‍♂️");
// console.log("Lifting weights repetition 9 🏋️‍♂️");
// console.log("Lifting weights repetition 10 🏋️‍♂️");

//for loop keeps running while condition is true
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Liftings weights competition ${rep} 🏋️‍♂️`);
}



const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //reading from array
  console.log(jonas[i], typeof jonas[i]);

  //filling an array
  // types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  2037 - years[i];
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("---- ONLY STRINGS ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("---- BREAK WITH NUMBER ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

*

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}
 


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Liftings weights competition ${rep} 🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`While: Liftings weights competition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random(
    
  ) * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}

*/
