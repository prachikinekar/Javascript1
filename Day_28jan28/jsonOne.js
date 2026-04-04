/*
JSON:Javascript Object Notation
 */
let a=10;

let obj={
    name:"Prachi Kinekar",
    age:21,
    isStudent:false,
}

// js objcet vs Json object

/*
JSON:
FE <---- API -----> BE

JSON Objec(string)
{
"name":"prachi k",
"email":"prachikinekar1214@gmail.com",
"mobile":"8766079061",
"message":"hiii"
}

string
|
Js object
|
string

 */

let b={
"name":"prachi k",
"email":"prachikinekar1214@gmail.com",
"mobile":"8766079061",
"message":"hiii"
}

console.log(typeof obj)//object


let str=JSON.stringify(obj)
console.log(str,typeof str);//// object to string
//{"name":"Prachi Kinekar","age":21,"isStudent":false} string

let Obj2=JSON.parse(str);
console.log(Obj2,typeof Obj2);// str to obj
//{ name: 'Prachi Kinekar', age: 21, isStudent: false } object