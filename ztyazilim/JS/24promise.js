function addString(prev, next) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // do something
      const result = `${prev} ${next}`;
      resolve(result);
    }, 3000);
  });
}

addString("A", "B")
  .then((response) => {
    console.log(response);
    return addString(response, "C");
  })
  .then((response) => {
    console.log(response);
  });

function count(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
}

count(1)
  .then((response) => {
    console.log(response);
    return count(response + 1);
  })
  .then((response) => {
    console.log(response);
    return count(response + 1);
  })
  .then((response) => {
    console.log(response);
    return count(response + 1);
  })
  .then((response) => {
    console.log(response);
    return count(response + 1);
  })
  .then((response) => {
    console.log(response);
    return count(response + 1);
  });
