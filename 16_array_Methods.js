// Array Methods

let num = [1, 2, 3, 34, 4];
let b = num.toString()   // b is now a string...

console.log(b , typeof b)   // string

let c = num.join("_")   // Ye sabke beech mei underscore laga dega... 1_2_3_34_4
console.log(c , typeof c) 

// num.pop()   // ye last element ko nikal deta hai array mei se
let r = num.pop()
console.log(num ,"The number which is popped out of the array is " , r)

num.push(333)   // ye element ko add karta hai array mei
console.log(num)


let d = num.shift()   // it will remove the first element of the array
console.log("The first element is removed and the element is " , d , num)


let uni = num.unshift(69)   // ye new array length ko return karta hai like iss element ko add karte hi wo array length change hogyi and ye element ko add karta hai starting mei hi..
console.log("The new length of the array is ", uni , num)


// Part -2

delete num[0]   // delete is a operator. and jiss element ko delete karenge usse wo delete kardega and waha par empty space kardega.....    , array ki length same rahegi after deleting the element using this operator
console.log(num , num.length)



// Concat Method

let num1 = [12,3,23,2,34,2,32]
let num2 = [1982,32323,2332,25,34,2989,386982]
let num3 = [19892,98983,23,2988,34,2,3665672]

// here the existing array won't be changed only new array is going to be created using the old ones.

let newArray = num1.concat(num2 , num3)
console.log(newArray)


// Sort method
// ye sort method simply alphabetically order mei sort kardeta hai and agar numerically chahiye toh ek function banakar usse call karwalo

let compare = (a,b) =>{
 return a-b
}
let friendNum = [2342,423,2,43,20,0,45465,24]
friendNum.sort(compare)
console.log(friendNum)

friendNum.reverse()   // ye hai reverse method jo simply pure array ko reverse kardeta hai 
console.log(friendNum)




// Splice and Slice

// Splice is used to add new elements into the array 

let friend = [1,2,3,4,5,6,7,8]
// friend.splice(2,3,2222,2323,4545)  // 2 index se 3 element ko delete karo and waha par ye add kardo
// console.log(friend)

let newFriend = friend.slice(2,5)   // it creates a new array and isme last value ko include ni karta hai ye remove karne ke liye.
console.log(newFriend)
