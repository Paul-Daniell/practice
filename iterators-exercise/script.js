console.clear();

const colors = ["blue", "orange", "red", "yellow"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach((element) => console.log(element));

// 4 lines
// 1 line
// > Je komt niet snel in een infinit loop
// >
