/*

2.Non-Primitive data types:-mutable (can update original value)
 1.Object
 2.Array
 3.Function
 4.RegExp

*/

/*
Object:

 =value
 = {
 key:value,
 key2:value2

  }
 */

let boy="Ram";
boy=10;//updation
console.log(boy);//10

// Object literal:

// CURD:create,update,retrive,Delete

boy={
    name:"prachi",
    Sname:"kinekar"
}

console.log(boy);//{ name: 'prachi', Sname: 'kinekar' }
console.table(boy);
// console.log(name);//ReferenceError: name is not defined


// Retrive values:
// 1.dot notation:

console.log(boy.name);//prachi
// console contains table
// console contains log

// 2.Bracket notation:
console.log(boy['name']);//prachi
console.log(boy['Sname']);//kinekar

// why two ways?

// Update values:
console.table(boy);
boy['Sname']="XYZ";
console.log(boy['Sname']);
console.table(boy);
