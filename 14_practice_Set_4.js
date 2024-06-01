// Practice Set - 4

// Problem - 1
console.log("har\"".length)

// Problem - 2
let str = "Harry"
console.log(str.toLowerCase())

// Problem - 3
let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
console.log(amount)
console.log(typeof amount) // --string
amount = Number.parseInt(amount)
console.log(typeof amount) // --number 


// Problem - 4
let friend = "lovie"
friend[3]="L"
console.log(newName)  // friend is not changed , because string is immutable.