//var variable scope--->global,function
// let variable scope---->global,function,block
// const variable scope-->global,function ,block


// Global, function, block scope

// block scope:
//condition block:if block,if condition statement
// if(statement) {
// block scope
//}


// var keyword:
// var a=10;//Global scope
// if(true){
//     var b=20//block scope
// }

// console.log(a);
// console.log(b);
//  var keyword has no block scope
// can access b variable outside the block

// let keyword:
// let a=10;//Global scope
// if(true){
//     let b=20;//Block scope variable

// }
// console.log(a);//10
// console.log(b);//20 //ReferenceError: b is not defined
// let keyword has block scope
// cannot access b variable outside the block

// const keyword

const b=20;//global scope

if(true){
    const c=30;//block scope
    
}

console.log(b);//20
console.log(c);//ReferenceError: c is not defined
// const keyword has block scope
// cannot access b variable outside the block

