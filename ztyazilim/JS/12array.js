// ! yanlış kullanım
["Eren", "Deniz", "Kılıç", 22];
const eren = {
  firstname: "Eren",
  middleName: "Deniz",
  surname: "Kılıç",
  age: 22,
};

const sinif = ["Eren", "Sümeyye", "Emre", "Rüçhan", "Anıl", "Saadet", "Şeyda"];
console.log(sinif[3]);
sinif[7] = "Hüsna";
sinif[sinif.length] = "Fırat";

// * push
sinif.push("Yusuf");

// * pop
sinif.pop();

// * slice
const yeniSinif = sinif.slice(2, 5);
console.log(yeniSinif);

// * splice
sinif.splice(2, 5, "Erkut", "Emirhan", "Berk");

// * indexOf
console.log(sinif.indexOf("Emirhan"));
sinif[sinif.indexOf("Emirhan")] = "Rüçhan";

// * shift
sinif.shift();

// * unshift
sinif.unshift("Eren");

// * reverse
sinif.reverse();

// * concat
const yepyeniSinif = sinif.concat("Emirhan").concat(yeniSinif);
console.log(yepyeniSinif);

console.log(sinif);

console.log(`Sinifimizda ${sinif.join(", ")} kişileri vardır.`);

// bmw,porshe,seat,vw,ferrari,tesla,togg,audi