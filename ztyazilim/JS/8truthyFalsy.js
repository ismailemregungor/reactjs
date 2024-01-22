// * Truthy
true;
5;
("string");
[1, 2, 3];
var jsonType = {
  name: "Fırat",
  surname: "Tosun",
  age: "26",
};

// * Falsy
false;
0;
("");
null;
undefined;
NaN;

if (!!jsonType) {
  console.log("if'ten geçti");
}
