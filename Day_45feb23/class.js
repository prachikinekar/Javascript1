/* 
Deloitte QA Automation pune 5+ yrs exp:


let name = ["Ram", "Shyam", "Hari", "Ram", "Mira"];
let marks = [-5, 6, 3, -2, 0];
sort -> [6, 3, 0, -2, -5]; --> sort name array based on marks array 
l
sortArr=[]

let mapObj=new map();
loop-->i
*/

/*
OOPs:
class,object
 */

// object:
let obj={
    key1:"Js",
    key2:"Ts",
    key3:function(){
        console.log("I am key3 Method");
    }
}

console.log(obj.key1);//Js
console.log(obj.key2);//Ts
console.log(obj.key3);//[Function: key3]

/*
class syntax:
class classOne{

}
 */

// class-->blueprint,structure,mould & template of object

class classOne{
// properties
key1="Js";
key2="Ts";
// methods
key3(){
    console.log("I am key3 Method");
}
}

console.log(typeof classOne);//function
console.log(classOne);//[class classOne]

// not able to call properties /methods on the class level:
// classOne.key3();//TypeError: classOne.key3 is not a function

/*
Object creation from class:

new className()
*/

// instance level:

let obj2=new classOne();
console.log(obj2);//classOne { key1: 'Js', key2: 'Ts' }
console.log(obj2.key1);//Js
console.log(obj2.key2);//Ts
// method calling
obj2.key3();//I am key3 Method

// Calling properties on the instance level:
console.log(obj2.key2);//Ts

//---------------------------------

// array declared by literal type:
// instance level:
let arr=[1,2,3];

// Array.from():
// Array:class-->push() present inside the array class
arr.push(5);
console.log(arr);//[ 1, 2, 3, 5 ]

// keys is a Object class method:
// Object.keys();
console.log(Object.keys(obj2));//['key1', 'key2']

// Real object/instance of Object class:
let obj3={
key1:"hello"
}

// obj3-->instance of Object class and hasOwnProperty() is a method of Object class
console.log(obj3.hasOwnProperty("key1"));//true