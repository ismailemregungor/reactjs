const people = ["Eren", "Emre", "Rüçhan", "Anıl", "Sümeyye", "Saadet", "Şeyda"];
const numbers = [49, 1, 52, 67, 33, 200, 120];

// * forEach
people.forEach((value, index, array) => {
  console.log(`${value} kişisi sinifin ${index} numaralı kişidir.`);
});

// * map
const yeniPeople = people.map((value, index) => {
  return `${value} kişisi sinifin ${index} numaralı kişidir.`;
});
console.log(yeniPeople);

// * filter
const filteredPeople = people.filter((person) => {
  return person.length > 5;
});
console.log(filteredPeople);
console.log(numbers.filter((num) => num > 50));

// * every
console.log(people.every((person) => person.length >= 4));

// * some
console.log(
  people.some((person) => {
    return person.length > 6;
  })
);

// * find
console.log(people.find((person) => person.length > 5));

// * findLast
console.log(
  people.findLast((person) => {
    return person.length > 5;
  })
);

// * findIndex
console.log(people.findIndex((person) => person.length > 5));

// * findLastIndex
console.log(
  people.findLastIndex((person) => {
    return person.length > 5;
  })
);

// * sort | reverse
people.sort().reverse();
console.log(people);
numbers.sort((a, b) => a - b);
console.log(numbers);

console.log(
  numbers.reduce((total, item) => {
    return total + item;
  })
);
