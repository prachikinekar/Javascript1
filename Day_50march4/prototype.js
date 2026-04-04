/*
Everything in js is object

Object--->Inbuild js class
          |
          String, Number, boolean, null, undefined, array, function ---> InBuild js class
          |
          Instances



 */

// Number-->Inbuild class
let a=10;
console.log(a,typeof a);//10 'number'

// object----->Inbuild class
let obj={

}
console.log(obj,typeof obj);//Object[[Prototype]]: Object 'object'

// Array --> inbuild class
let arr=[];
console.log(arr,typeof arr);//Array(0) 'object'

// String-->inbuild class
let str="String";
console.log(str,typeof str);//String string

/*
prototype:
-Prototype is class inbuild property who have object value.
-Prototype is inbuild object which  is inbuild attached to every instance object in js

class/constructor :String ,Number ,boolean ,null,undefined ,array,function-->inbuild



 */
console.log(Array);//ƒ Array() { [native code] }

console.log(Array.prototype);//Array(0)

console.log({});//Object

console.log(Object.prototype);//Object

/*
__proto__ ==> is a instance property. Its return instance constructor/class prototype.
 */

console.log("__proto__");//__proto__

let obj1={}//object
console.log(obj1.__proto__);//Object

let arr2=[]//Array
console.log(arr2.__proto__);//Array(0)


// Relation between prototype & __proto__

// array
console.log(arr2.__proto__)//Array(0)
console.log(Array.prototype)//Array(0)
console.log(arr2.__proto__===Array.prototype);//true

//object
console.log(obj1.__proto__)
console.log(Object.prototype)
console.log(obj1.__proto__===Object.prototype);//Object

/*
[]--->Array -->class/constructor (Object)
*/
console.log(arr2.__proto__.__proto__===Object.prototype);//true

// Prototype chain :Prototype chain ends at null
console.log(arr2.__proto__.__proto__.__proto__);//null