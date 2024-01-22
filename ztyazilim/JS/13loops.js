const sinif = ["Eren", "Sümeyye", "Emre", "Rüçhan", "Anıl", "Saadet", "Şeyda"];
for (let i = 0; i < sinif.length; i++) {
  const element = sinif[i];
  // console.log(element);
}

let i = 0;
// for (; i < sinif.length; ) {
//   const element = sinif[i];
//   console.log(element);
//   i += 1;
// }

while (i < sinif.length) {
  const element = sinif[i];
  console.log(element);
  i += 1;
}

const seyda = {
  name: "Şeyda",
  surname: "Akgül",
  age: 28,
  town: "İstanbul",
};
for (const key in seyda) {
  const value = seyda[key];
  console.log(`${key}: ${value}`);
}

let total = 0;
const ages = [22, 28, 27, 27, 26, 27, 23, 24, 28, 22, 28, 24, 24, 22];
for (const age of ages) {
  total += age;
}
console.log(`Sınıfın yaş ortalaması: ${total / ages.length}`);
