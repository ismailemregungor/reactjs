/**
 *
 * @param {array} names
 * @param  {...string} otherNames rest parametresi
 */
function getNames(names = [], ...otherNames) {
  for (const name of names.concat(otherNames)) {
    console.log(name);
  }
}

const sinif = ["Eren", "Sümeyye", "Emre", "Rüçhan", "Anıl", "Saadet", "Şeyda"];
getNames(sinif, "Afife", "Betul", "Yusuf");
