// let a = "Hey whats ur age ?"
// a = Number.parseInt()  // tarika hai string ko number mei convert karne ka 
// if(a<0){
//     alert("This is an invalid age")
// }
// else if(a<9)
//     {
//    alert("You are a kid and you cannot even think of driving")
// }
// else if (a<18 && a>=9)
//     {
//     alert("You are a kid and you can think of driving after 18")
// }
// else(a>18)
// {
//     alert("This is a valid age and you can start driving.")
// }

// console.log("Done")


// Homework  - Explore switch statement and write a basic program in the comments.

const fruit = "Papayas";
switch (fruit){
     case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log("Papayas are $2.79 a pound");
        break;
    default:
        console.log("Sorry , wer are out of $(fruit)")        
}


console.log("you can", (age < 18? "not drive" : "drive"))  // ye andar wala part ek ternary operator hai.