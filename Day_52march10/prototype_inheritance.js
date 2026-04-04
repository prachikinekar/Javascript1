/*
prototype?
class classone{
prototype:object
}

_prot__?
array,number,string,object

let obj={
__proto__:object
}

let arr=[]
arr.__proto__-->array

push()--->present in array constructor and inherit on instance level

 */
// protoype Inheritance: push()
let arr=[1,2,3]
arr.push();//inbuild ex of prototype inheritance

let obj1={
    a:10
}
let obj2={
    b:20
}

// Obj1, obj2 instance of the Object constructor
console.log(obj1.a);//10
console.log(obj2.b);//20

console.log(obj2.a);//undefined

console.log(obj2.__proto__);//object,{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
console.log(Object.prototype);//object,{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
console.log(obj2.hasOwnProperty("b"));//true

obj2.__proto__=obj1;
console.log(obj2.__proto__);//{a: 10}

console.log(obj2.hasOwnProperty("b"));//true(bcoz of prototype chain)
console.log(obj2.hasOwnProperty("a"));//false
console.log(obj2.a);//10