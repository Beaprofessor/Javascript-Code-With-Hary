//  2 type ke modules hote hai apne 

        // 1. Common Js module

        const hello=()=>{
            console.log("Hello Harry")
        }

        const aHello = (name) =>{
            console.log("Hello " + name)
        }
        module.exports = {hello , ahello}   // Same as the below line
        // module.exports ={hello: hello , aHello: aHello}

    