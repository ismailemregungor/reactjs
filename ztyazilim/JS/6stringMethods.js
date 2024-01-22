let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry text.";

// * length
console.log("length", lorem.length);

// * slice
const sliceString = lorem.slice(6, 11);
console.log("slice", sliceString);

// * substring
const substringString1 = lorem.substring(6, 11);
const substringString2 = lorem.substring(6);
console.log("substringString1", substringString1);
console.log("substringString2", substringString2);

// * toUpperCase
const upperString = lorem.toUpperCase();
console.log("toUpperCase", upperString);

// * toLowerCase
const lowerString = lorem.toLowerCase();
console.log("toLowerCase", lowerString);

const loremWithWhiteSpace =
  "         Lorem Ipsum is simply dummy text           ";
// * trim
const trimString = loremWithWhiteSpace.trim();
console.log("trim", trimString);
// * trimStart
const trimStartString = loremWithWhiteSpace.trimStart();
console.log("trimStart", trimStartString);
// * trimEnd
const trimEndString = loremWithWhiteSpace.trimEnd();
console.log("trimEnd", trimEndString);

// * replace
const replaceString = "I am using Twitter!".replace("Twitter", "X");
console.log("replace", replaceString);

// * split
const splitString = lorem.split(" ");
console.log("split", splitString);

// * includes
const includesString = lorem.includes("dummy");
console.log("includes", includesString);

// * indexOf
const indexOfString = lorem.indexOf("text");
console.log("indexOf", indexOfString);
// * lastIndexOf
const lastIndexOfString = lorem.lastIndexOf("text");
console.log("lastIndexOf", lastIndexOfString);

// * String Template Literal
const stringTemplateLiteral = `text indexOf: ${indexOfString}, \n lastIndexOf: ${lastIndexOfString}`;
console.log(stringTemplateLiteral);
// * concat
const concatString = "text indexOf: "
  .concat(indexOfString)
  .concat(", \n lastIndexOf: ")
  .concat(lastIndexOfString)
  .toLowerCase()
  .toUpperCase();
console.log("concat", concatString);
// ! do not use it
const dummyString =
  "text indexOf: " + indexOfString + ", \n lastIndexOf: " + lastIndexOfString;
console.log(dummyString);
