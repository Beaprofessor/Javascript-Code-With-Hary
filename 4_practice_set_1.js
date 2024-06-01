// Chapter - 1 

// Q1 

// let a = "Harry"
// let b = 6
// let c = a + b 
// console.log(c)

// Q2...

let a = "Harry"
let b = 6
let c = a + b 
console.log(c)
console.log(typeof c)


// Q3....

const detail = {
      name: "Lucky",
      age: 22,
      salary: 100000
}
// detail = 3434  No it cant hold a number or string later.


console.log(detail)


// Q4.....

const a1 = {
    name: "Lucky",
    age: 23,
}
a1["friend"] = "Harry"  // yaha par apan ne add kardi hai value object ke andar
a1["name"] = "Shubham"  // yaha par name change kar rhe hai apan.
console.log(a1)


// Q5.....

const dict = {
    kite : "Bhaii ye patang hoti hai jisse sankrat par udate hai",
    laugh : "Bhaii iska matlab hota hai hasna",
    cry : "Bhaii iska matlab hota hai RONA"
}
console.log(dict.laugh) 

   // or 

console.log(dict['laugh'])