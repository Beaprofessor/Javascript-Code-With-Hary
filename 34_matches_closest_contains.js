// There are three important methods to search the DOM

// 1. elem.matches(CSS)  ->> To check if element matches the given CSS Selector
// 2. elem.closest(CSS)  ->> to look for the nearest ancestor that matches the given CSS-selector.The elem itself is also checked.
// 3. elemA.contains(elem) ->> Returns true if elemB is inside elemA(a descendant of elemA) or when elemA===elemB

let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)

// Matches ka ye kaam hai ki ye check karta hai jo CSS selector select kara hai querySelectors ke through wo hai bi yaa nai

console.log(id1.matches(".class")) //ye false dega kyuki class name se ek css selector nai hai
console.log(id1.matches(".box"))    // ye true dega kyuki box name se ek css selector hai

console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
