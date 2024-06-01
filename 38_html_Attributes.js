let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a)

console.log(first.hasAttribute("class"))  // hasAttribute method is use to check the existence of the element
console.log(first.hasAttribute("style"))


// console.log(first.setAttribute("hidden" ,"true" ))    // setAttribute method is setting the attributes and their name too..
console.log(first.setAttribute("class" ,"true sachin" ))
console.log(first.setAttribute("id" ,"hanji kiddan " ))


console.log(first.removeAttribute("class"))   // removeAttribute ka kaam hai attribute ko remove karne ka.....


console.log(first.attributes)    // ye saare attributes dedega jo bhi present hai wo.


// Data -* attributes.....  isse apan customised attributes create kar sakte hai and usko access karne ke liye simply elem.dataset use karna hai.... apan idhr data-game and data-player use kiya hai....
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)
