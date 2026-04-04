/*
#prototype use:
1.Inheritance
2.CURD properties on the class level prototype

 */

/* 
{}.b--->b value
{}.b=10
 */

class classOne{
    // static a=10;
    a=10;
    //prototype :object
}

// //instance -->instance level

// //class level:
// //by using only static keyword we can access
// console.log(classOne.a);//undefined

// console.log(classOne);//class classOne{
// //     // static a=10;
// //     a=10;
// //     //prototype :object
// // }


// instance -->instance level
// class level
// console.log(classOne.a);//undefined

// console.log(classOne);//class classOne{
//     // static a=10;
//     a=10;
//     //prototype :object
// }


classOne.prototype.b="I am custom";
console.log(classOne.prototype);//{b: 'I am custom'}b: "I am custom"constructor: class classOne[[Prototype]]: Object

// Instance level:
let arr=[1,2];
// array --->class level
console.log(Object.getPrototypeOf(arr));
console.log(Array.prototype);