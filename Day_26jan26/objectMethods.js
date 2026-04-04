// Object:Inbuilt methods

let obj={
    name:"prachi",
    age:21,
    city:"Nagpur"
}
// console.log(obj);

// let keys=Object.keys(obj);
// // Action:Finding key of object
// // return array
// console.log(keys);//[ 'name', 'age', 'city' ] 

// let values=Object.values(obj);
// console.log(values);//[ 'prachi', 21, 'Nagpur' ]
/* 
Action: Finding values of object
Return: Array
*/


// let entries=Object.entries(obj);
// console.log(entries);//[ [ 'name', 'prachi' ], [ 'age', 21 ], [ 'city', 'Nagpur' ] ]

/*
Action:Finding key values of object
return:2D array

*/

//hasOwnProperty("PropertyName"):
// console.log(obj.hasOwnProperty("age"));//true
// console.log(obj.hasOwnProperty("MOBNo"));//false

/*
Action:checking arg(Property) present in the object.
return:Boolean
*/
// console.log(Object.isExtensible(obj));//true

// can add new properties to object
// obj.country="USA";
// console.log(obj);//{ name: 'prachi', age: 21, city: 'Nagpur', country: 'USA' }

// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));//false
// obj.Mycounry="USAA";
// console.log(obj);// { name: 'John', age: 30, city: 'New York', country: 'USA' }

/*

isSealed:
Action: Checking whether new properties can be added & existing properties can be deleted from object   
Return:Boolean

*/

// console.log(Object.isSealed(obj));//false

// Object.seal(obj);
// delete obj.Mycountry
// console.log(obj);

/* 
seal:
Action: Preventing new properties to be added & existing properties to be deleted from object
Return: boolean
*/

/*
freeze:
Action: Preventing new properties to be added & existing properties to be deleted & existing properties to be updated from object
Return: boolean 
 */

// console.log(Object.isFrozen(obj));//False
Object.freeze(obj);
obj.country="India";//Update
console.log(obj);
console.log(Object.isFrozen(obj));





