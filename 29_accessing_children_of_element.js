

// Children of an element --->>> Direct as well as deeply nested elements of an element are called its children . 

// Child nodes - elements that are direct children . (for example -->> head and body are children  of <html> tag)

// Descendent nodes --->>> All nested elements , children , their children and so on...


// firstchild , lastchild and childnodes --->>>

element.firstchild()  // ->  first child element
console.log(document.body.firstChild)


element.lastchild()   // ->  last child element
console.log(document.body.lastChild)


element.childNodes()  // -> all child nodes
console.log(document.body.childNodes)



// Elements that are always true -->>

elem.childNodes[0] === elem.firstchild
elem.childNodes[elem.childNodes.length  -1] === elem.lastChild

// there is also a method elem.hasChildNodes()  to check whether there are any child Nodes.