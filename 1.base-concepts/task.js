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
  for (let i = 0; i < arguments.length; i++) {
    if (isNaN(arguments[i]) === true) {
      console.log('Ошибка данных. Данные должны быть числом!');
      return 0;
    };
  };
  p = (percent / 100) / 12;
  s = amount - contribution;
  paymant = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  total = paymant * countMonths;
  sumPaymant = Number(total.toFixed(2));
  monthPaymant = Number(paymant.toFixed(2));
  console.log(`Ежемесячный платеж составит ${monthPaymant} рублей \n Итого будетзаплачено за ${countMonths} месяцев ${sumPaymant} рублей`);
  return monthPaymant;
};
calculateTotalMortgage(10, 0, 50000, 12)
