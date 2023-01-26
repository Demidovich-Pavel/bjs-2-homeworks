"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (a !== 0) {
    if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1, x2);
    } else if (d === 0) {
      x = -b / (2 * a);
      arr.push(x);
    };
  } else {
    console.log('На ноль делить НЕЛЬЗЯ!');
  };

  return arr;
}
solveEquation(1, 5, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}