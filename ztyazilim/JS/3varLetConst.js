var variableType = "var";
let letType = "let";
const constType = "const";

function varLetDifference() {
  console.log("a (scope üstünde): ", a);
  console.log("b (scope üstünde): ", b);

  if (true) {
    // global variable
    var a = "a";
    // local variable
    let b = "b";

    console.log("a: ", a);
    console.log("b: ", b);
  }

  console.log("a (scope altında): ", a);
  console.log("b (scope altında): ", b);
}

varLetDifference();
