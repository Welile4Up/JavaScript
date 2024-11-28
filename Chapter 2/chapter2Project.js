// /*****************Miles-to-kilometers converter**************/
// let distanceMiles = 10;
// let distanceKm = distanceMiles * 1.60934;

// console.log("The distance of " + distanceKm + " kms is equal to " + distanceMiles + " miles");


/*****************BMI calculator**************/
let inchHeight = 20;
let poundWeight = 100;
let centimeterHeight = inchHeight * 2.54;
let kiloWeight = poundWeight / 2.2046;

console.log(inchHeight + " inches is equal to " + centimeterHeight + " cm");
console.log(poundWeight + " pounds is equal to " + kiloWeight + " kilo");

let BMI = kiloWeight / ((centimeterHeight / 100) ** 2);
console.log("BMI is equal to " + BMI);
