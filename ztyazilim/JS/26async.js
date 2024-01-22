function getData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const response = JSON.parse(request.responseText);
        resolve(response);
      } else if (request.readyState === 4) {
        reject("Bir hata oluştu.");
      }
    });

    request.open("GET", url);
    request.send();
  });
}

const url1 = "https://jsonplaceholder.typicode.com/posts";

// const callServices = async () => {
async function callServices() {
  const response = await getData(url1);
  console.log(response);
  return getData(`${url1}/1`);
}

callServices().then((post) => console.log(post));
