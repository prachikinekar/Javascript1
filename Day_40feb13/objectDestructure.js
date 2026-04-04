/*
 Array:Position Imp
let/var/const [address1,address2,.....addressn]=[value1,value2,........,valuen];

syntax:Object-->KeyName Imp
let/var/const{keyName1,keyName2,.....,keyName_n}={Key:value,....}

 */

// let obj={
//     a:10,
//     b:"Hi"
// }

// // retrieve:
// console.log(obj.a);

// // update:
// obj.a=20;
// console.log(obj);//{ a: 20, b: 'Hi' }

// // let {}=obj
// // let{a,b}={
// //     a:10,
// //     b:"Hi"
// // }
// // console.log(a);//10
// // console.log(b);//Hi

// let {b}={
//     a:10,
//     b:"Hi"
// }
// // console.log(a);// a is not defined
// console.log(b);//Hi

// // let {c}={
// //     a:10,
// //     b:"Hi"
// // }
// // console.log(c);//undefined


// let {c="Default value"}={
// a:10,
// b:"Hi"
// }

// console.log(c);//Default value

// // keyName --> alise 
// // keyName: aliseName

// let {b:alise}={
// a:10,
// b:"Hi"
// }
// console.log(alise);//Hi

// Can destructure complex structure:

let obj2={
    a:10,
    b:[1,2,[4,5]],
    c:{
        p:{s:true},
        q:["JS",["Ts"]]
    },
    d:false
};

// let {d,b,c}=obj2;
// console.log(d);//false
// console.log(b);//[ 1, 2, [ 4, 5 ] ]
// console.log(c);//{ p: { s: true }, q: [ 'JS', [ 'Ts' ] ] }   

// let {d,b:[,,y],c}=obj2
// console.log(y);//[ 4, 5 ]

let {d,c}=obj2

console.log(c);//{ p: { s: true }, q: [ 'JS', [ 'Ts' ] ] }


// let {d,b:[,,[,x]]}=obj2

// console.log(d);//false
// console.log(b);//[1,2,[4,5]]
// console.log(x);//5


// let{c:p:s}=obj2;
// let {c:{p:{s}}}=obj2
// console.log(s);//true

