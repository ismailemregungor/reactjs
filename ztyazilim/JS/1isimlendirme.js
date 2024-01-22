// variable
// * camelCase
var dogName = "Karabaş";

// Boolean
// * camelCase
var isUserLogin = true;

// function
// * camelCase
/**
 * Verilen isim ve yaşı console yazdırır.
 * @param {string} name kişinin ismi
 * @param {number} age kişinin yaşı
 * @returns string
 */
function getName(name, age) {
  console.log(name, age);
  return `${name}: ${age}`;
}

getName(dogName, 4);

// constant
// * UPPER_SNAKE_CASE
const DAYS_UNTIL_TOMORROW = 1;

// class
// * PascalCase
class DogProperties {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getProperties() {
    console.log(`${this.name}: ${this.age}`);
  }
}

const myDog = new DogProperties(dogName, 4);
myDog.getProperties();

// component
// * PascalCase
function LoginButton() {
  return "Login";
  // return (
  //   <div>
  //     <button>Login</button>
  //   </div>
  // );
}
