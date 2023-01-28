"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (a !== 0) {
    if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1, x2);
      console.log(arr);
    } else if (d === 0) {
      let x = -b / (2 * a);
      arr.push(x);
      console.log(arr);
    };
  } else {
    console.log('На ноль делить НЕЛЬЗЯ!');
  };
  console.log(arr);
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true) {
    console.log('Ошибка данных. Данные должны быть числом!');
    return false;
  };
  p = (percent / 100) / 12;
  s = amount - contribution;
  paymant = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  total = paymant * countMonths;
  sumPaymant = Number(total.toFixed(2));
  monthPaymant = Number(paymant.toFixed(2));
  console.log(`Ежемесячный платеж составит ${monthPaymant} рублей \n Итого будетзаплачено за ${countMonths} месяцев ${sumPaymant} рублей`);
  return sumPaymant;
};


