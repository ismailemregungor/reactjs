const arr1 = [1, 2, 3, 4, 5];
// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[2];
// const d = arr1[3];
// const e = arr1[4];

const [a, b, c, d, e] = arr1;
console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("d", d);
console.log("e", e);

const obj1 = { name: "Saadet", surname: "Bozkan", age: 27 };
// const name = obj1.name;
// const surname = obj1.surname;
// const age = obj1.age;
const { name, age, surname } = obj1;

function getInfo({ name, ...params }) {
  console.log(name);
  console.log(params.surname);
  console.log(params.age);
}

getInfo({ ...obj1, sanziman: "DSG" });
