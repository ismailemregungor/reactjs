function sum(...numbers) {
  let sumOfNumbers = 0;
  for (const number of numbers) {
    sumOfNumbers += number;
  }

  console.log(sumOfNumbers);
}

const numbers = [324, 45, 567, 8, 3, 2, 3, 35, 3454, 44];
sum(...numbers, 4456, 2, 323, 5);
