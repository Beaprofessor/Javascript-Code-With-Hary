const regex = /(Harry){2}/gi          // regular expression 
const text = "HarryHarry is a very nice developer"

console.log(text.replace("nice" , "NOISE"))    // without regular expression will only change a single word (due to local)
console.log(text.replace(regex , "VERY"))    // here all the very word will be change cause regex is defined as globally


// Go to regexr website to know more about regular expressions