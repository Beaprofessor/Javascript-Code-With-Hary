let x = document.getElementsByTagName('span')[0]  // it shows the element DOM tree
console.log(x)

let y = document.getElementsByTagName('span')[0]  //  ->> it shows the element as an object with its properties.  Ye as an object print karega..jisse jitne bhi properties hai unhe use kar sakte ho
console.dir(y)

// They are used to read tag name of an element.
// Tagname - only exists for Element Nodes
// NodeName - defined for any node (text,comment etc.)

console.log(document.body.firstChild.nodeName)   // #text
console.log(document.body.firstElementChild.nodeName)  // Span



// Inner Html ->> The innerHTML property allows to get the HTML inside the element as a string.{ "VALID ONLY FOR ELEMENT NODES" }
first.innerHTML    // OUTPUT ->> '<b>Heyy</b> I am span'


// OuterHtml =>> It contains the full HTML innerHTML + the element itself.
first.outerHTML     // OUTPUT ->> '<span id="first"><b>Heyy</b> I am span</span>'

// innerhtml is only valid for element nodes . for other node types we can use nodeValue or data.
// document.body.firstChild.data
// '\n    '
// document.body.firstChild.nodeValue
// '\n    '


// textContent 
console.log(document.body.textContent)


// hidden property   -->> ye lagate hi item hide ho jata hai
first.hidden
