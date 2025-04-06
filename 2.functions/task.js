function getArrayParams(...arr) {
  if (arr.length === 0) {
      return {
          max: null,
          min: null,
          avg: null
      };
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  return {
      max,
      min,
      avg
  };
}

let result = getArrayParams(1, 2, 3, 4, 5);
console.log(result);

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
      } else {
          sumOddElement += num;
      }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
  }
  
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

console.log(summElementsWorker(1, 5, 7, 14, 5));
console.log(differenceMaxMinWorker(1, 32, 3, 44, 5));
console.log(differenceEvenOddWorker(61, 2, 0, 46, 5));
console.log(averageEvenElementsWorker(41, 27, 3, 43, 5));

function makeWork(arrOfArr, func) {
  if (!Array.isArray(arrOfArr) || typeof func !== 'function' || arrOfArr.length === 0) {
      return null;
  }
  
  let maxWorkerResult = -Infinity;
  
  for (let subArray of arrOfArr) {
      if (!Array.isArray(subArray)) continue;
      
      let currentResult = func(...subArray);
      
      if (currentResult > maxWorkerResult) {
          maxWorkerResult = currentResult;
      }
  }
  
  return maxWorkerResult;
}

let data = [
  [1, 5, 3, 8, 0],
  [10, 21, 35, 43, 67],
  [150, 234, 367, 494, 536]
];

console.log(makeWork(data, summElementsWorker));
console.log(makeWork(data, differenceMaxMinWorker));
console.log(makeWork(data, differenceEvenOddWorker));
console.log(makeWork(data, averageEvenElementsWorker));

