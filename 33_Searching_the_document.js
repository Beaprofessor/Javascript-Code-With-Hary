// change the card title to red 


let ctitle = document.getElementById("firstcardtitle")    // this method is used to get the element with a given "id" attribute.
ctitle.style.color = "green" 


let ctitles = document.querySelectorAll(".card-title")   // this method select all the elements with this class name.
ctitles[0].style.color = "pink" 
ctitles[1].style.color = "blue" 
ctitles[2].style.color = "red" 

console.log(ctitles)

document.querySelector(".this").style.color = "cyan"   // this method will only select the first element of the selectors 
document.querySelector(".this").style.background = "black"


console.log(document.getElementsByTagName('a'))    // this method will provide by using tagname
console.log(document.querySelector(".card").getElementsByTagName('a'))


console.log(document.getElementsByName("search"))       // ye by name saare elements return kardega.
