"use strict"
let a = 1;
let b = 5;
let c = 4;
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    x1 = -b + Math.sqrt(d) / (2 * a);
    x2 = -b - Math.sqrt(d) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x = -b / (2 * a);
    arr.push(x);
  };
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}