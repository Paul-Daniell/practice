// function declarations

function square1(number1, number2) {
  const times1 = number1 * number1;
  const times2 = number2 * number2;
  const total = times1 + times2;
  const sum = total * total;
  return sum;
}

console.log(square1(2, 3));

// function expressions

const square2 = function (numberOne, numberTwo) {
  const multiply1 = numberOne * numberOne;
  const multiply2 = numberTwo * numberTwo;
  const totall = multiply1 + multiply2;
  const summ = totall * totall;
  return summ;
};

console.log(square2(2, 3));

// kortere versie
/*
const square2 = function (numberOne, numberTwo) {
  const summ = numberOne * numberOne + numberTwo * numberTwo;
  return summ * summ;
};

console.log(square2(2, 3));
*/

// arrow functions

const square3 = (two, three) => {
  const squared1 = two * two;
  const squared2 = three * three;
  const toghetter = squared1 + squared2;
  const endTotal = toghetter * toghetter;
  return endTotal;
};

console.log(square3(2, 3));
