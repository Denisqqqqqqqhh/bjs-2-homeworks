"use strict"
function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2)-4*a*c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
     return [-b/(2*a)];
  } else {
    return [(-b + Math.sqrt(discriminant))/(2*a), (-b - Math.sqrt(discriminant))/(2*a)];
  }
}

solveEquation(1,2,3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));
  let totalAmount = monthlyPayment * countMonths;

  totalAmount = totalAmount.toFixed(2);

  return Number(totalAmount);
}
