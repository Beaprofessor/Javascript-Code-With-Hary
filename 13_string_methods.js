let name = "lovie";  // Original string kabhi change nai hoti hai , and ek apko bas ek new string milti hai 

console.log(name.length); // string ki length print karega ye

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2, 4)); // ye print karega from index no. 2 to index. no 4. but 4 ko print ni karega ye.
console.log(name.slice(2));

let newName = name.replace("lovie", "Harry");
console.log(newName);

let friend = "Naman";
console.log(name.concat(" is a friend of ", friend, " -> Thik hai Bhaii ")); // ye string ko add karne ke kaam mei aata hai

let friend2 = "               Meena          ";
console.log(friend2.trim()); // ye faltu ki space ko hatadeta hai

let fr = "Shivika";
let concatString = "";

// QuickQuiz -> Use a for loop to print a string.

for (let i = 0; i < fr.length; i++) {
  console.log(fr[i]);
  concatString += fr[i];
  console.log(concatString);
}
console.log(concatString);