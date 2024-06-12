console.log("Javascript tutorial 3: var , let and const ki kahani");

let a = 45;
let ad = "bdjsb";
let b = "Harry";
let c = null;
let d = undefined;

// JS mei pehle variable banane ke liye var ko use karte the.

var harry = "Harry is a nice boy";
console.log(harry);
// var is globally scoped while let and const are blocked scope.

{
  let b = "this"; // block scope
  console.log(b);
  // console.log(harry)      // as we can see var is use to define  variable  globally so thats why we dont use the var...
}

console.log(b);
console.log(a);

// Const Ki kahani
const author = "HarryTheCoder";
// let author = "systum" // bhaii constant ko thodi na change kardega ??
// author = "lovie"; // bhaii already assign kar chuke ho ab kuch ni hoga.
console.log(author);
