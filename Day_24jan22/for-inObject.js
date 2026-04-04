// For Object:

let obj={
    name:"prachi",
    age:21,
    city:"katol"
}

// // For in loop
// // in-->key retrieve

// for(let a in obj){
//     console.log(a);//name age city
//     console.log(obj[a]);// prachi 21 katol
//     // console.log(obj.key);//undefined

// }

// //Think :Obj retrieve :. & []
// Only bracket notation work with variables in the loop
// -------------------------

// using for of obj is not iterable so we use object iterable methods
// // For of loop:

// of --->value retrive

// for(let a of obj){
//     console.log(a);// John ,30 ,New york
// };

// TypeError: obj is not iterable
// Note:Object is not iterable

// Make object iteratable:
// Object iteratable methods:

// ----------------------------------------------------

// let obj={
//     name:"prachi",
//     age:21,
//     city:"katol"
// }

// 1.Object.keys():-->return keys array
// Action:collecting object keys in an array
// Returned array can be iterated using for of loop

let keys=Object.keys(obj);
console.log(keys);//["name","age","city"]


// 2.Object.values():--->returns value  of arrat
// // Action: collecting object values in an array         
// Returned array can be iterated using for of loop

let values=Object.values(obj);
console.log(values);//["prachi",21,"katol"]


// 3.Object.entries():---->returns entries of array
// Action: collecting object entries in an array of arrays
// Returned array can be iterated using for of loop

let entries=Object.entries(obj);
console.log(entries);//[ [ 'name', 'prachi' ], [ 'age', 21 ], [ 'city', 'katol' ] ]

// For-of Loop:Object is not iterable
// But, arrray is iteratable
// Object methods return arrray (iteratable object)

// [ 'John', 30, 'New York' ]

for(let value of values){
    console.log(value);
}

// old vs new
for(let i=0;i<values.length;i++){
    console.log(values[i]);//prachi,21,katol
}