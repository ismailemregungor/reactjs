function getData(url, method = "GET", data) {
  return fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    ...(data ? { body: JSON.stringify(data) } : {}), //*formData // body data type must match "Content-Type" header
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => response);
}

const postUrl = "http://localhost:4000/posts";

// * GET
async function getPosts() {
  const response = await getData(postUrl);
  console.log(response);
}
// getPosts();

// * POST
async function postPost() {
  const data = {
    userId: 1,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  };
  const response = await getData(postUrl, "POST", data);
  console.log(response);
}
// postPost();

// * PUT
async function updatePost() {
  const data = {
    id: 2,
    userId: 1,
    title: "Updated Title",
    body: "Updated Body",
  };
  const putUrl = `${postUrl}/${data.id}`;
  const response = await getData(putUrl, "PUT", data);
  console.log(response);
}
// updatePost();

// * DELETE
async function deletePost() {
  const response = await getData(`${postUrl}/2`, "DELETE");
  console.log(response);
}
// deletePost();

// * SEARCH
// q ile table içindeki tüm verilerde verilen parametre aranır.
// _sort ile hangi column'a göre sıralama yapmak isteniyorsa o column name yazılır.
// _order: asc, desc
async function searchPost() {
  const response = await getData(`${postUrl}?q=est&_sort=body&_order=desc`);
  console.log(response);
}
searchPost();
