// Practice Set - 5

// Practice Problem - 1

// let arr = [1,2,3,4,5,6]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)


// Practice Problem - 2

// let arr = [1,2,3,4,5,6]
// let a;
// do{
//     a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
// console.log(arr)
// }while(a!=0)


  // Practice Problem - 3
    let systum = [10,20,1020,23,1,1,1,2321210,111,11323,2320,1000,2030]
    let jerry = systum.filter((a)=>{
      return a%10==0
    })
    console.log(jerry)



  // Practice Problem - 4
  let arr = [1,2,3,4,5,6]
  let multi = arr.map((element)=>{
  return element * element
  })
  console.log(multi)



  // Practice Problem - 5

  let arr1 = [1,2,3,4,5,6,7,8]
  let fact = arr1.reduce((a1,a2)=>{
    return a1*a2
  })

  console.log(fact)
