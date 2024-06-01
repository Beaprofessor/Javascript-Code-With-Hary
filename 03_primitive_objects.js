// Primitive-Datatypes

let a  = null;
let b  = 34;
let c  = true;
let d = undefined;
let e = BigInt("3424") + BigInt("3");
let f = "aharyrya"
let g = Symbol("Hanji kiddan  !!?")

console.log(a,b,c,d,e,f,g)
console.log(typeof a ,c ,d )


// Objects in JS (Non Primitive Datatypes) - isse key value pairs bana sakte hai....

const item = {
    "Harry" : true,
    "Shubh" : false,
    "Love"  : 67,
    "Rohan" : undefined
}

console.log(item["Shubh"])