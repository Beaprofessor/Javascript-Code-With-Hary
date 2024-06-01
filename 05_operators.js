console.log("Operators in JS")


// Arithmetic Operators.

let a = 45;
let b = 4;
console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
console.log("a/b = ",a/b)
console.log("a*b = ",a*b)
console.log("a**b = ",a**b)  // a ki power b hojayegi.
console.log("a%b = ",a%b)   // remainder ke liye hai ye. 

console.log("a++ = ",a++) // ye pehle print karega {a} ko fir increase karega value ko.
console.log("++a = ",++a)  // ye pehle {a} ko increase karega fir print karega.

console.log("a-- = ",a--)  // ye pehle print karega {a} fir decrease karega value ko
console.log("--a = ",--a) // ye pehle {a} ko decrease karega fir print karega.


// Assignment Operators

a1 = 8;
 a1 += 5   //same hai a1 = a1 + 5

console.log(a1)


// Comparison  Operators 

let comp1 = 6;
let comp2 = "6";

console.log("comp1 == comp2 is " , comp1 == comp2)
console.log("comp1 != comp2 is " , comp1 != comp2)
console.log("comp1 === comp2 is " , comp1 === comp2)
console.log("comp1 !== comp2 is " , comp1 !== comp2)


// Logical Operators

let A = 23; 
let B = 21
console.log(A<B && A==23) // dono condition sahi hogi toh true hogi conditions ko 
console.log(A>B || A==23 ) // ek condition bhi sahi hogi toh true hoga

console.log(!true)  // Not of 

