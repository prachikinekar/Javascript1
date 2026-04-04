// //Primitive datatype
// let a = 10;
// console.log(a);//10

// function update(para) {
//     // para == a;
//     // a = 10;
//     // para = 10;
//     console.log("update function called", para);//update function called 10
//     para = 20;
//     console.log(para);//20
// }

// update(a);
// //copy by value
// // pass by value

// console.log(a);//10

// Non-primitive Datatype:
let arr=[1,2,3];
console.log(arr);//[ 1, 2, 3 ]

function update(para){
    para ==arr
    // 1 value--->[1,2,3]
    // 2 address-->arr,para
    console.log("Update function called",para);
}
update(arr);//Update function called [ 1, 2, 3 ]

//pass by address 
//copy by address

console.log(arr);//[ 1, 2, 3 ]


/*
Non Primitive datatype- deals with addresses
Primitive datatype- deals with values
 */