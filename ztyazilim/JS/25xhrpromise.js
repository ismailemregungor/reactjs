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
const url2 = "https://jsonplaceholder.typicode.com/users/jfjfj";

getData(url1)
  .then((response) => {
    console.log(response);
    for (let i = 0; i < 10; i++) {
      const id = response[i].id;
      getData(`${url1}/${id}`).then((post) => {
        console.log(post);
      });
    }
    return getData(url2);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
