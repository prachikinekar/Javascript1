//RegEx:Regular expression
//pattern identification--->prompt -->regex code
// it is used for pattern matching in js
/*
Syntax:
1.literal

=/value/flag
flag:i,g,m


*/

//literal:
let varOne = /hi/i
console.log("RegEx:",varOne);//RegEx:/hi/i
console.log(typeof varOne);//Object

/*
2.Class
=RegExp(aug1,aug2)

aug1:value
aug2:flags
*/

// let varTwo=RegExp("hi","i");
// console.log("RegEx",varTwo);//RegEx:/hi/i
// console.log(typeof varTwo)//Object

// 5️⃣ Literal vs Class (very clear table)
// Method	Code	            typeof
// Literal	/hi/i	            object
// Class	RegExp("hi","i")	object


// let abc=/hi/i;
// console.log("Regexp",abc);
// console.log(typeof abc);


// | Flag | Meaning     | Think like       |
// | ---- | ----------- | ---------------- |
// | `i`  | ignore case | I don’t care A/a |
// | `g`  | global      | Get all          |
// | `m`  | multiline   | Many lines       |
