// Chapter - 2 Practice set

// Problem - 1
/*
 let age  = prompt("What is ur age ?")

 if(age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20.")
 }
 else{
    console.log("Your age doesnt lies between 10 and 20")
 }
*/

 // Problem - 2

//  let age  = prompt("What is ur age ?")
//  switch (age) {
//     case '13':
//         console.log("Your age is 13")
//         break;
//     case '14':
//         console.log("Your age is 14")
//         break;
//     case '12':
//         console.log("Your age is 12")
//         break;
//     default:
//         console.log("Your age is not special")            
//  }

 
 
 // Problem - 3

//  let num = prompt("Enter the number")
//  num = Number.parseInt(num)
//  if(num%2==0 && num%3==0){
//     console.log("Your number is divisible by 2 and 3")
//  }
//  else{
//     console.log("Your number is not divisible by 2 and 3")
//  }



 // Problem - 4
 let num = prompt("Enter the number")
 num = Number.parseInt(num)
 if(num%2==0 || num%3==0){
    console.log("Your number is divisible by 2 and 3")
 }
 else{
    console.log("Your number is not divisible by 2 and 3")
 }


 // Problem - 5
  let age = 34
  let a = age > 18 ? "You can drive" : "You can not drive"
  console.log(a)