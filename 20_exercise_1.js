
 // It is a game in which u have to guess the number.



let num = Math.round(Math.random()*100)
// console.log(num)
let a;
let chance = 0;
do {
a = prompt("Enter a number to check whether the number is matched or not ? ")
a = Number.parseInt(a)
    if(a>num){
        console.log("Your guessed number is greater than the original number")
        chance++;
    }
    else if(a<num){
        console.log("Your guessed number is less than the original number")
        chance++;
    }
    else if(a==num){
        console.log("GAME IS OVER")
        console.log("Your guessed number is Correct!!! Hurrayyy!!! You won") 
        chance++;
        console.log("Your game scored is " , 100 - chance + 1 )
    }
   }
while(a!=num)