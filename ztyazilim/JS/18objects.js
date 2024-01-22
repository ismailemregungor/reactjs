const obj1 = { name: "Hüsna", surname: "Kışla" };
const obj2 = { name: "Hüsna", surname: "Kışla" };
const obj3 = { name: "Emirhan", surname: "Meral" };
const obj4 = obj1;
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(obj1 === obj3);
console.log(obj1 === obj4);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [2, 3, 4];
const arr4 = arr1;
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
console.log(arr1 === arr3);
console.log(arr1 === arr4);

obj1.name = "Mehmet";
console.log(obj4.name);
obj1["surname"] = "Hüsna";
console.log(obj4.surname);

// * hasOwnProperty
if (obj1.hasOwnProperty("name")) {
  console.log(obj1.name);
}

const car = {
  brand: "BMW",
  model: "X5",
  color: "Gri",
  fuelType: "Dizel",
  year: 2015,
};

// console.log(Object.entries(car));

// * entries, destructure
for (const [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}

// * keys
console.log(Object.keys(car));

// * values
console.log(Object.values(car));

// Object.freeze(car);
// car.brand = "Audi";
// car.prop1 = "value1";
// console.log(car);

Object.seal(car);
car.brand = "Audi";
car.prop1 = "value1";
console.log(car);

const emre1 = { name: "Emre", surname: "Güngör" };
const emre2 = { name: "İsmail", gender: "M" };
console.log(Object.assign(emre1, emre2));
const emre3 = Object.assign(emre1, emre2);
console.log(emre1 === emre3);
