// The solution to callback hell is promises.
//  A promise is a promise of code execution.

console.log("Hello One");
setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);

console.log("My name is " + " Hello Three");

let promise = new Promise(function (resolve, reject) {
    alert("I am an alert in promise")
});



// Fetch google.com homepage  =>> console.log("Google.com") 
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script 