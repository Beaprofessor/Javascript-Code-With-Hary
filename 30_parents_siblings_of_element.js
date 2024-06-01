

// Notes on DOM collections -

// 1. They are read only
// 2. They are live elem.childNodes variable (reference) will automatically update if childNodes of elem is changed.
// 3. They are iterable using for...of loop



// Siblings and Parents

// Siblings are nodes that are children of the same parent. 



// The parent is available as ParentNode 

// alert(document.documentElement.parentNode)   -->>>  Document .. , ye tabhi return karega koi chij  jab parent ek node ho 

// alert(document.documentElement.parentElement)  --->>> Null print karega ye  .... ye tabhi return karega jab ek vaild html element hoga tabhi return karega warna null 



 