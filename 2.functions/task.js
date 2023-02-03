function getArrayParams(...arr) {
  //   let min = Math.max(...arr);
  //   let max = Math.min(...arr);
  //   let avg = 0;
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    };
    if (max < arr[i]) {
      max = arr[i];
    };
  };
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i]
  };
  avg = avg / arr.length;
  avg = Number(avg.toFixed(2));
  console.log({ min: min, max: max, avg: avg })
  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  console.log(sum);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    };
  };
  let sum = max - min;
  console.log(sum);
  return sum;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  };
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  console.log(differenceEvenOdd);
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    };
  };
  let averageEvenElements = sumEvenElement / countEvenElement;
  console.log(averageEvenElements);
  return averageEvenElements;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  console.log(arrOfArr, func);
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    console.log(func(...arrOfArr[i]));
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    };
  };
  console.log(maxWorkerResult);
  return maxWorkerResult
}

