// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

let inputone= 'sachin';
let rev=inputone.split("").reverse().join("");
console.log(rev);//nihcas


let str="hello";
let reversed="";

for(let i=str.length-1;i>=0;i--){
reversed+=str[i];//nihcas
}

// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

// let inputTwo='This is javascript class';
