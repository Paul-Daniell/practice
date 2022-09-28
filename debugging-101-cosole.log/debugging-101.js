const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
  { name: "A. Curry", profession: "frogman", age: 32 },
  { name: "F. Vonk", profession: "snake milker", age: 36 },
  { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
  //   console.log("De gehele persoon is ", person);
  //   console.log("De naam van deze persoon is " + person.name);
  //   console.log("De geboorte datum van deze persoon is ", 2022 - person.age);
  //   console.log(person.name + " is een " + person.profession);

  if (person.age > 50) {
    console.log(person.name + " is ouder dan 50");
  }
}
