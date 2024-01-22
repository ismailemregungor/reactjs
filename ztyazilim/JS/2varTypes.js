var stringType = "plane text";
console.log("stringType: ", typeof stringType);
if (typeof stringType === "string") {
  console.log("stringType bir string'dir.");
}
if (stringType) {
  console.log("string condition'dan geçti.");
}

var numberType = 5;
console.log("numberType: ", typeof numberType);

function getName(name, age) {
  console.log(name, age);
  return `${name}: ${age}`;
}
console.log("getName: ", typeof getName);

var booleanTypeTrue = true;
var booleanTypeFalse = false;
console.log("booleanTypeTrue: ", typeof booleanTypeTrue);
console.log("booleanTypeFalse: ", typeof booleanTypeFalse);

var nullType = null;
console.log("nullType: ", typeof nullType);

var undefinedType = undefined;
console.log("undefinedType: ", typeof undefinedType);

var jsonType = {
  name: "Fırat",
  surname: "Tosun",
  age: "26",
};
console.log("jsonType: ", typeof jsonType);
