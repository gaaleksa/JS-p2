"use strict";
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`The Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`The Koalas win! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`There is no winner! (${avgDolphins} vs ${avgKoalas})`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

//test 2

scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

*/
/*
let bill = Number(prompt("Koliko novca je vas racun?"));

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`);
let tip;
console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300
      ? (tip = (bill * 15) / 100)
      : (tip = (bill * 20) / 100)
  } and the total value was ${bill + tip}.`
);

const bill = Number(prompt("How much is the bill?"));

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tip = calcTip(bill);
const tip = calcTip(bill);
const calcBill = (bill, tip) => bill + tip;
const totalPay = calcBill(bill, tip);
console.log(
  `Vas racun je ${bill}, baksis je ${tip}, a ukupno za placanje ${totalPay}.`
);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [
//   calcBill(bills[0], tips[0]),
//   calcBill(bills[1], tips[1]),
//   calcBill(bills[2], tips[2]),
// ];

// console.log(bills, tips, totals);
console.log(bill, tip, totalPay);



const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();
// console.log(
//   `${mark.bmi > john.bmi ? "Mark" : "John"}'s bmi (${
//     mark.bmi > john.bmi ? mark.bmi : john.bmi
//   }) is higher than ${mark.bmi > john.bmi ? "John" : "Mark"}'s (${
//     mark.bmi > john.bmi ? john.bmi : mark.bmi
//   }).`
// );

// John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName} and ${john.fullName} have the same BMI! (${mark.bmi})`
  );
}

*/

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
