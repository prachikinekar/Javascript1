// var variable scope--->Global,function
// let variable scope--->Global,function,block
// const variable scope--->Global,function,block


// var keyword:

// var a=10;//Global scope /script scope

// function funOne(){
//     console.log(a);
//     var b=20;
// }

// funOne()
// console.log(b);//ReferenceError: b is not defined
// var keyword has function scope
// cannot access b variable outside the function


// let keyword:
let a=10;//Global scope/script scope

function funOne(){
    console.log(a);
    let b=20;
}

funOne();
console.log(a);
// console.log(b);//ReferenceError: b is not defined
// let keyword has function scope
// cannot access b variable outside the function

// const keyword:
