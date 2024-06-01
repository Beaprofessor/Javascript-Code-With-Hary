// Functions

// syntax of function

// function function_name (parameter 1 , parameter 2) {
// code
// }

function onePlusAvg(x, y) {
  console.log("Done");
  return Math.round(1 + (x + y) / 2)   // Math.round - ye round off kardega value ko.
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is ", onePlusAvg(a, b));
console.log("One plus Average of b and c is ", onePlusAvg(b, c));
console.log("One plus Average of c and a is ", onePlusAvg(c, a));


//another syntax method of writing function method (this is called as the arrow function method.)
const sum = (p,q) =>{
    return p + q 
}
console.log(sum(2,2))

const hello = () => {
    console.log("Hey how are you . I am toh fine yar.")
    return "hi";
}

let v = hello()
console.log(v)