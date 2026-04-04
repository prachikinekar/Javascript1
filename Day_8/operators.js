// let a=10;let b=20;
// console.log(a+b);

// LHS operator RHS --> operation with 2 operands (Hence + is a binary operator)

// 10,10---->values
// variables:operad means a,b
// +: operator:addition operator
// 10+10--->operation

/*
Types of operators:

1. Unary operators: +, ++, -- (Pre, post)
2. Binary operators:
    1. Arithmetic Operators:+,-,*,/,**,%
    2. Assignment Operators: =, +=, -=, *=, /=, %=, **= (short hand methods)
    3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==
    4. Logical Operators: &&, ||, !
    5. Bitwise Operators.
    6. Miscellaneous Operators:, typeof, instanceof, void() --> Explain->;
3. Ternary operators: 
    1. conditional operator.
*/

1
/* 

1.Unary operators:+,++,--(Pre,post):means using single operand with operators

+ addition operator

++increment operator(increase by 1)
-- decrement operator (decrease by 1)

Pre-Increment, Post-Increment
Pre-decrement, Post-decrement
 */

// let a=10;
// console.log(a++)//10 //Post increment
// console.log(a);//11

/*

js synchronous execution :code executing line by line

line 1 
.
.
.
line End

And on the each line code executing
LHS---->RHS


as like book reading
 */

// let aa=20;
// console.log(++aa);//21
// console.log(aa);//21


// Decrement post and pre

// let b=20;
// console.log(b--)//20 //post decrement
// console.log(b)//19

// let c=34;
// console.log(--c);//33 // pre decrement
// console.log(c);//33

// //+-->unary operator -- use single operand
// console.log(10+20);

/*
** datatypes:
1... n
0
-1......-n

datatype:number

'a'
"a"
`a`(backticks)

datatype:string
*/

// unary + operators converting string datatype to number datatype

let a="10";
// 10-->value

console.log(typeof a);//string
let aa=+a;
console.log(aa);
console.log(typeof aa);//number