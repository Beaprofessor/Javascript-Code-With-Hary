 let user = prompt("Select from S , W or G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S" , "W" , "G"][cpuI]


const match = (cpu, user) =>{
 if(cpu === user){
    return "Nobody is the winner"
 }
 else if( cpu==="S" && user==="W"){
    return "cpu wins"
 }
 else if( cpu==="G" && user==="W"){
    return "user wins"
 }
 else if( cpu==="S" && user==="G"){
    return "user wins"
 }
 else if( cpu==="G" && user==="S"){
    return "cpu wins"
 }
 else if( cpu==="W" && user==="G"){
    return "cpu wins"
 }
 else if( cpu==="W" && user==="S"){
    return "user wins"
 }
}

let result = match(cpu , user)
document.write(`CPU: ${cpu} and User: ${user}  The winner is :  ${result}`) 







// to play continous 
const match = (cpu, user) => {
   if (cpu === user) {
       return "Nobody wins the match, hence it's a tie";
   } else if (cpu === 'S' && user === 'G') {
       return "User wins here from CPU";
   } else if (cpu === 'S' && user === 'W') {
       return "CPU wins here from User";
   } else if (cpu === 'W' && user === 'G') {
       return "CPU wins here from User";
   } else if (cpu === 'W' && user === 'S') {
       return "User wins here from CPU";
   } else if (cpu === 'G' && user === 'W') {
       return "User wins here from CPU";
   } else if (cpu === 'G' && user === 'S') {
       return "CPU wins here from User";
   }
};

let rematch = true;

while (rematch) {
   let user = prompt("Choose any one from these 'S' , 'W' , 'G' ");
   let cpuI = Math.floor(Math.random() * 3);
   let cpu = ['S', 'W', 'G'][cpuI];

   let result = match(cpu, user);
   alert(`CPU: ${cpu} and User: ${user}, The winner is: ${result}`);

   rematch = confirm("Do you want to play the match once again?");
}