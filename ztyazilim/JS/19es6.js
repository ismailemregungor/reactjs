// 1. let ve const anahtar kelimeleri geldi.

// 2. arrow functions
const arrowFunc = (param1, param2) => {
  // do something
};

// 3. spread operator
const spreadFunc1 = (param1, param2, ...spread) => {
  // do something
};

// 4. destructure
for (const [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}

// 5. OOP
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getCarProps() {
    console.log(`Renk: ${this.color}, Model: ${this.model}`);
  }
}

const myCar = new Car("kırmızı", "Tesla");
myCar.getCarProps();