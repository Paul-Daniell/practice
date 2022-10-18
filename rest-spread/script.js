const sum = (...numbers) => {
  return numbers.reduce((num, numb) => {
    return num + numb;
  });
};

console.log(sum(1, 2, 3, 4, 5));

const sum2 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

let numbs = [1, 2, 3];

console.log(sum2(...numbs));
