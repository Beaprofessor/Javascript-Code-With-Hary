// Practice Set - 6


// Problem 1

let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age>18){
    alert("Hey mate you are ready to drive!!!!!!")
}
else{
    alert("Pehle bada hoja fir drive kariyo ")
}


// Problem 2
let a = prompt("Enter your age")
a = Number.parseInt(a)
if(a>18){
    alert("Hey mate you are ready to drive!!!!!!")
}
else{
    alert("Pehle bada hoja fir drive kariyo ")
}
a = confirm("Do you want to use the prompt once again ??")



// Problem 3
let a = prompt("Enter your age")
a = Number.parseInt(a)
if(a>18){
    alert("Hey mate you are ready to drive!!!!!!")
}
else if(a<18 && a>0){
    alert("Pehle bada hoja fir drive kariyo ch****")
}
else if(a<0){
    console.error("Bkl yaha par bhi negative hai kya tu ??")
}
console.error("Bkl yaha par bhi negative hai kya tu ??")



// Problem 4
let a = prompt("Enter your age")
a = Number.parseInt(a)
if(a>18){
    location.href="www.instagram.com"
}
else{
    alert("Bhaiii abhi bachha hi hai tuu .... hehhehehe")
}





// Problem 5
let color = prompt("Enter any number you want from 1 to 10")
// color = Number.parseInt(color)
// if(color>=0 && color<2){
//     document.body.style.background = "red"
// }
// else if (color>2 && color<4){
//     document.body.style.background = "green"
// }
// else if (a>4 && a<6){
//     document.body.style.background = "blue"
// }
// else if (a>6 && a<8){
//     document.body.style.background = "orange"
// }
// else if (a>8 && a<=10){
    // document.body.style.background = "purple"
// }

document.body.style.background = color
