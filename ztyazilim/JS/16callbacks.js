const isAlert = false;

function getBooks(books = [], show) {
  const booksStr = books.join(", ");
  if (show) {
    show(booksStr);
  }
}

const myBooks = [
  "Sefiller",
  "Da Vinci'nin Şifresi",
  "Cehennem",
  "Türkiye'de Yaşamak",
  "Kızıl Nehirler",
  "Temel ve Dursun",
];

function consoleBooks(books = "") {
  console.log(`Benim ${books} isimli kitaplarım var.`);
}

function alertBooks(books = "") {
  alert(`Benim ${books} isimli kitaplarım var.`);
}

getBooks(myBooks, isAlert ? alertBooks : consoleBooks);

// const call = () => {
//   alert("3 saniye geçti");
// };

function run(ms, callback) {
  setTimeout(() => {
    alert("3 saniye geçti");
  }, 3000);
}
