// Aaiye padhte hai Arrays.......

let a = [1, 2, 3, 4, 5, "Shubh", false, true, "12"]; // Ye hai Array , isme koi se  bhi datatype ki  values add kar sakte hai

console.log(a);
console.log(a[6]);
// console.log(a[11])  // undefined dega ye kyuki wo hai hi ni array ke andar

a[9] = true; // ab isko yaha par value dedi hai apan ne toh ye ab undefined print ni karega, thik hai

console.log(a[9]);
// console.log("The lengths of the array a is ", a.length)

a[3] = "hindi"; // changing the value of an array.

console.log(a[3]);
// console.log(a)

// Arrays are mutable they can be change..   and they are objects

console.log(typeof a); // object hi print karega

// While Strings are immutable and they cant be change.



// QuickQuiz - create an array and print the array elements using the for loop... 
let friend = ["Lovie", "garry", "jerry", 1, 2, 3, 4, 5, true, false];
for (let i = 0; i < friend.length; i++) {
  console.log(friend);
}
