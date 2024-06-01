// // Program to add first n natural numbers
let sum  = 0;
let n = prompt('Enter the value of n')
n = Number.parseInt(n)
for(let a = 0; a<=n ; a++ ){
    sum += i
}

console.log("Sum of first " + n + "natural numbers is " + sum )

// Program of calculating factorial of any number
let fact  = 1;
let num = prompt('Enter the value of n')
num = Number.parseInt(num)
for(let a = 1; a<=num ; a++ ){
     fact *= a
}

console.log("Factorial of the  " + " number "+ num  + " is "+ fact )

// For-In Loop

let obj = {
  harry: 99,
  lovei: 89,
  jimmy: 69,
  shivi: 33,
};

for (let a in obj) {
  // console.log(a)   // keys print kar rhe hai idhr (harry , lovie ye sab....)
  console.log("Marks of " + a + " are " + obj[a]); // aur idhr saare marks vgarah....
}

// For - Of Loop

for (let b of "Harry") {  // it should be iterable 
  console.log(b);
}
