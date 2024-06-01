alert("Hello your script works!!!!")   // --->>> It is used to invoke a mini window with a msg.


prompt("Enter the value of a ")  // -->> 
let a = prompt("Enter a here:")
alert("You entered a type of " + (typeof a ))


let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}
