console.clear();

for (let i = 1; i <= 10; i++) {
  const number = 1;
  const result = i * number;
  console.log(`${i} x ${number} = ${result}`);
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) console.log(i + "x" + j + "=" + i * j);
}
