let arr = [45, 23, 21, 32];
// console.log(arr)

// Array Map method
// Map kya hai na ek naya array banata hai by performing some operation on each element of an array
let a = arr.map((value, index, array) => {
//   console.log(value, index, array);
  return value + 5;
    // ye idhr new array banakar  usme  return values ko store karwa rhe hai apan and usse baad mei print karwa rhe hai.
});

// console.log(a);

// Array Filter Method   --->>> Filters an array with values that passes a test . Creates a new array

let arr2 = [45, 32, 234, 0, 54, 5];
let array1 = arr2.filter((a) => {   
    return a % 5 == 0;
    // ye idhr new array banakar usme  return values ko store karwa rhe hai apan
});
// console.log(array1);

// console.log(arr , arr2)  // yaha par tum check kar sakte ho ki ye jo bhi functions hai ye original array ke elements ko change ni kar rhe hai.




// Array reduce method -->> Iska kaam hai array ko single value mei reduce karne ka

// let systum = [1,2,3,1,2,3]  
// const func_new = (h1 , h2) => {
//     return h1 + h2                  //  1+2 = 3+3 = 6+1 = 7+2 = 9+3 = 12
// }
// let arraySys = systum.reduce(func_new)
// console.log(arraySys)


// Dono tarike same hai upar wale mei function bahar banaya hai and neeche wale mei andar banaya hai.

let systum = [1,2,3,1,2,3]  
let arraySys = systum.reduce((h1 , h2) => {
    return h1 + h2                  //  1+2 = 3+3 = 6+1 = 7+2 = 9+3 = 12
})
console.log(arraySys)


let harry = [1,2,3,4,5]
const funcy = (a,b) =>{
    return b-a
}
let jerry = harry.reduce(funcy)
console.log(jerry)




// Map and filter dono array return karte hai and reduce ek single value ko return karta hai