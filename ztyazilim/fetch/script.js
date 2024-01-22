const arr = [
  {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    count: 120,
    rate: 3.9,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
];

let boxArr = [];

for (const object of arr) {
  const box = `<div class="box">
  <img
    class="box-img"
    src="${object.image}"
  />
  <a href="#" target="_blank" rel="noopener noreferrer">Fashion</a>
  <h5>${object.title}</h5>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam
    atque ipsa laborum sunt distinctio...
  </p>
  <ul class="profile">
    <li>
      <img
        src="https://assiagroupe.tech/noonpost/html/assets/img/author/1.jpg"
      />
    </li>
    <li>
      <a href="#">David Smith</a>
    </li>
    <li class="dot"></li>
    <li>February 10, 2022</li>
  </ul>
  </div>`;
  boxArr.push(box);
}

document.getElementById("container").innerHTML = boxArr.join("");
