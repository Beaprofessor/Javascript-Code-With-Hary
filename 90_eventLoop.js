//  What is JS ? 
//  What is call stack ?
//  Asynchronous Callback
//  Task Queue
//  Event Loop


setTimeout(function timer(){
    console.log("You clicked the button")
},2000)       // ye execute hoga but isme 2seconds lagenge toh next part run hoga fir 

console.log("Hi")   //  ye run karega sabse pehle (1st)

setTimeout(function timeout() {
    console.log("Click the button")
},5000)     // fir ye execute hoga and sabse last mei output aayega iska cuz of 5seconds time

console.log("Welcome to VS Code")   // 2nd ye run karega 