// Practice Set - 3

// Problem - 1
let marks = {
  harry: 99,
  lovie: 56,
  jimmy: 90,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

// Problem - 2
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}


// Problem - 3
let cn = 4;
let i ;
while ( i!= cn){
    i = prompt("Enter a number")
    console.log("Try Again")
    if(i==cn){
        alert("Number is matched")
      console.log("Finally the number is matched and the number is " + i)
    }
}

// Problem - 4
// Yaha par simply arrow function banaya.
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}

console.log(mean(1,2,3,4,5))