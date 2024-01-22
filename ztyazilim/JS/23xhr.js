function getData(url, callback) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callback("Data çekildi.", response);
    } else if (request.readyState === 4) {
      callback("Bir hata oluştu.");
    }
  });

  request.open("GET", url);
  request.send();
}

const url1 = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/users/jfjfj";

getData(url1, (message, response) => {
  if (!response) {
    console.log(message);
    return;
  }
  console.log(message, response);
  getData(url2, (message, response) => {
    if (!response) {
      console.log(message);
      return;
    }
  });
});
