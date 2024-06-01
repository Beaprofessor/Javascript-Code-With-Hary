let num = [1,2,3,4,5,6,7,8,9]

// For loop
for(let i = 0 ;  i<num.length ; i++){
    console.log(num[i])
}


// For-Each loop
num.forEach((element) =>{
   console.log(element* element)
    })


// Array.from    -->> It is used to create abd array from any other object

let name = "Lovie"
let arr = Array.from(name)
// console.log(arr)


// ye le iss example se aur samjhle array.from ko 
let obj = {
    name: "Systum",
    quote:"hello",
    role: "SDE"
}
let array1 = Array.from(obj.name)
let array2 = Array.from(obj.quote)
let array3 = Array.from(obj.role)

console.log(array1 , array2 , array3) 



// For - Of loop -->>  Ye directly array ke elements ko print kardega 

let systum = [11,22,33,44,55]
for ( let i of systum){
    console.log(i)
}

// For - in loop   --->>>> Ye mahashay array ki keys ko print karega jo ki hoti hai index values idhr array mei 

for (let i in systum){
    console.log(i)
}