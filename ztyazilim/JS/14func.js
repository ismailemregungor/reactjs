const yusuf = {
  name: "Yusuf",
  surname: "Uluocak",
  date: 1995,
  town: "İstanbul",
  getInfo: function () {
    console.log(`İsmi ${this.name} olan kişinin doğum yeri ${this.town}'dur.`);
  },
  // getInfo: () => {
  //   console.log(`İsmi ${yusuf.name} olan kişinin doğum yeri ${yusuf.town}'dur.`);
  // },
};

function getYusufsInfo() {
  for (const key in yusuf) {
    const value = yusuf[key];
    console.log(`${key}: ${value}`);
  }
}

const printDescription = () => {
  console.log("Yusuf'un bilgileri aşağıdadır:");
};

const getYusufsLife = function () {
  printDescription();
  getYusufsInfo();
  yusuf.getInfo();
};

getYusufsLife();

function info(a) {
  console.log(`${this["name"]} ${this["surname"]}`);
  console.log(a);
}

const people = [
  {
    name: "Jane",
    surname: "Doe",
    getInfo: info,
  },
  {
    name: "John",
    surname: "Doe",
    getInfo: info,
  },
];

for (const person of people) {
  person.getInfo("Hello");
}
