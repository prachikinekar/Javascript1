let a="Js";
// "Js"-->string
// a--->string

// Object literal:
let obj={
    // key: value datatype
    // key datatype? --> can define keys in string
    keyOne:"hii",
    keyTwo:10,
    'key Three':true
    //string key
}

// Object key-->String
// console.log(obj);//{ keyOne: 'hii', keyTwo: 10, 'key Three': true }

// // Retrieve:

// // Dot notation vs Bracket [] notation
// console.log(obj.keyTwo);//10

// // 1.To retrieve space continer key(keyName) we can only  able to use bracket notation.
// console.log(obj['key Three'])//true

// // 2.for loop:Not able to use dot notation.

// // delete key from object:
// console.table(obj);
// delete obj.keyTwo;
// console.log(obj);

// Q.How many ways can create object in js?

/* 
1. object literal
2. class 
3. function 
4. Object
5. Object.create()
*/

// 4. Object:
// let objNew={KeyOne:'Js',KeyTwo:10};
// let objNew=Object({KeyOne:'Js',KeyTwo:10});
// console.log(objNew);//{ KeyOne: 'Js', KeyTwo: 10 }

// 5.Object.create(prototype,option):-->
//Object.create(parent) creates a new object that inherits properties from parent.
let aa={ keyOne:"Js",keyTwo:10}
let objNew2=Object.create(aa);
console.log(objNew2);
console.log(objNew2.key3=12);

console.log(objNew2.keyOne);









