/*const compare = function (number) {
  if (number >= 100) {
    return true;
  }
  return false;
};

const result = compare(100);
console.log(result);*/

// It's a function that produce.

/*const bouncer = function (maxNumber, currentNumber, age) {
  if (age < 18) {
    return "this is a club for adults";
  }

  if (currentNumber >= maxNumber) {
    return "come back later, it's to busy now";
  } else {
    return "come in";
  }
}; */

//console.log(bouncer(200, 199, 19));
//console.log(bouncer(200, 200, 14));
//console.log(bouncer(200, 200, 19));

const calculateAverage = function (number1, number2, number3, number4) {
  const total = number1 + number2 + number3 + number4;
  const average = total / 4;
  return average;
};

/*const calculateAverage = function (number1, number2, number3, number4) {
    const total = number1 + number2 + number3 + number4;
    const average = total / 4;
    const averageRounded = Math.round(average);
    return averageRounded;
  };*/

//console.log(calculateAverage(1, 1, 1, 1));
//console.log(calculateAverage(2, 5, 1, 8));
console.log(calculateAverage(3, 3, 5, 6));
