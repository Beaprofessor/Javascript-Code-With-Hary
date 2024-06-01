const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First Child of b is: " , b.firstChild)
console.log("First Element child of b is: " , b.firstElementChild)  // -->> Iske through apne ko first element child mil jaayega jo ki idhr (nav) hai. 

// Sometimes we dont want text or comment nodes. Some links only take element nodes into account . for Example.
console.log("The previous element sibling is : ", b.previousElementSibling)
console.log("The next element sibling is : " , b.nextElementSibling)
console.log("The first element child is : " , b.firstElementChild)
console.log("The last element child is : " , b.lastElementChild)


