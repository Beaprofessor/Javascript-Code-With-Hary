let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + '<h1 style="color: white;"> Hello World!! </h1>';
// Upar wale code ko smjh kuch aese....

/*
 Bilkul bhai, yeh code JavaScript ka ek example hai jo HTML document mein pehli <div> element ke andar ek naya <h1> tag add karta hai. Main tumhein step by step samjhaata hoon:

let a = document.getElementsByTagName('div')[0];

Yeh line document mein pehli <div> element ko select karti hai.
document.getElementsByTagName('div') sabhi <div> elements ka ek array-like object return karta hai.
[0] ka matlab hai ke yeh array-like object ka pehla element, yaani pehli <div> element ko select kar rahe hain.
a.innerHTML = a.innerHTML + '<h1 style="color: white;"> Hello World!! </h1>';

a.innerHTML us <div> ke andar ka current HTML content return karta hai.
a.innerHTML + '<h1 style="color: white;"> Hello World!! </h1>' current content ke baad ek naya <h1> tag add karta hai.
Yeh naya <h1> tag white color ka text "Hello World!!" display karega.
Iske baad, a.innerHTML ko updated content se replace kiya jaata hai jo ke existing content plus naya <h1> tag hoga.
Is code ka result yeh hoga ke pehli <div> element ke andar ek white color ka "Hello World!!" message appear karega.
 */

let div = document.createElement("div");
div.innerHTML = "<h1> Hello World!!!! </h1>";
// iss 21 and 22 wale element ka matlab dekhle

/*Bilkul, main is code ko bhi samjha deta hoon. Yeh code JavaScript ka ek example hai jo ek naya <div> element create karta hai aur uske andar ek <h1> element ke saath "Hello World!!!!" text add karta hai. Main step by step samjhaata hoon:

let div = document.createElement('div');

Yeh line ek naya <div> element create karti hai.
document.createElement('div') ek nayi <div> element banata hai jo abhi document mein add nahi hui hai.
div.innerHTML = '<h1> Hello World!!!! </h1>';

div.innerHTML ko use karke hum naye <div> ke andar HTML content set karte hain.
'<h1> Hello World!!!! </h1>' ek naya <h1> element banata hai jo "Hello World!!!!" text display karega.
Is line ke baad, naye <div> element ke andar yeh <h1> element aa jaata hai.
Is code ka result yeh hoga ke ek naya <div> element create hota hai jiske andar ek <h1> element hoga jo "Hello World!!!!" text display karega. Lekin, yeh naya <div> element abhi document mein add nahi hua hai. Isse document mein add karne ke liye humein additional code likhna padega, jaise:

javascript
Copy code
document.body.appendChild(div);
Yeh line naye <div> element ko document ke body ke end mein add kar degi.  */



// HTML Insertion Methods 
a.append(div);     // append at the end of node
a.prepend(div);      // Insert at the beginning of node
a.before(div)      // container div ke pehle insert kardega...
a.after(div)       // container div ke baad insert karega
a.replaceWith(div);   // container div ko hi replace kardega...
